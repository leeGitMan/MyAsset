/*eslint-disable */
import { useState } from "react";
import './Item.css';

function Item(props){

    const commaIncome = props.income.toLocaleString();
    const commaExpenditure = props.expenditure.toLocaleString();

    
    
    return(
        <div className="item-con">
            <div className="item-btn-box fs-small fc-black" onClick={() => props.handelDeleteItem(props.id)}>삭제하기</div>
            <div className='item'>
                <div className='itemContentBox'>
                    <div className='itemContent'>
                        <span className="fc-grey fw-bold">{props.date}</span>
                        <span className="fc-black fw-bold">{props.title}</span>
                    </div>
                </div>
                {
                    props.checkType === 'income' ? 
                    <div className='itemPriceBox'>
                        <strong className="fc-green">+{commaIncome}원</strong>
                    </div>
                    :
                    <div className='itemPriceBox'>
                        <strong className="fc-red">-{commaExpenditure}원</strong>
                    </div>
                }
            </div>
        </div>
    )
}

export default Item