const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const toDoSchema = new Schema({
  date: {
    type: Date,
    required: true,
   },
  title: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 40,
  },
  description: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
  },
  priority: {
    type: String,
    enum: ['High', 'Medium', 'Low'],
    required: true,
  },
  username: {
    type: String,
    required: true,
    
  }
 
 
})

const Todo = model('Todo', toDoSchema);

module.exports = Todo;
