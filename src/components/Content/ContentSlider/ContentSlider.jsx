import React, { useState } from 'react';
import style from './ContentSlider.module.css';

export function ContentSlider({ blocks }) {
  
  const [blockId, setBlockId] = useState(0);

  const move_left = () => {
    const slider = document.getElementById('slider_content')
    slider.scrollLeft -= 100
  }
  const move_right = () => {
    const slider = document.getElementById('slider_content')
    slider.scrollLeft += 100
  }

  return (
    <section className={style.container}>
      <div className={style.leftButton} onClick={()=>{ move_left() }}>
        <i className="fa-solid fa-chevron-left"></i>
      </div>
      <div className={style.content} id='slider_content'>
        {blocks.map((item, i) => {
          return <span key={`Slider_item_${i}`} className={style.contentElement}>{item}</span>
        })}
      </div>
      <div className={style.rightButton} onClick={()=>{ move_right() }}>
        <i className="fa-solid fa-chevron-right"></i>
      </div>
    </section>
  );
}
