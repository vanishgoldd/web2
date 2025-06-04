import React from 'react';
import { HeroSection } from '../components/hero-section';
import { FeaturesSection } from '../components/features-section';
import { TemplatesShowcase } from '../components/templates-showcase';
import { TestimonialsSection } from '../components/testimonials-section';
import { CTASection } from '../components/cta-section';

export const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <TemplatesShowcase />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};