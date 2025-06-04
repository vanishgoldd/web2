import React from 'react';
import { Card, CardBody, Avatar } from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  avatarId: number;
  delay: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, name, title, avatarId, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <Card className="border border-divider h-full">
        <CardBody className="p-6">
          <Icon icon="lucide:quote" className="text-primary mb-4 text-xl" />
          <p className="text-default-700 mb-6">{quote}</p>
          <div className="flex items-center">
            <Avatar 
              src={`https://img.heroui.chat/image/avatar?w=64&h=64&u=${avatarId}`} 
              className="mr-4"
            />
            <div>
              <h4 className="font-semibold">{name}</h4>
              <p className="text-default-500 text-sm">{title}</p>
            </div>
          </div>
        </CardBody>
      </Card>
    </motion.div>
  );
};

export const TestimonialsSection: React.FC = () => {
  const { t } = useTranslation();
  
  const testimonials = [
    {
      quote: t('testimonials.1.quote'),
      name: t('testimonials.1.name'),
      title: t('testimonials.1.title'),
      avatarId: 20
    },
    {
      quote: t('testimonials.2.quote'),
      name: t('testimonials.2.name'),
      title: t('testimonials.2.title'),
      avatarId: 21
    },
    {
      quote: t('testimonials.3.quote'),
      name: t('testimonials.3.name'),
      title: t('testimonials.3.title'),
      avatarId: 22
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
            {t('testimonials.title')}
          </motion.h2>
          <motion.p 
            className="mt-4 text-xl text-default-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t('testimonials.description')}
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              title={testimonial.title}
              avatarId={testimonial.avatarId}
              delay={0.1 * index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};