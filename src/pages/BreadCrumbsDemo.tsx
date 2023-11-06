import React from 'react';
import BreadCrumbs from '../Components/BreadCrumbs';

const BreadCrumbsDemo = () => {

  const routes = [
    {
      href: '/',
      label: 'Home'
    }, {
      href: '/breadcrumbs',
      label: 'Breadcrumbs'
    }
  ];

  return (
    <div>
      <BreadCrumbs separator={'>'} />
    </div>
  );
};

export default BreadCrumbsDemo;