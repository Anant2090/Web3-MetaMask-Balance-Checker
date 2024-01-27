
// import './App.css';
// import {useState,useEffect} from "react"
// import Web3 from "web3"
// import imageEth from './eth.png'
// import Avetor from './avetor.jpg'


// function App() {
//   const [currentAccount,setCurrentAccount]=useState("");
//   const[connect,setConnect]=useState(false);
//   const [balance,setBalance]=useState('');
//   const failMessage="Please install Metamask & connect your MetaMask"
//   const SuccessMessage="your Account Succesfully connected to Metamask"

//   const provider=new Web3.providers.WebsocketProvider("wss://go.getblock.io/ca5784d2d59142aebbd6ed81cd631c4f");//store this id in .env file
//   const web3=new Web3(provider);

//   const checkIfWalletConnected=async()=>{
//     if(!window.ethereum) return;
//     const accounts=await window.ethereum.request({ method: "eth_accounts"});
//     console.log(accounts);
//     if(accounts.length)
//     {
//       setCurrentAccount(accounts[0]);
//     }
//     else
//     {
//       console.log("fail");
//     }
//     const address="0x8B4de256180CFEC54c436A470AF50F9EE2813dbB"
//     const balance = await web3.eth.getBalance(address);
//     console.log(balance);
//   };

//   const cWallet=async()=>{
//     if(!window.ethereum)
//     {
//       return console.log(failMessage);
//     }
//     else
//     {
//       const accounts=await window.ethereum.request({ method: "eth_requestAccounts"});
//       setCurrentAccount(accounts[0]);
//       window.location.reload();

//     }
//   }

//   useEffect(()=>{
//     checkIfWalletConnected(); 
//   })
//   return (
//     <>
      
//         <div className="card-container">
//           {!currentAccount ? "":<span className='pro'>PRO</span> }
//           <img src={Avetor} width={80} height={80}></img>
//           <h3>Check Ether</h3>

//           {!currentAccount ? (
//             <div>
//               <div className='message'>
//                 <p>{failMessage}</p>
//               </div>
//               <img src={imageEth} width={100} height={100} alt="" />
//               <p>WELCOME TO ETHER ACCOUNT BALANCE CHECKER</p>
//             </div>
//           ):(
//             <div>
//               <h6>Verifid <span className='tick'>&#10004;</span></h6>
//               <p>Ether Account And Balance Checker<br></br>Find Account Details</p>
//               <div className='buttons'>
//                 <button className='primary ghost' onClick={()=>{}}>Ether Account Details
//                 </button>
//               </div>
//             </div>
//           )}

//         {!currentAccount &&!connect ?(
//           <div className='buttons'>
//             <button className='primary' onClick={cWallet}>Connect Wallet</button>
//           </div>

//         ):(
//           <div className='skills'>
//             <h6>your Ether</h6>
//             <ul>
//               <li>Account</li>
//               <li>{currentAccount}</li>
//               <li>Balance</li>
//               <li>{balance}</li>
//             </ul>

//           </div>
//         )}


//         </div>
//     </>
//   );
// }

// export default App;
