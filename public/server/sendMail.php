<?php

$allowed_origins = [
    'https://camilobeltran.com',
    'https://www.camilobeltran.com',
    'http://camilobeltran.com',
    'http://www.camilobeltran.com',
];

if (isset($_SERVER['HTTP_ORIGIN']) && in_array($_SERVER['HTTP_ORIGIN'], $allowed_origins)) {
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
}

header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

use PHPMailer\PHPMailer\PHPMailer;

require 'vendor/autoload.php';

$data = json_decode(file_get_contents("php://input"), true);
$name = $data['name'];
$email = $data['email'];
$message = $data['message'];

$mail = new PHPMailer;
$mail->isSMTP();
$mail->Host = 'smtp.hostinger.com';
$mail->Port = 587;
$mail->SMTPAuth = true;
$mail->SMTPSecure = "tls";
$mail->Username = 'form-no-reply@camilobeltran.com';
$mail->Password = 'nektac-dubbiw-keMzy2';
$mail->setFrom('form-no-reply@camilobeltran.com', 'Message Email');
$mail->addAddress('contact@camilobeltran.com', 'Camilo Beltrán');
if ($mail->addReplyTo($email, $name)) {
    $mail->Subject = 'Formulario de contacto';
    $mail->isHTML(false);
    $mail->Body = <<<EOT
    Email: $email
    Name: $name
    Message: $message
EOT;
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