'use client';

import { useEffect, useState } from 'react';

const useMounted = (node: JSX.Element) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!mounted) {
      setMounted(true);
    }
  }, [mounted]);
  if (!mounted) return null;
  return node;
};

export default useMounted;
