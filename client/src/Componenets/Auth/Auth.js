import { useState } from "react";

import { SingIn } from "./SingIn/SingIn";
import { SingUp } from "./SingUp/SingUp";



export const Auth = ({ showSingHandler }) => {

    const [ singInOrUp, setSingInOrUp ] = useState('sing-in');


    function viewHandler(data) {

        if (data === 'sing-in') {
            setSingInOrUp('sing-in');
        } else if (data === 'sing-up') {
            setSingInOrUp('sing-up');
        }
    }

    return (
        <>
            {singInOrUp === 'sing-in' 
            ? <SingIn showSingHandler={ showSingHandler } viewHandler={ viewHandler } /> 
            : <SingUp showSingHandler={ showSingHandler } viewHandler={ viewHandler } />}

        </>
    )
}