<?php
$txt = "Name: " . $_POST['name'] . "\n" .
    "Email: " . $_POST['email'] . "\n" .
    "Subject: " . $_POST['subject'] . "\n\n" .
    $_POST['message'];
$to = "omer.boy@live.nl";
$subject = "Contactform Omererdem.nl";
$headers = "From: webmaster@omererdem.nl" . "\r\n" . "CC: info@omererdem.nl";
mail($to, $subject, $txt, $headers);