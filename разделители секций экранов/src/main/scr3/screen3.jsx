import "./screen3.css"
import upvector from "./img/upvector2.svg"
import downvector from "./img/downvector2.svg"

function MainThirdScreen () {

return(
  
  <div className="screen3">
    <div className="tree">
    <section className="section section-white-t">
        Светлая секция
    </section>    
    <div className="separator-color">
        <img src={upvector} alt="" srcset=""/>
    </div>
    <section className="section section-color">
        Темная секция    
    </section>    
    <div className="separator-white">
        <img src={downvector} alt="" srcset=""/>
    </div>
    <section className="section section-white-b">
        Светлая секция
    </section>

    </div>
  </div>

)}

export default MainThirdScreen;   
