"use strict";
import React, {useEffect, useRef, useState} from 'react';
import {Button, Grid, InputLabel, NativeSelect, Typography} from "@material-ui/core";
import useStyle from "./styles";
import FormControl from "@material-ui/core/FormControl";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import {Link} from "react-router-dom";
import classnames from "classnames";
import {getAllCities} from "../../api/api-cities";
import ImageIcon from '@material-ui/icons/Image';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import {newPostRequest} from "../../api/api-posts";
import {useLayoutState}  from "../../context/LayoutContext";

const NewPost = () => {

    const classes= useStyle();
    const inputRefs=React.useRef([]);
    const inputImg=React.useRef([]);
    const inputTest=React.useRef();
    const[cities,setCities]= useState([]);
    const [city, setCity] = React.useState('');
    const [files, setFiles] = useState([]);
    const filesLength = files.length;
    const {selectedCity}=useLayoutState();


    useEffect(()=>{
        getAllCities((isOk,data) => {
            if(!isOk)
                alert(data.message);
            else setCities(data);

        });
        inputRefs.current = [0,0,0,0,0,0].map(
            (ref, index) =>   inputRefs.current[index] = React.createRef()
        );
        if (inputImg.current.length !== filesLength) {
            // add or remove refs
            inputImg.current = Array(filesLength).fill().map((_, i) => files[i].url || React.createRef());
            console.log("render:",inputImg.current,inputImg.current.length,filesLength)
        }
    },[files]);
    const sendPost= () => {
        const title = inputRefs.current[0].current.value;
        const desc = inputRefs.current[1].current.value;

        const price = inputRefs.current[2].current.value;
        const cit = city;
        let dist;
        if( isTehran()) {
             dist = inputRefs.current[4].current.value;
        }


       const images=inputImg.current;

        const cat = inputRefs.current[5].current.value;

       const data = {
           "id": Math.floor(Math.random()*1000),
           "title": title,
           "description": desc,
           "price": price,
           "postTime": 2,
           "city": cit,
           "district": dist,
            "image": images,
           "category": cat
       }
       newPostRequest(data,(isOk) =>{
           if (!isOk)
              return  alert("cant send!");
           return  alert("done");
       })


    };
    const selectImg = () => {
        inputTest.current.click();

    }
    const handleUpload = e => {
        let newState = [];
        for (let i = 0; i < e.target.files.length; i++) {
            let file = e.target.files[i];
            let url = URL.createObjectURL(file);
            newState = [...newState, { url }];
        }
        newState=[...files,...newState];
        setFiles(newState);
      };

    const handleChange = (event) => {
        setCity(event.target.value);
    };


    const isTehran= () => {
        if(city==="تهران")
            return (<div>
                <Typography className={classes.titleLabel}>محدوده آگهی</Typography>
                <input className={classes.titleInput} ref={inputRefs.current[4]}/>
            </div>
            )};

    const showImagePath = () => {
        let indents = [];
        for(let i = 0; i < filesLength; i++) {

            indents.push(<Grid item className={classes.imageUploaderPreview}
                               style={{backgroundImage: `url(${files[i].url})`}}>
            </Grid>)
        }
        return indents;
}

    return (
        <Grid container direction={"column"} className={classes.root} justify={"space-between"}>
            <h1 className={classes.title}>ثبت آگهی</h1>
            <Typography className={classes.titleLabel}>شهر</Typography>
            <FormControl className={classes.margin} style={{width:'100%'}}>
                <NativeSelect
                    id="selectCity"
                    variant={"standard"}
                    value={city}
                    onChange={handleChange}
                    ref={inputRefs.current[3]}
                >
                    {cities.map(item => ( <option value={item.name}>{item.name}</option>))}
                    <option aria-label="تهران" value="تهران" />
                </NativeSelect>
            </FormControl>
            { isTehran() }

            <Typography className={classes.titleLabel}>عکس آگهی</Typography>
            <Grid item container direction={"row"} className={classes.imageUploader}>
                {showImagePath()}


                <Grid item className={classes.imageUploaderItem} onClick={selectImg}>
                    <input type={'file'} accept="image/*" multiple ref={inputImg,inputTest}  style={{display:'none'}} onChange={handleUpload} />
                    <img src={"/images/download.svg"} className={classes.imageUploaderBorder}/>
                    <ImageIcon className={classnames(classes.imageUploaderIcon,classes.imageIcon)}/>
                    <AddCircleIcon className={classnames(classes.imageUploaderIcon,classes.addCircleIcon)}/>

                </Grid>
            </Grid>
            <Typography className={classes.titleLabel}>دسته بندی</Typography>
            <input className={classes.titleInput} ref={inputRefs.current[5]}/>
            <Typography className={classes.titleLabel}>قیمت</Typography>
            <input className={classes.titleInput} ref={inputRefs.current[2]}/>
            <Typography className={classes.titleLabel}>عنوان آگهی</Typography>
            <Typography  className={classes.helpMessage}>در عنوان آگهی به موارد مهم و چشمگیر اشاره کنید.</Typography>
            <input  className={classes.titleInput} ref={inputRefs.current[0]}/>
            <Typography className={classes.titleLabel}>توضیحات آگهی</Typography>
            <Typography className={classes.helpMessage}>جزئیات و نکات قابل توجه آگهی خود را کامل و دقیق بنویسید. درج شماره موبایل در متن آگهی مجاز نیست .</Typography>
            <TextareaAutosize className={classes.descriptionArea} ref={inputRefs.current[1]} />
            <Grid item container direction={"row"} className={classes.submitBtn} >
                <Grid item className={classes.btnContainer}>
                    <Link to={"/"}>
                        <Button variant={"outlined"} color={"white"}  className={classnames(classes.button,classes.cancelBtn)}>انصراف</Button>
                    </Link>
                </Grid>
                <Grid item className={classes.btnContainer}>
                    <Link to={"/cities/"+selectedCity} >
                        <Button variant={"contained"} color={"primary"} className={classes.button} onClick={sendPost} >ارسال آگهی</Button>
                    </Link>
                </Grid>

            </Grid>
        </Grid>
    );
};

export default NewPost;