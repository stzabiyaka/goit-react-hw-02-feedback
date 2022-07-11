import React, { Component } from 'react';
import { PageTitle } from 'components/PageTitle/PageTitle';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Satistics/Statistics';
import { Footer } from 'components/Footer/Footer';
import { Notification } from 'components/Notification/Notification';
import { Application } from './App.styled';

export class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };
  isStatistics = false;

  handleClick = event => {
    if (!this.isStatistics) {
      this.isStatistics = true;
    }
    const name = event.target.dataset.name;
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  countTotalFeedback = () => {
    const values = Object.values(this.state);
    return values.reduce((accum, current) => {
      return accum + current;
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
