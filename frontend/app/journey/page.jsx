import React from 'react';
import JourneyPageClient from './JourneyPageClient';

export const metadata = {
  title: 'The Journey | Kalceria',
  description: 'Experience the journey of Kalceria',
  robots: {
    index: false,
    follow: false,
  },
};

export default function JourneyPage() {
  return <JourneyPageClient />;
}
