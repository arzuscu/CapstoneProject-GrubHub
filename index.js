const express = require ('express');
const foodMain = require ('./foodMain');
const foodDetail = require ('./foodDetail');
const foodFavs = require ('./foodFavs');
const foodFavsDetail = require ('./foodFavsDetail');
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

app.get('/recipes/:id', (req, res) =>{
    const recipeId = req.params.id;
    
    const recipeGetDesc = foodDetail.find(item => item.id === recipeId)
    res.json(recipeGetDesc)
});

app.get('/favorites', (req, res) =>{
    res.json(foodFavs);
});

app.get('/favorites/:id', (req,res) =>{
    const favsId = req.params.id;
    const favsGetDesc = foodFavsDetail.find(item =>item.id === favsId)
    res.json(favsGetDesc)
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

        // res.json(smallRecipe);
        res.json(bigRecipe);
        

})
app.post('/favorites', (req, res)=>{
    
    const recipeId = req.body.id;
    const recipeGetDesc = foodDetail.find(item => item.id === recipeId)
    const recipeGetMain = foodMain.find(item => item.id === recipeId)
    //const randomId = uuid();
    const smallRecipe = {
        id: recipeGetMain.id,
        image: recipeGetMain.image,
        title: recipeGetMain.title,
        author: recipeGetMain.author,
        likes: recipeGetMain.likes,
    }
        const bigRecipe = {
            id: recipeGetDesc.id,
            image: recipeGetDesc.image,
            title: recipeGetDesc.title,
            ingridients: recipeGetDesc.ingridients,
            Directions: recipeGetDesc.Directions
        }
        foodFavs.push(smallRecipe);
        foodFavsDetail.push(bigRecipe);

        res.json(smallRecipe);
        res.json(foodFavsDetail);

})

app.post('/favoritesME', (req, res)=>{
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
        foodFavs.push(smallRecipe);
        foodFavsDetail.push(bigRecipe);

        console.log(foodFavs)
        console.log(foodFavsDetail)

        res.json(smallRecipe);
        res.json(foodFavsDetail);

})

// app.get('/search/:title', (req, res)=>{
//     const title = req.params.title;
    
//     const recipeGetDesc = foodDetail.filter(item => item.title === title)
//     res.json(recipeGetDesc)

// })
// POST OR GET 
// /sraerch/{title}
// req.body = title
// res = array(list) of recipes that have the same Titel
// inside the endpoint
//const recipetitle = req.body.title;
// const recipeGetDesc = foodDetail.find(item => item.title === recipetitle)
//


app.listen(PORT, () =>{
    console.log(`server listining on port  ${PORT}`);
} )

