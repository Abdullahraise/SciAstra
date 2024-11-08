<?php
require 'connect.php';

$query = $_GET['q'];
$stmt = $pdo->prepare("SELECT * FROM courses WHERE name LIKE ?");
$stmt->execute(["%$query%"]);
$courses = $stmt->fetchAll();

header('Content-Type: application/json');
echo json_encode($courses);
?>
