import React from "react";
import { Route, Routes as Routers } from "react-router-dom";
import HomePage from "../components/pages/HomePage.jsx";
import About from "../components/pages/About.jsx";
import Skills from "../components/pages/Skills.jsx";
import Contact from "../components/pages/Contact.jsx";
import Admin from "../admin/Admin.jsx";
import Work from "../admin/Work.jsx";
import CreatePost from "../admin/Createpost.jsx";
import AllPost from "../admin/AllPost.jsx";

const Routes = () => {
    return (
        <Routers>
            <Route exact path="/" element={<HomePage />} />

            <Route exact path="/statistics" element={<About />} />

            <Route exact path="/customers" element={<Skills />} />

            <Route exact path="/diagrams" element={<Contact />} />

            <Route exact path="/work" element={<Work />} />

            <Route path="admin" element={<Admin />}>
                <Route path="createpost" element={<CreatePost />} />
                <Route path="allpost" element={<AllPost/>}/>
            </Route>
        </Routers>
    );
};

export default Routes;