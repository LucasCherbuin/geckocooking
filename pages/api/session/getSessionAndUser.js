import { MongoClient } from "mongodb";
import knex from "knex";

const client = new MongoClient(process.env.MONGO_URL);
await client.connect();
const db = client.db("session_db");

const pgdb = new knex({
   client: "pg",
   connection: process.env.DATABASE_URL,
});

export async function getSessionAndUser(sessionToken) {
    // Récupération session dans mongo
    const session = await mongoDb.collection("sessions").findOne({ sessionToken });
    if (!session) return null;

    // Récupération sécurisée table utilisateur de Postgres avec du query builder 
    const user = await pgdb("user")
    .select("id", "pseudo", "email", "roles")
    .from({ id: session.userId})
    .first(); // 1er résultat

    
    if (!user) return null;

    //retourne les données des bases de données
    return { session, user};
}