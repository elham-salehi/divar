import {makeStyles} from "@material-ui/styles";
const useStyle = makeStyles(theme => ({
        root: {
            backgroundColor: '#fff',
            width:"100%",
            lineHeight:1.5,
            textAlign: "center"
        },
    noPost:{
        padding: "1.75rem 0",
    },
    noPostMessage: {
            fontWeight: 700,
            maxWidth:"max-content",
            marginLeft: "auto",
            marginRight: "auto",

    },
    newPostButton: {
        padding: "1.75rem 0",
        maxWidth:"max-content",
        marginLeft: "auto",
        marginRight: "auto",
    }

    })
);

export default useStyle;