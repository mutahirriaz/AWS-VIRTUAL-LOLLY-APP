import React from "react";
import Lolly from '../components/lolly';
import Header from '../components/header/header';
import {navigate} from 'gatsby';
import style from '../styles/main.module.css';

export default function Home() {
  return (
    <div className={style.container} >

     <div  >
        <Header />
     </div>

      <div className={style.lolly_main_div} >
      <div>
      <Lolly  fillLollyTop={'#e97393'} fillLollyMiddle={'#d23a61'} fillLollyBottom={'#ba1260'} />
      </div>

      <div>
      <Lolly  fillLollyTop={'#ed275c'} fillLollyMiddle={'#f47048'} fillLollyBottom={'#f4c64e'} />
      </div>

      <div>
      <Lolly  fillLollyTop={'#97e666'} fillLollyMiddle={'#8dcb4c'} fillLollyBottom={'#a8d039'} />
      </div>  
      </div>

      <div className={style.send_lolly_btn_div}>
        <button className={style.send_lolly_btn} onClick={()=> {
          navigate("/createNew")
        }} >Make a new lolly to send to a friend</button>
      </div>

    </div>
  )
}
