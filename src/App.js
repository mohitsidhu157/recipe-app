import React,{useEffect, useState} from 'react';
import Recipe from "./Recipe";
import './App.css';

function App () {
    const APP_ID = '8dd921db';
    const APP_KEY = '17c31add41ba209f2afe8e957b511fc9';
    const [recipes, setRecipes]  = useState([]);
    const [search,setSearch] = useState(''); 
    const [query, setQuery] = useState("");
    useEffect(()=>{
      getRecipe();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[query]);
    const getRecipe = async ()=>{
      const res = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      
      const data = await res.json();
      console.log(data.hits);
      setRecipes(data.hits);
    }
    const getSearch = (e) => {
      e.preventDefault();
      setQuery(search);
      setSearch('');
    }
    const updateSearch = (e) => {
      setSearch(e.target.value);
    }
      return (
      <div className="App">
        <form className="search-form" onSubmit={getSearch}>
          <input type="text" className="search-bar" value={search} onChange={updateSearch}/>
          <button type="submit" className="search-button">Search</button>
        </form>
        <div className="Recipes">
        {recipes.map((recipe,index)=>{
          return <Recipe 
                    key={index} 
                    calories={recipe.recipe.calories} 
                    title={recipe.recipe.label} 
                    image={recipe.recipe.image}
                    ingredients={recipe.recipe.ingredients}
                 />;
        })}
        </div>

      </div>
    );
 
}

export default App;
