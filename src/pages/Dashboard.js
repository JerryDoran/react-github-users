import React from 'react';
import { UserInfo, Repos, User, Search, Navbar } from '../components';
import loadingImage from '../images/preloader.gif';
import { GithubContext } from '../context/context';

const Dashboard = () => {
  return (
    <main>
      {/* <Navbar /> */}
      {/* <Search /> */}
      <UserInfo />
      <User />
      <Repos />
    </main>
  );
};

export default Dashboard;
