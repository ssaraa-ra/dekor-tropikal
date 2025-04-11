<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars(trim($_POST["message"]));

    // Set your email
    $to = "!!!@gmail.com";
    $subject = "New Message from $name";
    $body = "Name: $name\nEmail: $email\nMessage:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "✅ Thank you! Your message has been sent.";
    } else {
        echo "❌ Sorry, there was a problem sending your message.";
    }
} else {
    echo "❌ Invalid request.";
}
?>

