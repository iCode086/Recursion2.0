/*!

=========================================================
* Paper Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React, { Component } from 'react';
import DStorage from '../abis/DStorage.json';
import { convertBytes } from '/Users/carolmendonca/Desktop/hackathon/src/components/helpers';
import moment from 'moment'
import "assets/scss/paper-dashboard.scss?v=1.2.0";
import ReactDOM from "react-dom";
import "assets/demo/demo.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import AdminLayout from "layouts/Admin.js";
import Main from "/Users/carolmendonca/Desktop/hackathon/src/components/Main";

import Web3 from 'web3';
// reactstrap components
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";

class Typography extends React.Component {
  render() {
    return (
      
                      
      <h1></h1>
    );
  }
}

export default Typography;
