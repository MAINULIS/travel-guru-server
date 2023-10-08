const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000 ;


const cards = require('./data/cards.json');

app.use(cors());

app.get('/',(req, res) =>{
    res.send("Bangladesh's scenic spots are coming")
})

app.get('/cards', (req, res) =>{
    res.send(cards)
})

app.get('/cards/:id',(req, res)=>{
    const id = req.params.id;
    const selectedCard = cards.find(c => c._id == id);
    res.send(selectedCard)
})


app.listen(port, ()=>{
 console.log(`Cards are running on port: ${port}`)
})