import React, { useEffect, useRef, useState } from 'react';
import style from './ContentSlider.module.css';

export function ContentSlider({ blocks }) {
  
  const [blockId, setBlockId] = useState(0);

  const [moveIndex, setMoveIndex] = useState(0)
  const [position, setPosition] = useState(0)
  const [translateXStep, setTranslateXStep] = useState(0)
  const cardRef = useRef(null)
  const visibleCount = 2

  useEffect(()=>{
    if (cardRef.current){
      const cardWidth = cardRef.current.clientWidth
      const gap = 50
      setTranslateXStep( cardWidth * visibleCount + gap )
    }
  }, [])

  
  const move_left = () => {
    if (moveIndex > 2) {
      setPosition((prev) => prev + translateXStep);
      setMoveIndex((prev) => prev - 1);
    }
  }
  
  const move_right = () => {
    if (moveIndex <= blocks.length - visibleCount) {
      setPosition((prev) => prev - translateXStep);
      setMoveIndex((prev) => prev + 1);
    }
  }

  return (
    <section className={style.container}>
      <div className={style.leftButton} onClick={()=>{ move_left() }}>
        <i className="fa-solid fa-chevron-left"></i>
      </div>
      <div className={style.content}>
        <div
          className={style.toSlider}
          id='slider_content'
          style={{ transform: `translateX(${position}px)`, transition: '1s' }}
        >
          {blocks.map((item, i) => {
            return <span key={`Slider_item_${i}`} className={style.contentElement} id='card' ref={i === 0 ? cardRef : null}>{item}</span>
          })}
        </div>
      </div>
      <div className={style.rightButton} onClick={()=>{ move_right() }}>
        <i className="fa-solid fa-chevron-right"></i>
      </div>
    </section>
  );
}
