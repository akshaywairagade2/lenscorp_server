const mongoose=require('mongoose')

const counterSchema = new mongoose.Schema({
    count:{
        type: Number,
        required: true,
    },
})

const counter=mongoose.model('Counter',counterSchema);
module.exports=counter;