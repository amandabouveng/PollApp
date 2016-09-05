var React       = require('react');
var Display     = require('./parts/Display');
var JoinForm    = require('./parts/JoinForm');
var Ask         = require('./parts/Ask');

var Audience = React.createClass({

    render: function() {
        return (
            <Display if = {this.props.status === 'connected'} >
                <Display if = {this.props.member.name}>

                    <Display if={this.props.currentQuestion}>
                        <Ask    question={this.props.currentQuestion}
                                emit={this.props.emit}/>
                    </Display>

                    <Display if={!this.props.currentQuestion}>
                        <h4>Här kommer frågan att visas...</h4>
                    </Display>

                    <p>Anslutna användare: {this.props.audience.length}</p>
                </Display>

                <Display if = {!this.props.member.name}>
                    <JoinForm emit={this.props.emit} />
                </Display>
            </Display>
        )
    }
})

module.exports = Audience;