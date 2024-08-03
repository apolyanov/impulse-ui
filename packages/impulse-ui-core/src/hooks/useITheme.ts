import { useIThemeContext } from '../hooks';

const useITheme = () => {
  const { setCurrentThemeMode, currentThemeMode } = useIThemeContext();

  return { setCurrentThemeMode, currentThemeMode };
};

export { useITheme };
