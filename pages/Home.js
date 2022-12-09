import React from 'react';
import Link from 'next/link';
import Profile from './Profile';

const Home = () => (
  <div>
    <h1 className="home-title">Welcome to the Workout App</h1>
    <p className="home-description">
      This app allows you to track your workouts and get personalized exercise
      suggestions using machine learning algorithms.
    </p>
    <Link href="/profile"><h3 className="home-link">Check your profile</h3></Link>
  </div>
);

export default Home;
