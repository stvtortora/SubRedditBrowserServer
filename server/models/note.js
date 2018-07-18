const mongoose = require('mongoose');

var Note = mongoose.model('Note', {
  text:{
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  }
})

module.exports = {Note};
