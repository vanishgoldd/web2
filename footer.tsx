import React from 'react';
import { Link } from '@heroui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useTranslation } from 'react-i18next';

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="border-t border-divider py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Icon icon="lucide:layers" className="text-primary text-2xl" />
              <span className="font-bold text-xl">DevFolio</span>
            </div>
            <p className="text-default-500 text-sm mt-2">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4 mt-6">
              <Link href="#" aria-label="Twitter">
                <Icon icon="lucide:twitter" className="text-default-500 hover:text-primary" width={20} />
              </Link>
              <Link href="#" aria-label="GitHub">
                <Icon icon="lucide:github" className="text-default-500 hover:text-primary" width={20} />
              </Link>
              <Link href="#" aria-label="LinkedIn">
                <Icon icon="lucide:linkedin" className="text-default-500 hover:text-primary" width={20} />
              </Link>
              <Link href="#" aria-label="Instagram">
                <Icon icon="lucide:instagram" className="text-default-500 hover:text-primary" width={20} />
              </Link>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">{t('footer.product')}</h3>
            <ul className="space-y-3">
              <li>
                <Link as={ReactRouterLink} to="/templates" className="text-default-500 hover:text-primary text-sm">
                  {t('nav.templates')}
                </Link>
              </li>
              <li>
                <Link as={ReactRouterLink} to="/pricing" className="text-default-500 hover:text-primary text-sm">
                  {t('nav.pricing')}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-default-500 hover:text-primary text-sm">
                  {t('footer.customers')}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-default-500 hover:text-primary text-sm">
                  {t('footer.features')}
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">{t('footer.resources')}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-default-500 hover:text-primary text-sm">
                  {t('footer.documentation')}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-default-500 hover:text-primary text-sm">
                  {t('footer.guides')}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-default-500 hover:text-primary text-sm">
                  {t('footer.apiReference')}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-default-500 hover:text-primary text-sm">
                  {t('footer.blog')}
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">{t('footer.company')}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-default-500 hover:text-primary text-sm">
                  {t('footer.about')}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-default-500 hover:text-primary text-sm">
                  {t('footer.careers')}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-default-500 hover:text-primary text-sm">
                  {t('footer.privacy')}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-default-500 hover:text-primary text-sm">
                  {t('footer.terms')}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-divider">
          <p className="text-default-500 text-sm text-center">
            &copy; {new Date().getFullYear()} DevFolio. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};