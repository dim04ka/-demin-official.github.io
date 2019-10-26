<?php

// require ('../phpmailer/PHPMailerAutoload.php');

$result = array(
  'name' => $_POST["name"],
  'tel' => $_POST['phone-details']
);
echo json_encode($result);

// mail send to test@gmail.com
// if (!empty($_POST['name']) && !empty($_POST['phone-details']))
// {
//     $fio = $_POST['name'];
//     $tel = trim($_POST['phone-details']);

//     $message = '  <table  width="width: 600px" cellpadding="0" cellspacing="0" border="0" style="width: 100%;font-family: Arial, Helvetica, sans-serif; font-size: 16px;padding: 20px 0px; " >


//     <tr style="text-align: center">
//       <td>Имя: '.$fio.'</td>
//     </tr>
//     <tr style="text-align: center">
//       <td style="padding-top: 10px;">Телефон:  '.$tel.'</td>
//     </tr>
//     <tr>
//       <td style="padding: 10px">&nbsp;</td>
//     </tr>
//   </table>';

//     $headers  = 'MIME-Version: 1.0' . "\r\n";
//     $headers .= 'Content-type: text/html; charset=utf-8'. "\r\n";
//     if (mail("text@gmail.com","Авангард", $message,$headers))
//     {
//         $result = array(
//             'name' => $_POST["name"]
//         );
//         echo json_encode($result);
//         exit();
//     } else {
//         echo json_encode(array("при отправке сообщения возникли ошибки"));
//         exit();
//     }
// }


