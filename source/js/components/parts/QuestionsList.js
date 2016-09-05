var React = require('react');

var QuestionsList = React.createClass({
    ask:function(question){
        this.props.emit('ask', question);

    },
    
    render:function () {
        var questionsItems = this.props.questions.map((questions, i) => {
            return (
                <ul>
               <li key={i}>
                    <a href='#' onClick={this.ask.bind(this, questions)}> {questions.q}</a>
                </li>
                <li>
                    {questions.a}
                </li>
                <li>
                    {questions.b}
                </li>
                <li>
                    {questions.c}
                </li>
                <li>
                    {questions.d}
                </li>
                </ul>
            )
        })

       return (
            <div>
                <h2>Antal {this.props.questions.length}</h2>
                <div>
                    {questionsItems}
                </div>
            </div>
        )
    }

})

module.exports = QuestionsList;