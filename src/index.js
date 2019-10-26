import React from "react";
import { render } from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import ReactStrapPlayGround from "./components/ReactStrapPlayGround"
import "./index.css";


render(
<Router>
    <ReactStrapPlayGround/>
</Router>,
 document.getElementById("app")
 );
