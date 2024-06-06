import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

function ThemedButtonContext() {
  const theme = useContext(ThemeContext);
  return (
    <button style={{ backgroundColor: theme.background, color: theme.foreground }}>
      Themed Button
    </button>
  );
}

export default ThemedButtonContext;
