import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "styled-components";
import Layout from "./components/Layout/Layout";
import Routes from "./styles/Routes";
import { GlobalStyle } from "./styles/GlobalStyles.jsx"
export const ThemeContext = React.createContext(null);
import { darkTheme, lightTheme } from "./styles/Theme.jsx";
import { Route } from "react-router-dom";
// import CreatePost from "../blog/Create-post.jsx";
// import AllPosts from "./blog/all-post.jsx";

const App = () => {
    const [theme, setTheme] = useState("light");
    const themeStyle = theme === "light" ? lightTheme : darkTheme;

    return (
        <ThemeContext.Provider value={{ setTheme, theme }}>
            <ThemeProvider theme={themeStyle}>
                <GlobalStyle />
                <Helmet>
                    <title>Sidebar - Code Focus</title>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
                        rel="stylesheet"
                    />
                </Helmet>
                <>
                    <Layout>
                        <Routes />
                    </Layout>
                </>
            {/* <Routes>
                <Route path='creatapost' element={<CreatePost />} />
                <Route path='allPosts' element={<AllPosts />} />
            </Routes> */}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};

export default App;