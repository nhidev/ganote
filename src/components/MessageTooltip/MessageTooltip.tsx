'use client';

import { memo } from 'react';

import type { ReactNode } from 'react';

import styles from './messageTooltip.module.scss';

const IconPlacement = ({ className = '' }: IconPlacementProps) => (
  <svg className={`icon ${className}`} width="23" height="24" viewBox="0 0 23 24" fill="none">
    <path
      d="M1.99921 0.192383C0.894644 0.192383 -0.000785828 1.08781 -0.000785828 2.19238L-0.00078392 21.2213C-0.00078392 23.0229 2.19429 23.906 3.44194 22.6065L21.711 3.5775C22.9314 2.30629 22.0305 0.192383 20.2683 0.192383H1.99921Z"
      fill="white"
    />
  </svg>
);

interface IconPlacementProps {
  className?: string;
}

const MessageTooltip = memo(({ placement = 'left', children, className = '' }: MessageTooltipProps) => {
  return (
    <div className={styles.MessageTooltip + ` ${className}`}>
      <div className="messageTooltip_b-wrapper">
        {children}
        <IconPlacement className={placement} />
      </div>
    </div>
  );
});

interface MessageTooltipProps {
  className?: string;
  children: ReactNode;
  placement?: 'left' | 'right';
}

MessageTooltip.displayName = 'MessageTooltip';
export default MessageTooltip;
