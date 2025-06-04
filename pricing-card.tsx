import React from 'react';
import { Card, CardBody, CardFooter, Button, Divider } from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  name: string;
  price: number | string;
  description: string;
  features: PricingFeature[];
  isPopular?: boolean;
  buttonText: string;
  delay: number;
}

export const PricingCard: React.FC<PricingCardProps> = ({
  name,
  price,
  description,
  features,
  isPopular = false,
  buttonText,
  delay
}) => {
  const { t } = useTranslation();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="h-full"
    >
      <Card className={`border ${isPopular ? 'border-primary' : 'border-divider'} h-full overflow-visible`}>
        {isPopular && (
          <div className="absolute -top-3 inset-x-0 flex justify-center">
            <span className="bg-primary text-white text-xs font-medium px-3 py-1 rounded-full">
              Most Popular
            </span>
          </div>
        )}
        <CardBody className="p-6">
          <h3 className="text-xl font-semibold">{name}</h3>
          <div className="mt-4 mb-2">
            <span className="text-4xl font-bold">
              {typeof price === 'number' ? `$${price}` : price}
            </span>
            {typeof price === 'number' && (
              <span className="text-default-500 ml-2">{t('pricing.month')}</span>
            )}
          </div>
          <p className="text-default-500 mb-6">{description}</p>
          <Divider className="my-6" />
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2 mt-1">
                  {feature.included ? (
                    <Icon icon="lucide:check" className="text-success" />
                  ) : (
                    <Icon icon="lucide:x" className="text-default-400" />
                  )}
                </span>
                <span className={feature.included ? 'text-foreground' : 'text-default-400'}>
                  {feature.text}
                </span>
              </li>
            ))}
          </ul>
        </CardBody>
        <CardFooter className="pt-0 pb-6 px-6">
          <Button 
            color={isPopular ? "primary" : "default"} 
            variant={isPopular ? "solid" : "flat"}
            radius="full"
            className="w-full font-medium"
            size="lg"
          >
            {buttonText}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};