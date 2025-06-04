import React from 'react';
import { Button, Card, CardBody, CardFooter } from '@heroui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { useTranslation } from 'react-i18next';

interface TemplateCardProps {
  id: number;
  name: string;
  category: string;
  image: string;
  delay: number;
}

const TemplateCard: React.FC<TemplateCardProps> = ({ id, name, category, image, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <Card className="template-card border border-divider overflow-hidden">
        <div className="relative">
          <img 
            src={image} 
            alt={name} 
            className="w-full aspect-[4/3] object-cover"
          />
          <div className="template-overlay opacity-0 absolute inset-0 bg-background/80 flex items-center justify-center transition-opacity duration-300">
            <Button 
              color="primary" 
              variant="flat" 
              radius="full"
              className="font-medium"
              startContent={<Icon icon="lucide:eye" />}
            >
              Preview
            </Button>
          </div>
        </div>
        <CardFooter className="flex justify-between items-center">
          <div>
            <h3 className="font-semibold">{name}</h3>
            <p className="text-default-500 text-sm">{category}</p>
          </div>
          <Button 
            isIconOnly 
            variant="light" 
            radius="full"
            aria-label="Like template"
          >
            <Icon icon="lucide:heart" className="text-default-500" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export const TemplatesShowcase: React.FC = () => {
  const { t } = useTranslation();
  
  const templates = [
    { id: 1, name: "Developer Pro", category: "Developer", image: "https://img.heroui.chat/image/dashboard?w=600&h=450&u=10" },
    { id: 2, name: "Designer Portfolio", category: "Designer", image: "https://img.heroui.chat/image/dashboard?w=600&h=450&u=11" },
    { id: 3, name: "Minimalist", category: "Universal", image: "https://img.heroui.chat/image/dashboard?w=600&h=450&u=12" },
    { id: 4, name: "Dark Coder", category: "Developer", image: "https://img.heroui.chat/image/dashboard?w=600&h=450&u=13" },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <motion.h2 
              className="text-3xl font-bold"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {t('templates.title')}
            </motion.h2>
            <motion.p 
              className="mt-2 text-default-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {t('templates.description')}
            </motion.p>
          </div>
          <Button 
            as={ReactRouterLink}
            to="/templates"
            variant="flat" 
            color="primary" 
            radius="full"
            className="mt-4 md:mt-0 font-medium"
            endContent={<Icon icon="lucide:arrow-right" />}
          >
            {t('templates.viewAll')}
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {templates.map((template, index) => (
            <TemplateCard
              key={template.id}
              id={template.id}
              name={template.name}
              category={template.category}
              image={template.image}
              delay={0.1 * index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};