
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const reviewSchema = new mongoose.Schema(
  {
    comment: String,
   rating:{
    type: Number,
    min:1,
    max:5
   },
   createAt:{
    type: Date,
    dafault: Date.now()
   },
   author:{
    type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',

   }
  }
);

module.exports = mongoose.model('Review', reviewSchema);