const mongoose = require("mongoose")
const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  slug: {
    type: String,
    required: true,
    unique: true
  },
  parentID: {
    type: String
  }
}, {timestamps: true})

module.exports = mongoose.model("Category", categorySchema)