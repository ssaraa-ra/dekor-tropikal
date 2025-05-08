<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect the form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
    
    // Validate the form data
    if (!empty($name) && !empty($email)  && !empty($message)) {
        // Email configuration (you can modify this according to your needs)
        $to = "ramadanisaraaa@gmail.com"; // Replace with your email address
        $subject = "New Contact Form Submission from $name";
        $body = "Name: $name\nEmail: $email\nMessage: \n$message";
        $headers = "From: $email";

        // Send the email
        if (mail($to, $subject, $body, $headers)) {
            echo "Thank you for contacting us, $name. We will get back to you soon.";
        } else {
            echo "There was an error sending your message. Please try again.";
        }
    } else {
        echo "Please fill out all fields.";
    }
}
?>

<!-- This part will show a success or error message -->
<div id="form-message">
    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Display the result message from PHP
        if (!empty($name) && !empty($email)  && !empty($message)) {
            if (mail($to, $subject, $body, $headers)) {
                echo "Your message has been sent successfully!";
            } else {
                echo "There was an error submitting your form. Please try again later.";
            }
        } else {
            echo "Please make sure all fields are filled out correctly.";
        }
    }
    ?>
</div>
