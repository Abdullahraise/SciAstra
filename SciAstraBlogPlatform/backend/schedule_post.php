<?php
require 'connect.php';

$stmt = $pdo->prepare("UPDATE blog_posts SET status = 'published' WHERE publish_date <= NOW() AND status = 'draft'");
$stmt->execute();
?>
