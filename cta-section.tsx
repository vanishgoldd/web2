import React from 'react';
import { Button } from '@heroui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { useTranslation } from 'react-i18next';

export const CTASection: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-primary">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-600 opacity-90"></div>
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-20">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path fill="#FFFFFF" d="M47.1,-57.5C59.9,-47.4,68.7,-31.6,71.7,-14.6C74.7,2.4,71.8,20.7,62.4,34.1C53,47.5,37.1,56.1,20.4,62.4C3.7,68.7,-13.8,72.8,-30.2,68.1C-46.6,63.4,-61.9,50,-69.5,33C-77.1,16,-77,-4.6,-70.3,-22.1C-63.6,-39.6,-50.3,-54,-35.2,-63.5C-20.1,-73,-10.1,-77.6,3.2,-81.5C16.4,-85.4,32.9,-88.6,43.5,-76.6C54.1,-64.6,58.9,-40.4,47.1,-57.5Z" transform="translate(100 100)" />
              </svg>
            </div>
          </div>
          <div className="relative py-16 px-8 md:py-24 md:px-12 text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {t('cta.title')}
            </motion.h2>
            <motion.p 
              className="text-white/90 text-xl max-w-2xl mx-auto mb-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {t('cta.description')}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button 
                as={ReactRouterLink}
                to="/signup"
                color="default" 
                size="lg" 
                radius="full"
                className="font-medium bg-white text-primary hover:bg-white/90 px-8"
                startContent={<Icon icon="lucide:rocket" />}
              >
                {t('cta.getStarted')}
              </Button>
              <Button 
                as={ReactRouterLink}
                to="/templates"
                variant="flat" 
                color="default" 
                size="lg" 
                radius="full"
                className="font-medium bg-white/20 text-white hover:bg-white/30"
                startContent={<Icon icon="lucide:layout-template" />}
              >
                {t('cta.browseTemplates')}
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};