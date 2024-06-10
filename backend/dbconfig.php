// dbconfig.php
<?php
$servername = "192.168.1.69";
$username = "root";
$password = "";  // Use the actual password if set
$dbname = "EMR_DB";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
