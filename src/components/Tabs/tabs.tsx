import React, { ReactNode } from 'react';

import styles from './tabs.module.scss';

type Tab = {
  id: number | string;
  title: string;
};

type PropsTabs = {
  tabContent: Tab[];
  children: ReactNode;
  activeKeyDefault: number | string;
};

export default function Tabs(propsTabs: PropsTabs) {
  const { tabContent, children, activeKeyDefault } = propsTabs;

  return (
    <div className={styles.Tabs}>
      <span className={styles.TabsNav}>
        {tabContent.map((item: Tab) => (
          <span
            key={item.id}
            // onClick={() => setActive(item.id)}
            className={`${styles.TabsNavItem} ${activeKeyDefault === item.id ? styles.TabsNavActive : ''}`}
          >
            {item.title}
          </span>
        ))}
      </span>
      <div className={styles.TabsContent}>{children}</div>
    </div>
  );
}
