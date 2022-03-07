<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Pastelero</title>
  </head>
  <body>
    <h2>Hola Pastelero, tienes este pedido</h2>
    <?php
        $bizcocho = $_POST['bizcocho'];
        $relleno = $_POST['relleno'];
        $decoracion = $_POST['decoracion'];

        $decos="";
        if(!empty($_POST['decoracion'])) {
            foreach($_POST['decoracion'] as $check) {
                    $decos= $decos ." ". $check;
            }
        }

        $telefono = $_POST['telefono'];
        $anotacion = $_POST['anotacion'];
        $nombre = $_POST['nombre'];
        $email = $_POST['email'];
        echo "Hola Pastelero <br>Tenemos un nuevo pedido de $nombre.<br>Quiere un pastel:
        Con Bizcocho de $bizcocho, relleno de $relleno y decorado con $decos<br>
        Como anotaciones extras dejo: $anotacion<br>Datos generales del cliente<br>Nombre: $nombre<br>
        Telefono: $telefono<br>
        Email: $email"
    ?>
  </body>
</html>