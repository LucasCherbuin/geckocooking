import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI; // mettre dans .env
const options = {};

let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
  throw new Error("MONGODB_URI must be defined in .env");
}

if (process.env.NODE_ENV === "development") {
  // En dev, éviter de créer plusieurs connexions
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // En prod
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
