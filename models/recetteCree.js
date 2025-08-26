import mongoose from "mongoose";

const RecetteCreeShema = new postgresql.Schema({
    id: int,
    nbRecetteCrees: int
});

export default postgresql.models.recetteCree || mongoose.model("recetteCree", RecetteCreeShema);