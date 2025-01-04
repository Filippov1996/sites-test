$(document).ready(function(){

$(".callback-desctop").on('submit',function(e){
        e.preventDefault();
     var val_email  = $(".callback-desctop .input-email").val();
            $.ajax({
                    url: "mail.php", // куда отправляем
                    type: "post", // метод передачи
                    dataType: "html", // тип передачи данных
                    data: { // что отправляем
                        email:val_email
                    },
                    // после получения ответа сервера
                    success: function(data){
                       $(".callback-desctop .input-email").val('');
                       console.log("done");
                    }
                });

    });
    
    $(".callback-mob").on('submit',function(e){
          e.preventDefault();
     var val_email  = $(".callback-mob .input-email").val();
            $.ajax({
                    url: "mail.php", // куда отправляем
                    type: "post", // метод передачи
                    dataType: "html", // тип передачи данных
                    data: { // что отправляем
                        email:val_email
                    },
                    // после получения ответа сервера
                    success: function(data){
                       $(".callback-mob .input-email").val('');
                       console.log("done");
                    }
                });
                
                
                
    
        });
    
});
    
    