import React from 'react';

import config from '../config/index.json';

const About = () => {
  const { company } = config;
  const { logo, name: companyName } = company;

  return (
    <div
      id="about"
      className="mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4 py-12"
    >
      <div className="flex flex-col items-center justify-center">
        <div>
          <img src={logo} alt={companyName} className="w-16 h-16" />
        </div>
        <div className="flex items-center mt-6">
          <p className="mt-6 text-xs lg:text-sm leading-none text-gray-900 dark:text-gray-50">
            &copy; {new Date().getFullYear()}{' '}
            <a href="https://github.com/issaafalkattan" rel="nofollow">
              Wismo
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
