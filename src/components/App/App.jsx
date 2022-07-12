import React, { Component } from 'react';
import { PageTitle } from 'components/PageTitle';
import { Section } from 'components/Section';
import { FeedbackOptions } from 'components/FeedbackOptions';
import { Statistics } from 'components/Satistics';
import { Footer } from 'components/Footer';
import { Notification } from 'components/Notification';
import { Application } from './App.styled';

export class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };
  isStatistics = false;

  handleClick = option => {
    if (!this.isStatistics) {
      this.isStatistics = true;
    }
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  };

  countTotalFeedback = () => {
    const values = Object.values(this.state);
    return values.reduce((total, value) => {
      return total + value;
    }, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    return (
      <Application>
        <PageTitle title="React Homework #02 - Feedback" />

        <Section title="Please leave feedback">
          <FeedbackOptions
            onLeaveFeedback={this.handleClick}
            options={Object.keys(this.state)}
          />
        </Section>

        <Section title="Statistics">
          {this.isStatistics ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>

        <Footer
          name="Stanislav Zabiyaka"
          href="https://github.com/stzabiyaka"
        />
      </Application>
    );
  }
}
