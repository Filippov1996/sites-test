	$(document).ready(function(){
		
		
		
var confetti = {
	maxCount: 150,		//set max confetti count
	speed: 2,			//set the particle animation speed
	frameInterval: 15,	//the confetti animation frame interval in milliseconds
	alpha: 1.0,			//the alpha opacity of the confetti (between 0 and 1, where 1 is opaque and 0 is invisible)
	gradient: false,	//whether to use gradients for the confetti particles
	start: null,		//call to start confetti animation (with optional timeout in milliseconds, and optional min and max random confetti count)
	stop: null,			//call to stop adding confetti
	toggle: null,		//call to start or stop the confetti animation depending on whether it's already running
	pause: null,		//call to freeze confetti animation
	resume: null,		//call to unfreeze confetti animation
	togglePause: null,	//call to toggle whether the confetti animation is paused
	remove: null,		//call to stop the confetti animation and remove all confetti immediately
	isPaused: null,		//call and returns true or false depending on whether the confetti animation is paused
	isRunning: null		//call and returns true or false depending on whether the animation is running
};

(function() {
	confetti.start = startConfetti;
	confetti.stop = stopConfetti;
	confetti.toggle = toggleConfetti;
	confetti.pause = pauseConfetti;
	confetti.resume = resumeConfetti;
	confetti.togglePause = toggleConfettiPause;
	confetti.isPaused = isConfettiPaused;
	confetti.remove = removeConfetti;
	confetti.isRunning = isConfettiRunning;
	var supportsAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
	var colors = ["rgba(30,144,255,", "rgba(107,142,35,", "rgba(255,215,0,", "rgba(255,192,203,", "rgba(106,90,205,", "rgba(173,216,230,", "rgba(238,130,238,", "rgba(152,251,152,", "rgba(70,130,180,", "rgba(244,164,96,", "rgba(210,105,30,", "rgba(220,20,60,"];
	var streamingConfetti = false;
	var animationTimer = null;
	var pause = false;
	var lastFrameTime = Date.now();
	var particles = [];
	var waveAngle = 0;
	var context = null;

	function resetParticle(particle, width, height) {
		particle.color = colors[(Math.random() * colors.length) | 0] + (confetti.alpha + ")");
		particle.color2 = colors[(Math.random() * colors.length) | 0] + (confetti.alpha + ")");
		particle.x = Math.random() * width;
		particle.y = Math.random() * height - height;
		particle.diameter = Math.random() * 10 + 5;
		particle.tilt = Math.random() * 10 - 10;
		particle.tiltAngleIncrement = Math.random() * 0.07 + 0.05;
		particle.tiltAngle = Math.random() * Math.PI;
		return particle;
	}

	function toggleConfettiPause() {
		if (pause)
			resumeConfetti();
		else
			pauseConfetti();
	}

	function isConfettiPaused() {
		return pause;
	}

	function pauseConfetti() {
		pause = true;
	}

	function resumeConfetti() {
		pause = false;
		runAnimation();
	}

	function runAnimation() {
		if (pause)
			return;
		else if (particles.length === 0) {
			context.clearRect(0, 0, window.innerWidth, window.innerHeight);
			animationTimer = null;
		} else {
			var now = Date.now();
			var delta = now - lastFrameTime;
			if (!supportsAnimationFrame || delta > confetti.frameInterval) {
				context.clearRect(0, 0, window.innerWidth, window.innerHeight);
				updateParticles();
				drawParticles(context);
				lastFrameTime = now - (delta % confetti.frameInterval);
			}
			animationTimer = requestAnimationFrame(runAnimation);
		}
	}

	function startConfetti(timeout, min, max) {
		var width = window.innerWidth;
		var height = window.innerHeight;
		window.requestAnimationFrame = (function() {
			return window.requestAnimationFrame ||
				window.webkitRequestAnimationFrame ||
				window.mozRequestAnimationFrame ||
				window.oRequestAnimationFrame ||
				window.msRequestAnimationFrame ||
				function (callback) {
					return window.setTimeout(callback, confetti.frameInterval);
				};
		})();
		var canvas = document.getElementById("confetti-canvas");
		if (canvas === null) {
			canvas = document.createElement("canvas");
			canvas.setAttribute("id", "confetti-canvas");
			canvas.setAttribute("style", "display:block;z-index:999999;pointer-events:none;position:fixed;top:0");
			document.body.prepend(canvas);
			canvas.width = width;
			canvas.height = height;
			window.addEventListener("resize", function() {
				canvas.width = window.innerWidth;
				canvas.height = window.innerHeight;
			}, true);
			context = canvas.getContext("2d");
		} else if (context === null)
			context = canvas.getContext("2d");
		var count = confetti.maxCount;
		if (min) {
			if (max) {
				if (min == max)
					count = particles.length + max;
				else {
					if (min > max) {
						var temp = min;
						min = max;
						max = temp;
					}
					count = particles.length + ((Math.random() * (max - min) + min) | 0);
				}
			} else
				count = particles.length + min;
		} else if (max)
			count = particles.length + max;
		while (particles.length < count)
			particles.push(resetParticle({}, width, height));
		streamingConfetti = true;
		pause = false;
		runAnimation();
		if (timeout) {
			window.setTimeout(stopConfetti, timeout);
		}
	}

	function stopConfetti() {
		streamingConfetti = false;
	}

	function removeConfetti() {
		stop();
		pause = false;
		particles = [];
	}

	function toggleConfetti() {
		if (streamingConfetti)
			stopConfetti();
		else
			startConfetti();
	}
	
	function isConfettiRunning() {
		return streamingConfetti;
	}

	function drawParticles(context) {
		var particle;
		var x, y, x2, y2;
		for (var i = 0; i < particles.length; i++) {
			particle = particles[i];
			context.beginPath();
			context.lineWidth = particle.diameter;
			x2 = particle.x + particle.tilt;
			x = x2 + particle.diameter / 2;
			y2 = particle.y + particle.tilt + particle.diameter / 2;
			if (confetti.gradient) {
				var gradient = context.createLinearGradient(x, particle.y, x2, y2);
				gradient.addColorStop("0", particle.color);
				gradient.addColorStop("1.0", particle.color2);
				context.strokeStyle = gradient;
			} else
				context.strokeStyle = particle.color;
			context.moveTo(x, particle.y);
			context.lineTo(x2, y2);
			context.stroke();
		}
	}

	function updateParticles() {
		var width = window.innerWidth;
		var height = window.innerHeight;
		var particle;
		waveAngle += 0.01;
		for (var i = 0; i < particles.length; i++) {
			particle = particles[i];
			if (!streamingConfetti && particle.y < -15)
				particle.y = height + 100;
			else {
				particle.tiltAngle += particle.tiltAngleIncrement;
				particle.x += Math.sin(waveAngle) - 0.5;
				particle.y += (Math.cos(waveAngle) + particle.diameter + confetti.speed) * 0.5;
				particle.tilt = Math.sin(particle.tiltAngle) * 15;
			}
			if (particle.x > width + 20 || particle.x < -20 || particle.y > height) {
				if (streamingConfetti && particles.length <= confetti.maxCount)
					resetParticle(particle, width, height);
				else {
					particles.splice(i, 1);
					i--;
				}
			}
		}
	}
})();
		
			
		
		$('.question1 .buttons-button').on("click",function(){
			$('.question1').fadeOut(400,function(){
				$('.question2').fadeIn(400);
				
			});
			
		});
		
		$('.question2 .buttons-button').on("click",function(){
			$('.question2').fadeOut(400,function(){
				$('.question3').fadeIn(400);
				
			});
			
		});
		$('.question3 .buttons-button').on("click",function(){
			$('.question3').fadeOut(400,function(){
				$('.question4').fadeIn(400);
				
			});
			
		});
		
		$('.question4 .buttons-button').on("click",function(){
				$('.question4').fadeOut(800,function(){
					 $("html,body").animate({
                        		scrollTop:0
            			 },100);
					$(".products").fadeOut(800,function(){
						$('.prize').fadeIn(800);
						setTimeout(function(){
							$(".win-prize").fadeIn(800);
						},500);
					});
				});
			
			
		});
			
		$('.win-prize .win-btn').on("click",function(){
			  $('.win-prize').fadeOut(800);
		});
	    var count;
		$('.prize__wrapp img').each(function(i){
			$(this).on("click",function(){
				count = i;
				$(this).addClass('hide');

	
					if($(this).hasClass('false-prize')){
					  $('.win-false').fadeIn(800);

					}
					if($(this).hasClass('true-prize') ){
	 						if($(this).hasClass('true-prize') ){
								// start

								const start = () => {
									setTimeout(function() {
										confetti.start()
									}, 200); // 1000 is time that after 1 second start the confetti ( 1000 = 1 sec)
								};
					//  Stop

								const stop = () => {
									setTimeout(function() {
										confetti.stop()
									}, 1200); // 5000 is time that after 5 second stop the confetti ( 5000 = 5 sec)
								};

							start();
							stop();

				  $('.win-true').fadeIn(800);
				 
								}
					}
			});	
		});
		
		$('.win-false .win-btn').on("click",function(){
			   $('.win-false').fadeOut(800);
			    console.log('ww')
			   $(".prize img").removeClass('false-prize');
			   $(".prize img").addClass('true-prize');
			  
		});
			
		$('.prize__wrapp img').on("click",function(){
			 $(".prize img").eq(count).removeClass('true-prize');
			  console.log(count)
			 
		});	
		
		$('.win-true .win-btn').on("click",function(){
			 $('.win-true').fadeOut(800);
		});	
		 
		var intervals = []; //prepare the intervals holder
			function countdown(nr,initime,endtxt){
				var selector = ".timer";//actual class name will be .timer_123 (if nr=123)
				var timer2 = initime; //"71:10:07"; //unlimited hours

				intervals['countdown_'+nr] = setInterval(function() {
					var timer = timer2.split(':');
					//by parsing integer, I avoid all extra string processing
					var hours = parseInt(timer[0], 10);
					var minutes = parseInt(timer[1], 10);
					var seconds = parseInt(timer[2], 10);

					--seconds; //decrement secs first

					minutes = (seconds < 0) ? --minutes : minutes;
					hours = (minutes < 0) ? --hours : hours;


					if (hours < 0 && minutes < 0 && seconds < 0) {
						clearInterval(intervals['countdown_'+nr]);
						$(selector+"_"+nr).html(endtxt);
					} else {
						//console.log(selector+"_"+nr, timer, timer2);

						//do 59 reset here to allow detection of negative values above
						seconds = (seconds < 0) ? 59 : seconds;
						minutes = (minutes < 0) ? 59 : minutes;         

						//set new timer value
						timer2 = hours + ':' + minutes + ':' + seconds;

						//start changes for display only
						seconds = (seconds < 10) ? '0' + seconds : seconds;
						minutes = (minutes < 10) ? '0' + minutes : minutes; 
						$(selector+"_"+nr).html(hours + ':' + minutes + ':' + seconds);

					} 

				}, 1000);   
			}
	countdown('1','72:23:13',"timer");	
});



