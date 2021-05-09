import React from 'react';
import Layout from "./layout/Layout";
import PostSingle from "../pages/postSingle/PostSingle";
import PostByCategory from "../pages/postsByCategory/PostByCategory";
import PostByCity from "../pages/postByCity/PostByCity";
import Home from "../pages/home/Home";
import Page404 from "../pages/page404/Page404";
import {BrowserRouter,Route,Switch} from "react-router-dom";
import {LayoutProvider} from "../context/LayoutContext";
import NewPost from "../pages/newPost/NewPost";
import MyDivar from "../pages/myDivar/MyDivar";

const App = () => {
    return (
        <BrowserRouter>
            <Route path={"/"} render={()=> {
                return  <LayoutProvider>
                <Layout>
                    <Switch>
                            <Route exact path={"/categories/:category"} component={PostByCategory}/>
                            <Route exact path={"/posts/:id"} component={PostSingle}/>
                            <Route exact path={"/new"} component={NewPost}/>
                            <Route exact path={"/cities/:city"} component={PostByCity}/>
                            <Route exact path={"/my-divar"} component={MyDivar}/>
                            <Route exact path={"/"} component={Home}/>
                            <Route exact component={Page404}/>
                    </Switch>
                </Layout>
                </LayoutProvider>
            }}/>
        </BrowserRouter>
    );
};

export default App;