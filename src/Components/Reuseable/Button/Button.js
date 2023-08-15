import React,{useContext} from 'react'
import { DarkModeContext } from '../../../Assets/Context/DarkModeContext';

function Button({text,onClick,color,border,boxShadow,padding,borderRadius,backgroundColor,width}) {
  const {darkMode} = useContext(DarkModeContext);
  const style={
    'backgroundColor':backgroundColor,
    'padding':padding,
    'color':color,
    'border':border,
    'borderRadius':borderRadius,
    'boxShadow':boxShadow,
    'width':width
  }

  return (
      <button className={darkMode ? 'Content-dark3' : 'Content-light3'} style={style}>
      {text}
    </button>
  )
}

export default Button