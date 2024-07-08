import React from 'react';

import styles from './inventorySavingBlock.module.scss';

export default function InventorySavingBlock({
  className = '',
  title,
  subTitle,
  items,
  sub,
  note,
}: InventorySavingBlockProps) {
  return (
    <div className={`${styles.InventorySavingBlock} ${className}`}>
      <div className="inventorySavingBlock_b-head">
        <h3>{title}</h3>
        <p>{subTitle}</p>
      </div>
      <div className="inventorySavingBlock_b-body">
        <ul>
          {items.map(item => (
            <li key={item.text + item.icon}>
              <p>
                {item.icon}
                <span>{item.text}</span>
              </p>
            </li>
          ))}
        </ul>
        <p className="inventorySavingBlock-sub">{sub}</p>
        <p className="inventorySavingBlock-note">{note}</p>
      </div>
    </div>
  );
}

interface ItemProps {
  icon: string;
  text: string;
}

interface InventorySavingBlockProps {
  className?: string;
  title?: string;
  subTitle?: string;
  sub?: string;
  items: Array<ItemProps>;
  note?: string;
}
