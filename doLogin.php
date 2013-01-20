<?php

include('config.php');
$tbl_name = "users"; // Table name

$is_ajax = $_REQUEST['is_ajax'];
if (isset($is_ajax) && $is_ajax) {
    $username = $_REQUEST['username'];
    $password = $_REQUEST['password'];

// username and password sent from form
    $username = $_POST['username'];
    $password = $_POST['password'];

// To protect MySQL injection (more detail about MySQL injection)
    $username = stripslashes($username);
    $password = stripslashes($password);
    $username = mysql_real_escape_string($username);
    $password = mysql_real_escape_string($password);
    $sql = "SELECT * FROM $tbl_name WHERE username='$username' and password='$password'";
    $result = mysql_query($sql);

// Mysql_num_row is counting table row
    $count = mysql_num_rows($result);

// If result matched $myusername and $mypassword, table row must be 1 row
    if ($count == 1) {
        session_start();
        $_SESSION['login'] = "1";
        echo "success";
    }
}
?>