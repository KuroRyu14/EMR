<?php
require 'dbconfig.php';

// Function to add a new patient
function addPatient($data) {
    global $conn;
    $stmt = $conn->prepare("INSERT INTO patients (family_name, first_name, middle_name, birthday, age, sex, civil_status, address, contact_number, email, vital_signs) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssissssss", $data['family_name'], $data['first_name'], $data['middle_name'], $data['birthday'], $data['age'], $data['sex'], $data['civil_status'], $data['address'], $data['contact_number'], $data['email'], $data['vital_signs']);
    return $stmt->execute();
}

// Function to get all patients
function getPatients() {
    global $conn;
    $result = $conn->query("SELECT * FROM patients");
    return $result->fetch_all(MYSQLI_ASSOC);
}

// Function to get a single patient by ID
function getPatient($id) {
    global $conn;
    $stmt = $conn->prepare("SELECT * FROM patients WHERE id = ?");
    $stmt->bind_param("i", $id);
    $stmt->execute();
    return $stmt->get_result()->fetch_assoc();
}

// Function to update a patient
function updatePatient($id, $data) {
    global $conn;
    $stmt = $conn->prepare("UPDATE patients SET family_name = ?, first_name = ?, middle_name = ?, birthday = ?, age = ?, sex = ?, civil_status = ?, address = ?, contact_number = ?, email = ?, vital_signs = ? WHERE id = ?");
    $stmt->bind_param("ssssissssssi", $data['family_name'], $data['first_name'], $data['middle_name'], $data['birthday'], $data['age'], $data['sex'], $data['civil_status'], $data['address'], $data['contact_number'], $data['email'], $data['vital_signs'], $id);
    return $stmt->execute();
}

// Function to delete a patient
function deletePatient($id) {
    global $conn;
    $stmt = $conn->prepare("DELETE FROM patients WHERE id = ?");
    $stmt->bind_param("i", $id);
    return $stmt->execute();
}

// REST API Endpoints
$request_method = $_SERVER["REQUEST_METHOD"];

switch ($request_method) {
    case 'GET':
        if (!empty($_GET["id"])) {
            $id = intval($_GET["id"]);
            $response = getPatient($id);
        } else {
            $response = getPatients();
        }
        header('Content-Type: application/json');
        echo json_encode($response);
        break;
    case 'POST':
        $data = json_decode(file_get_contents('php://input'), true);
        $response = addPatient($data);
        header('Content-Type: application/json');
        echo json_encode($response);
        break;
    case 'PUT':
        $id = intval($_GET["id"]);
        $data = json_decode(file_get_contents('php://input'), true);
        $response = updatePatient($id, $data);
        header('Content-Type: application/json');
        echo json_encode($response);
        break;
    case 'DELETE':
        $id = intval($_GET["id"]);
        $response = deletePatient($id);
        header('Content-Type: application/json');
        echo json_encode($response);
        break;
    default:
        header("HTTP/1.0 405 Method Not Allowed");
        break;
}
?>
