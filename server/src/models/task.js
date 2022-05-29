const mongoose = require('mongoose')
const express = require("express")

const todoItemSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    task: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    category: {
        type: String,
        required: true
    }
}) 

module.exports = new mongoose.model('TodoItem', todoItemSchema);