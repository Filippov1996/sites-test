<?php 
	    $to      = 'igorfilippov96@yandex.ru';
   		$subject = 'Заявка сайта';
    	$message = "Имя: ".$_POST['name']."\r\nEmail: ".$_POST['email']."\r\nКомментарий: ".$_POST['textarea'];
    	$headers = 'From: test'. "\r\n" .
                 'Reply-To: webmaster@example.com' . "\r\n" .
                 'X-Mailer: PHP/' . phpversion();
    mail($to, $subject, $message, $headers); 
    echo $data;



?>