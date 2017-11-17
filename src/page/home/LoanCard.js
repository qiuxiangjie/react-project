import React from 'react';
import './Home.css';

const LoanCard = (props) => {
  return (
    <div className="loan-card clear">
      <div className="loan-card-left">
        <p className="loan-card-money">250万</p>
        <p className="loan-card-max">最高额度</p>
      </div>
      <div className="loan-card-right">
        <p className="loan-card-til">{props.til}</p>
        <p>无抵押 无担保 期限灵活 放心贷</p>
        <p>无抵押 无担保 期限灵活 放心贷</p>
      </div>
    </div>
  )
}
export default LoanCard;
