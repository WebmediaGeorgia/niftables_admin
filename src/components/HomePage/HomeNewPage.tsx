import React, { useEffect, useState } from 'react';

import Hero from '@components/Hero';

import CardNftUtility from '@components/shared/CardNftUtility';

import homeStyle from './HomePage.module.scss';
import NextHead from '@components/Head';

import Video from './Video';
import Buy from './Buy';
import NFTsUtilities from './NFTsUtilities';
import Faq from './Faq/Faq';

import { nftsUtilities } from '../../__mocks__/nftsUtilities';

const menu = ['Physical 1', 'Physical 2', 'Physical 3'];

const slides = [
  {
    id: 0,
    item: <CardNftUtility item={nftsUtilities[0]} />,
  },
  {
    id: 1,
    item: <CardNftUtility item={nftsUtilities[1]} />,
  },
  {
    id: 2,
    item: <CardNftUtility item={nftsUtilities[2]} />,
  },
  {
    id: 3,
    item: <CardNftUtility item={nftsUtilities[3]} />,
  },
  {
    id: 4,
    item: <CardNftUtility item={nftsUtilities[4]} />,
  },
  {
    id: 5,
    item: <CardNftUtility item={nftsUtilities[5]} />,
  },
  {
    id: 6,
    item: <CardNftUtility item={nftsUtilities[6]} />,
  },
  {
    id: 7,
    item: <CardNftUtility item={nftsUtilities[7]} />,
  },
];

export const HomeNewPage = ({ userType }) => {
  const data = [
    {
      id: 1,
      title: 'What is NFT?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla dolor, vehicula in eleifend at, imperdiet et nunc. Suspendisse congue malesuada porta. Duis tristique malesuada urna, ut euismod turpis tristique quis. Etiam et auctor sapien, et pharetra orci. Cras convallis nibh sed leo posuere, vitae sodales quam convallis. Phasellus id eleifend justo. Ut sed faucibus risus. Praesent dui augue, dapibus sed quam ut, dapibus ultrices augue. Etiam at orci leo. Etiam tempor albugiquet risus at posuere.',
    },
    {
      id: 2,
      title: 'What is NFT?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla dolor, vehicula in eleifend at, imperdiet et nunc. Suspendisse congue malesuada porta. Duis tristique malesuada urna, ut euismod turpis tristique quis. Etiam et auctor sapien, et pharetra orci. Cras convallis nibh sed leo posuere, vitae sodales quam convallis. Phasellus id eleifend justo. Ut sed faucibus risus. Praesent dui augue, dapibus sed quam ut, dapibus ultrices augue. Etiam at orci leo. Etiam tempor albugiquet risus at posuere.',
    },
    {
      id: 3,
      title: 'What is NFT?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla dolor, vehicula in eleifend at, imperdiet et nunc. Suspendisse congue malesuada porta. Duis tristique malesuada urna, ut euismod turpis tristique quis. Etiam et auctor sapien, et pharetra orci. Cras convallis nibh sed leo posuere, vitae sodales quam convallis. Phasellus id eleifend justo. Ut sed faucibus risus. Praesent dui augue, dapibus sed quam ut, dapibus ultrices augue. Etiam at orci leo. Etiam tempor albugiquet risus at posuere.',
    },
    {
      id: 4,
      title: 'What is NFT?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla dolor, vehicula in eleifend at, imperdiet et nunc. Suspendisse congue malesuada porta. Duis tristique malesuada urna, ut euismod turpis tristique quis. Etiam et auctor sapien, et pharetra orci. Cras convallis nibh sed leo posuere, vitae sodales quam convallis. Phasellus id eleifend justo. Ut sed faucibus risus. Praesent dui augue, dapibus sed quam ut, dapibus ultrices augue. Etiam at orci leo. Etiam tempor albugiquet risus at posuere.',
    },
    {
      id: 5,
      title: 'What is NFT?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla dolor, vehicula in eleifend at, imperdiet et nunc. Suspendisse congue malesuada porta. Duis tristique malesuada urna, ut euismod turpis tristique quis. Etiam et auctor sapien, et pharetra orci. Cras convallis nibh sed leo posuere, vitae sodales quam convallis. Phasellus id eleifend justo. Ut sed faucibus risus. Praesent dui augue, dapibus sed quam ut, dapibus ultrices augue. Etiam at orci leo. Etiam tempor albugiquet risus at posuere.',
    },
  ];

  return (
    <>
      <NextHead title='Home | Niftables' description='Home | Niftables' />

      <div className={homeStyle['home-page']}>
        <Video />

        <Buy  />
        <NFTsUtilities slides={slides} menu={menu} />
        <Faq data={data} />
      </div>
    </>
  );
};
