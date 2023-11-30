/* eslint-disable */
import './PocketStatus.css';
import './../../common/common.css';
import './../../common/font.css';


function PocketStatus(props){

    const options = { style: 'currency', currency: 'KRW' };
    const commaTotal = props.total.toLocaleString('ko-KR', options);
    const commaInBal = props.inBalance.toLocaleString();
    const commaExBal = props.exBalance.toLocaleString();
    
    return(
        <div className='common-box-con'>
            <div className="pocket_status-title">
                <h1 className='fs-normal fw-light'>피땀눈물</h1>
                <strong className='fs-title'>{commaTotal} 원</strong>
            </div>

            <div className="pocket_status-detail">
                <div className='pocket_status-detail--desc'>
                    <span className="fs-normal fw-light">수입</span>
                    <strong className="fs-emphasis fc-green">{commaInBal} 원</strong>
                </div>

                <div className="pocket_status-detail--desc">
                    <span className="fs-normal fw-light">지출</span>
                    <strong className="fs-emphasis fc-red">{commaExBal} 원</strong>
                </div>
            </div>
        </div>
    )
}

export default PocketStatus;