import React, { Component } from 'react';
import DStorage from '../abis/DStorage.json';
import { convertBytes } from './helpers';
import moment from 'moment'
import "assets/scss/paper-dashboard.scss?v=1.2.0";
import ReactDOM from "react-dom";
import "assets/demo/demo.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import AdminLayout from "layouts/Admin.js";
import Typography from "views/Typography"
import Web3 from 'web3';
import Button from "/Users/carolmendonca/Desktop/hackathon/src/components/Button/Button.js";
import Button2 from "/Users/carolmendonca/Desktop/hackathon/src/components/Button/Button2.js";
const hist = createBrowserHistory();
const ipfsClient = require('ipfs-http-client')
const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' }) // leaving out the arguments will default to these values
const all = 0
//import App from './App'
//import login from "./Login"
//import Login from './Login'
//import Signup from './Signup';

class Main extends Component {
  constructor(props) {
    super(props);
   
    this.state = {isToggleOn: true};
    
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }
   
  render() {
   
    if(this.props.all == 0) {
  
    return (
      
      <div className="container-fluid mt-5 text-center">
        <div className="row">
          <main role="main" className="col-lg-12 ml-auto mr-auto" style={{ maxWidth: '1024px' }}>
            <div className="content">
              <p>&nbsp;</p>
              
             <div className="card mb-3 mx-auto bg-dark" style={{ maxWidth: '512px' }}>
                {/* <h2 className="text-white text-monospace bg-dark"><b><ins>LOGout</ins></b></h2> */}
                  {/* <form onSubmit={(even) => {
                    even.preventDefault()
                    const name1 = this.name1.value
                    this.props.logout(name1) */}
                    
                    
                  {/* }} > */}
                      
                      
                      {/* <p className="text-white text-monospace bg-dark">{ this.props.acc }</p> */}
                    {/* <input type="file" onChange={this.props.captureFile} className="text-white text-monospace"/> */}
                    {/* <button type="submit" className="btn-primary btn-block"> <b>LOGout!</b></button>
                     */}
                  {/* </form> */}
              </div>



                  {/* <br>
                  </br>
                  <br></br> */}
                  {/* <a target="_blank"
                 alt=""
                
                 rel="noopener noreferrer"
                 >
                {this.props.all} hiiiiiiii
              </a> */}

                

              <div className="card mb-3 mx-auto bg-dark" style={{ maxWidth: '512px' }}>

              {(() => {
        if (this.props.occ == 1) {
         return <h2 className="text-white text-monospace bg-dark"><b><ins>LOGIN</ins></b></h2> 
        }
        else {
        return  <h2 className="text-white text-monospace bg-dark"><b><ins>SIGNUP</ins></b></h2> 
        }
      })()}
                {/* <h2 className="text-white text-monospace bg-dark"><b><ins>LOGIN</ins></b></h2> */}
               
                  {/* <h2 className="text-white text-monospace bg-dark"><b><ins>SIGNUP</ins></b></h2> */}
                
                  <form onSubmit={(events) => {
                    events.preventDefault()
                    const name1 = this.name1.value
                    
                    const password = this.password.value
                    this.props.login(password,name1)
                    //const log =1;
                  }} >
                    
                      <div className="form-group">
                        <br></br>
                          <input
                            id="name1"
                            type="text"
                            ref={(input) => { this.name1 = input }}
                            className="form-control text-monospace"
                            placeholder="NAME..."
                            required />
                      </div>
                      <div className="form-group">
                        <br></br>
                          <input
                            id="password"
                            type="text"
                            ref={(input) => { this.password = input }}
                            className="form-control text-monospace"
                            placeholder="PASSWORD..."
                            required />
                      </div>
                      <p className="text-white text-monospace bg-dark">{ this.props.acc }</p>
                    {/* <input type="file" onChange={this.props.captureFile} className="text-white text-monospace"/> */}
                    <button type="submit" className="btn-primary btn-block"><b>GO!!</b></button>
                  </form>
              </div>

              {/* <div className="card mb-3 mx-auto bg-dark" style={{ maxWidth: '512px' }}>
                <h2 className="text-white text-monospace bg-dark"><b><ins>Share File</ins></b></h2>
                  <form onSubmit={(event) => {
                    event.preventDefault()
                    const description = this.fileDescription.value
                    this.props.uploadFile(description)
                  }} >
                      <div className="form-group">
                        <br></br>
                          <input
                            id="fileDescription"
                            type="text"
                            ref={(input) => { this.fileDescription = input }}
                            className="form-control text-monospace"
                            placeholder="description..."
                            required />
                      </div>
                      <p className="text-white text-monospace bg-dark">{ this.props.acc }</p>
                    <input type="file" onChange={this.props.captureFile} className="text-white text-monospace"/>
                    <button type="submit" className="btn-primary btn-block"><b>Upload!</b></button>
                  </form>
              </div>

              <p>&nbsp;</p>
              
              <table className="table-sm table-bordered text-monospace" style={{ width: '1000px', maxHeight: '450px'}}>
                <thead style={{ 'fontSize': '15px' }}>
                  <tr className="bg-dark text-white">
                    <th scope="col" style={{ width: '10px'}}>id</th>
                    <th scope="col" style={{ width: '200px'}}>name</th>
                    <th scope="col" style={{ width: '230px'}}>description</th>
                    <th scope="col" style={{ width: '120px'}}>type</th>
                    <th scope="col" style={{ width: '90px'}}>size</th>
                    <th scope="col" style={{ width: '90px'}}>date</th>
                    <th scope="col" style={{ width: '120px'}}>uploader/view</th>
                    <th scope="col" style={{ width: '120px'}}>hash/view/get</th>
                  </tr>
                </thead>
                { this.props.files.map((file, key) => {
                  return(
                    <thead style={{ 'fontSize': '12px' }} key={key}>
                      <tr>
                        <td>{file.fileId}</td>
                        <td>{file.fileName}</td>
                        <td>{file.fileDescription}</td>
                        <td>{file.fileType}</td>
                        <td>{convertBytes(file.fileSize)}</td>
                        <td>{moment.unix(file.uploadTime).format('h:mm:ss A M/D/Y')}</td>
                        <td>
                          <a
                            href={"https://etherscan.io/address/" + file.uploader}
                            rel="noopener noreferrer"
                            target="_blank">
                            {file.uploader.substring(0,10)}...
                          </a>
                         </td>
                        <td>
                          <a
                            href={"https://ipfs.infura.io/ipfs/" + file.fileHash}
                            rel="noopener noreferrer"
                            target="_blank">
                            {file.fileHash.substring(0,10)}...
                          </a>
                        </td>
                      </tr>
                    </thead>
                  )
                })}
              </table>
            </div> */}
            </div>
          </main>
        </div>
      </div>
    );
              }
              else {
                
                
                  
                return(

                   
                  <div>
                       
                    {(() => {
                    if (this.props.fun == 1) {
                     return(
                      <div className="content">
                      <p>&nbsp;</p>
                      
                    <form onSubmit={(even) => {
                even.preventDefault()
                const name1 = this.name1.value
                this.props.logout(name1)
                
                //const log =0;
                //const password = this.password.value
                //this.props.logout(password)
              }} >
                  <input
                      id="name1"
                      type="text"
                      ref={(input) => { this.name1 = input }}
                      className="form-control text-monospace"
                      placeholder =""
                      />
                  
                  {/* <p className="text-white text-monospace bg-dark">{ this.props.acc }</p> */}
                {/* <input type="file" onChange={this.props.captureFile} className="text-white text-monospace"/> */}
                <button type="submit" className="btn-primary btn-block bg-dark float-right" style={{height:'60px' ,width:'150px',marginRight:'50px',fontSize:'15px',fontWeight:'bold'}}> <b>LOGout!</b></button>
                
              </form>
              <br></br>
              
              <center>  <h2><p className="text-white text-monospace" style={{height:'60px' ,width:'140px',marginRight:'150px'}}> <b>WELCOME &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.props.name1}</b></p></h2></center><br></br> <br></br> <br></br> 
              <br></br>
              <br></br>
              <div className="card mb-3 mx-auto bg-dark" style={{ maxWidth: '512px' }}>
                <center><h2 className="text-white text-monospace bg-dark" style={{marginTop:'20px'}}><b>VIEW SUBMISSIONS</b></h2></center>
                  
              </div>
              <p>&nbsp;</p>
              <center>
              <table className="table-sm table-bordered text-monospace center" style={{ width: '1000px', maxHeight: '450px'}}>

                <thead style={{ 'fontSize': '15px' }}>
                  <tr className="bg-dark text-white">
                    <th scope="col" style={{ width: '10px'}}>ID</th>
                    <th scope="col" style={{ width: '200px'}}>USER NAME</th>
                    <th scope="col" style={{ width: '230px'}}>DOCUMENT TYPE</th>
                    <th scope="col" style={{ width: '120px'}}>TYPE</th>
                    <th scope="col" style={{ width: '90px'}}>SIZE</th>
                    <th scope="col" style={{ width: '90px'}}>DATE</th>
                    <th scope="col" style={{ width: '120px'}}>UPLOADER ADDRESS</th>
                    <th scope="col" style={{ width: '120px'}}>FILE HASH</th>
                   
                  </tr>
                </thead>
                
                { this.props.files.map((file, key) => {
                  return(
                    <thead style={{ 'fontSize': '12px' }} key={key}>
                      <tr className="bg-dark text-white">
                        <td>{file.fileId}</td>
                        <td>{file.fileName}</td>
                        <td>{file.fileDescription}</td>
                        <td>{file.fileType}</td>
                        <td>{convertBytes(file.fileSize)}</td>
                        <td>{moment.unix(file.uploadTime).format('h:mm:ss A M/D/Y')}</td>
                        <td>
                          <a
                            href={"https://etherscan.io/address/" + file.uploader}
                            rel="noopener noreferrer"
                            target="_blank">
                            {file.uploader.substring(0,10)}...
                          </a>
                         </td>
                        <td>
                          <a
                            href={"https://ipfs.infura.io/ipfs/" + file.fileHash}
                            rel="noopener noreferrer"
                            target="_blank">
                            {file.fileHash.substring(0,10)}...
                          </a>
                        </td>
                       
                        
                        
                      </tr>
                     
                      
                    </thead>

                  )
                })}
              </table>
              </center>
             
                      {/* <Router history={hist}>
                      <Switch>
                          <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
                        <Redirect to="/admin/dashboard" />
                      </Switch>
                      </Router>,
                      
                      document.getElementById("root") */}



                      
                      </div>

                      
                     );
                     
                    }


                    else {
                      return(
                        
                        <div className="content">
                        <p>&nbsp;</p>
                      <form onSubmit={(even) => {
                  even.preventDefault()
                  const name1 = this.name1.value
                  this.props.logout(name1)
                  
                  //const log =0;
                  //const password = this.password.value
                  //this.props.logout(password)
                }} >
                    <input
                        id="name1"
                        type="text"
                        ref={(input) => { this.name1 = input }}
                        className="form-control text-monospace"
                        placeholder =""
                        />
                    
                    {/* <p className="text-white text-monospace bg-dark">{ this.props.acc }</p> */}
                  {/* <input type="file" onChange={this.props.captureFile} className="text-white text-monospace"/> */}
                  <button type="submit" className="btn-primary btn-block float-right" style={{height:'60px' ,width:'150px',marginRight:'50px',fontSize:'15px',fontWeight:'bold'}}> <b>LOGOUT</b></button>
                 
                </form>
                <br></br>
              <center>  <h2><p className="text-white text-monospace" style={{height:'60px' ,width:'140px',marginRight:'150px'}}> <b>WELCOME &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.props.name1}</b></p></h2></center><br></br> <br></br> <br></br> 
                <div className="card mb-3 mx-auto bg-dark" style={{ maxWidth: '720px' }}>
              <center>  <h2 className="text-white text-monospace bg-dark " style={{ marginTop: '30px' }}><b>UPLOAD YOUR FILES HERE</b></h2></center>
                  <form onSubmit={(event) => {
                    event.preventDefault()
                    const description = this.fileDescription.value
                    this.props.uploadFile(description)
                  }} >
                      <div className="form-group">
                        <br></br>
                          <input
                            id="fileDescription"
                            type="text"
                            ref={(input) => { this.fileDescription = input }}
                            className="form-control text-monospace"
                            placeholder="Document Type(PANcard,Birth Certificate...)"
                            required />
                      </div>
                     <center> <p className="text-white text-monospace bg-dark">{ this.props.acc }</p></center>
                    <center><input type="file" onChange={this.props.captureFile} className="text-white text-monospace"/></center>
                    <br></br>
                    <center> <button type="submit" className="btn-primary btn-block " style={{height:'50px', backgroundColor:''}}><b>Upload!</b></button></center>
                   
                  </form>
              </div>
              <p>&nbsp;</p>
              <center>
              <table className="table-sm table-bordered text-monospace" style={{ width: '1000px', maxHeight: '450px'}}>
                
              <thead style={{ 'fontSize': '15px' }}>
           
                  <tr className="bg-dark text-white">
                    <th scope="col" style={{ width: '10px'}}>ID</th>
                    <th scope="col" style={{ width: '200px'}}>NAME</th>
                    <th scope="col" style={{ width: '230px'}}>DOCUMENT TYPE</th>
                    <th scope="col" style={{ width: '230px'}}>TYPE</th>
                    <th scope="col" style={{ width: '230px'}}>SIZE</th>
                    <th scope="col" style={{ width: '230px'}}>DATE</th>
                   
                  </tr>
                </thead>
                
                { this.props.files.map((file, key) => {
                  return(
                    
                    <thead style={{ 'fontSize': '12px' }} key={key}>
                      <tr className="bg-dark text-white"> 
                        <td>{file.fileId}</td>
                        <td>{file.fileName}</td>
                        <td>{file.fileDescription}</td>
                        <td>{file.fileType}</td> 
                         <td>{convertBytes(file.fileSize)}</td>
                         <td>{moment.unix(file.uploadTime).format('h:mm:ss A M/D/Y')}</td>
                        
                        
                        
                        
                      </tr>
                    </thead>
                  )
                })}
              </table></center>
                        {/* <Router history={hist}>
                        <Switch>
                            <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
                          <Redirect to="/admin/dashboard" />
                        </Switch>
                        </Router>,
                        document.getElementById("root") */}
                        </div>
                       );
                    }
                  })()}
                    <div>
                  
                 
                      
                  
                     
                </div>    
            
                       
              
                    </div>
                   
                  //   <Router history={hist}>
                  //     <Switch>
                  //       <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
                  //       <Redirect to="/admin/dashboard" />
                  //     </Switch>
                  //   </Router>,
                  //   document.getElementById("root")
                 
                  
                  
                  );
                  
                  
                          
                
              }
            
          
  }
}

export default Main;