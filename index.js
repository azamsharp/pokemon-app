

var express = require('express');
var Pokemon = require('./pokemon.js');

var p = new Pokemon("name","url");
var app = new express();

app.get("/pokemon/all",function(req,res){

  var pokemons = [];
  pokemons.push({name :"Pikachu",url:"http://vignette4.wikia.nocookie.net/pokemon/images/5/5f/025Pikachu_OS_anime_11.png"})

  pokemons.push({name :"Bulbasaur",url:"http://static.giantbomb.com/uploads/original/13/135472/1891758-001bulbasaur.png"})

  pokemons.push({name :"Pokemon 2",url:"http://static.giantbomb.com/uploads/original/13/135472/1891758-001bulbasaur.png"})

  res.json(pokemons);

});

app.get("/hello",function(req,res){
  res.send("hello");
});

app.get("/bye",function(req,res){
  res.send("bye");
});


app.listen(3000,function(){

});
