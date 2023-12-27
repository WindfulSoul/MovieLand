import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

import './App.css';
import SearchIcon from './search.svg';

const API_URL = 'https://www.omdbapi.com?apikey=e512fcf8';

const App = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [movies, setMovies] = useState([]);

    useEffect(() => {

        searchMovies("Spiderman");
    }, []);

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    
    }



    return (
        <div className= "app">
            <h1>Find Movies</h1>
            <div className = "search">
            <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
            src={SearchIcon}
            alt="Search Icon"
            onClick={() => searchMovies(searchTerm)}
            />
            </div>
            {
                movies?.length > 0
                ? (
                <div className="container">
                    {movies.map((movie) => (
                    <MovieCard movie={movie}/>    
                   ))}  
                </div>
                ) : (
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>

                )
            }
        </div>
    );
}

export default App;