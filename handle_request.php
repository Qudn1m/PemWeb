<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $username = htmlspecialchars($_POST['username']);
  $comment = htmlspecialchars($_POST['comment']);

  // Connect to the database
  $conn = new mysqli('localhost', 'username', 'password', 'comments_db');
  if ($conn->connect_error) {
    die('Connection failed: ' . $conn->connect_error);
  }

  // Insert comment into the database
  $stmt = $conn->prepare("INSERT INTO comments (username, comment) VALUES (?, ?)");
  $stmt->bind_param("ss", $username, $comment);
  $stmt->execute();
  $stmt->close();
  $conn->close();

  // Redirect back to the main page
  header('Location: yourpage.html');
  exit();
}
?>
