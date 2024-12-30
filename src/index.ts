import express from 'express';
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Datenbankverbindung konfigurieren
const pool = mysql.createPool({
  host: 'localhost',
  user: process.env.MYSQL_USER || 'user',
  password: process.env.MYSQL_PASSWORD || 'password',
  database: process.env.MYSQL_DATABASE || 'api_db',
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10,
  idleTimeout: 60000,
  queueLimit: 0,
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Express API is running' });
});

// Gesundheits-Check-Endpoint
app.get('/health', async (req, res) => {
  try {
    // Teste die Datenbankverbindung
    const connection = await pool.getConnection();
    connection.release();
    res.json({ status: 'healthy', database: 'connected' });
  } catch (error) {
    console.error('Database connection error:', error);
    res.status(500).json({ 
      status: 'unhealthy', 
      database: 'disconnected',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

// Server starten
app.listen(port, () => {
  console.log(`Server läuft auf http://localhost:${port}`);
});