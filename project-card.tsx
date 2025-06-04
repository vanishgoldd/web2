import React from 'react';
import { Card, CardBody, CardFooter, Button, Chip } from '@heroui/react';
import { Icon } from '@iconify/react';
import { Project } from '../context/auth-context';
import { useTranslation } from 'react-i18next';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { t } = useTranslation();
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('default', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    }).format(date);
  };

  return (
    <Card className="border border-divider h-full">
      <div className="relative">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full aspect-[4/3] object-cover"
        />
        <div className="absolute top-3 right-3">
          <Chip color="primary" variant="flat" className="font-medium">
            <div className="flex items-center gap-1">
              <Icon icon="lucide:star" className="text-xs" />
              <span>{project.rating.toFixed(1)}</span>
            </div>
          </Chip>
        </div>
      </div>
      <CardBody className="pb-0">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-default-500 mb-4">{project.description}</p>
        <div className="flex items-center justify-between mb-4">
          <Chip size="sm" variant="flat" color="default">
            {project.category}
          </Chip>
          <span className="text-default-400 text-xs">
            {formatDate(project.createdAt)}
          </span>
        </div>
      </CardBody>
      <CardFooter className="flex justify-between gap-2">
        <Button 
          color="primary" 
          variant="flat" 
          className="flex-1"
          startContent={<Icon icon="lucide:eye" />}
        >
          {t('profile.viewProject')}
        </Button>
        <Button 
          color="default" 
          variant="light" 
          isIconOnly
          aria-label="Edit project"
        >
          <Icon icon="lucide:edit" />
        </Button>
      </CardFooter>
    </Card>
  );
};