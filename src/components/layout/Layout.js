import React from 'react';
import useStyle from './styles';
import Header from "../header/Header";


const Layout = (props) => {
    const classes = useStyle();
    return (
        <div className={classes.root}>
            <Header/>
            <div className={classes.container}>
                {props.children}
            </div>
        </div>
    );
};

export default Layout;