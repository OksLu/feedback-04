import { useState } from 'react';
import { FeedbackOptions } from './feedback/Feedback';
import { Notification } from './notification/Notification';
import { Section } from './section/Section';
import { Statistic } from './statistic/Statistic';
import css from './App.module.css';
import { SiCoffeescript } from 'react-icons/si';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = e => {
    const option = e.target.name;
    if (option === 'good') {
      setGood(good + 1);
    }
    if (option === 'neutral') {
      setNeutral(neutral + 1);
    }
    if (option === 'bad') {
      setBad(bad + 1);
    }
  };
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    if (total > 0) {
      return Math.round((good / total) * 100);
    }
  };
  const total = countTotalFeedback();
  const options = ['good', 'neutral', 'bad'];
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <div>
      <div className={css.header}>
        <h2 className={css.title}>
          <SiCoffeescript />
          Espresso
        </h2>
      </div>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions options={options} onLeaveFeedback={handleClick} />
      </Section>

      {total > 0 ? (
        <Section title={'Statistic'}>
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      ) : (
        <Notification message={'No feedback given'} />
      )}
    </div>
  );
};
