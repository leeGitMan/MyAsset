/* eslint-disable */
import './InsertDataForm.css';
import './../../common/common.css';
import './../../common/button.css'
import { useEffect, useState } from 'react';
import { useFetcher } from 'react-router-dom';


function InsertDataForm(props){
    let { income, setIncome, expenditure, setExpenditure, total, setTotal, 
        inputRadio, setInputRadio,
        inputData, setInputData,
        inputAmount, setInputAmount,
        inputDate , setInputDate,
        item, setItem,
        inBalance, setInBalance,
        exBalance, setExBalance} = props;
    
    let [isNotNum, setIsNotNum] = useState(false);
    let titleSize = 20;
    let [isTitleSizeOver, setIsTitleSizeOver] = useState(false);
    
    
    // 먼저 수입, 지출 내역, 합계, 수입인지 지출인지(라디오태그), 어떤 쓰임이었는지를
    // state에 저장하기 위해서 app.js에서 props전송을 했다.
    // 새롭게 데이터를 받는 컴포넌트에서는 금액 state를 초기값을 0으로 생성해두었다.
    // 그래서 수입인지 지출인지를 따져서 각각에 알맞는 state에 금액을 넣을 것이다.

    

   
    
    function addData(e){

        e.preventDefault(); // 페이지 리로드 방지
        // 수입이면 income
        // 지출이면 expenditure
        // inputAmount은 type이 text이기에 문자열로 인식을 한다.
        // 그래서 1000을 입력했으면 
        // 01000이 출력이 된다.
        // 여기서 parseInt로 문자열을 정수로 바꿔주고 넣어줘야한다.
        let parsedAmount = parseInt(inputAmount, 10)

        if(inputRadio === 'income'){
            // 수입일 때
            setIncome(income += parsedAmount);
            inBalance += income
            setInBalance(inBalance);
            // 수입을 총합에 더해주기
            total += parsedAmount;
            setTotal(total);
        }else if(inputRadio === 'expenditure'){
            // 지출일 때
            setExpenditure(expenditure += parsedAmount);
            exBalance += expenditure;
            setExBalance(expenditure);
            // 지출을 총합에서 빼주기
            total -= parsedAmount;
            setTotal(total);
        }

        // 기존의 item 배열을 복사한 후 새로운 객체를 추가
        let newItem = [...item];
        newItem.push({
            id : newItem.length,
            checkType : inputRadio,
            income: income,
            expenditure: expenditure,
            title: inputData,
            date: inputDate
        });
        setItem(newItem);

        // 로컬 스토리지에 데이터 저장
        localStorage.setItem('items', JSON.stringify(newItem));
        localStorage.setItem('inBalance', inBalance);
        localStorage.setItem('exBalance', exBalance);
        localStorage.setItem('total', total);
        
        // input 태그 초기화
        // 근데 왜 초기화가 안되지?
        // 해결
    }

    useEffect(() =>{
        setInputRadio('');
        setInputData("");
        setInputAmount("");
        setInputDate("");
        setIncome(0);
    },[item]);


    // 무한 루프 발생
    
    // if(isNaN(inputAmount)){
    //     return
    // }else{
    //     setIsNotNum(true)
    // }
    // if(isNan(inputAmount))가 렌더링이 될 때 마다 계속 호출이 되므로 무한루프를 발생시킬 수 있다.

    useEffect(() => {
        setIsNotNum(isNaN(inputAmount));
    }, [inputAmount]);


    useEffect(() =>{
        if(inputData.length > titleSize){
            setIsTitleSizeOver(true);
        }else{
            setIsTitleSizeOver(false);
        }
    }, [inputData]);
    


    
    return(
        <form onSubmit={addData}>
            <div className='Container'>
                <div className='common-box-con-second'>
                    <h1 className='fs-normal fw-light'>얼마나 벌고 ? <br/> 또 얼마나 쓰니 ?</h1>

                    <div className='insert-data-form-date-box'>
                        <strong>날짜</strong>
                        <div className='insert-data-form-date'>
                            <input id='dateInput' type='date' value = {inputDate} onChange={(e) =>{setInputDate(e.target.value)}} required/>
                        </div>
                    </div>

                    <div className='insert-data-form-data-box'>
                        <strong>내용</strong>
                        <div className='insert-data-form-data'>
                            <input id='inputRadioIn' className='inputRadio' type='radio'  name='typeData' value= 'income'  style={{cursor:'pointer'}} onChange={(e) => { setInputRadio(e.target.value) } } required/><label style={{cursor:'pointer'}} for='inputRadioIn'>수입</label>
                            <input id='inputRadioEx' className='inputRadio' type='radio' name='typeData' value= 'expenditure' style={{cursor:'pointer'}} onChange={(e) => { setInputRadio(e.target.value) } } required/><label style={{cursor:'pointer'}} for='inputRadioEx'>지출</label>
                            <span className='ft-alert fs-small' style={{display : isTitleSizeOver ? 'block' : 'none' }}>{titleSize}자 까지만 입력가능 해요.</span>
                        </div>
                        <input className='inputText' value = {inputData} onChange={(e)=> { setInputData(e.target.value) } } placeholder='내용을 입력해주세요 (예:아이스아메리카노)' required maxLength={titleSize}/>
                        
                    </div>

                    <div className='insert-data-form-input'>
                        <strong>금액</strong>
                        <input className='inputText' value={inputAmount}  onChange={(e)=> { setInputAmount(e.target.value) } } placeholder='금액을 입력해주세요 (예:10000)' required/>
                        <span className='alertSpan ft-alert fs-small' style={{display : isNotNum ? 'block' : 'none' }}>숫자만 입력해주세요.</span>
                    </div>

                    <div className='btnBox'>
                        <button className='btn-purple' type='submit'>등록</button>
                        <button className='.btn-white'>취소</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default InsertDataForm;