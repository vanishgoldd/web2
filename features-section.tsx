import React from 'react';
import { Card, CardBody } from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <Card className="feature-card border border-divider h-full">
        <CardBody className="p-6">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-5">
            <Icon icon={icon} className="text-primary text-xl" />
          </div>
          <h3 className="text-xl font-semibold mb-3">{title}</h3>
          <p className="text-default-500">{description}</p>
        </CardBody>
      </Card>
    </motion.div>
  );
};

export const FeaturesSection: React.FC = () => {
  const { t } = useTranslation();
  
  const features = [
    {
      icon: "lucide:layout-template",
      title: t('features.customizable.title'),
      description: t('features.customizable.description')
    },
    {
      icon: "lucide:github",
      title: t('features.github.title'),
      description: t('features.github.description')
    },
    {
      icon: "logos:figma",
      title: t('features.figma.title'),
      description: t('features.figma.description')
    },
    {
      icon: "lucide:code",
      title: t('features.code.title'),
      description: t('features.code.description')
    },
    {
      icon: "lucide:smartphone",
      title: t('features.responsive.title'),
      description: t('features.responsive.description')
    },
    {
      icon: "lucide:settings",
      title: t('features.domain.title'),
      description: t('features.domain.description')
    }
  ];

  return (
    <section className="py-20 bg-content1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {t('features.title')}
          </motion.h2>
          <motion.p 
            className="mt-4 text-xl text-default-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t('features.description')}
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={0.1 * (index % 3)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};