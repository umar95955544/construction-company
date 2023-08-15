import { useRef, useContext } from "react";
import plus from '../../../Assets/Images/plus.svg'
import minus from '../../../Assets/Images/minus.svg'
import { DarkModeContext } from "../../../Assets/Context/DarkModeContext";
import Styles from './AccordionItem.module.scss'

const AccordionItem = ({ faq, isActive, handleToggle }) => {
    const {darkMode} = useContext(DarkModeContext);
  
  const contentEl = useRef();
  const { question, answer } = faq;

  return (
    <li className={`${Styles.accordionItem} ${isActive ? "active" : ""} ${darkMode ? 'Content-dark2' : 'Content-light'}`}>
      <button className={Styles.button} onClick={handleToggle}>
        {question}
        <span className={Styles.control}>
          {isActive ? <img src={minus} alt="Minus" /> : <img src={plus} alt="Plus" />}
        </span>
      </button>

      <div
        ref={contentEl}
        className={Styles.answerWrapper}
        style={isActive ? { height: contentEl?.current?.scrollHeight || "auto" } : { height: "0px" }}
      >
        <div className={Styles.answer}>{answer}</div>
      </div>
    </li>
  );
};

export default AccordionItem;
