import { useEffect, useState } from 'react';

export const useDarkMode = (checked: boolean) => {
  const [isDark, setDark] = useState(checked);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);
  return {
    isDark,
    toggle: () => {
      setDark(!isDark);
    },
  };
};
