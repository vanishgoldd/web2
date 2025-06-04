import React from 'react';
import { Tabs, Tab, Input, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from '@heroui/react';
import { Icon } from '@iconify/react';
import { useTranslation } from 'react-i18next';

interface TemplateFilterProps {
  onSearch: (query: string) => void;
  onCategoryChange: (category: string) => void;
  onSortChange: (sort: string) => void;
}

export const TemplateFilter: React.FC<TemplateFilterProps> = ({ 
  onSearch, 
  onCategoryChange, 
  onSortChange 
}) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('all');
  const [sortOption, setSortOption] = React.useState('popular');
  const { t } = useTranslation();

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    onSearch(value);
  };

  const handleCategoryChange = (key: React.Key) => {
    setSelectedCategory(key.toString());
    onCategoryChange(key.toString());
  };

  const handleSortChange = (key: React.Key) => {
    setSortOption(key.toString());
    onSortChange(key.toString());
  };

  return (
    <div className="mb-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <h1 className="text-3xl font-bold">{t('templatesPage.title')}</h1>
        <div className="w-full md:w-auto">
          <Input
            placeholder={t('templatesPage.search')}
            value={searchQuery}
            onValueChange={handleSearch}
            startContent={<Icon icon="lucide:search" className="text-default-400" />}
            className="w-full md:w-64"
          />
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <Tabs 
          aria-label="Template categories" 
          selectedKey={selectedCategory}
          onSelectionChange={handleCategoryChange}
          color="primary"
          variant="light"
          classNames={{
            tabList: "gap-4",
            cursor: "bg-primary/10 rounded-md",
          }}
        >
          <Tab key="all" title={t('templatesPage.all')} />
          <Tab key="developer" title={t('templatesPage.developer')} />
          <Tab key="designer" title={t('templatesPage.designer')} />
          <Tab key="creative" title={t('templatesPage.creative')} />
          <Tab key="minimal" title={t('templatesPage.minimal')} />
        </Tabs>
        
        <Dropdown>
          <DropdownTrigger>
            <Button 
              variant="flat" 
              endContent={<Icon icon="lucide:chevron-down" className="text-small" />}
            >
              {t('templatesPage.sortBy')} {sortOption === 'popular' ? t('templatesPage.popular') : 
                sortOption === 'newest' ? t('templatesPage.newest') : 
                sortOption === 'price-asc' ? t('templatesPage.priceLow') : 
                t('templatesPage.priceHigh')}
            </Button>
          </DropdownTrigger>
          <DropdownMenu 
            aria-label="Sort options"
            selectionMode="single"
            selectedKeys={[sortOption]}
            onSelectionChange={(keys) => {
              const selected = Array.from(keys)[0];
              if (selected) {
                handleSortChange(selected);
              }
            }}
          >
            <DropdownItem key="popular">{t('templatesPage.popular')}</DropdownItem>
            <DropdownItem key="newest">{t('templatesPage.newest')}</DropdownItem>
            <DropdownItem key="price-asc">{t('templatesPage.priceLow')}</DropdownItem>
            <DropdownItem key="price-desc">{t('templatesPage.priceHigh')}</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
  );
};