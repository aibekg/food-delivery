import React, {FC} from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import CountryPage from "./pages/CountryPage";
import DetailsPage from "./pages/DetailsPage";
import SearchPage from "./pages/SearchPage";
import NavbarComponent from "./components/NavbarComponent";
import CategoryPage from "./pages/CategoryPage";
import './App.css'
const App: FC = () => {
    return (
        <>
            <NavbarComponent/>
            <Routes>
                <Route path={'/'} element={<HomePage/>}/>
                <Route path={'/category/:title'} element={<CategoryPage/>}/>
                <Route path={'/country/:title'} element={<CountryPage/>}/>
                <Route path={'/details/:id'} element={<DetailsPage/>}/>
                <Route path={'/search/:text'} element={<SearchPage/>}/>
            </Routes>
        </>
    );
};

export default App;
