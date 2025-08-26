import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;


// uri manquant
if (!MONGODB_URI) {
    throw new Error ("définir mongo_uri dan le fichier .env")
}

let cached = global.mongoose;

if (!cached) {
    chached = global.mongoose = { conn:null, promise: null};
}

// connexion à la base de donnée

async function dbconnect(params) {
    if (cached.conn) return cahed.conn;
    if (!cached.promise) {
        cached.promise = mongoose.dbconnect(MONGODB_URI, {
            useNewUrlParser : true,
            useUnifiedTopology: true, 
        }).then((mongoose) => mongoose);
    }
    cached.conn = await cached.promise;
    return cached.conn;
}

export default dbconnect;
