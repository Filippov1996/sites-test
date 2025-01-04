<?php 
	   $to      = 'va@cofactor-europe.cz';
   		$subject = 'Заявка сайта';
    	$message = $_POST['email'];
    	$headers = 'From: yvc'       . "\r\n" .
                 'Reply-To: webmaster@example.com' . "\r\n" .
                 'X-Mailer: PHP/' . phpversion();
    mail($to, $subject, $message, $headers); 
    echo $data;



?>