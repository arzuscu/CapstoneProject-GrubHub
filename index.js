const express = require ('express');
const foodMain = require ('./foodMain');
const foodDetail = require ('./foodDetail');
const foodFavs = require ('./foodFavs');
const bodyParser = require ('body-parser');
const uuid = require('uuid');
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
    const recipeId = req.params.id;
    console.log(recipeId)
    
    const recipeGetDesc = foodDetail.find(item => item.id === recipeId)
    res.json(recipeGetDesc)
});

app.post('/recipes', (req, res)=>{
    const randomId = uuid();
    const smallRecipe = {
        id: randomId,
        image: 'https://source.unsplash.com/1600x900/?food,burger',
        title: req.body.title,
        author: 'by Arzu',
        likes: '0'
    }
        const bigRecipe = {
            id: randomId,
            image: 'https://source.unsplash.com/1600x900/?food,burger',
            title: req.body.title,
            ingridients: req.body.ingridients,
            Directions: req.body.Directions
        }
        foodMain.push(smallRecipe);
        foodDetail.push(bigRecipe);

        console.log(foodMain)
        console.log(foodDetail)

        // res.json(smallRecipe);
        res.json(bigRecipe);
        

})
app.listen(PORT, () =>{
    console.log(`server listining on port  ${PORT}`);
} )

