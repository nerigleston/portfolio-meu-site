import { useTheme } from "@/components/ui/theme-provider";

export default function NotFoundPage(): JSX.Element {
  const { theme } = useTheme();
  const isDarkTheme: string = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';

  return (
    <div className={`min-h-screen flex items-center justify-center bg-${isDarkTheme === 'dark' ? 'gray-800' : 'gray-100'}`}>
      <div className="text-center">
        <h1 className={`text-5xl font-bold text-${isDarkTheme === 'dark' ? 'white' : 'black'}`}>404 - Página não encontrada</h1>
        <p className={`text-lg mt-4 text-${isDarkTheme === 'dark' ? 'gray-300' : 'gray-600'}`}>A página que você está procurando pode ter sido removida ou não está disponível temporariamente.</p>
        <p className={`text-lg mt-2 text-${isDarkTheme === 'dark' ? 'gray-300' : 'gray-600'}`}>Volte à <a href="/" className={`text-${isDarkTheme === 'dark' ? 'blue-400' : 'blue-600'} hover:underline`}>página inicial</a>.</p>
      </div>
    </div>
  );
}
