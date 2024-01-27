import React from "react";
import imageEth from './eth.png'
import Avetor from './avetor.jpg'
import style from './Not_Connected.module.css'

const Not_Connected = (props) => {
  return (
    <>
      <div className={style.container}>
        <img className={style.hero} src={Avetor} alt="" />
        <h2>Check Ether</h2>
        <img src={imageEth} alt="" className={style.ether} />
        <p>Welcome To Ether Account Balance Checker</p>
        <button className={style.connect_button} onClick={props.method}>Connect Wallet</button>
      </div>
    </>
  );
};

export default Not_Connected;
