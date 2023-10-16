<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "rs555864@gmail.com"; // Replace with your recipient email address
    $subject = "New Contact Form Submission";
    $headers = "From: webmaster@example.com"; // Replace with your sending email address
    $message = "Full Name: " . $_POST["name"] . "\n";
    $message .= "Email: " . $_POST["workemail"] . "\n";
    $message .= "Phone Number: " . $_POST["phone"] . "\n";
    $message .= "Service: " . $_POST["service"] . "\n";
    $message .= "Requirements: " . $_POST["requirements"];

    if (mail($to, $subject, $message, $headers)) {
        echo "sent";
    } else {
        echo "Error sending message.";
    }
}
?>