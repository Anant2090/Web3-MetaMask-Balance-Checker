import React, { useEffect, useState } from "react";
import Web3 from "web3";

import './App.css';
import Not_Connected from "./components/When not connected/Not_Connected";
import Connected from "./components/Connected/Connected";

function App() {
  const [connected, setConnect] = useState(false);
  const [Account, setAccount] = useState("not connected");
  const [CurrentAcc, setCurrentAcc] = useState("not connected");
  const [currBalance, setBalance] = useState(null);
  const provider = new Web3.providers.WebsocketProvider(
    "wss://go.getblock.io/ca5784d2d59142aebbd6ed81cd631c4f"
  );
  const web3 = new Web3(provider);

  async function Connect_to_Wallet() {
   try{
    if (!window.ethereum) {
      alert("Install Metamask in your browser first.");
    } else {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      setConnect(true);
      setAccount(accounts);
      setCurrentAcc(accounts[0]);

      // Listen for changes in the selected account
      window.ethereum.on("accountsChanged", (newAccounts) => {
        setAccount(newAccounts);
        setCurrentAcc(newAccounts[0]);
      });
    }
   }
   catch(error)
   {
    alert("Please Give Permission to Connect To Metamask");
   }
  }

  async function getbal() {
    try{
      if (Account !== "not connected") {
        const bal = await web3.eth.getBalance(CurrentAcc);
        setBalance(web3.utils.fromWei(bal, 'ether')); // Convert balance from Wei to Ether
      }
    }
    catch(error)
    {
      setConnect(false);
      alert("disconnected");
    }
  }

  useEffect(() => {
    getbal();
  }, [CurrentAcc]);

  return (
    <>
      <div>
        {!connected ? <Not_Connected method={Connect_to_Wallet}/> : <Connected Account={CurrentAcc} currBalance={currBalance} />}
      </div>
      
    </>
  );
}

export default App;
