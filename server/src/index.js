// this import used to import express/to create our server
import express from "express";
// this import...imports pg to let us talk to the PostgreSQL database
import pkg from "pg";
// this import, imports database connection info..
import config from "./config.js";

// get POOL from pg/used to connect to database
// Pool=manages the connection between server and database..
const { Pool } = pkg;
// this creates a connection to database using NEON URL..
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
     ssl: true, 
});

// this creates the server..
const app = express();
const PORT = 3000;  //sets the port..

app.use(express.json());  //lets us read JSON from postman/for post requests

// home route...to test server
app.get("/", (req, res) => {
    res.send("Server is running");
});
// GET ALL..
app.get("/api/get-all-suggestions", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM suggestions");  //gets all data from database
        res.json(result.rows);  //sends back data..
    } catch (error) {
        console.error(error);  //if something breaks sends back error..
        res.status(500).send("Error getting suggestions");
    }
});
// GET BY CATEGORY..
app.get("/api/get-suggestions-by-category/:category", async (req, res) => {
    try {
        const { category } = req.params;  //get category from URL..
        // get only matching category from database..
        const result = await pool.query(
            "SELECT * FROM suggestions WHERE category = $1",
            [category]
        );
        res.json(result.rows);  //sends filtered data
    } catch (error) {
        console.error(error);
        res.status(500).send("Error filtering suggestions");
    }
});
// POST..
app.post("/api/add-one-suggestion", async (req, res) => {
    try {
        const { title, description, category } = req.body;  //gets data from postman body..
        // this inserts new data into database..
        const result = await pool.query(
            "INSERT INTO suggestions (title, description, category) VALUES ($1, $2, $3) RETURNING *",
            [title, description, category]
        );
        res.json(result.rows[0]);  //this sends back the new data..
    } catch (error) {
        console.error(error);
        res.status(500).send("Error adding suggestion");
    }
});
// this starts server..
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});