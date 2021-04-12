import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({ 
    // modal: {
    //     display: "flex",
    //     flexDirection: "column",
    //     height: "100%",
    //     width: "100%",
    //     backgroundColor: "rgba(201, 191, 191, 0.568)",
    //     top: 0,
    //     left: 0,
    //     alignItems: "center",
    //     justifyContent: "center",
    //     transition: "0.5s",
    //   },  
    closeButton: {
        top: 43,
        left: 268,
        zIndex: 2,
        backgroundColor: "red",
        color: "white",
      }
}));

export default useStyles 