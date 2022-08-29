import { FC } from 'react';
import AccordionMainItem from './AccordionMainItem';
import styles from './AccordionMain.module.scss';
import classNames from 'classnames';

export interface IAccordionMainProps {
  data: { id: number | string; title: string; content: any }[];
  className?: string;
}

const AccordionMain: FC<IAccordionMainProps> = ({ data, className }) => {
  return (
    <div className={classNames(className, styles.wrapper)}>
      {data.map((item) => {
        return (
          <AccordionMainItem
            className={styles['accordion-item']}
            key={item.id}
            title={item.title}
          >
            {item.content}
          </AccordionMainItem>
        );
      })}
    </div>
  );
};

export default AccordionMain;
