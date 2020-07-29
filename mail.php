<?php 
$from = "postmaster@h005344266.nichost.ru";

$to = "alyasovyan@gmail.com";

$subj = 'Письмо с сайта';

$body .= "

<html>
    <head>
        <title>$subj</title>
    </head>
    <body>
       <p>Информационное письмо</p>
      <p>------------------------------------------</p>
      <br>
      <p>Информация с формы:</p>
      <p>Имя: $_POST[name]</p>
      <p>Email: $_POST[email]</p>
      <p>Телефон: $_POST[tel]</p>
      <br>
      <p>Сообщение сгенерировано автоматически.</p>
    </body>
</html>";

$headers .= "To: <$to>\n";
$headers .= "From: <$from>\n";
$headers .= "Subject: $subj>\n";
$headers .= "MIME-VERSION:1.0\r\n";
$headers .= "Content-type: text/html; charset=utf-8\r\n";
$headers .= "Content-Transfer-Encoding: 64bit\r\n";


mail( $to, $subj, $body, $headers );


//echo json_encode(....); - ??????? ?????????? ? ajax ??????
?>
