<?php

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $config = [
        'host' => 'smtp.hostinger.com',
        'port' => 587,
        'username' => 'form-no-reply@camilobeltran.com',
        'password' => 'nektac-dubbiw-keMzy2'
    ];

    // Configure the SMTP Server
    ini_set("SMTP", $host);
    ini_set("smtp_port", $port);
    ini_set("username", $username);
    ini_set("password", $password);

    // set the values into variables
    $data = json_decode(file_get_contents("php://input"), true);

    $name = $data['name'];
    $email = $data['email'];
    $message = $data['message'];

    // Configuración del correo electrónico
    $to = "contact@camilobeltran.com";
    $subject = "Contact Form -> New Message!";
    $messageBody = "Nombre: $name\nCorreo electrónico: $email\nMensaje: $message";

    $headers = "From: form-no-reply@camilobeltran.com\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/plain; charset=utf-8\r\n";

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