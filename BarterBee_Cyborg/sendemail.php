<?php
if(isset($_POST['submit'])){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $datetime = $_POST['datetime'];
    $message = $_POST['message'];

    $to = "your-email@example.com"; // Replace with your email
    $subject = "New Form Submission";
    $body = "Name: $name\nEmail: $email\nPhone: $phone\nDate and Time: $datetime\nMessage: $message";

    if(mail($to, $subject, $body)){
        echo "Email successfully sent";
    } else {
        echo "Email sending failed";
    }
}
?>