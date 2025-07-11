export type Theme = 'dark' | 'light';

export const themeStyles: Record<Theme, Record<string, string>> = {
  dark: {
    container: 'bg-gray-900 text-gray-100',
    card: 'bg-gray-800/50 backdrop-blur-md border-gray-700',
    text: 'text-gray-100',
    muted: 'text-gray-400',
    accent: 'text-green-400',
    button: 'bg-green-600 hover:bg-green-700',
    progress: 'bg-green-400',
    badge: 'bg-gray-700 text-green-400',
    input: 'bg-gray-800/20 text-gray-100 caret-green-400 shadow-inner',
    prompt: 'text-green-400 glow',
    error: 'text-red-400',
    suggestion: 'bg-gray-800/60 text-gray-300 border-gray-600/50 shadow-lg',
    suggestionHover: 'bg-gray-700/50',
    output: 'text-gray-200 glow-text',
    canvas: 'opacity-20',
  },
  light: {
    container: 'bg-gray-100 text-gray-900',
    card: 'bg-white/80 backdrop-blur-md border-gray-200',
    text: 'text-gray-900',
    muted: 'text-gray-600',
    accent: 'text-green-600',
    button: 'bg-green-500 hover:bg-green-600',
    progress: 'bg-green-500',
    badge: 'bg-gray-200 text-green-600',
    input: 'bg-gray-100/20 text-gray-900 caret-green-600 shadow-inner',
    prompt: 'text-green-600 glow',
    error: 'text-red-600',
    suggestion: 'bg-gray-200/60 text-gray-700 border-gray-300/50 shadow-lg',
    suggestionHover: 'bg-gray-300/50',
    output: 'text-gray-800 glow-text',
    canvas: 'opacity-20',
  },
};

export const getThemeStyles = (theme: Theme) => themeStyles[theme];