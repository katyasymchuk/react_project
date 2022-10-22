
import './App.css';

import {MoviesPage} from "./pages";

import {Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts";
import {MovieInfo} from "./components/MovieInfo/MovieInfo";
import {GenrePage} from "./pages/GenrePage/GenrePage";
import {createContext, useState} from "react";
import ReactSwitch from "react-switch";
import SearchMovies from "./components/SearchMovies/SearchMovies";


function App() {

    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light"));
    };

    const ThemeContext =createContext(null)

    return (
        <div>
            <ThemeContext.Provider value={{theme, toggleTheme}}>
                <div className="App" id={theme}>

                    <Routes>
                        <Route path={'/'} element={<MainLayout/>}>
                            <Route path={'/discover/movie'} element={<MoviesPage/>}/>
                            {/*<Route path={`/discover/movie/with_genres=/:id`} element={<FindGenre/>}/>*/}
                            <Route path={`/movie/:id`} element={<MovieInfo/>}/>
                            <Route path={`/genre/movie/list`} element={<GenrePage/>}/>
                            <Route path={`/search/movie?query`} element={<SearchMovies/>}/>


                        </Route>
                    </Routes>
                    <div className="switch">
                        <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
                        <ReactSwitch onChange={toggleTheme} checked={theme === "dark"}/>
                    </div>
                </div>
            </ThemeContext.Provider>

        </div>
    );
}

export default App;
