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
  className?: string;
};

export default function Tabs(propsTabs: PropsTabs) {
  const { tabContent, children, activeKeyDefault, className } = propsTabs;

  return (
    <div className={`${styles.Tabs} ${className}`}>
      <div className={styles.TabsNav}>
        {tabContent.map((item: Tab) => (
          <span
            key={item.id}
            // onClick={() => setActive(item.id)}
            className={`${styles.TabsNavItem} ${activeKeyDefault === item.id ? styles.TabsNavActive : ''}`}
          >
            {item.title}
          </span>
        ))}
      </div>
      <div className={styles.TabsContent}>{children}</div>
    </div>
  );
}
