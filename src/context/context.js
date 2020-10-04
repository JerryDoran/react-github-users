import React, { useState, useEffect } from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
import axios from 'axios';

const rootUrl = 'https://api.github.com';

const GithubContext = React.createContext();

// Now we have access to the Provider and Consumer component when we create a context - ex. GithubContext.Provider

const GithubProvider = ({ children }) => {
  return (
    <GithubContext.Provider value={'hello'}>{children}</GithubContext.Provider>
  );
};

export { GithubProvider, GithubContext };
