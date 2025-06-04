import React from 'react';
import { Tabs, Tab, Card, CardBody, Divider, Accordion, AccordionItem } from '@heroui/react';
import { motion } from 'framer-motion';
import { PricingCard } from '../components/pricing-card';
import { useTranslation } from 'react-i18next';

export const PricingPage: React.FC = () => {
  const [pricingPeriod, setPricingPeriod] = React.useState('monthly');
  const { t } = useTranslation();

  const freeFeatures = [
    { text: t("pricing.3templates"), included: true },
    { text: t("features.customizable.title"), included: true },
    { text: t("pricing.publicRepos"), included: true },
    { text: t("features.responsive.title"), included: true },
    { text: "DevFolio subdomain", included: true },
    { text: t("pricing.customDomain"), included: false },
    { text: t("pricing.analytics"), included: false },
    { text: "Premium templates", included: false },
  ];

  const proFeatures = [
    { text: "All free features", included: true },
    { text: t("pricing.unlimited"), included: true },
    { text: "Advanced customization", included: true },
    { text: t("pricing.allRepos"), included: true },
    { text: t("features.figma.title"), included: true },
    { text: t("pricing.customDomain"), included: true },
    { text: t("pricing.analytics"), included: true },
    { text: t("pricing.priority"), included: true },
  ];

  const teamFeatures = [
    { text: "All Pro features", included: true },
    { text: "Team management", included: true },
    { text: "Collaborative editing", included: true },
    { text: "Team analytics", included: true },
    { text: "Agency branding", included: true },
    { text: "Client access management", included: true },
    { text: "API access", included: true },
    { text: t("pricing.dedicated"), included: true },
  ];

  const faqs = [
    {
      question: "Can I try DevFolio before purchasing?",
      answer: "Yes, you can sign up for our free plan which includes basic features and 3 templates. This allows you to explore the platform before committing to a paid plan."
    },
    {
      question: "How does the GitHub integration work?",
      answer: "Our GitHub integration automatically pulls your repositories, contributions, and activity. The free plan only supports public repositories, while paid plans support both public and private repositories."
    },
    {
      question: "Can I use my own domain name?",
      answer: "Yes, custom domains are available on our Pro and Team plans. You can connect any domain you own to your DevFolio portfolio."
    },
    {
      question: "How often can I change my portfolio template?",
      answer: "You can change your template as often as you like on any plan. All your content will automatically transfer to the new template."
    },
    {
      question: "Is there a limit to how many projects I can showcase?",
      answer: "The free plan allows up to 10 projects. Pro and Team plans have unlimited projects."
    },
    {
      question: "Can I cancel my subscription at any time?",
      answer: "Yes, you can cancel your subscription at any time. Your portfolio will remain active until the end of your billing period."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <motion.h1 
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {t('pricing.title')}
        </motion.h1>
        <motion.p 
          className="text-xl text-default-600 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {t('pricing.description')}
        </motion.p>
        
        <motion.div 
          className="mt-8 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Tabs 
            aria-label="Pricing period" 
            color="primary"
            variant="bordered"
            radius="full"
            selectedKey={pricingPeriod}
            onSelectionChange={(key) => setPricingPeriod(key as string)}
            classNames={{
              tabList: "bg-content2 p-1",
              cursor: "bg-primary text-white",
              tab: "px-6 py-2 data-[hover=true]:opacity-70",
            }}
          >
            <Tab key="monthly" title={t('pricing.monthly')} />
            <Tab key="annual" title={t('pricing.annual')} />
          </Tabs>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <PricingCard 
          name={t('pricing.free.name')}
          price="$0"
          description={t('pricing.free.description')}
          features={freeFeatures}
          buttonText={t('pricing.free.button')}
          delay={0}
        />
        <PricingCard 
          name={t('pricing.pro.name')}
          price={pricingPeriod === 'monthly' ? 12 : 115}
          description={t('pricing.pro.description')}
          features={proFeatures}
          isPopular={true}
          buttonText={t('pricing.pro.button')}
          delay={0.1}
        />
        <PricingCard 
          name={t('pricing.team.name')}
          price={pricingPeriod === 'monthly' ? 49 : 470}
          description={t('pricing.team.description')}
          features={teamFeatures}
          buttonText={t('pricing.team.button')}
          delay={0.2}
        />
      </div>

      <div className="mb-20">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {t('pricing.comparePlans')}
          </motion.h2>
          <motion.p 
            className="text-default-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t('pricing.findPlan')}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Card className="border border-divider">
            <CardBody className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[800px]">
                  <thead>
                    <tr className="bg-content2">
                      <th className="py-4 px-6 text-left">{t('pricing.features')}</th>
                      <th className="py-4 px-6 text-center">{t('pricing.free.name')}</th>
                      <th className="py-4 px-6 text-center">{t('pricing.pro.name')}</th>
                      <th className="py-4 px-6 text-center">{t('pricing.team.name')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-4 px-6 border-t border-divider">{t('pricing.templates')}</td>
                      <td className="py-4 px-6 text-center border-t border-divider">{t('pricing.3templates')}</td>
                      <td className="py-4 px-6 text-center border-t border-divider">{t('pricing.unlimited')}</td>
                      <td className="py-4 px-6 text-center border-t border-divider">{t('pricing.unlimited')}</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 border-t border-divider">{t('pricing.projects')}</td>
                      <td className="py-4 px-6 text-center border-t border-divider">{t('pricing.upTo10')}</td>
                      <td className="py-4 px-6 text-center border-t border-divider">{t('pricing.unlimited')}</td>
                      <td className="py-4 px-6 text-center border-t border-divider">{t('pricing.unlimited')}</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 border-t border-divider">{t('pricing.customDomain')}</td>
                      <td className="py-4 px-6 text-center border-t border-divider">—</td>
                      <td className="py-4 px-6 text-center border-t border-divider">✓</td>
                      <td className="py-4 px-6 text-center border-t border-divider">✓</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 border-t border-divider">{t('pricing.githubIntegration')}</td>
                      <td className="py-4 px-6 text-center border-t border-divider">{t('pricing.publicRepos')}</td>
                      <td className="py-4 px-6 text-center border-t border-divider">{t('pricing.allRepos')}</td>
                      <td className="py-4 px-6 text-center border-t border-divider">{t('pricing.allRepos')}</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 border-t border-divider">{t('pricing.figmaIntegration')}</td>
                      <td className="py-4 px-6 text-center border-t border-divider">—</td>
                      <td className="py-4 px-6 text-center border-t border-divider">✓</td>
                      <td className="py-4 px-6 text-center border-t border-divider">✓</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 border-t border-divider">{t('pricing.analytics')}</td>
                      <td className="py-4 px-6 text-center border-t border-divider">—</td>
                      <td className="py-4 px-6 text-center border-t border-divider">{t('pricing.basic')}</td>
                      <td className="py-4 px-6 text-center border-t border-divider">{t('pricing.advanced')}</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 border-t border-divider">{t('pricing.teamMembers')}</td>
                      <td className="py-4 px-6 text-center border-t border-divider">{t('pricing.1member')}</td>
                      <td className="py-4 px-6 text-center border-t border-divider">{t('pricing.1member')}</td>
                      <td className="py-4 px-6 text-center border-t border-divider">{t('pricing.upTo10members')}</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 border-t border-divider">{t('pricing.support')}</td>
                      <td className="py-4 px-6 text-center border-t border-divider">{t('pricing.email')}</td>
                      <td className="py-4 px-6 text-center border-t border-divider">{t('pricing.priority')}</td>
                      <td className="py-4 px-6 text-center border-t border-divider">{t('pricing.dedicated')}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardBody>
          </Card>
        </motion.div>
      </div>

      <div className="mb-20">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {t('pricing.faq')}
          </motion.h2>
          <motion.p 
            className="text-default-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t('pricing.questions')}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion variant="bordered">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} title={faq.question}>
                <p className="text-default-600">{faq.answer}</p>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </div>
  );
};