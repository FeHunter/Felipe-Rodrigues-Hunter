import React, { useState } from 'react';
import style from './ContentSlider.module.css';

export function ContentSlider({ blocks }) {
  const [blockId, setBlockId] = useState(0);

  function next() {
    setBlockId(prevBlockId => {
      const newBlockId = prevBlockId + 2; // Avança por dois blocos
      if (newBlockId >= blocks.length) {
        return prevBlockId; // Evita exceder os limites do array
      }
      return newBlockId;
    });
  }

  function prev() {
    setBlockId(prevBlockId => {
      const newBlockId = prevBlockId - 2; // Retrocede por dois blocos
      if (newBlockId < 0) {
        return prevBlockId; // Evita valores negativos
      }
      return newBlockId;
    });
  }

  const viewBlock1 = blocks[blockId] || null;
  const viewBlock2 = blocks[blockId + 1] || null;

  const leftLimitColor = blockId <= 0 ? {color: 'transparent'} : {};
  const rightLimitColor = blockId+2 >= blocks.length ? {color: 'transparent'} : {};

  return (
    <section className={style.container}>
      <div className={style.leftButton} style={leftLimitColor} onClick={prev}>
        <i className="fa-solid fa-chevron-left"></i>
      </div>
      <div className={style.content}>
        <span className={style.mobile}>{viewBlock1} {viewBlock2}</span>
        <span className={style.desktop}>{viewBlock1} {viewBlock2}</span>
      </div>
      <div className={style.rightButton} style={rightLimitColor} onClick={next}>
        <i className="fa-solid fa-chevron-right"></i>
      </div>
    </section>
  );
}
