/* eslint-disable */
import './PocketBox.css'
import PocketStatus from './PocketStatus.js';
import PocketList from './PocketList.js'


function PocketBox(props){
    const { total, setTotal, item, inBalance, setInBalance, exBalance, setExBalance, setItem} = props;
    return(
        <div className="Container">  
            <PocketStatus inBalance = {inBalance} exBalance= {exBalance} total = {total}/>
            <PocketList item = {item} setItem ={setItem} inBalance={inBalance} setInBalance={setInBalance} exBalance={exBalance} setExBalance={setExBalance} total={total} setTotal = {setTotal}/>
        </div>
    )
}

export default PocketBox;