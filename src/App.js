import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/home";
import Pricing from "./pages/pricing";
import AboutUs from "./pages/about-us";
import Blogs from "./pages/blogs";
import PageNotFound from "./pages/404";
import SdeAiEngineer from "./pages/products/sde-ai-engineer";
import FeeAiEngineer from "./pages/products/fee-ai-engineer";
import SweEngineer from "./pages/products/swe-engineer";
import SreEngineer from "./pages/products/sre-engineer";
import Demo from "./pages/demo";
import WaitList from "./pages/waitlist";
import Beta from "./pages/beta";
import Preview from "./pages/preview";

const App = () => {
    return (
        <Router>
            <Routes>
                {/* Public Routes */}
                <Route
                    path="/"
                    element={
                        <Home>

                        </Home>
                    }
                />
                <Route
                    path="/about-us"
                    element={
                        <AboutUs>
                        </AboutUs>
                    }
                />
                <Route
                    path="/products/sde-engineer"
                    element={
                        <SdeAiEngineer/>
                    }
                />
                <Route
                    path="/products/fee-engineer"
                    element={
                        <FeeAiEngineer/>
                    }
                />
                <Route
                    path="/products/swe-engineer"
                    element={
                        <SweEngineer/>
                    }
                />
                <Route
                    path="/products/sre-engineer"
                    element={
                        <SreEngineer/>
                    }
                />
                <Route
                    path="/pricing"
                    element={
                        <Pricing/>
                    }
                />
                <Route
                    path="/blog"
                    element={
                        <Blogs/>
                    }
                />
                <Route
                    path="/demo"
                    element={
                        <Demo/>
                    }
                />
                <Route
                    path="/get-started"
                    element={
                        <WaitList/>
                    }
                />
                <Route
                    path="/beta-testing"
                    element={
                        <Beta/>
                    }
                />
                <Route
                    path="/customer-preview"
                    element={
                        <Preview/>
                    }
                />

                {/* 404 Route */}
                <Route path="*" element={<PageNotFound/>}/>
            </Routes>
        </Router>
    );
};

export default App;