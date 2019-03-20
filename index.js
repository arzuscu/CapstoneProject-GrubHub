const express = require ('express');
const foodMain = require ('./foodMain');
const foodDetail = require ('./foodDetail');
const foodFavs = require ('./foodFavs');
const bodyParser = require ('body-parser');
const cors = require ('cors');
const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
}))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static('public'));

const PORT = 8080;

app.get('/recipes', (req, res) =>{
    res.json(foodMain);
});

app.get('/favorites', (req, res) =>{
    res.json(foodFavs);
})

app.get('/recipes/:id', (req, res) =>{
    const recipeIds = req.params.id;
    const recipeGetDesc = foodDetail.find(item => item.id === recipeIds)
    res.json(recipeGetDesc)
});

app.listen(PORT, () =>{
    console.log(`server listining on port  ${PORT}`);
} )

