const mongoose = require('mongoose')

const testSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
    question: {
        type: String,
        required: [true, 'please add question']
    }
},
{
    timestamps: true
}
)

module.exports = mongoose.model('Test',testSchema)