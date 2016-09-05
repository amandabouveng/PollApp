var React = require('react');

var Ask = React.createClass({
    answer: function(optionName){
        this.props.emit('answer', optionName);
    }
    ,render: function() {
        //kollar vilka egenskaper objectet har och skapar en array av dem
        var options = Object.keys(this.props.question);
        //tar bort det första värdet i en array
        options.shift();

          var optionsList = options.map((optionName, i) => {
            return (
               <li key={i}>
                    <a href='#' onClick={this.answer.bind(this, optionName)}> {optionName}:{this.props.question[optionName]} </a>
            </li>
            )
        })

        console.log(options.join('\n'));
        return (
            <div>
                <h3>{this.props.question.q}</h3>

            </div>
        )
    }

});

module.exports = Ask;