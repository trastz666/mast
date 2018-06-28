<?php

/* https://api.telegram.org/bot611936248:AAHklc4vndDeq7xJPqTXUNNVwJFxx9WE08A/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

// $name = $_POST['user_name'];
$phone = $_POST['phone'];
// $email = $_POST['user_email'];
$token = "610178230:AAHj8QCLveidY70GhGZfZ4IZWzHeB7lR23I";
$chat_id = "-272216573";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Email' => $email
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: thank-you.html');
} else {
  echo "Error";
}
?>