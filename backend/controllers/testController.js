const asyncHandler = require('express-async-handler')
const Test = require('../models/testModel')

const testSave = asyncHandler(async (req,res) => {
    const {name, question} = req.body
    const test = await Test.create({
        name,
        question
    })

    if (test) {
        res.status(201).json({
            _id: test.id,
            name: test.name,
            question: test.question
        })
    }else {
        res.status(400)
        throw new Error('Invalid request')
    }
})

module.exports = {
    testSave
}