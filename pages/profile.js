import React from 'react';
import Link from 'next/link';

const Profile = () => (
  <div>
    <h1>Your Profile</h1>
    <dl>
      <dt>Height:</dt>
      <dd>180 cm</dd>
      <dt>Weight:</dt>
      <dd>80 kg</dd>
      <dt>Goals:</dt>
      <dd>Lose weight and gain muscle</dd>
      <dt>Workouts completed:</dt>
      <dd>10</dd>
    </dl>
    <h3><Link href="/">Go back to the home page</Link></h3>
  </div>
);

export default Profile;
