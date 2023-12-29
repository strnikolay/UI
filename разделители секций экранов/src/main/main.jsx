import React from "react";

import PoligonScreenSeparator from "./PoligonScreenSeparator/PoligonScreenSeparator"
//import MainFirstScreen from "./scr1/screen1";
import MainSecondScreen from "./scr2/screen2";
import MainThirdScreen from "./scr3/screen3";
import MainScreen4 from "./scr4/screen4";



function Main () {

    return(    
        <>
            <PoligonScreenSeparator />
            <MainSecondScreen/>
            <MainThirdScreen/>
            <MainScreen4 />
        </>
    )
}

export default Main; 