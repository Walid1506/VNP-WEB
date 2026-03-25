import db from '../utils/sqlite';

export default defineEventHandler((event) => {
  // On prépare la requête SQL pour récupérer tous les services
  const stmt = db.prepare('SELECT * FROM services');
  
  // On exécute la requête et on récupère les résultats sous forme de tableau
  const services = stmt.all();
  
  // On renvoie les données au frontend
  return services;
});