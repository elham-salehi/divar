import React from 'react';
import Layout from "./layout/Layout";
import PostSingle from "../pages/postSingle/PostSingle";
import PostByCategory from "../pages/postsByCategory/PostByCategory";
import PostsByCity from "../pages/postsByCity/PostsByCity";
import Home from "../pages/home/Home";
import Page404 from "../pages/page404/Page404";
import {BrowserRouter, Route, Switch, Redirect, useLocation} from "react-router-dom";
import {LayoutProvider} from "../context/LayoutContext";
import NewPost from "../pages/newPost/NewPost";
import MyPosts from "../pages/components/myPosts/MyPosts";
import RecentSeen from "../pages/components/recentSeen/RecentSeen";
import Bookmarks from "../pages/components/bookmarks/Bookmarks";
import MyNotes from "../pages/components/myNotes/MyNotes";
import useStyle from "../pages/myDivar/styles";
import Grid from "@material-ui/core/Grid";
import Auth from "../pages/components/auth/Auth";
import Chat from "../pages/chat/Chat";
import "react-toastify/dist/ReactToastify.css";
import {ToastContainer} from "react-toastify";



const App = () => {
    const classes = useStyle();
    return (
        <>
            <BrowserRouter>
                <Route path={"/"} render={() => {
                    return <LayoutProvider>
                        <Layout>
                            <Switch>
                                <Route exact path={"/categories/:category"} component={PostByCategory}/>
                                <Route exact path={"/posts/:id"} component={PostSingle}/>
                                <PrivateRoute exact path={"/new"} component={NewPost}/>
                                <Route exact path={"/my-divar"} render={() => <Redirect to="/my-divar/my-posts"/>}/>
                                <PrivateRoute exact path={"/chat/:id"} component={Chat}/>
                                <PrivateRoute exact path={"/chat"} component={Chat}/>
                                <Route exact path={"/:city"} component={PostsByCity}/>
                                <Route exact path={"/"} component={Home}/>
                                <Grid container direction={"column"} className={classes.root} justifyContent={"space-between"}>
                                    <Grid position="static">
                                        <PublicRoute exact path="/my-divar/login" component={Auth}/>
                                        <PrivateRoute exact path="/my-divar/my-posts" component={MyPosts}/>
                                        <Route exact path="/my-divar/bookmarks" component={Bookmarks}/>
                                        <Route exact path="/my-divar/recent-seen" component={RecentSeen}/>
                                        <PrivateRoute exact path="/my-divar/my-notes" component={MyNotes}/>
                                    </Grid>
                                </Grid>
                                <Route exact component={Page404}/>
                            </Switch>
                        </Layout>
                    </LayoutProvider>
                }}/>
        </BrowserRouter>
        <ToastContainer/>
    </>
    );
};
const isLogin = () => !!localStorage.getItem("x-auth-token");

const PublicRoute = ({component, ...props}) => {
    return <Route {...props} render={(props) => {

        if (isLogin()) {
            return <Redirect to={"/my-divar"}/>

        } else {
            return React.createElement(component, props);
        }

    }}/>
};
const PrivateRoute = ({component, ...props}) => {
    const currentLocation = useLocation().pathname;
    return <Route {...props} render={(props) => {
        if (isLogin())
            return React.createElement(component, props);
        else return <Redirect
            to={{
                pathname: "/my-divar/login",
                state: {referrer: currentLocation}
            }}
        />
    }}/>
};


export default App;