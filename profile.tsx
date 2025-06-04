import React from 'react';
import { 
  Card, 
  CardBody, 
  CardHeader, 
  CardFooter, 
  Avatar, 
  Divider, 
  Tabs, 
  Tab, 
  Button, 
  Chip, 
  Badge 
} from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../context/auth-context';
import { Link, useHistory } from 'react-router-dom';
import { ProjectCard } from '../components/project-card';

export const ProfilePage: React.FC = () => {
  const { user } = useAuth();
  const { t } = useTranslation();
  const history = useHistory();
  const [selectedTab, setSelectedTab] = React.useState('projects');

  React.useEffect(() => {
    if (!user) {
      history.push('/login');
    }
  }, [user, history]);

  if (!user) {
    return null;
  }

  const projectCount = user.projects?.length || 0;
  const averageRating = user.projects && user.projects.length > 0
    ? (user.projects.reduce((sum, project) => sum + project.rating, 0) / user.projects.length).toFixed(1)
    : '0.0';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="border border-divider mb-8">
          <CardHeader className="flex flex-col md:flex-row gap-5 md:items-center">
            <Avatar
              name={user.name?.charAt(0) || user.email.charAt(0)}
              size="lg"
              color="primary"
              className="w-24 h-24 text-2xl"
              src={user.avatar}
            />
            <div className="flex-grow">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h1 className="text-2xl font-bold">{user.name || user.email.split('@')[0]}</h1>
                  <p className="text-default-500">{user.email}</p>
                </div>
                <Button
                  as={Link}
                  to="/settings"
                  variant="flat"
                  color="primary"
                  startContent={<Icon icon="lucide:edit" />}
                  className="mt-4 md:mt-0"
                >
                  {t('profile.editProfile')}
                </Button>
              </div>
              {user.bio && (
                <p className="mt-4 text-default-700">{user.bio}</p>
              )}
              <div className="flex flex-wrap gap-4 mt-4">
                {user.location && (
                  <div className="flex items-center gap-1 text-default-500">
                    <Icon icon="lucide:map-pin" className="text-default-400" />
                    <span>{user.location}</span>
                  </div>
                )}
                {user.website && (
                  <div className="flex items-center gap-1 text-default-500">
                    <Icon icon="lucide:link" className="text-default-400" />
                    <a href={user.website} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      {user.website.replace(/^https?:\/\//, '')}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border border-divider">
                <CardBody className="flex flex-col items-center p-6">
                  <div className="rounded-full bg-primary/10 p-3 mb-4">
                    <Icon icon="lucide:folder" className="text-primary text-2xl" />
                  </div>
                  <span className="text-3xl font-bold">{projectCount}</span>
                  <span className="text-default-500">{t('profile.projects')}</span>
                </CardBody>
              </Card>
              
              <Card className="border border-divider">
                <CardBody className="flex flex-col items-center p-6">
                  <div className="rounded-full bg-primary/10 p-3 mb-4">
                    <Icon icon="lucide:star" className="text-primary text-2xl" />
                  </div>
                  <span className="text-3xl font-bold">{averageRating}</span>
                  <span className="text-default-500">{t('profile.averageRating')}</span>
                </CardBody>
              </Card>
              
              <Card className="border border-divider">
                <CardBody className="flex flex-col items-center p-6">
                  <div className="rounded-full bg-primary/10 p-3 mb-4">
                    <Icon icon="lucide:eye" className="text-primary text-2xl" />
                  </div>
                  <span className="text-3xl font-bold">1,254</span>
                  <span className="text-default-500">{t('profile.views')}</span>
                </CardBody>
              </Card>
            </div>
          </CardBody>
        </Card>
        
        <Tabs 
          aria-label="Profile tabs" 
          selectedKey={selectedTab}
          onSelectionChange={key => setSelectedTab(key as string)}
          color="primary"
          variant="underlined"
          classNames={{
            tabList: "gap-6",
            cursor: "w-full",
            tab: "max-w-fit px-0 h-12",
          }}
        >
          <Tab 
            key="projects" 
            title={
              <div className="flex items-center gap-2">
                <Icon icon="lucide:folder" />
                <span>{t('profile.projects')}</span>
                <Chip size="sm" variant="flat" color="primary">{projectCount}</Chip>
              </div>
            }
          >
            {user.projects && user.projects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {user.projects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <Icon icon="lucide:folder" className="text-default-300 text-5xl mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{t('profile.noProjects')}</h3>
                <p className="text-default-500 mb-6">{t('profile.noProjectsDescription')}</p>
                <Button 
                  color="primary" 
                  variant="flat"
                  startContent={<Icon icon="lucide:plus" />}
                >
                  {t('profile.createProject')}
                </Button>
              </div>
            )}
          </Tab>
          <Tab 
            key="about" 
            title={
              <div className="flex items-center gap-2">
                <Icon icon="lucide:user" />
                <span>{t('profile.about')}</span>
              </div>
            }
          >
            <Card className="border border-divider mt-6">
              <CardBody className="p-6">
                <h3 className="text-xl font-semibold mb-4">{t('profile.about')}</h3>
                {user.bio ? (
                  <p className="text-default-700">{user.bio}</p>
                ) : (
                  <p className="text-default-500">{t('profile.noBio')}</p>
                )}
                
                <h3 className="text-xl font-semibold mt-8 mb-4">{t('profile.contactInformation')}</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Icon icon="lucide:mail" className="text-default-400" />
                    <span>{user.email}</span>
                  </div>
                  {user.location && (
                    <div className="flex items-center gap-3">
                      <Icon icon="lucide:map-pin" className="text-default-400" />
                      <span>{user.location}</span>
                    </div>
                  )}
                  {user.website && (
                    <div className="flex items-center gap-3">
                      <Icon icon="lucide:link" className="text-default-400" />
                      <a href={user.website} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        {user.website}
                      </a>
                    </div>
                  )}
                </div>
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </motion.div>
    </div>
  );
};