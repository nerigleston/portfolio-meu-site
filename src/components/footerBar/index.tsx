import React from 'react';
import { useTheme } from '../ui/theme-provider';
import InstagramIcon from './../../assets/icons8-instagram.svg';
import LinkedInIcon from './../../assets/icons8-linkedin.svg';
import GitHubIcon from './../../assets/icons8-github.svg';
import GmailIcon from './../../assets/icons8-gmail.svg';

const Footer: React.FC = () => {
  const { theme } = useTheme();
  const isDarkTheme =
    theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

  return (
    <footer className={`text-${isDarkTheme ? 'white' : 'gray-700'}`}>
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="flex justify-center">
          <ul className="flex flex-wrap gap-8">
            <li>
              <a href="https://www.instagram.com/nerigleston/">
                <img src={ InstagramIcon } alt="" />
              </a>
            </li>
            <li>
            <a href="https://github.com/nerigleston">
                <img src={ GitHubIcon } alt="" />
              </a>
            </li>
            <li>
            <a href="https://www.linkedin.com/in/nerigleston/">
                <img src={ LinkedInIcon } alt="" />
              </a>
            </li>
            <li>
            <a href="mailto:nerifilho1256@gmail.com">
                <img src={ GmailIcon } alt="" />
              </a>
            </li>
          </ul>
        </div>
        <hr className={`my-6 border-${isDarkTheme ? 'white' : 'black'} sm:mx-auto lg:my-8`} />
        <span className="text-sm flex justify-center ">
          © 2023 . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
