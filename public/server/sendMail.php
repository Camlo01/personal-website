<?php

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $config = [
        'host' => 'smtp.hostinger.com',
        'port' => 587,
        'username' => 'form-no-reply@camilobeltran.com',
        'password' => 'nektac-dubbiw-keMzy2'
    ];

    // Configure the SMTP Server
    ini_set("SMTP", $config['host']);
    ini_set("smtp_port", $config['port']);
    ini_set("username", $config['username']);
    ini_set("password", $config['password']);

    // set the values into variables
    $data = json_decode(file_get_contents("php://input"), true);

    $name = $data['name'];
    $email = $data['email'];
    $message = $data['message'];

    // Configure mail content
    $to = "contact@camilobeltran.com";
    $subject = "Contact Form -> New Message!";
    $messageBody = "Nombre: $name\nCorreo electrónico: $email\nMensaje: $message";


    // Configure headers
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Encabezados de autenticación
    $headers .= "Return-Path: <$email>\r\n";
    $headers .= "X-Sender: $email\r\n";
    $headers .= "X-Mailer: PHP\r\n";
    $headers .= "X-Priority: 1\r\n";

    if (mail($to, $subject, $messageBody, $headers)) {
        $response = array("success" => true, "message" => "Correo enviado correctamente");
        http_response_code(200);
        echo json_encode($response);
    } else {
        $response = array("success" => false, "message" => "Error al enviar el correo");
        http_response_code(500);
        echo json_encode($response);
    }
}

?>