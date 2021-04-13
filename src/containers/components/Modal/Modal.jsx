import React, { useRef } from "react";
import ReactDOM from "react-dom";
import classnames from 'classnames';
import { Button } from "@material-ui/core";

import useStyles from "./styles";
import styles from "./Modal.module.scss";
import useOutsideClick from "../../../shared/useOutsideClick/useOutsideClick";


const Modal = ({ active, setActive, children }) => {
    const classes = useStyles();
    const ref = useRef();
    
    // useOutsideClick(ref, () => {
    //     if (active) setActive(false);
    // });

    return active ? ReactDOM.createPortal(

        <div className={classnames(styles.modal, { active })} >
            <div>
                <Button className={classes.closeButton} onClick={() => setActive(false)}>X</Button>
            </div>
            <div ref={ref} >
                {children}
            </div>
        </div>, document.getElementById('modal-root')) : null
}
export default Modal;