import React, { FC } from 'react';
import useCountdown from '@hooks/useCountdown';
import { ShowCounter } from './ShowCounter';

import styles from './CountdownTimer.module.scss';
import { ICounter } from '@type/general';
import classNames from 'classnames';

const CountdownTimer: FC<ICounter> = ({ targetDate, className }) => {
  const countdownClass: string = classNames(
    styles['countdown-link'],
    className
  );
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return null;
  } else {
    return (      
        <div className={countdownClass}>
          <ShowCounter
            days={days}
            hours={hours}
            minutes={minutes}
            seconds={seconds}
          />
        </div>   
    );
  }
};

export default CountdownTimer;
