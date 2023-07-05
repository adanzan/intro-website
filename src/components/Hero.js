import * as React from "react";
import { useState } from "react";

import styles from "../styles/Hero.module.css";
import portrait from "../resources/images/new_portrait.png";

export default function Hero () {
  //On-hover, On-leave, change the visibility of name 
    // 1 = Anthony
    // 2 = Danzan
    // 0 = None Selected
  const [mouseHover, setMouseHover] = useState(0);

  const OPACITY = 0.25;

  return (
    <div className={styles.Hero}>
      <div className={styles.textSection}>
        <h1>Hi, I'm</h1>
        {/* Reduces opacity of firstName that is not selected */}
        <div className={styles.firstName} onMouseLeave={() => {setMouseHover(0)}}>
          <h1 style={{opacity: mouseHover === 2? OPACITY : 1}}
              onMouseEnter={()=> {setMouseHover(1)}}>Anthony&nbsp;</h1>
          <h1 style={{opacity: mouseHover === 1? OPACITY : 1}}
              onMouseEnter={()=> {setMouseHover(2)}}>Danzan</h1>
        </div>
        <h1>Achit-Erdene</h1>
      </div>
      <img className={styles.image} src={portrait} alt="Me"/>
    </div>
  );
}
