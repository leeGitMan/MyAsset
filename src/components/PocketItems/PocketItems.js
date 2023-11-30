/* eslint-disable */

import { useEffect, useState } from "react";
import './PocketItems.css';
import Item from './../Item/Item.js'

function PokcetItems(props){
    
    
    // 날짜 순으로 정렬
    // 최근 입력한 날짜가 제일 위에 올라올 거임
    
    const copyItemArr = [...props.item];
    const sortedItemArr = copyItemArr.sort((a,b) =>{
        // 만약에 날짜가 같다면?
        // 기존 itemId를 비교해서 itemId가 더 빨리 만들어졌다면 그걸 위로올리자
        if(new Date(a.date).getTime() === new Date(b.date).getTime()){
            return a.id - b.id;
        }
        return new Date(a.date) -  new Date(b.date);
    })

    const handelDeleteItem = (itemId) =>{
        const updatedItems = copyItemArr.filter(copyItemArr => copyItemArr.id !== itemId);
        props.setItem(updatedItems);
        
        
        // 일단은 삭제할 항목을 미리 찾자
        const deletedItem = copyItemArr.find((item) => item.id === itemId);

        // 삭제된 항목이 수입인 경우
        if (deletedItem.checkType === 'income') {
            const updatedInBalance = props.inBalance - deletedItem.income;
            const updatedTotal = props.total - deletedItem.income;
            props.setInBalance(updatedInBalance);
            props.setTotal(updatedTotal);

        // 삭제된 항목이 지출인 경우
        }else if(deletedItem.checkType === 'expenditure'){
            const updatedInBalance = props.exBalance - deletedItem.expenditure;
            const updatedTotal = props.total + deletedItem.expenditure;
            props.setExBalance(updatedInBalance);
            props.setTotal(updatedTotal);
        }


    }

    
    if(props.item.length === 0){
        return(
            <div className="fw-light fs-normal"> 데이터가 없네용. 🙅‍♂️</div>
        )
    }else{
        return(
            <div className="pocket-items-box">
                {sortedItemArr.map((item, index)=>{
                    return(
                        <Item
                        key={index}
                        id= {item.id}
                        date = {item.date}
                        title = {item.title}
                        checkType = {item.checkType}
                        income = {item.income}
                        expenditure = {item.expenditure}
                        handelDeleteItem = {handelDeleteItem}
                        />
                    )
                })}
            </div>
        )
    }
}

export default PokcetItems 