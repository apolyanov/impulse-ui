declare const useITheme: () => {
    setCurrentThemeMode: import("react").Dispatch<import("react").SetStateAction<import("@impulse-ui/types").ThemeMode>>;
    currentThemeMode: import("@impulse-ui/types").ThemeMode;
};
export default useITheme;
