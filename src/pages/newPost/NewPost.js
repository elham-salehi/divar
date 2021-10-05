import React, {useEffect, useRef, useState} from 'react';
import {Button, Grid, NativeSelect, Typography} from "@material-ui/core";
import useStyle from "./styles";
import FormControl from "@material-ui/core/FormControl";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import {Link} from "react-router-dom";
import classnames from "classnames";
import ImageIcon from '@material-ui/icons/Image';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import {newPostRequestApi} from "../../api/api-posts";
import {
    getAllCities,
    updatePostsByCity,
    useLayoutState,
    useLayoutDispatch,
    setIsLoading, setCategories,
} from "../../context/LayoutContext";
import {getAllCategoriesApi} from "../../api/api-categories";
import CityAutoComplete from "../components/cityAutoComplete/CityAutoComplete";

const NewPost = () => {

    const classes = useStyle();
    const layoutDispatch= useLayoutDispatch();
    const inputRefs = useRef([]);
    const inputImg = useRef([]);
    const {categories}= useLayoutState();
    const [category, setCategory] = useState('');
    const [files, setFiles] = useState([]);
    const [fileUrls, setFileUrls] = useState([]);
    const filesLength = files.length;
    const {selectedCity} = useLayoutState();
    const {autoCompleteSelectedCity} = useLayoutState();



    useEffect(() => {
        setIsLoading(layoutDispatch,true);
        getAllCategoriesApi((isOk, data) => {
            if (!isOk)
                alert(data.message);
            else {
                setCategories(layoutDispatch,data);
                setIsLoading(layoutDispatch, false);
            }
            ;

        });
        inputRefs.current = [0, 0, 0, 0, 0, 0].map(
            (ref, index) => inputRefs.current[index] = React.createRef()
        );
        if (inputImg.current.length !== filesLength) {
            // add or remove refs
            inputImg.current = Array(filesLength).fill().map((_, i) => files[i] || React.createRef());
        }
    }, [layoutDispatch,filesLength,files]);

    useEffect(() => {
        isTehran()
    },[autoCompleteSelectedCity])

    const sendPost = () => {
        setIsLoading(layoutDispatch,true)
        let formData = new FormData();

        const title = inputRefs.current[0].current.value;
        const desc = inputRefs.current[1].current.value;
        const price = inputRefs.current[2].current.value;

        let dist = 'i';
        if (isTehran()) {
            dist = inputRefs.current[4].current.value;
        }

        const images = inputImg.current.map(image => image.file);
        const cat = category;
        const cit = inputRefs.current[3].current.value;

        formData.append("title", title);
        formData.append("description", desc);
        formData.append("price", price);
        formData.append("city", cit);
        formData.append("district", dist);
        formData.append("category", cat);
        for (let i = 0; i < filesLength; i++) {
            formData.append('images', images[i])

        }


        newPostRequestApi(formData, (isOk, data) => {
            if (!isOk) {
                return alert(data);
            }
            else {
                updatePostsByCity(layoutDispatch, selectedCity, (done) => {
                    if (done) {
                        setIsLoading(layoutDispatch,false);
                    }
                })
            }
        })

    };
    const selectImg = () => {
        document.getElementById("file").click();

    }
    const handleUpload = e => {
        let newState = [];
        let newUrlState = [];

        for (let i = 0; i < e.target.files.length; i++) {
            let file = e.target.files[i];
            let url = URL.createObjectURL(file);
            newState = [...newState, {file}];
            newUrlState = [...newUrlState, {url}];
        }
        newState = [...files, ...newState];
        newUrlState = [...fileUrls, ...newUrlState];
        setFiles(newState);
        setFileUrls(newUrlState);
    };
    const handleChangeCategory = (event) => {
        setCategory(event.target.value)
    }


    const isTehran = () => {
        if ( (!autoCompleteSelectedCity && selectedCity === "تهران" ) || (autoCompleteSelectedCity === selectedCity && selectedCity === "تهران"))
            return (<div>
                    <Typography className={classes.label}>محدوده آگهی</Typography>
                    <input className={classes.input} ref={inputRefs.current[4]}/>
                </div>
            )
        else
        if (autoCompleteSelectedCity !== selectedCity && autoCompleteSelectedCity === "تهران")
            return (<div>
                    <Typography className={classes.label}>محدوده آگهی</Typography>
                    <input className={classes.input} ref={inputRefs.current[4]}/>
                </div>
            )
    };

    const showImagePath = () => {
        let indents = [];
        for (let i = 0; i < filesLength; i++) {

            indents.push(<Grid item className={classes.imageUploaderPreview}
                               style={{backgroundImage: `url(${fileUrls[i].url})`}}>
            </Grid>)
        }
        return indents;
    }
    return (
        <Grid container direction={"column"} className={classes.newPost} justifyContent={"space-between"}>
            <h1 className={classes.title}>ثبت آگهی</h1>
            <Typography className={classes.label}>شهر</Typography>
            <CityAutoComplete props={inputRefs.current[3]}/>
            {isTehran()}

            <Typography className={classes.label}>عکس آگهی</Typography>
            <Grid item container direction={"row"} className={classes.imageUploader}>
                {showImagePath()}


                <Grid item className={classes.imageUploaderItem} onClick={selectImg}>
                    <input type={'file'} id="file" accept="image/*" multiple ref={inputImg} style={{display: 'none'}}
                           onChange={handleUpload}/>
                    <img src={"/images/download.svg"} alt={"upload"} className={classes.imageUploaderBorder}/>
                    <ImageIcon className={classnames(classes.imageUploaderIcon, classes.imageIcon)}/>
                    <AddCircleIcon className={classnames(classes.imageUploaderIcon, classes.addCircleIcon)}/>

                </Grid>
            </Grid>
            <Typography className={classes.label}>دسته بندی</Typography>
            <FormControl className={classes.margin} style={{width: '100%'}}>
                <NativeSelect
                    id="selectCategory"
                    variant={"standard"}
                    value={category}
                    onChange={handleChangeCategory}
                    ref={inputRefs.current[5]}
                >
                    {categories.map(item => (<option value={item.name}>{item.name}</option>))}
                </NativeSelect>
            </FormControl>
            <Typography className={classes.label}>قیمت</Typography>
            <input className={classes.input} ref={inputRefs.current[2]}/>
            <Typography className={classes.label}>عنوان آگهی</Typography>
            <Typography className={classes.helpMessage}>در عنوان آگهی به موارد مهم و چشمگیر اشاره کنید.</Typography>
            <input className={classes.input} ref={inputRefs.current[0]}/>
            <Typography className={classes.label}>توضیحات آگهی</Typography>
            <Typography className={classes.helpMessage}>جزئیات و نکات قابل توجه آگهی خود را کامل و دقیق بنویسید. درج
                شماره موبایل در متن آگهی مجاز نیست .</Typography>
            <TextareaAutosize className={classes.descriptionArea} ref={inputRefs.current[1]}/>
            <Grid item container direction={"row"} className={classes.submitBtn}>
                <Grid item className={classes.btnContainer}>
                    <Link to={"/"}>
                        <Button variant={"outlined"}
                                className={classnames(classes.button, classes.cancelBtn)}>انصراف</Button>
                    </Link>
                </Grid>
                <Grid item className={classes.btnContainer}>
                    <Link to={"/" + selectedCity}>
                        <Button variant={"contained"} color={"primary"} className={classes.button} onClick={sendPost}>ارسال
                            آگهی</Button>
                    </Link>
                </Grid>

            </Grid>
        </Grid>
    );
};

export default NewPost;