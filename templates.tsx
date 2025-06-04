import React from 'react';
import { Card, CardBody, CardFooter, Button, Chip, Pagination } from '@heroui/react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { TemplateFilter } from '../components/template-filter';
import { useTranslation } from 'react-i18next';

interface Template {
  id: number;
  name: string;
  description: string;
  category: string;
  image: string;
  price: number | null;
  tags: string[];
}

export const TemplatesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('all');
  const [sortOption, setSortOption] = React.useState('popular');
  const [currentPage, setCurrentPage] = React.useState(1);
  const { t } = useTranslation();
  
  const templates: Template[] = [
    {
      id: 1,
      name: "Developer Pro",
      description: "A clean, modern template for developers with GitHub integration",
      category: "developer",
      image: "https://img.heroui.chat/image/dashboard?w=600&h=450&u=10",
      price: null,
      tags: ["GitHub", "Code", "Dark Mode"]
    },
    {
      id: 2,
      name: "Designer Portfolio",
      description: "Showcase your design work with this visually stunning template",
      category: "designer",
      image: "https://img.heroui.chat/image/dashboard?w=600&h=450&u=11",
      price: 19,
      tags: ["Figma", "Gallery", "Animation"]
    },
    {
      id: 3,
      name: "Minimalist",
      description: "A simple, elegant template for any professional",
      category: "minimal",
      image: "https://img.heroui.chat/image/dashboard?w=600&h=450&u=12",
      price: null,
      tags: ["Clean", "Simple", "Responsive"]
    },
    {
      id: 4,
      name: "Dark Coder",
      description: "Perfect for developers who prefer a dark theme",
      category: "developer",
      image: "https://img.heroui.chat/image/dashboard?w=600&h=450&u=13",
      price: 29,
      tags: ["Dark", "Code", "Terminal"]
    },
    {
      id: 5,
      name: "Creative Studio",
      description: "For creative professionals who want to stand out",
      category: "creative",
      image: "https://img.heroui.chat/image/dashboard?w=600&h=450&u=14",
      price: 39,
      tags: ["Creative", "Animation", "Interactive"]
    },
    {
      id: 6,
      name: "UX Designer",
      description: "Highlight your UX process and case studies",
      category: "designer",
      image: "https://img.heroui.chat/image/dashboard?w=600&h=450&u=15",
      price: null,
      tags: ["UX", "Case Studies", "Process"]
    },
    {
      id: 7,
      name: "Full Stack",
      description: "Showcase both your frontend and backend skills",
      category: "developer",
      image: "https://img.heroui.chat/image/dashboard?w=600&h=450&u=16",
      price: 19,
      tags: ["Full Stack", "API", "Database"]
    },
    {
      id: 8,
      name: "Minimal Resume",
      description: "A clean, simple resume-style portfolio",
      category: "minimal",
      image: "https://img.heroui.chat/image/dashboard?w=600&h=450&u=17",
      price: null,
      tags: ["Resume", "Minimal", "Professional"]
    },
  ];

  const filteredTemplates = templates.filter(template => {
    const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          template.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || template.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedTemplates = [...filteredTemplates].sort((a, b) => {
    switch (sortOption) {
      case 'newest':
        return b.id - a.id;
      case 'price-asc':
        return (a.price || 0) - (b.price || 0);
      case 'price-desc':
        return (b.price || 0) - (a.price || 0);
      default: // popular
        return 0;
    }
  });

  const itemsPerPage = 6;
  const totalPages = Math.ceil(sortedTemplates.length / itemsPerPage);
  const currentTemplates = sortedTemplates.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <TemplateFilter 
        onSearch={setSearchQuery}
        onCategoryChange={setSelectedCategory}
        onSortChange={setSortOption}
      />

      {currentTemplates.length === 0 ? (
        <div className="text-center py-20">
          <Icon icon="lucide:search-x" className="text-default-400 text-5xl mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">{t('templatesPage.noResults')}</h3>
          <p className="text-default-500">{t('templatesPage.tryAdjusting')}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentTemplates.map((template, index) => (
            <motion.div
              key={template.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="border border-divider h-full">
                <div className="relative">
                  <img 
                    src={template.image} 
                    alt={template.name} 
                    className="w-full aspect-[4/3] object-cover"
                  />
                  {template.price !== null && (
                    <div className="absolute top-3 right-3">
                      <Chip color="primary" variant="flat" className="font-medium">
                        ${template.price}
                      </Chip>
                    </div>
                  )}
                  {template.price === null && (
                    <div className="absolute top-3 right-3">
                      <Chip color="success" variant="flat" className="font-medium">
                        {t('templatesPage.free')}
                      </Chip>
                    </div>
                  )}
                </div>
                <CardBody className="pb-0">
                  <h3 className="text-xl font-semibold mb-2">{template.name}</h3>
                  <p className="text-default-500 mb-4">{template.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {template.tags.map((tag, i) => (
                      <Chip key={i} size="sm" variant="flat" color="default">
                        {tag}
                      </Chip>
                    ))}
                  </div>
                </CardBody>
                <CardFooter className="flex justify-between gap-2">
                  <Button 
                    color="primary" 
                    variant="flat" 
                    className="flex-1"
                    startContent={<Icon icon="lucide:eye" />}
                  >
                    {t('templates.preview')}
                  </Button>
                  <Button 
                    color="primary" 
                    className="flex-1"
                    startContent={<Icon icon="lucide:plus" />}
                  >
                    {t('templates.useTemplate')}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      )}

      {totalPages > 1 && (
        <div className="flex justify-center mt-12">
          <Pagination 
            total={totalPages} 
            initialPage={currentPage}
            onChange={setCurrentPage}
            color="primary"
            showControls
          />
        </div>
      )}
    </div>
  );
};