'use client';

import { Crisp } from 'crisp-sdk-web';
import { useEffect } from 'react';

export function CrispChat() {
  useEffect(() => {
    Crisp.configure(process.env.NEXT_PUBLIC_CRISP_ID!);
  }, []);

  return null;
}
