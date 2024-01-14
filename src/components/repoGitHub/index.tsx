import {
  useGitHubAutomatedRepos,
  ProjectIcons,
  StackIcons
} from 'github-automated-repos';
import { useTheme } from '../ui/theme-provider';

function GitHub() {
  const data = useGitHubAutomatedRepos("nerigleston", "deploy");
  const { theme } = useTheme();
  const isDarkTheme =
    theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

  return (
    <div className={`container mx-auto mt-10 ${isDarkTheme ? 'dark' : 'light'}`}>
      {data.map((item) => (
        <div key={item.id} className={`bg-gray-300 dark:bg-gray-800 p-6 shadow-lg rounded-lg mb-6 ${isDarkTheme ? 'text-white' : 'text-gray-700'}`}>

          <div className="flex flex-wrap mb-4">
            {item.topics.map((icon) => (
              <ProjectIcons key={icon} className="project_Icon mr-2 mb-2" iconItem={icon} />
            ))}
          </div>

          <a href={item.html_url} className={`text-xl font-bold ${isDarkTheme ? 'text-blue-400' : 'text-blue-500'} hover:underline`}>
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">{item.name}</h1>
          </a>

          <p className={`${isDarkTheme ? 'text-gray-300' : 'text-gray-700'} mt-2 text-sm sm:text-base`}>{item.description}</p>

          {item.homepage && (
            <a href={item.homepage} className={`text-blue-500 ${isDarkTheme ? 'dark:hover:underline' : 'hover:underline'}`}>
              <h3 className="mt-2">Homepage</h3>
            </a>
          )}

          <div className="flex flex-wrap mt-4">
            {item.topics.map((icon) => (
              <div key={icon} className="mr-4 mb-2">
                <StackIcons key={`icon-${icon}`} className="stack_Icon" itemTopics={icon} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default GitHub;
