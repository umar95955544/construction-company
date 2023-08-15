import React,{useContext} from 'react'
import { DarkModeContext } from '../../../Assets/Context/DarkModeContext';
import { Link } from 'react-router-dom';
import '../../../Assets/Hover/hover.css'
import '../../../Assets/Hover/hover-min.css'


function Button({text,onclick,color,border,boxShadow,padding,borderRadius,backgroundColor,width}) {
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
    <Link to={onclick}>
      <button className={`${darkMode ? 'Content-dark3' : 'Content-light3'} hvr-sweep-to-right`} style={style}>
      {text}
    </button>
    </Link>
  )
}

export default Button