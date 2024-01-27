import React from "react";
import style from "./Account_Details.module.css";

const Account_Details = (props) => {
  return (
    <>
      <div className={style.container}>
        <div className={style.Account}>Account</div>
        <hr></hr>
        <div className={style.Account_Address}>{props.Account}</div>
        <hr />
        <div className={style.Balance}>Balance:</div>
        <hr />
        <div className={style.Balance_value}>{props.currBalance}&nbsp;ETH</div>
      </div>
    </>
  );
};

export default Account_Details;
