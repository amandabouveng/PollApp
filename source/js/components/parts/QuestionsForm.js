var React = require('react');

var QuestionsForm = React.createClass({

     render: function() {
        return (
            <form ref="newQuestionForm" action="javascript:void(0)" onSubmit={this.questionEntered}>
                <input type="text"
                        placeholder="Ange fråga här"
                        ref="questionInput"
                        required
                />
                <input type="text"
                        placeholder="svar a"
                        ref="answerInputA"
                        required
                />
                 <input type="text"
                        placeholder="svar b"
                        ref="answerInputB"
                        required
                />
                 <input type="text"
                        placeholder="svar c"
                        ref="answerInputC"
                        required
                />
                 <input type="text"
                        placeholder="svar d"
                        ref="answerInputD"
                        required
                />
                <button className="btn btn-primary">
                    Lägg till
                </button>
            </form>
        )
    }

    ,questionEntered: function() {
        var newQuestion = this.refs.questionInput.value;
        var answerA     = this.refs.answerInputA.value;
        var answerB     = this.refs.answerInputB.value;
        var answerC     = this.refs.answerInputC.value;
        var answerD     = this.refs.answerInputD.value;

        var newQuestion = {
            q: newQuestion
            ,a: answerA
            ,b: answerB
            ,c: answerC
            ,d: answerD
        };


       this.props.emit("addQuestion", newQuestion);
       this.refs.newQuestionForm.reset();
    }
})

module.exports = QuestionsForm;