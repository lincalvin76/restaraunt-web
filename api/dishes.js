import { MongoClient } from "mongodb";

let cachedDb = null;

async function connectToDB() {
    if (cachedDb) return cachedDb;

    const client = new MongoClient(process.env.ATLAS_URI);
    await client.connect();
    cachedDb = client.db("Menu");
    return cachedDb;
}

export default async function handler(req, res) {
    try {
        const db = await connectToDB();
        const dishes = await db.collection("Dishes").find().toArray();
        res.status(200).json(dishes);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to load dishes" });
    }
}