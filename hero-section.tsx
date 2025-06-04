import React from 'react';
import { Button, Link } from '@heroui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { useTranslation } from 'react-i18next';

export const HeroSection: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className="relative overflow-hidden">
      <div className="hero-gradient absolute inset-0 z-0"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 md:pt-24 md:pb-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              {t('hero.title')}{' '}
              <span className="text-primary">{t('hero.titleHighlight')}</span>{' '}
              {t('hero.titleEnd')}
            </h1>
            <p className="mt-6 text-xl text-default-600 max-w-2xl mx-auto lg:mx-0">
              {t('hero.description')}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                as={ReactRouterLink}
                to="/signup"
                color="primary" 
                size="lg" 
                radius="full"
                className="font-medium px-8"
                startContent={<Icon icon="lucide:rocket" />}
              >
                {t('hero.getStarted')}
              </Button>
              <Button 
                as={ReactRouterLink}
                to="/templates"
                variant="flat" 
                color="default" 
                size="lg" 
                radius="full"
                className="font-medium"
                startContent={<Icon icon="lucide:layout-template" />}
              >
                {t('hero.browseTemplates')}
              </Button>
            </div>
            <div className="mt-8 flex items-center justify-center lg:justify-start">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((id) => (
                  <img 
                    key={id}
                    src={`https://img.heroui.chat/image/avatar?w=48&h=48&u=${id}`} 
                    alt={`User ${id}`}
                    className="w-8 h-8 rounded-full border-2 border-background"
                  />
                ))}
              </div>
              <div className="ml-3 text-sm text-default-600">
                <span className="font-semibold text-foreground">500+</span> {t('hero.usersJoined')}
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-xl overflow-hidden shadow-xl border border-divider">
              <img 
                src="https://img.heroui.chat/image/dashboard?w=1200&h=800&u=1" 
                alt="Portfolio dashboard preview" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-6">
                <div className="w-full">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-semibold">Portfolio Dashboard</h3>
                      <p className="text-sm text-default-500">Manage all your projects in one place</p>
                    </div>
                    <Button size="sm" color="primary" radius="full">Preview</Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};