<?php

$method = $_SERVER['REQUEST_METHOD'];
$c = true;
$message = '';

if ($method === 'POST') {
  $project_name = trim($_POST["project_name"]);
  $admin_email = trim($_POST["admin_email"]);
  $form_subject = trim($_POST["form_subject"]);

  // Собираем данные формы
  foreach ($_POST as $key => $value) {
    if ($value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject") {
      $message .= "
                " . (($c = !$c) ? '<tr>' : '<tr style="background-color: #f8f8f8;">') . "
                    <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
                    <td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
                </tr>
            ";
    }
  }

  $message = "<table style='width: 100%;'>$message</table>";

  function adopt($text)
  {
    return '=?UTF-8?B?' . Base64_encode($text) . '?=';
  }

  // Проверяем, есть ли загруженный файл
  if (isset($_FILES['attachment']) && $_FILES['attachment']['error'] == UPLOAD_ERR_OK) {
    $file_tmp_path = $_FILES['attachment']['tmp_name'];
    $file_name = $_FILES['attachment']['name'];
    $file_size = $_FILES['attachment']['size'];
    $file_type = $_FILES['attachment']['type'];
    $file_content = chunk_split(base64_encode(file_get_contents($file_tmp_path)));

    // Формируем заголовки для email с файлом
    $boundary = md5(time());
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "From: " . adopt($project_name) . " <" . $project_name . ">\r\n";
    $headers .= "Reply-To: " . $admin_email . "\r\n";
    $headers .= "Content-Type: multipart/mixed; boundary=\"" . $boundary . "\"\r\n";

    // Тело письма
    $body = "--" . $boundary . "\r\n";
    $body .= "Content-Type: text/html; charset=UTF-8\r\n";
    $body .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
    $body .= $message . "\r\n";

    // Добавляем файл
    $body .= "--" . $boundary . "\r\n";
    $body .= "Content-Type: " . $file_type . "; name=\"" . $file_name . "\"\r\n";
    $body .= "Content-Disposition: attachment; filename=\"" . $file_name . "\"\r\n";
    $body .= "Content-Transfer-Encoding: base64\r\n\r\n";
    $body .= $file_content . "\r\n";
    $body .= "--" . $boundary . "--";

    // Отправляем email с вложением
    mail($admin_email, adopt($form_subject), $body, $headers);
    echo "Email sent with attachment!";
  } else {
    // Если файла нет, просто отправляем письмо с данными формы
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    $headers .= "From: " . adopt($project_name) . " <" . $project_name . ">\r\n";
    $headers .= "Reply-To: " . $admin_email . "\r\n";

    // Отправляем email без вложения
    mail($admin_email, adopt($form_subject), $message, $headers);
    echo "Email sent without attachment!";
  }
}
?>