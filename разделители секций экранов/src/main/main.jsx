import React from "react";

import {Header} from "../../components/header/header"
import MainFirstScreen from "./scr1/screen1";
import MainSecondScreen from "./scr2/screen2";
import MainThirdScreen from "./scr3/screen3";
import Footer from "../../components/footer/footer";
import { Context } from '../..';




function Main () {
    const store = React.useContext(Context)
    const [state, setState] = React.useState()

    React.useEffect(() =>{

    }, [])

    return(    
        <>
            <Header/>
            <MainFirstScreen/>
            <MainSecondScreen/>
            <MainThirdScreen/>
            <Footer/>
        </>
    )
}

export default Main; 