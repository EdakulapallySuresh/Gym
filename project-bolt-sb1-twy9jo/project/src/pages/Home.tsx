import React from 'react';
import { Hero } from '../components/Hero';
import { WorkoutCarousel } from '../components/WorkoutCarousel';
import { WorkoutShowcase } from '../components/WorkoutShowcase';
import { Features } from '../components/Features';

export const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <WorkoutCarousel />
      <WorkoutShowcase />
      <Features />
    </div>
  );
};