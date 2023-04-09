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
    switch (e.target.name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    if (total > 0) {
      return Math.round((good / total) * 100);
    }
  };

  const options = ['good', 'neutral', 'bad'];
  const total = countTotalFeedback();

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
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        </Section>
      ) : (
        <Notification message={'No feedback given'} />
      )}
    </div>
  );
};
