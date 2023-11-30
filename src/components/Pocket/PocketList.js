/* eslint-disable */
import { useState } from 'react';
import './PocketList.css'
import PokcetItems from './../PocketItems/PocketItems.js'

function PocketList(props){
    

    return(
        <div className="pocket__list">
            <div className="pocket__list-header">
                <span className="fs-normal">전체 내역</span>
                <span className='fs-normal'>수입</span>
                <span className='fs-normal'>지출</span>
            </div>

            <PokcetItems item = {props.item} setItem = {props.setItem}
             inBalance = {props.inBalance} setInBalance= {props.setInBalance}
             exBalance = {props.exBalance} setExBalance = {props.setExBalance}
             total = {props.total} setTotal = {props.setTotal}/>
        </div>
    )
}

export default PocketList