import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
    name: String,
    code: String,
    сategories: [
        {
            name: String,
            code: String,
            categories: [
                {
                    name: String,
                    code: String,
                }
            ]
        }
    ],
    language: String
},
    {
        timestamps: true
    }
)

const Category = mongoose.models.category || mongoose.model('category', CategorySchema)
export default Category