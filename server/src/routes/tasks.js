const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Task = require('../models/task')

router.get('/', async (req, res) => {
    const tasks = await Task.find()

    try {
        res.status(200).json(tasks)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }

})

router.post('/', async (req, res) => {

    const { task, category }  = req.body

    const newTask = new Task({
        _id: mongoose.Types.ObjectId(),
        task: task,
        category: category
    })

    try {
        await newTask.save()
        res.status(200).json(newTask)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }

})

router.patch('/:id', async (req, res) => {

    const updatedTask = await Task.findByIdAndUpdate(req.params.id, {completed: req.body.completed}, {new: true})

    try {
        res.status(200).json(updatedTask)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }

})

router.delete('/:id', async (req, res) => {

    const foundTask = await Task.findById(req.params.id)

    try {
        await foundTask.remove()
        res.status(200).json({ message: 'successfully deleted the Task' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

module.exports = router