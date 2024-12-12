'use client';

import { useEffect, useState } from 'react';


export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null; // return this null to avoid hydration errors
  }

  return <main >NextJS extension starter</main>;
}
