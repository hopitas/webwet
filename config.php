<?PHP
//session_start();
//if (!(isset($_SESSION['login']) && $_SESSION['login'] != '')) {
//header ("Location: index.php");
//}
//default timezone
date_default_timezone_set('Europe/Helsinki');
// Connection's Parameters
$db_host = "localhost";
$db_name = "arduino";
$username = "root";
$password = "";
$db_con = mysql_connect($db_host, $username, $password);
$connection_string = mysql_select_db($db_name);
// Connection
mysql_connect($db_host, $username, $password) or die("query error");
mysql_select_db($db_name) or die("query error");

?>