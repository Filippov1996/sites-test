$(document).ready(function(){
 $("#form-popup").validate({
            rules: {
        	    name: {
                    required: true
                },
                website: {
                    required: true
                },
                phone: {
                    required: true
                },
            },
            messages:{
               	 name:{
                        required:"Поле обязательно"
                    
                 },
                  website:{
                        required:"Поле обязательно"
                 },
                 phone:{
                         required:"Поле обязательно"
                 }
            },
            submitHandler: function() {
                   if($("#politic").is(':checked')) {
                        $(".popup__form-politic").removeClass("error-politic");
                        $("#politic").prop('checked', false);
                        var name  =  $(".input-name").val();
                        var website =  $(".input-website").val();
                        var phone  =  $(".input-phone").val();
                        $.ajax({
                                url: window.location.href+'/mail.php',
                                method: 'post',
                                dataType: 'html',
                                data: {name:name,website:website,phone:phone},
                                success: function(data){
                                    $(".input-name").val('');
                                    $(".input-website").val('');
                                    $(".input-phone").val('');
                                }
                             });
                       
                       
                    } else {
                        $(".popup__form-politic").addClass("error-politic");
                        
                    }     
            }    
      });
   
    $(".popup__form-btn").on('click',function(){
       
        if($("#politic").is(':checked')) {
                 $(".popup__form-politic").removeClass("error-politic");
            } else {
               $(".popup__form-politic").addClass("error-politic");
            }
    });
    
    $("#politic").on("click",function(){
        if($("#politic").is(':checked')) {
                $(".popup__form-politic").removeClass("error-politic");
            } else {
               $(".popup__form-politic").addClass("error-politic");
            }
    });
});