import React from "react";
import {Render} from 'jumpsuit';
import App from "./components/App.js";
import globalState from "./states/Global";

Render(globalState, <App />);
