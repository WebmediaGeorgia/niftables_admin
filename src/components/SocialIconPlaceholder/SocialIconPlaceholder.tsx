/* global JSX*/
import classNames from 'classnames';
import { ISocialIconPlaceholder } from 'src/types/general';

import styles from './SocialIconPlaceholder.module.scss';

export default function SocialIconPlaceholder({
  children,
  className,
}: ISocialIconPlaceholder): JSX.Element {
  return (
    <div className={classNames(className, styles.placeholder)}>{children}</div>
  );
}
