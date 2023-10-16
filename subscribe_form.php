<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve the email value from the form
    $email = $_POST["email"];

    // Validate the email (you can add more robust validation)
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format";
    } else {
        // Define your email settings
        $to = "tiwarikush9328@gmail.com"; // Replace with your email address
        $subject = "New subscription request";
        $message = "Email: " . $email;

        // Send the email
        if (mail($to, $subject, $message)) {
            echo "success";
        } else {
            echo "Error sending the email.";
        }
    }
}
?>
