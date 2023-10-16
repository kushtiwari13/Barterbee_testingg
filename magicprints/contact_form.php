<?php
$message = ""; // Initialize an empty message variable

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $_POST["firstname"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $quantity = $_POST["quantity"];
    $message_body = $_POST["message"];

    // Email settings
    $to = "your_email@example.com"; // Replace with your email address
    $subject = "New Form Submission from Website";
    $headers = "From: $name <$email>";

    // Compose the email message
    $email_message = "Name: $name\n";
    $email_message .= "Email: $email\n";
    $email_message .= "Phone Number: $phone\n";
    $email_message .= "Quantity: $quantity\n";
    $email_message .= "Message:\n$message_body";

    // Send the email
    if (mail($to, $subject, $email_message, $headers)) {
        // Email sent successfully
        $message = "Thank you for your submission!";
    } else {
        // Email sending failed
        $message = "Oops! Something went wrong. Please try again later.";
    }
} else {
    // Handle non-POST requests (optional)
    $message = "Invalid request method.";
}

// Output the message as plain text
echo $message;
?>
