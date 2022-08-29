import DateTimeDisplay from './DateTimeDisplay';
import styles from './CountdownTimer.module.scss';
import classNames from 'classnames';

export const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className={styles['show-counter']}>
      <DateTimeDisplay
        className={classNames(styles.dateTime, styles['dateTime-day'])}
        value={days}
        type={'Days'}
        isDanger={days <= 3}
      />

      <DateTimeDisplay
        className={classNames(styles.dateTime, styles['dateTime-hour'])}
        value={hours}
        type={'Hours'}
      />

      <DateTimeDisplay
        className={classNames(styles.dateTime, styles['dateTime-minute'])}
        value={minutes}
        type={'minutes'}
      />

      <DateTimeDisplay
        className={classNames(styles.dateTime, styles['dateTime-second'])}
        value={seconds}
        type={'Seconds'}
      />
    </div>
  );
};
