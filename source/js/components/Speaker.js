var React           = require('react');
var Display         = require('./parts/Display');
var JoinSpeakerForm = require('./parts/JoinSpeakerForm');
var AudienceList    = require('./parts/AudienceList');
var QuestionsList   = require('./parts/QuestionsList');
var QuestionsForm   = require('./parts/QuestionsForm');

var Speaker = React.createClass({

    render: function() {
        return (
            <Display if={this.props.status == 'connected'}>
                <Display if={this.props.member.type === 'speaker'}>
                    <h2>Frågor</h2>
                    <AudienceList audience={this.props.audience} />
                    <QuestionsForm emit={this.props.emit}/>
                    <QuestionsList questions={this.props.questions}
                    emit={this.props.emit} />
                </Display>
                <Display if={this.props.member.type != 'speaker'}>
                    <JoinSpeakerForm emit={this.props.emit} />
                </Display>
            </Display>
        )
    }
})

module.exports = Speaker;