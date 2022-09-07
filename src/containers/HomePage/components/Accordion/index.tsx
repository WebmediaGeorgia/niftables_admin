import React, { FC, memo, useState } from 'react';
import styles from './styles.module.scss';
import { sliceIntoChunks } from '@utils/array-utils';
import cn from 'classnames';

type accordionItemType = {
  title: string
  content: string
}

type Props = {
  accordionItems: accordionItemType[]
}

const Accordion: FC<Props> = ({ accordionItems }) => {
  const accordionItemsArray = sliceIntoChunks<accordionItemType>(accordionItems, 7);
  const [showText, setShowText] = useState<number | null>(null);

  const handleShowText = (index: number) => {
    if (index === showText) {
      setShowText(null);
      return;
    }
    setShowText(index);
  };
  return (
    <div className={styles.accordionWrap}>
      {accordionItemsArray.map((item, index1) => <div key={index1} className={styles.accordion}>
        {item.map(({ title, content }, index2) => <div key={(index1 * 7) + index2}
                                                       onClick={() => handleShowText((index1 * 7) + index2)}
                                                       className={cn(styles.accordionItem, { [styles.show]: showText === (index1 * 7) + index2 })}>
          <div className={styles.accordionTitle}>{title}</div>
          <div className={styles.accordionContent}>
            {content}
          </div>
        </div>)}
      </div>)}

    </div>
  );
};

export default memo(Accordion);
