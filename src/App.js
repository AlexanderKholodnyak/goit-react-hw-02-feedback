import React, { Component } from 'react';
import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Notification from './components/NotificationMessage';
//import './App.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onFeedbackRefresh = ({ target }) => {
    const type = target.dataset.action;
    this.setState(prevState => {
      return { [type]: prevState[type] + 1 };
    });
  };
  onTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  onPositive = () => {
    return this.onTotalFeedback()
      ? Math.round((this.state.good / this.onTotalFeedback()) * 100)
      : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = ['good', 'neutral', 'bad'];

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onFeedback={this.onFeedbackRefresh}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          {this.onTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.onTotalFeedback()}
              positivePercentage={this.onPositive()}
            />
          ) : (
            <Notification message="No feedback given">)</Notification>
          )}
        </Section>
      </>
    );
  }
}

export default App;
