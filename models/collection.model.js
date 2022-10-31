import mongoose from "mongoose";

const CollectionSchema = new mongoose.Schema({
    name: String,
    description: String,
    images: [String],
    code: String,
    language: String
},
    {
        timestamps: true
    }
)

const Collection = mongoose.models.collection || mongoose.model('collection', CollectionSchema)
export default Collection