const express = require("express");
require("./db/connection");
const food = require("./modules/food")
const app = express();
const port = process.env.PORT || 3000;
const cors= require('cors');

app.use(cors({
origin:'*'
}));

  // ___________________________ GET API DATA ___________________________

  app.get("/foods", async (req, res) => {
    try {
        const foodsData = await food.find();
        res.send(foodsData)
    } catch (e) {
        console.log(e)
    }
}) 

// ******** individual id  ******** 
app.get("/food/:id", async (req, res) => {
try {
    const name = req.params.id
    console.log(name)
    const foodData = await food.findById({_id:name});
    console.log(foodData)

    if (!foodData) {
        return res.status(404).send();
    } else {
        res.send(foodData)
    }    

} catch (e) {
    console.log(e)
}
})
// ******** individual id  ******** 
// ___________________________ GET API DATA ___________________________


// ___________________________ POST API DATA ___________________________
app.use(express.json());

app.post("/createfood", (req, res) => {
const foodData = new food(req.body)
foodData.save().then(() => { 
    res.status(201)
    res.send(foodData)
}).catch((e) => {
    res.status(400)
    res.send(e);
})
})
// ___________________________ POST API DATA ___________________________



// ___________________________ PATCH API DATA ______________________


app.patch("/food/:id", async (req, res) => {
try {
    const _id = req.params.id;
    console.log(_id)
    const updateStudent = await food.findByIdAndUpdate({ _id: _id }, req.body, {
        new: true,  
    });
    res.send(updateStudent)
} catch (e) {
    res.status(404)
    res.send(e)
}
})
// ___________________________ PATCH API DATA ___________________________


// ___________________________ Delete API DATA ___________________________

app.delete("/food/:id", async (req, res) => {
try {
    const _id = req.params.id;
    const deleteStudent = await food.findByIdAndDelete({ _id: _id });
    if (!_id) {
        return res.status(400).send()
    } else {
        res.send(deleteStudent)
    } 
} catch (e) {
    res.status(500).send(e)
}
})
// ___________________________ Delete API DATA ___________________________


app.listen(port, () => {
    console.log(`connection setup ${port}`)
})