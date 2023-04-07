import PropTypes from 'prop-types';
import css from '../section/Section.module.css';

export const Notification = ({ message }) => {
  return <p className={css.title}>{message}</p>;
};

Notification.prototype = {
  message: PropTypes.string.isRequired,
};
