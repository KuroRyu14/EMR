// fetch_doctors.php
<?php
include 'cors.php';  // This must be included before any output
include 'dbconfig.php';  // Includes the database configuration

$sql = "SELECT id, name, specialization FROM tbl_doctors";
$result = $conn->query($sql);
$doctors = [];

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $doctors[] = $row;
    }
    echo json_encode($doctors);
} else {
    echo json_encode([]);
}

$conn->close();
?>
