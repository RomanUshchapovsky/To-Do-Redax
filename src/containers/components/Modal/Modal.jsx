import React, { useRef } from "react";
import ReactDOM from "react-dom";
import classnames from 'classnames';

import classes from "./Modal.module.scss";
import useOutsideClick from "../../../shared/useOutsideClick/useOutsideClick";


const Modal = ({ active, setActive, children }) => {

    const ref = useRef();

    useOutsideClick(ref, () => {
        if (active) setActive(false);
    });

    return active ? ReactDOM.createPortal(

        <div className={classnames(classes.modal, { active })} >
            <div>
                <button className={classnames(classes.closeButton)} onClick={() => setActive(false)}>X</button>
            </div>
            <div ref={ref} >
                {children}
            </div>
        </div>, document.getElementById('modal-root')) : null
}
export default Modal;