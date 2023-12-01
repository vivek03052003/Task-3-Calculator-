import { useReducer } from "react";
import "./index.css";
import DigitButton from "./DigitButton";
import OperationButton from ".OperationButton";


 export const ACTIONS = {
  ADD_DIGIT: 'add-digit',
  CHOOSE_OPERATION: 'choose-operation',
  CLEAR: 'clear',
  DELETE_DIGIT: 'delete-digit',
  EVALUATE: 'evaluate'

}

function reducer(state, { type, payload}){
  switch(type){

    case ACTIONS.ADD_DIGIT:
      if (state.overwrite){
      return{
        ...state,
        currentOperand: '${currentOperand || ""}${payload.digit}',
      }
  }
  if (payload.digit ==="0" && state.currentOperand === "0"){
    return state
  }
  if (payloaddigit ==="." && state.currentOperand.includes(".")){
    return state
  }

}
}
function App(){
  const [{currentOperand, previousOperand, operation }, dispatch] = useReducer(reducer,{})
  
  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">{previousOperand} {operation}</div>
        <div className="current-operand">{currentOperand}</div>
      </div>
      <button className="span-two">AC</button>
      <button>DEL</button>

      <DigitButton digit="/" dispatch={dispatch}></DigitButton>
      <DigitButton digit="0" dispatch={dispatch}></DigitButton>
      <DigitButton digit="1" dispatch={dispatch}></DigitButton>
      <DigitButton digit="2" dispatch={dispatch}></DigitButton>
      <DigitButton digit="3" dispatch={dispatch}></DigitButton>
      <DigitButton digit="*" dispatch={dispatch}></DigitButton>
      
      <DigitButton digit="4" dispatch={dispatch}></DigitButton>
      <DigitButton digit="5" dispatch={dispatch}></DigitButton>
      <DigitButton digit="6" dispatch={dispatch}></DigitButton>
      <DigitButton digit="+" dispatch={dispatch}></DigitButton>
      <DigitButton digit="7" dispatch={dispatch}></DigitButton>
      <DigitButton digit="8" dispatch={dispatch}></DigitButton>
      <DigitButton digit="9" dispatch={dispatch}></DigitButton>
      <DigitButton digit="-" dispatch={dispatch}></DigitButton>
      <DigitButton digit="." dispatch={dispatch}></DigitButton>
      
      
      <button className="span-two" onClick={() => dispatch({ type: ACTIONS.EVALUATE})}>=</button>
          </div>
  )
}
export default App