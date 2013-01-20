<?php
// start session
session_start();

// delete the current dession
unset($_SESSION);
session_destroy();

// set the current cookie to 1 hour ago (to delete it)
setcookie("username", "", time() - 3600);
?>

<h2>Logging out.</h2>

<meta http-equiv="refresh"  content="2;url=index.php">
