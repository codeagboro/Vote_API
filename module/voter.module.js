const mongoose = require("mongoose");

const voterSchema = new mongoose.Schema(
   {
    candidate:{
    type: String,
    required: true
   },
   voteCount:{
    type: Number,
    required: true,
    default: 0,
   },
   },
   {
    timestamps: true,
    },
)

const voterecord = mongoose.model("voterecord", voterSchema);
module.exports = voterecord;