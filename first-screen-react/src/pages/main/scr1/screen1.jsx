import React from "react";
import "./screen1.scss"
import { Context } from 'index';
import foto1 from "./img/foto1.jpg"
import foto2 from "./img/foto2.jpg"



function MainFirstScreen () {
  //const store = React.useContext(Context)
  //const [state, setState] = React.useState()


  return(
  <>
    <div class="header-content u-pad-lg">
      <div class="left-h-content">
        <h1>
            We Are A Number <span>One Creative Digital</span> Agency Online
        </h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Totam vel aliquid esse, ea nesciunt dolor est dolore dicta itaque dolores 
            illo rerum officiis.
        </p>
        <a href="#" class="btn main-btn cta-btn">get started
            <span class="arrow"><i class="fas fa-chevron-right"></i></span><span></span>
        </a>
      </div>
      <div class="right-h-content">
        <img class="h-img-3" src={foto1} alt="agency img 4" />
        <img class="h-img-2" src={foto2} alt="agency img 3" />
      </div>
    </div>
    <div class="mouse">
      <span></span>
    </div>
    
    </>

)}

export default MainFirstScreen;

 