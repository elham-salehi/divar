import React from 'react';
import {Button, ButtonBase, Divider, Grid, Link, Tab, Tabs, Typography} from "@material-ui/core";
import useStyle from "../myDivar/styles";
import TabPanel from "../components/tabPanel/TabPanel";
import Modal from "@material-ui/core/Modal";
import {toggleLoginModal,toggleValidationCodeModal,useLayoutDispatch, useLayoutState} from "../../context/LayoutContext";
import CloseIcon from "@material-ui/icons/Close";
import {newUserRequest} from "../../api/api-users";



const MyDivar = () => {
    const classes= useStyle();
    const inputPhoneNumber = React.useRef();
    const inputValidationCode = React.useRef();
    const {loginModalOpen}=useLayoutState();
    const {validationCodeModalOpen}= useLayoutState();
    const layoutDispatch = useLayoutDispatch();
    const [value, setValue] = React.useState(0);
    const closeModals= () => {
        toggleValidationCodeModal(layoutDispatch);
        toggleLoginModal(layoutDispatch)
    };
    const login = () => {
        const phoneNumber = inputPhoneNumber.current.value;
        const validationCode = inputValidationCode.current.value;
        if(validationCode == 111111) {
            const data = {
                "phone": phoneNumber,
            };
            newUserRequest(data, (isOk) => {
                if (!isOk)
                    return alert("cant send!");
                return alert("done");
            });
        }
        else alert("false code");
        toggleValidationCodeModal(layoutDispatch);
        toggleLoginModal(layoutDispatch)
    };
       function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    };
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Grid container direction={"column"} className={classes.root} justify={"space-between"}>
            <Grid position="static" className={classes.tabs}>
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" indicatorColor="primary" textColor="primary">
                        <Tab label="آگهی&zwnj;های من" {...a11yProps(0)} className={classes.tabItem}/>
                        <Tab label="آگهی&zwnj;های نشان شده" {...a11yProps(1)} className={classes.tabItem}/>
                        <Tab label="بازدیدهای اخیر" {...a11yProps(2)} className={classes.tabItem}/>
                        <Tab label="یادداشت&zwnj;های من" {...a11yProps(3)} className={classes.tabItem}/>
                </Tabs>
            </Grid>
            <TabPanel value={value} index={0}>
                <Grid direction={"column"} className={classes.loginMessage} justify={"center"} alignItems={"center"}>
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
                                       <Typography>شمارهٔ موبایل خود را وارد کنید</Typography>
                                   </Grid>
                                   <Grid item className={classes.modalBodyText}>
                                       <Typography>برای ادامهٔ کار لازم است که وارد حساب خود شوید. لطفاً شمارهٔ&zwnj; موبایل خود را وارد کنید. کد تأیید به این شماره پیامک خواهد شد.</Typography>
                                   </Grid>
                                   <Grid item className={classes.phoneNumber}>
                                       <input type={"tel"} inputMode={"numeric"} ref={inputPhoneNumber} placeholder={"شمارهٔ موبایل"} className={classes.phoneInput}/>
                                       <p className={classes.preNumber}>+۹۸</p>
                                   </Grid>
                               </Grid>
                                <Divider orientation={"horizontal"} className={classes.divider}/>
                            </Grid>
                            <Grid item container direction={"column"} className={classes.modalFooter}>
                                    <Button variant={"contained"} color={"primary"}  className={classes.validationCodeBtn} onClick={() => {toggleValidationCodeModal(layoutDispatch)}}>درخواست کد تأیید</Button>
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
                                        <Typography>کد تأیید را وارد کنید</Typography>
                                    </Grid>
                                    <Grid item className={classes.modalBodyText}>
                                        <Typography>کد پیامک‌شده به شمارۀ «000000» را وارد کنید.</Typography>
                                    </Grid>
                                    <Grid item className={classes.phoneNumber}>
                                        <input type={"number"} inputMode={"numeric"} ref={inputValidationCode} placeholder={"کد تأیید ۶ رقمی"} className={classes.phoneInput}/>
                                    </Grid>
                                </Grid>
                                <Divider orientation={"horizontal"} className={classes.divider}/>
                            </Grid>
                            <Grid item container direction={"column"} className={classes.modalFooter}>
                                <Button variant={"contained"} color={"primary"}  className={classes.validationCodeBtn} onClick={login}>ورود</Button>
                            </Grid>
                        </Grid>
                    </Modal>
                </Grid>

            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
            <TabPanel value={value} index={3}>
                <Grid direction={"column"} className={classes.loginMessage} justify={"center"} alignItems={"center"}>
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
                                        <Typography>شمارهٔ موبایل خود را وارد کنید</Typography>
                                    </Grid>
                                    <Grid item className={classes.modalBodyText}>
                                        <Typography>برای ادامهٔ کار لازم است که وارد حساب خود شوید. لطفاً شمارهٔ&zwnj; موبایل خود را وارد کنید. کد تأیید به این شماره پیامک خواهد شد.</Typography>
                                    </Grid>
                                    <Grid item className={classes.phoneNumber}>
                                        <input type={"tel"} inputMode={"numeric"} ref={inputPhoneNumber} placeholder={"شمارهٔ موبایل"} className={classes.phoneInput}/>
                                        <p className={classes.preNumber}>+۹۸</p>
                                    </Grid>
                                </Grid>
                                <Divider orientation={"horizontal"} className={classes.divider}/>
                            </Grid>
                            <Grid item container direction={"column"} className={classes.modalFooter}>
                                <Button variant={"contained"} color={"primary"}  className={classes.validationCodeBtn} onClick={() => {toggleValidationCodeModal(layoutDispatch)}}>درخواست کد تأیید</Button>
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
                                        <Typography>کد تأیید را وارد کنید</Typography>
                                    </Grid>
                                    <Grid item className={classes.modalBodyText}>
                                        <Typography>کد پیامک‌شده به شمارۀ «000000» را وارد کنید.</Typography>
                                    </Grid>
                                    <Grid item className={classes.phoneNumber}>
                                        <input type={"number"} inputMode={"numeric"} ref={inputValidationCode} placeholder={"کد تأیید ۶ رقمی"} className={classes.phoneInput}/>
                                    </Grid>
                                </Grid>
                                <Divider orientation={"horizontal"} className={classes.divider}/>
                            </Grid>
                            <Grid item container direction={"column"} className={classes.modalFooter}>
                                <Button variant={"contained"} color={"primary"}  className={classes.validationCodeBtn} onClick={login}>ورود</Button>
                            </Grid>
                        </Grid>
                    </Modal>
                </Grid>
            </TabPanel>
        </Grid>
    );
};

export default MyDivar;