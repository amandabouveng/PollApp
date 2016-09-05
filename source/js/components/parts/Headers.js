var React = require('react');
var Display = require('./Display');

var Headers = React.createClass({

    render: function() {
        return (
            <header className="row">
                <div className="col-xs-10">
                    <h1>{this.props.title}</h1>
                    <Display if ={this.props.speaker}>
                        <h4>Talare: {this.props.speaker}</h4>
                    </Display>
                </div>
                <div className="col-xs-2">
                    <div 
                    id="connectionStatus"
                    className={this.props.status}></div>
                </div>
                {this.props.status}
            </header>
        )
    }

})

module.exports = Headers;