<?php
// Connexion à la base de données
$host = 'localhost';      // Serveur de la base de données
$dbname = 'vnpweb';       // Nom de la base de données
$username = 'root';       // Nom d'utilisateur MySQL
$password = '';           // Mot de passe MySQL

try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Erreur de connexion à la base de données : " . $e->getMessage());
}

// Traitement du formulaire
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Insertion dans la base de données
    try {
        $stmt = $conn->prepare("INSERT INTO contacts (name, email, message) VALUES (:name, :email, :message)");
        $stmt->bindParam(':name', $name);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':message', $message);
        $stmt->execute();

        echo "Message envoyé avec succès !";
    } catch (PDOException $e) {
        echo "Erreur lors de l'envoi du message : " . $e->getMessage();
    }
}
?>