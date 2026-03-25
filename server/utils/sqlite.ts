import Database from 'better-sqlite3';

// Création ou connexion au fichier de la base de données
const db = new Database('vnp-web.sqlite');

// Initialisation des tables si elles n'existent pas encore
db.exec(`
  CREATE TABLE IF NOT EXISTS services (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT,
    price REAL
  );

  CREATE TABLE IF NOT EXISTS bookings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    service_id INTEGER,
    client_name TEXT NOT NULL,
    client_email TEXT NOT NULL,
    booking_date TEXT NOT NULL,
    status TEXT DEFAULT 'en_attente',
    FOREIGN KEY(service_id) REFERENCES services(id)
  );
`);

export default db;