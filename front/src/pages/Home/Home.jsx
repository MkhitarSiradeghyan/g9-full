import React from 'react'
import BrowseByType from '../../components/BrowseByType/BrowseByType';
import Card from '../../components/Card/Card';
import Reviews from './../../components/Reviews/Reviews';
import ReviewCard from '../../components/ReviewCard/ReviewCard';

const Home = () => {
  return (
    <div>
      <BrowseByType/>
      <Card/>
      <Reviews/>
    </div>
  )
}

export default Home
