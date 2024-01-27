import React from "react";
import imageEth from './eth.png'
import Avetor from './avetor.jpg'
import style from './Connected.module.css'
import Account_Details from "../Account Details/Account_Details";

const Not_Connected = (props) => {
  return (
    <>
     
    
      <div className={style.container}>
        <div className={style.image} >
        <img className={style.hero} src={Avetor} alt="" />
        </div>
        <h2>Check Ether</h2>
        <h5>VERIFIED<span className={style.tick} >&#10004;</span></h5>
        <p className={style.text} >Ether Account and Balance Checker Found Account Details</p>
        <div className={style.tag}>Ether Account Details</div>
        <h3>Your Metamask Account Deatails</h3>
        <Account_Details Account={props.Account}  currBalance={props.currBalance}/>
        
        
      </div>
     
    </>
  );
};

export default Not_Connected;
