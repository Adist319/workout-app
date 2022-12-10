import React from 'react';
import Link from 'next/link';
import Profile from './Profile';

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
} from '@chakra-ui/react'

const Home = () => (
    <div>
        <Breadcrumb separator='-'>
            <BreadcrumbItem>
                <BreadcrumbLink href='#'>Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
                <BreadcrumbLink href='#'>About</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href='#'>Contact</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
        <h1 className="home-title">Welcome to the Workout App</h1>
        <p className="home-description">
            This app allows you to track your workouts and get personalized exercise
            suggestions using machine learning algorithms.
        </p>
        <Link href="/profile"><h3 className="home-link">Check your profile</h3></Link>

    </div>
);

export default Home;
