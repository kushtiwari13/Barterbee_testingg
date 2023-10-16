<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "rs555864@gmail.com"; // Replace with your recipient email address
    $subject = "New Contact Form Submission";
    $headers = "From: webmaster@example.com"; // Replace with your sending email address
    $message = "Full Name: " . $_POST["full_name"] . "\n";
    $message .= "Email: " . $_POST["email"] . "\n";
    $message .= "Phone Number: " . $_POST["phone_number"] . "\n";
    $message .= "Message: " . $_POST["message"];

    if (mail($to, $subject, $message, $headers)) {
        echo "sent";
    } else {
        echo "Error sending message.";
    }
}
?>
