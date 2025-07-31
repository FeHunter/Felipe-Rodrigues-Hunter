import React, { useEffect, useRef, useState } from 'react';
import style from './ContentSlider.module.css';

export function ContentSlider({ blocks }) {
  
  const [blockId, setBlockId] = useState(0);

  const [moveIndex, setMoveIndex] = useState(0)
  const [position, setPosition] = useState(0)
  const [translateXStep, setTranslateXStep] = useState(0)
  const cardRef = useRef(null)
  const [visibleCount, setVisibleCount] = useState(2)

  useEffect(()=>{

    let gap = 50
    if (screen.width <= 900){
      setVisibleCount(1)
      gap = 20
    }

    if (cardRef.current){
      const cardWidth = cardRef.current.clientWidth
      setTranslateXStep( cardWidth / 2 * visibleCount + gap )
    }

  }, [])

  useEffect(()=>{
    console.log(visibleCount)
  },[visibleCount])

  
  const move_left = () => {
    const min_to_roll = visibleCount-1
    if (moveIndex >= min_to_roll) {
      setPosition((prev) => prev + translateXStep);
      setMoveIndex((prev) => prev - 1);
    }
  }
  
  const move_right = () => {
    const max_to_roll = blocks.length - visibleCount
    if (moveIndex < max_to_roll) {
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
