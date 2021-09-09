import {makeStyles} from "@material-ui/styles";
const useStyle = makeStyles({
    chat: {
       border: "1px solid rgba(34,36,38,0.15)",
       width: "80%",
       margin: "16px 10%",
       height: "100%"
    },
    conversationList: {
        width:340,
        flex:1,
        height: 'calc( 100vh - 98px)',
        borderLeft: "1px solid rgba(34,36,38,0.15)",
    },
    messagesContainer: {
        width:737,
        height: 'calc( 100vh - 98px)',
    },
    conversationListHeader : {
        color: "#c00c1a",
        padding: "20px 20px 16px 20px !important",
        fontSize: "16px !important",
        fontWeight: "bold !important",
        lineHeight: "normal !important",
        borderBottom: "1px solid rgba(34,36,38,0.15)",
        minHeight: "64px",
        maxHeight: "64px",
        flexWrap: "nowrap"
    },
    chatSetting : {
        width:30
    },
    chatTitle : {
        flex:1
    },
    conversationListBody: {
        overflowY:"auto",
        overflowX: "hidden",
        height: 404,
        width: '100%',
        borderBottom: "1px solid rgba(34,36,38,0.15)",
    },
    conversationItem:{
        width: "100%",
        height: "101px",
        cursor: "pointer",
        borderBottom: "1px solid rgba(34,36,38,0.15)",
        padding: "8px 8px 8px 16px",
        "&:hover" : {
            backgroundColor: "#daebff",
            border: "solid 1px #a4ceff"
        },
        "&:active" : {
            backgroundColor: "#daebff",
            border: "solid 1px #a4ceff"
        }
    },
    conversationItemActive: {
        backgroundColor: "#daebff",
        border: "solid 1px #a4ceff"

    },
    conversationItemImage:{
        width: "85px",
        height: "85px",
        borderRadius: "4px",
        color: "white",
        marginLeft: "16px",
        backgroundColor: "#c00c1a",
        textAlign: "center",
        position: "relative",
        float: "right"
    },
    conversationItemTitle:{
        textAlign: "right",
        fontSize: "18px",
        fontWeight: "bold",
        lineHeight: "normal",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
    },
    conversationItemContact: {
        textAlign: "right",
        fontSize: "14px",
        lineHeight: "normal",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
    },
    conversationItemSummary: {

    },
    newMessageStatus : {
        cssFloat: "left",
        marginTop: "6px !important",
        marginRight: "4px",
        color: "#c00c1a",
        fontSize: "14px",
        fontWeight: "bold"
    },
    conversationListFooter: {
        flex: '0 1 64px',
    },
    messagesHeader: {
        color: "#c00c1a",
        padding: "13px 20px 0",
        fontSize: "16px",
        fontWeight: "bold",
        borderBottom: "1px solid rgba(34,36,38,0.15)",
        flex: "0 1 64px"
    },
    conversationStatus: {
        fontSize: 12,
        paddingTop: 4,
        color: "#777777",
        whiteSpace: "nowrap",
        overflow: "hidden"
    },
    messagesBody: {
        flex:'1 0 0',
        overflowY:"auto",
        overflowX: "hidden",
        height: "100%",
        width: '100%',
        borderBottom: "1px solid rgba(34,36,38,0.15)",
    },
    messageContainer: {
    },
    message: {
        backgroundColor: '#f5f5f5',
        position: "relative",
        boxShadow: "0 1px 2px 0 rgb(34 36 38 / 15%)",
        margin: "6px 16px",
        padding: "8px 12px",
        borderRadius: "8px",
        fontSize: "16px",
        lineHeight: 1.5,
        clear: 'both',
        maxWidth: "90%",
        whiteSpace: "pre-wrap",
        wordWrap: "break-word",

    },
    receivedMessage: {
        float: "left"
    },
    sendMessage: {
        float: "right",
        backgroundColor: "#f0faff"
    },
    messageText: {

    },
    messageTime: {
        marginTop: "8px",
        cssFloat: "right",
        fontSize: "12px !important",
        fontWeight: "500 !important",
        lineHeight: "1 !important",
        color: "#9b9b9b",
        display: "flex",
    },
    messagesFooter: {
        flex: '0 1 64px',
        minHeight:64,
        padding: "6px 0"
    },
    chatBoxInput: {
        flexGrow: 1,
        fontSize: "16px",
        lineHeight: 1.5,
        minWidth: "0",
        height: "48px",
        resize: "none",
        padding: ".625em 1em",
        marginLeft: "8px",
        direction: "rtl",
        textAlign: "right",
        overflow: "hidden"
    },
    sendIcon: {
        width:50,
        color: "#c00c1a",
    },
    sendIconBtn: {
        color: "#c00c1a",
    },
    attachIcon: {
        width:50
    }


});

export default useStyle;