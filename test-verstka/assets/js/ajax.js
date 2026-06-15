 $(document).ready(function(){
                
            $("#formModal").validate({
                                        rules: {
                                            name : {
                                                required: true
                                            },
                                            email: {
                                                    required: true,
                                                    email: true
                                            }
                                        },
                                        messages:{
                                            name :{
                                                    required:"The field is required",
                                                    max:"Up to 100"
                                                },
                                            email:{
                                                    minlength:"Minimum number of characters 6",
                                                     required:"The field is required",
                                                     email: "The field is required in the format email@gmail.com"
                                                }
                                        },
                                        submitHandler: function(form) {
                   			                    $.ajax({
                                                        url:'https://web-projects.site/test/server.php',
            		                                    type:"POST",
            		                                    data: $('#formModal').serialize(),
                                                        success: function(response) {
            		                                             $("#formModal .form__name").val('');
            		                                             $("#formModal .form__email").val('');
                                                    
                                                        }
                                                });  
                                        }
            });
     
     
     
     
     
     
             $("#contactForm").validate({
                                        rules: {
                                            name : {
                                                required: true
                                            },
                                            message:{
                                                 required: true,
                                                  minlength: 13
                                            },
                                            email: {
                                                    required: true,
                                                    email: true
                                            }
                                        },
                                        messages:{
                                            name :{
                                                    required:"The field is required",
                                                    max:"Up to 100"
                                                },
                                            email:{
                                                    minlength:"Minimum number of characters 6",
                                                     required:"The field is required",
                                                     email: "The field is required in the format email@gmail.com"
                                                }
                                        },
                                        submitHandler: function(form) {
                   			                    $.ajax({
                                                        url:'https://web-projects.site/test/server.php',
            		                                    type:"POST",
            		                                    data: $('#contactForm').serialize(),
                                                        success: function(response) {
            		                                             $("#contactForm .contacts__form-input-name").val('');
            		                                             $("#contactForm .contacts__form-input-email").val('');
                                                                 $("#contactForm .contacts__form-textarea").val('');
                                                        }
                                                });  
                                        }
                                });
     
     
});