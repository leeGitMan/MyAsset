/* eslint-disable */
import { useState } from 'react';
import './App.css';
import PocketBox from './components//Pocket/PocketBox.js';
import InsertDataForm from './components/InsertData/InsertDataForm.js'

function App() {
  let [income, setIncome] = useState(0); // 수입을 가져올 state
  let [expenditure, setExpenditure] = useState(0); // 지출을 가져올 state
  let [inBalance, setInBalance] = useState(0) // 수입 잔고를 보여줄 state
  let [exBalance, setExBalance] = useState(0) // 지출 잔고를 보여줄 state
  let [total, setTotal] = useState(0); // 총합을 가져올 state
  let [inputRadio, setInputRadio] = useState(''); // 수입인지 지출인지 체크할 state 
  let [inputData, setInputData] = useState(''); // 어떤 목적으로 썼는지를 적을 state
  let [inputAmount, setInputAmount] = useState(''); // 금액이 얼마인지 쓸 state
  let [inputDate, setInputDate] = useState('') // 날짜를 받아올 state
  let [item, setItem] = useState([]); // 수입 or 지출 날짜를 넣어줄 배열 state

  

  return (
    <div className="App">
      <PocketBox inBalance={inBalance} exBalance={exBalance} setInBalance={setInBalance} expenditure={expenditure} setExBalance={setExBalance}  total={total} setTotal={setTotal} item = {item} setItem={setItem}/>

      <InsertDataForm inBalance={inBalance} setInBalance = {setInBalance} exBalance={exBalance} setExBalance={setExBalance}  income={income} setIncome = {setIncome} expenditure={expenditure} setExpenditure={setExpenditure} total={total} setTotal={setTotal}
      inputRadio = {inputRadio} setInputRadio = {setInputRadio} inputData = {inputData} setInputData={setInputData} inputAmount = {inputAmount} setInputAmount={setInputAmount}
      inputDate = {inputDate} setInputDate = {setInputDate} setItem = {setItem} item= {item} />
    </div>
  );
}

export default App;
