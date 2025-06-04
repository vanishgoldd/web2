import React from 'react';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from '@heroui/react';
import { Icon } from '@iconify/react';
import { useTranslation } from 'react-i18next';

export const LanguageSwitcher: React.FC = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button 
          variant="light" 
          size="sm" 
          startContent={<Icon icon="lucide:globe" className="text-default-500" />}
          className="text-default-500"
        >
          {currentLanguage === 'ru' ? 'RU' : 'EN'}
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Language selection">
        <DropdownItem 
          key="en" 
          startContent={<Icon icon="lucide:check" className={currentLanguage === 'en' ? "opacity-100" : "opacity-0"} />}
          onPress={() => changeLanguage('en')}
        >
          {t('language.english')}
        </DropdownItem>
        <DropdownItem 
          key="ru" 
          startContent={<Icon icon="lucide:check" className={currentLanguage === 'ru' ? "opacity-100" : "opacity-0"} />}
          onPress={() => changeLanguage('ru')}
        >
          {t('language.russian')}
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
