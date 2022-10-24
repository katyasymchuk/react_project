import {Navigate, Route, Routes} from "react-router-dom";
import {createContext, useState} from "react";
import ReactSwitch from "react-switch";


import './App.css';
import {GenrePage, MoviesPage} from "./pages";
import {MainLayout} from "./layouts";
import {FindGenre, MovieInfo} from "./components";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";


function App() {

    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light"));
    };

    const ThemeContext = createContext(null)

    return (
        <div>
            <ThemeContext.Provider value={{theme, toggleTheme}}>
                <div className="App" id={theme}>

                    <Routes>
                        <Route path={'/'} element={<MainLayout/>}>
                            <Route index element={<Navigate to={'home'}/>}/>
                            <Route path={'home'} element={<HomePage/>}/>
                            <Route path={'/discover/movie'} element={<MoviesPage/>}/>
                            <Route path={`/discover/movie/with_genres=:id`} element={<FindGenre/>}/>
                            <Route path={`/movie/:id`} element={<MovieInfo/>}/>
                            <Route path={`/genre/movie/list`} element={<GenrePage/>}/>
                            <Route path={`/search/movie`} element={<MoviesPage/>}/>
                            <Route path={`*`} element={<NotFoundPage/>}/>
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
