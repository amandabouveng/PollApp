var React       = require("react");
var io          = require('socket.io-client');
var Headers     = require('./parts/Headers');
var Link        = require('react-router').Link;

var PollApp = React.createClass({

    getInitialState: function() {
        return {
            status: 'disconnected'
            ,title: ''
            ,member: {}
            ,audience: []
            ,speaker: ''
            ,questions: []
            ,currentQuestion: null
            ,newQuestion: null
            ,answers: {
                a:0
                ,b:0
                ,c:0
                ,d:0
            }

        }
    } 
    ,componentWillMount: function () {
        this.socket = io("http://localhost:3000");
        this.socket.on('connect', () => {
            this.setState({status: 'connected'});
            console.log('ansluten till webbsocket');
        })
        //Eftersom det inte är något semikolon efter parantesen kan man hooka på .on dissconnected direkt
        .on('disconnect', () => {
            this.setState({status: 'disconnected'});
            console.log('inte ansluten till webbsocket');
        })
        .on('welcome', (info) => {

            if (sessionStorage.member){
                var member = JSON.parse(sessionStorage.member);
                if(member.type === 'audience') {

                    this.socket.emit('join', {
                    member:member
                });

                
                } else if (member.type === 'speaker') {
                    this.socket.emit('start', {
                    speaker:member
                    ,title: sessionStorage.title
                });

            }
            }
            this.setState(info);
        })

        .on('audience', (audienceArr) => {
            this.setState({audience: audienceArr});
        })
        .on('joined', (member) => {
            this.setState({member:member});
            sessionStorage.member = JSON.stringify(member);
        })
        .on('started', (info) => {
            this.setState(info);
        })
        .on('ask', (question) => {
            this.setState({
                currentQuestion: question
                ,currentAnswer: null
                ,answers: {
                    a:0
                    ,b:0
                    ,c:0
                    ,d:0
                }
            });
        })
        .on('answers', (answers) => {
            this.setState({
                questions: questions
            })
        })
        .on('addQuestion', (questions) => {
            this.setState({
                questions: questions
            })
        })
    }

    ,onEmit: function (msg, payload) {
        this.socket.emit(msg, payload);
    }

    ,render: function () {
        var propObj = jQuery.extend({emit:this.onEmit}, this.state);
        return (
            <div>
                <Headers 
                title   = {this.state.title}
                status  = {this.state.status} 
                speaker = {this.state.speaker}>
                    <span>Connected?</span>
                </Headers>
                {React.cloneElement(this.props.children, propObj)}
                <footer>
                    <ul>
                        <li>
                            <Link to="/">Audience</Link>
                        </li>
                        <li>
                            <Link to="/speaker">Speaker</Link>
                        </li>
                        <li>
                            <Link to="/board">Board</Link>
                        </li>
                    </ul>
                </footer>
            </div>
        )
    }

});

module.exports = PollApp;