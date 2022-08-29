import useCountdown from '@hooks/useCountdown';
import { getNowUTCTime, parseValidDate } from '@utils/date-utils';
import classNames from 'classnames';
import styles from './RevealedIn.module.scss';
import { FC } from 'react';

const TIME_ICON_URL = '/other/time-icon.png';

export interface RevealedInProps {
  date: Date | string;
  text?: string;
  expiredText?: string;
  className?: string;
}

const DEFAULT_TEXT = 'NFTs will reveal in';
const DEFAULT_EXPIRED_TEXT = 'NFTs are revealed! Please reload the page';
const TIMER_DELAY = 1000;

export const RevealedIn: FC<RevealedInProps> = ({
  date,
  text = DEFAULT_TEXT,
  className,
  expiredText = DEFAULT_EXPIRED_TEXT,
}) => {
  let parsedDate = parseValidDate(date);
  if (!parsedDate) return null;
  const [day, hours, minutes, seconds] = useCountdown(date);
  const isTimeExpired = getNowUTCTime() > parsedDate.getTime() - TIMER_DELAY;

  const padZero = (i: number) => {
    return i.toString().padStart(2, '0');
  };

  const renderCountdown = (): string => {
    return `${padZero(day)}d : ${padZero(hours)}h : ${padZero(minutes)}m`;
  };

  if (isTimeExpired) return <div>{expiredText}</div>;

  return (
    <div className={classNames(styles.timer, className)}>
      <div className={styles.text}>{text}</div>
      <div className={styles.countdown}>
        <img src={TIME_ICON_URL} />
        <div className={styles['countdown-text']}>{renderCountdown()}</div>
      </div>
    </div>
  );
};
