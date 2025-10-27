import dbconnect from "../../../lib/mongodb";
import RecetteCree from "../../../models/recetteCree";


export default async function handler(req, res) {
    await dbconnect();

    if (req.method === "GET") {
        const recetteCree = await RecetteCree.find({});
        res.status(200).json(recetteCree);
    }

    if (req.method === "POST") {
        const newRecetteCree = await RecetteCree.create(req.body);
        res.status(201).json(newRecetteCree);
    }   
}