import {createContext, useState} from "react";
import ReactSwitch from "react-switch";

export default  function Theme() {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light"));
    };

    const ThemeContext =createContext(null)

    return (
        <div>
            <ThemeContext.Provider value={{theme, toggleTheme}}>
                <div className="App" id={theme}>
                    <div className="switch">
                        <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
                        <ReactSwitch onChange={toggleTheme} checked={theme === "dark"}/>
                    </div>
                </div>
            </ThemeContext.Provider>

        </div>
    );
}
