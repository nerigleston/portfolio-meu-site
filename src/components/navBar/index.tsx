import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useTheme } from "@/components/ui/theme-provider";
import { ModeToggle } from '../ui/mode-toggle';
import { Link, useLocation } from 'react-router-dom';

interface NavigationItem {
  name: string;
  href: string;
}

function classNames(...classes: (string | boolean)[]): string {
  return classes.filter(Boolean).join(' ');
}

const navigation: NavigationItem[] = [
  { name: 'Sobre mim', href: '/' },
  { name: 'Certificados', href: '/certificados' },
  { name: 'Atividade Extracurricular', href: '/atividades' },
  { name: 'Projetos', href: '/projetos' },
];

export default function NavBar() {
  const { theme } = useTheme();
  const location = useLocation();

  const isDarkTheme = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

  return (
    <Disclosure as="nav" className={` ${isDarkTheme ? 'text-white' : 'text-gray-700'}`}>
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex justify-center">
            <div className="flex h-16 items-center justify-between">
              <div className="flex justify-center sm:hidden w-full items-center gap-5">
                <Disclosure.Button className={`flex flex-row items-center justify-center rounded-md p-2 text-${isDarkTheme ? 'white' : 'gray-700'} hover:text-${isDarkTheme ? 'white' : 'gray-700'} focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white`}>
                  <span className="" />
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
                <ModeToggle />
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start mr-5">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          location.pathname === item.href ? `${isDarkTheme ? 'bg-white' : 'bg-gray-700'} ${isDarkTheme ? 'text-gray-700' : 'text-white'}` : `text-${isDarkTheme ? 'white' : 'gray-700'} ${isDarkTheme ? 'hover:bg-white' : 'hover:bg-gray-700'} ${isDarkTheme ? 'hover:text-gray-700' : 'hover:text-white'}`,
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                      >
                        {item.name}
                      </Link>
                    ))}
                    <ModeToggle />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={classNames(
                    location.pathname === item.href ? ` ${isDarkTheme ? 'text-white' : 'text-gray-700'}` : `text-${isDarkTheme ? 'white' : 'gray-700'} hover:bg-gray-700 hover:${isDarkTheme ? 'text-white' : 'text-gray-700'}`,
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
