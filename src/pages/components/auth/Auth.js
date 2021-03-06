import React from 'react';
import {useLocation,useHistory} from 'react-router-dom';
import {Button, ButtonBase, Divider, Grid, Typography} from "@material-ui/core";
import {
    toggleLoginModal,
    toggleValidationCodeModal,
    useLayoutDispatch,
    useLayoutState
} from "../../../context/LayoutContext";
import Modal from "@material-ui/core/Modal";
import CloseIcon from "@material-ui/icons/Close";
import useStyle from "./styles";
import {loginApi, sendVerifyCodeApi} from "../../../api/api-users";
import MyDivar from "../../myDivar/MyDivar";
import {toast} from "react-toastify";

const Auth = () => {
    const classes= useStyle();
    const layoutDispatch = useLayoutDispatch();
    const {loginModalOpen}=useLayoutState();
    const inputPhoneNumber = React.useRef();
    const inputValidationCode = React.useRef();
    const {validationCodeModalOpen}= useLayoutState();
    const location = useLocation();
    const history =useHistory();
    let value = '';

    if(location.state.referrer === "/my-divar/my-posts") {
         value = 0;
    }
    else if(location.state.referrer === "/my-divar/my-notes")
    {
         value = 3;
    }

    const closeModals= () => {
        toggleValidationCodeModal(layoutDispatch);
        toggleLoginModal(layoutDispatch)
    }
    const validatePhoneNumber = (inputText) => {
        const phoneNumber = /09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}/;
        if(inputText.match(phoneNumber)) {
            return true;
        }
        else {
            return false;
        }
    }
    const sendVerifyCode = () => {
        const phoneNumber = inputPhoneNumber.current.value;
       if(!validatePhoneNumber(phoneNumber))
           return toast.error(".لطفا یک شماره موبایل معتبر وارد نمایید");
        const user = {
            "phoneNumber" : phoneNumber
        }
        sendVerifyCodeApi(user,(isOk,data) => {
            if(!isOk)
                return toast.error(".لطفا یک شماره موبایل معتبر وارد نمایید");
            toggleValidationCodeModal(layoutDispatch);
            return toast.success(".کد ارسال شد");
        });
    }
    const login = () => {
        const validationCode = inputValidationCode.current.value;
        const user = {
            "code": validationCode,
        };
        loginApi(user, (isOk,data) => {
            if (!isOk)
                return toast.error(".کد تایید معتبر نیست");
            localStorage.setItem("phoneNumber",data.data["phoneNumber"]);
            localStorage.setItem("id",data.data["_id"]);
            localStorage.setItem("x-auth-token",data.headers["x-auth-token"]);
            history.push(location.state.referrer)
            return toast.success(".شما با موفقیت وارد شدید");
        });

    };
    const handleKeyDown = (event,submitFunc) => {
        if (event.key === 'Enter') {
            submitFunc();
            event.preventDefault();
        }
    };
    const handleOnChangePhone  = (event) => {
        if (inputPhoneNumber.current.value.length === 11) {
            sendVerifyCode();
            event.preventDefault();
        }
    };
    const handleOnChangeCode  = (event) => {
        if (inputValidationCode.current.value.length === 6) {
            login();
            event.preventDefault();
        }
    };
    const showModalText = () => {
        if(inputPhoneNumber.current)
        {
            return <Grid item className={classes.modalBodyText}>
                <p>کد پیامک‌شده به شمارۀ {inputPhoneNumber.current.value} را وارد کنید.</p>
            </Grid>
        }
    }

    return (
        <div className={classes.root}>
            <MyDivar value={value}/>
            <Grid container direction={"column"} className={classes.loginMessage} justifyContent={"center"} alignItems={"center"}>
                <Typography>برای مشاهده و مدیریت آگهی&zwnj;ها، وارد حساب کاربری خود شوید.</Typography>
                <Button variant={"contained"} color={"primary"}  className={classes.loginBtn}
                        onClick={()=>{toggleLoginModal(layoutDispatch)}}>ورود به حساب کاربری</Button>
                <Modal
                    className={classes.modal}
                    open={loginModalOpen}
                    onClose={() => {toggleLoginModal(layoutDispatch)}}
                >
                    <Grid container direction={"column"} className={classes.paper}>
                        <Grid container item direction={"row"} className={classes.modalHeader}>
                            <Grid item className={classes.modalTitle}>ورود به حساب کاربری</Grid>
                            <Grid item>
                                <ButtonBase onClick={() => {toggleLoginModal(layoutDispatch)}}>
                                    <CloseIcon fontWeight={600}/>
                                </ButtonBase>
                            </Grid>
                        </Grid>
                        <Divider orientation={"horizontal"} className={classes.divider}/>
                        <Grid item container direction={"column"} className={classes.modalContent}>
                            <Grid item container direction={"column"} className={classes.modalBody}>
                                <Grid item className={classes.modalBodyTitle}>
                                    <p>شمارهٔ موبایل خود را وارد کنید</p>
                                </Grid>
                                <Grid item className={classes.modalBodyText}>
                                    <p>برای ادامهٔ کار لازم است که وارد حساب خود شوید. لطفاً شمارهٔ&zwnj; موبایل خود را وارد کنید. کد تأیید به این شماره پیامک خواهد شد.</p>
                                </Grid>
                                <Grid item className={classes.phoneNumber} >
                                    <input type={"tel"} inputMode={"numeric"}
                                           ref={inputPhoneNumber} placeholder={"شمارهٔ موبایل"}
                                           className={classes.phoneInput}
                                           onKeyDown={(event) => {handleKeyDown(event,sendVerifyCode)}}
                                           onChange={(event) => {handleOnChangePhone(event,sendVerifyCode)}}
                                    />
                                    <p className={classes.preNumber}>+۹۸</p>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Divider orientation={"horizontal"} className={classes.divider}/>
                        <Grid item container direction={"column"} className={classes.modalFooter}>
                            <Button variant={"contained"} color={"primary"}  className={classes.validationCodeBtn} onClick={sendVerifyCode}>درخواست کد تأیید</Button>
                        </Grid>
                    </Grid>
                </Modal>

                <Modal
                    className={classes.modal}
                    open={validationCodeModalOpen}
                    onClose={() => {toggleValidationCodeModal(layoutDispatch)}}
                >
                    <Grid container direction={"column"} className={classes.paper}>
                        <Grid container item direction={"row"} className={classes.modalHeader}>
                            <Grid item className={classes.modalTitle}>ورود به حساب کاربری</Grid>
                            <Grid item>
                                <ButtonBase onClick={closeModals} >
                                    <CloseIcon fontWeight={600}/>
                                </ButtonBase>
                            </Grid>
                        </Grid>
                        <Divider orientation={"horizontal"} className={classes.divider}/>
                        <Grid item container direction={"column"} className={classes.modalContent}>
                            <Grid item container direction={"column"} className={classes.modalBody}>
                                <Grid item className={classes.modalBodyTitle}>
                                    <p>کد تأیید را وارد کنید</p>
                                </Grid>
                                {showModalText()}
                                <Grid item className={classes.phoneNumber} style={{paddingTop: '1rem'}}>
                                    <input inputMode={"numeric"} ref={inputValidationCode} placeholder={"کد تأیید ۶ رقمی"}
                                           onKeyDown={(event) => {handleKeyDown(event,login)}}
                                           onChange={(event) => {handleOnChangeCode(event,sendVerifyCode)}}
                                           className={classes.phoneInput}/>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Divider orientation={"horizontal"} className={classes.divider}/>
                        <Grid item container direction={"column"} className={classes.modalFooter}>
                            <Button variant={"contained"} color={"primary"}  className={classes.validationCodeBtn} onClick={login}>ورود</Button>
                        </Grid>
                    </Grid>
                </Modal>
            </Grid>
        </div>
    );
};

export default Auth;