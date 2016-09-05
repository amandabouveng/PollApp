var React       = require("react");
var ReactDOM    = require("react-dom");
var PollApp     = require("./components/PollApp");

var Audience    = require("./components/Audience");
var Speaker     = require("./components/Speaker");
var Board       = require("./components/Board");

var PollApp     = require("./components/PollApp");

var { Router, Route, browserHistory, IndexRoute } = require('react-router');

/* Samma som ovan, det ovan är ecma6
var Router = require('react-router').Router
var Route = require('react-router').Route
var browserHistory = require('react-router').browserHistory
var IndexRoute = require('react-router').IndexRoute
*/

//skapar ett routing system för alla filer
var routerConfig = (
    <Router history={browserHistory}>
        <Route path="/" component={PollApp}>
            <Route path="/speaker" component={Speaker} />
            <Route path="/board" component={Board} />
            <Route path="/audience" component={Audience} />
            <IndexRoute component={Audience} />
        </Route>
    </Router>
)

ReactDOM.render(routerConfig,document.getElementById("reactContainer"));

