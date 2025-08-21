import { Schema, model, models } from 'mongoose';

const PropertySchema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  type: { type: String, required: true },
  description: String,
  location: {
    street: String,
    city: String,
    state: String,
    zip: String
  },
  beds: { type: Number, required: true },
  baths: { type: Number, required: true },
  square_feet: { type: Number, required: true },
  amenities: [String],
  rates: {
    nightly: Number,
    weekly: Number,
    monthly: Number
  },
  seller_info: {
    name: String,
    email: String,
    phone: String
  },
  images: [String],
  is_featured: { type: Boolean, default: false }
}, { timestamps: true });

export default models.Property || model('Property', PropertySchema);