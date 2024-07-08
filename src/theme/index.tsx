'use client';

import { ConfigProvider } from 'antd';
import React from 'react';

const withTheme = (node: JSX.Element) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          // // SeedToken
          colorBgBase: '#FFFFFF',
          borderRadius: 2,
          colorLink: '#BE7346',
          colorTextBase: '#09101D',
          fontFamily: 'var(--font-pretendard), sans-serif',
          fontSize: 14,
          colorPrimary: '#BE7346',
          colorLinkActive: '#BE7346',
          colorTextDisabled: '#FFFFFF',
          colorBgContainerDisabled: '#EBD5C7',
          colorError: '#F66570',
          // // MapToken
          lineHeight: 1.7,
          lineHeightHeading1: 1.7,
          lineHeightHeading2: 1.7,
          lineHeightHeading3: 1.7,
        },
        components: {
          Button: {
            defaultColor: '#BE7346',
            defaultBg: '#FFFFFF',
            defaultShadow: '5px 5px 10px 0px rgba(139, 140, 160, 0.25), 2px 2px 5px 0px rgba(139, 140, 160, 0.10);',
            defaultBorderColor: 'transparent',
            defaultGhostBorderColor: '#BE7346',
            defaultGhostColor: '#BE7346',
            fontWeight: '600',
            groupBorderColor: '#BE7346',
            textHoverBg: '#BE7346',
            borderRadius: 8,
          },

          Timeline: {
            dotBg: 'rgba(0,0,0,0)',
            dotBorderWidth: 1,
            itemPaddingBottom: 32,
            tailColor: '#09101D',
            tailWidth: 1,
          },
        },
      }}
    >
      {node}
    </ConfigProvider>
  );
};

export default withTheme;
