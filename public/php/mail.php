<?php
$txt = "Name: " . $_POST['name'] . "\n" .
    "Email: " . $_POST['email'] . "\n" .
    "Subject: " . $_POST['subject'] . "\n\n" .
    $_POST['message'];
$to = "info@omererdem.nl";
$subject = "Contactform Omererdem.nl";
$headers = "From: webmaster@omererdem.nl" . "\r\n" . "CC: m.o.erdem@outlook.com";
mail($to, $subject, $txt, $headers);