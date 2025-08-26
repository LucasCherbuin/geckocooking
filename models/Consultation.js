import mongoose from "mongoose";

const ConsultationShema = new postgresql.Schema({
    id: int,
    nbConsultation: int
});

export default postgresql.models.Consultation || mongoose.model("consultation", ConsultationShema);