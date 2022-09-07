/* global JSX*/
import classNames from 'classnames';
import styles from './ModalTitle.module.scss';

interface ModalHeadingProps {
  text: string | undefined;
  highLightedText?: string;
  className?: string;
  withShadow?: boolean;
}
export default function ModalTitle({
  text,
  highLightedText,
  className,
                                     withShadow,
}: ModalHeadingProps): JSX.Element {
  const textClasses = classNames(styles.headingStyles, className);

  return (
    <div className={textClasses}>
      <span className={classNames(styles.simpleTextStyles, { [styles.withShadow]: withShadow })}>
        {text}
      </span>
      {' '}
      {highLightedText && (
        <span className={classNames(styles.highLightedTextStyles, { [styles.withShadow]: withShadow })}>
          {highLightedText}
        </span>
      )}
    </div>
  );
}
