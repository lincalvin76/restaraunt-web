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
    if (req.method !== "POST") {
        return res.status(405).json({ error: "POST only" });
    }

    try {
        const { items, total } = req.body;

        if (!items || items.length === 0) {
            return res.status(400).json({ message: "Cart is empty"});
        }

        const order = {
            items: items,
            total: total,
            timestamp: new Date().toLocaleString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit"
            })
        };

    const db = await connectToDB();
    const result = await db.collection("Orders").insertOne(order);

    res.status(200).json({
        message: "Order Saved",
        orderId: result.insertedId
    });
    
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to save order" });
    }
}