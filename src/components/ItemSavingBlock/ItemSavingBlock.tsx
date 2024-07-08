'use client'
import { Table } from 'antd';
import React from 'react';

import type { ColumnsType } from 'antd/es/table';
import { Default, Mobile } from '@/components';

import styles from './itemSavingBlock.module.scss';

export default function ItemSavingBlock({ className = '', title, subTitle, columns, data, subTitleMobile }: ItemSavingBlockProps) {
  return (
    <div className={`${styles.ItemSavingBlock} ${className}`}>
      <div className="itemSavingBlock_b-head">
        <h3>{title}</h3>
        <Default>
          <p>{subTitle} </p>
        </Default>
        <Mobile>
          <p>{subTitleMobile} </p>
        </Mobile>
      </div>
      <div className="itemSavingBlock_b-body">
        <Table columns={columns} dataSource={data} pagination={false} />
      </div>
    </div>
  );
}

interface ItemSavingBlockProps {
  className?: string;
  title: string;
  subTitle: string;
  columns: ColumnsType<DataType>;
  data: DataType[];
  subTitleMobile?: string;
}

interface DataType {
  key: string;
  name: string;
  price: string;
  itemUsage: string;
}
