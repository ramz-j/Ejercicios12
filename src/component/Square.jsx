import React, { useState } from 'react'

const Square = () => {

  
  const [manageInterval, setManageInterval] = useState(0);
  const [color, setColor] = useState('#000000');

  const styles = {

    cnt: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '650px',
    },
  
    sqr: {
      width: '255px',
      height: '255px',
      background: color,
    }
  }

  const hexRandom = () => Math.floor(Math.random() * 256);
  
  const convertHex = (red, green, blue) =>  {
    return (
      '#'+ 
      [red,green,blue].map((c) => {
        const partHex = c.toString(16)
        return partHex.lenght === 1 ? '0' + partHex : partHex;
      }).join('')
    );
  };

  const generateColor = () => {
    const rgb = {
      r: hexRandom(),
      g: hexRandom(),
      b: hexRandom(),
    }
    return setColor(convertHex(rgb.r,rgb.g,rgb.b));
  }

  const changeColor = () => {
    return setManageInterval(setInterval(generateColor, 1000));
  };

  const stopColor = () => {
    clearInterval(manageInterval);
  }

  return (
    <div>
      <div style={styles.cnt}>
        <div 
          style={styles.sqr}
          onMouseOver={changeColor}
          onMouseOut={stopColor}
          onDoubleClick={stopColor}>
        </div>
      </div>
    </div>
  )
}

export default Square