<?php

use PHPMailer\PHPMailer\PHPMailer;

require 'vendor/autoload.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $data = json_decode(file_get_contents("php://input"));

    if (json_last_error() === JSON_ERROR_NONE) {
        $name = $data->name;
        $email = $data->email;
        $message = $data->message;

        $mail = new PHPMailer;
        $mail->isSMTP();
        $mail->Host = 'smtp.hostinger.com';
        $mail->Port = 587;
        $mail->SMTPAuth = true;
        $mail->Username = 'form-no-reply@camilobeltran.com';
        $mail->Password = 'nektac-dubbiw-keMzy2';
        $mail->setFrom('form-no-reply@camilobeltran.com', 'Message Email');
        $mail->addAddress('contact@camilobeltran.com', 'Camilo Beltrán');
        $mail->addReplyTo($email, $name);
        $mail->Subject = 'New Message! -> Contact Form';
        $mail->isHTML(false);
        $mail->Body = "Email: " . $email . " \n !";
        if (!$mail->send()) {
            $response = array("success" => false, "message" => "Error al enviar el correo");
            http_response_code(500);
            echo json_encode($response);
        } else {
            $response = array("success" => true, "message" => "Correo enviado correctamente");
            http_response_code(200);
            echo json_encode($response);
        }
    }
}