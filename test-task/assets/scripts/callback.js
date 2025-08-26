$(document).ready(function(){


			/*modal*/
			$('#callbackForm').validate({
			  rules: {
					    firstname: {
					      required: true
					    },
					    phone: {
					      required: true,
					    }
			 },
			 messages: {
						  firstname: {
						    required: "Поле обязательно для заполнения"
						  },
						  phone:{
						    required: "Поле  обязательно для заполнения"
						  }
			 },
			 submitHandler: function(form) {
			       		
			        		if($("#callbackForm .callback__politic-checkbox").is(':checked')) { 
                                
                                $("#callbackForm .callback__politic-checkbox").prop('checked', false);
                                $("#callbackForm  .callback__politic-notice").removeClass("error-notice");
                                $('.popup-done').fadeIn(500)
                                $('.callback__form-input').val('')
                            }else{
                                $("#callbackForm  .callback__politic-notice").addClass("error-notice");
					       }    
			    }
			});

            $("#callbackForm .callback__politic-checkbox").on("change",function(){
				if($("#callbackForm .callback__politic-checkbox").is(':checked')){
					 $("#callbackForm .callback__politic-checkbox").removeClass("error-notice");
                     $("#callbackForm  .callback__politic-notice").removeClass("error-notice");
                     
				}
			});
			




});