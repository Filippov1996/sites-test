<?php 
	    $to      = 'igorfilippov96@yandex.ru';
   		$subject = 'Заявка с сайта';
    	$message = "Имя: ".$_POST['name']." Сайт: ".$_POST['website']." Телефон: ".$_POST['phone'];
    	$headers = 'From: roistat'       . "\r\n" .
                 'Reply-To: webmaster@example.com' . "\r\n" .
                 'X-Mailer: PHP/' . phpversion();
    mail($to, $subject, $message, $headers); 


    $log = date('Y-m-d H:i:s') . ' Заявка с сайта. Имя:'.$_POST['name'].' Сайт:'.$_POST['website']." Телефон".$_POST['phone'];
    file_put_contents(__DIR__ . '/log.txt', $log . PHP_EOL, FILE_APPEND);


?>