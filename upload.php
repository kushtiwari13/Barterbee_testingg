<?php
$recipientEmail = "tiwarikush932@gmail.com";
$subject = "PDF Attachment";
$message = "Please find the attached PDF file.";

// Check if a file was uploaded
if (isset($_FILES['pdfFile']) && $_FILES['pdfFile']['error'] === UPLOAD_ERR_OK) {
    $pdfFileName = $_FILES['pdfFile']['name'];
    $pdfTempName = $_FILES['pdfFile']['tmp_name'];

    // Validate file type
    if (pathinfo($pdfFileName, PATHINFO_EXTENSION) === "pdf") {
        // Move the file to a secure directory
        $destination = "uploads/" . $pdfFileName;
        move_uploaded_file($pdfTempName, $destination);

        // Send email with attachment
        $headers = "From: sender@example.com";
        $fileAttachment = chunk_split(base64_encode(file_get_contents($destination)));
        $boundary = md5(time());
        $headers .= "\nMIME-Version: 1.0\n";
        $headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\n";

        $message = "--$boundary\n";
        $message .= "Content-Type: text/plain; charset=\"iso-8859-1\"\n";
        $message .= "Content-Transfer-Encoding: 7bit\n\n";
        $message .= $message . "\n\n";

        $message .= "--$boundary\n";
        $message .= "Content-Type: application/pdf;\n";
        $message .= " name=\"$pdfFileName\"\n";
        $message .= "Content-Disposition: attachment;\n";
        $message .= " filename=\"$pdfFileName\"\n";
        $message .= "Content-Transfer-Encoding: base64\n\n";
        $message .= $fileAttachment . "\n\n";
        $message .= "--$boundary--";

        // Send the email
        mail($recipientEmail, $subject, $message, $headers);

        // Clean up: delete the uploaded file
        unlink($destination);

        echo "Email sent with PDF attachment successfully.";
    } else {
        echo "Invalid file type. Please upload a PDF.";
    }
} else {
    echo "No file uploaded or an error occurred.";
}
?>
