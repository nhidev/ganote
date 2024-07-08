'use client';

import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import { MEDIA_SIZE } from '@/utils/constants';

export const Desktop = ({ children }: any) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  const isDesktop = useMediaQuery({ minWidth: MEDIA_SIZE.desktop });
  return mounted && isDesktop ? children : null;
};

export const Tablet = ({ children }: any) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  const isTablet = useMediaQuery({ minWidth: MEDIA_SIZE.tablet, maxWidth: MEDIA_SIZE.desktop });
  return mounted && isTablet ? children : null;
};

export const Mobile = ({ children }: any) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isMobile = useMediaQuery({ maxWidth: MEDIA_SIZE.tablet - 1 });
  return mounted && isMobile ? children : null;
};

export const Default = ({ children }: any) => {
  const isNotMobile = useMediaQuery({ minWidth: MEDIA_SIZE.tablet });
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted && isNotMobile ? children : null;
};
