import dbconnect from "../../lib/mongodb";
import Consultation from "../../models/Consultation";

export default async function handler(req, res) {
    await dbconnect();

    if (req.method === "GET") {
        const consultation = await Consultation.find({});
        res.status(200).json(Consultation);
    }

    if (req.method === "POST") {
        const newConsultation = await Consultation.create(req.body);
        res.status(201).json(newConsultation);
    }   
}