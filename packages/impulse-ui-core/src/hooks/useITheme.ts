import useIThemeContext from './useIThemeContext';

const useITheme = () => {
  const { setCurrentThemeMode, currentThemeMode } = useIThemeContext();

  return { setCurrentThemeMode, currentThemeMode };
};

export default useITheme;
