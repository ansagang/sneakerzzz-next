import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema({
    name: String,
    description: String,
    colorway: [
        {
            name: String,
            code: String,
            primary: Boolean
        }
    ],
    price: {
        value: Number,
        currency: String
    },
    category: {
        name: String,
        code: String
    },
    size: [
        {
            value: String,
            availability: Boolean
        }
    ],
    images: [String],
    brand: [String],
    stock: Boolean,
    collections: {
        name: String,
        code: String,
        description: String
    },
    views: Number,
    language: String,
    id: String,
    trendScore: Number
},
    {
        timestamps: true
    }
)

const Product = mongoose.models.product || mongoose.model('product', ProductSchema)
export default Product