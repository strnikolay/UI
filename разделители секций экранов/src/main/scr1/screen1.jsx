import "./screen1.css"


function MainFirstScreen () {
  const store = React.useContext(Context)
  const [state, setState] = React.useState()


  return(
  <div className="screen-1">
    <div className="screen-1-wraper">
    <div class="one">
    <section class="section section-white">
        Светлая секция с темным нижним разделителем
    </section>    
    <section class="section section-color">
        Темная секция со светлым нижним разделителем
    </section>
    <section class="section section-no">
        Светлая секция без разделителя
    </section>
 </div>   
    
    </div>
  </div>
)}

export default MainFirstScreen;

 