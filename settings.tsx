import React from 'react';
import { 
  Card, 
  CardBody, 
  CardHeader, 
  CardFooter, 
  Divider, 
  Tabs, 
  Tab, 
  Input, 
  Button, 
  Textarea,
  Switch
} from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../context/auth-context';
import { useHistory } from 'react-router-dom';

export const SettingsPage: React.FC = () => {
  const { user, updateUserProfile } = useAuth();
  const { t } = useTranslation();
  const history = useHistory();
  const [selectedTab, setSelectedTab] = React.useState('profile');
  
  const [formData, setFormData] = React.useState({
    name: user?.name || '',
    email: user?.email || '',
    bio: user?.bio || '',
    location: user?.location || '',
    website: user?.website || '',
  });
  
  const [notifications, setNotifications] = React.useState({
    email: true,
    push: true,
    newsletter: false,
    projectUpdates: true
  });
  
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    if (!user) {
      history.push('/login');
    }
  }, [user, history]);

  React.useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || '',
        email: user.email || '',
        bio: user.bio || '',
        location: user.location || '',
        website: user.website || '',
      });
    }
  }, [user]);

  if (!user) {
    return null;
  }

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSaveProfile = () => {
    setIsLoading(true);
    
    // Имитация задержки сети
    setTimeout(() => {
      updateUserProfile(formData);
      setIsLoading(false);
    }, 1000);
  };

  const handleNotificationChange = (key: string, value: boolean) => {
    setNotifications(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-64">
            <Card className="border border-divider sticky top-6">
              <CardBody className="p-0">
                <Tabs 
                  aria-label="Settings tabs" 
                  selectedKey={selectedTab}
                  onSelectionChange={key => setSelectedTab(key as string)}
                  color="primary"
                  variant="light"
                  orientation="vertical"
                  classNames={{
                    tabList: "gap-2",
                    cursor: "w-full",
                    tab: "justify-start px-4 py-3",
                  }}
                >
                  <Tab 
                    key="profile" 
                    title={
                      <div className="flex items-center gap-2">
                        <Icon icon="lucide:user" />
                        <span>{t('settings.profile')}</span>
                      </div>
                    }
                  />
                  <Tab 
                    key="account" 
                    title={
                      <div className="flex items-center gap-2">
                        <Icon icon="lucide:settings" />
                        <span>{t('settings.account')}</span>
                      </div>
                    }
                  />
                  <Tab 
                    key="notifications" 
                    title={
                      <div className="flex items-center gap-2">
                        <Icon icon="lucide:bell" />
                        <span>{t('settings.notifications')}</span>
                      </div>
                    }
                  />
                  <Tab 
                    key="security" 
                    title={
                      <div className="flex items-center gap-2">
                        <Icon icon="lucide:shield" />
                        <span>{t('settings.security')}</span>
                      </div>
                    }
                  />
                </Tabs>
              </CardBody>
            </Card>
          </div>
          
          <div className="flex-1">
            {selectedTab === 'profile' && (
              <Card className="border border-divider">
                <CardHeader>
                  <h2 className="text-xl font-semibold">{t('settings.profileSettings')}</h2>
                </CardHeader>
                <Divider />
                <CardBody className="p-6 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label={t('settings.name')}
                      placeholder={t('settings.namePlaceholder')}
                      value={formData.name}
                      onValueChange={(value) => handleChange('name', value)}
                      variant="bordered"
                      startContent={<Icon icon="lucide:user" className="text-default-400 text-sm" />}
                    />
                    <Input
                      label={t('settings.email')}
                      placeholder={t('settings.emailPlaceholder')}
                      value={formData.email}
                      onValueChange={(value) => handleChange('email', value)}
                      variant="bordered"
                      startContent={<Icon icon="lucide:mail" className="text-default-400 text-sm" />}
                      isDisabled
                    />
                  </div>
                  
                  <Textarea
                    label={t('settings.bio')}
                    placeholder={t('settings.bioPlaceholder')}
                    value={formData.bio}
                    onValueChange={(value) => handleChange('bio', value)}
                    variant="bordered"
                    minRows={3}
                    maxRows={5}
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label={t('settings.location')}
                      placeholder={t('settings.locationPlaceholder')}
                      value={formData.location}
                      onValueChange={(value) => handleChange('location', value)}
                      variant="bordered"
                      startContent={<Icon icon="lucide:map-pin" className="text-default-400 text-sm" />}
                    />
                    <Input
                      label={t('settings.website')}
                      placeholder={t('settings.websitePlaceholder')}
                      value={formData.website}
                      onValueChange={(value) => handleChange('website', value)}
                      variant="bordered"
                      startContent={<Icon icon="lucide:link" className="text-default-400 text-sm" />}
                    />
                  </div>
                </CardBody>
                <Divider />
                <CardFooter className="flex justify-end gap-2 p-6">
                  <Button 
                    variant="flat" 
                    color="default"
                  >
                    {t('settings.cancel')}
                  </Button>
                  <Button 
                    color="primary"
                    onPress={handleSaveProfile}
                    isLoading={isLoading}
                  >
                    {t('settings.saveChanges')}
                  </Button>
                </CardFooter>
              </Card>
            )}
            
            {selectedTab === 'account' && (
              <Card className="border border-divider">
                <CardHeader>
                  <h2 className="text-xl font-semibold">{t('settings.accountSettings')}</h2>
                </CardHeader>
                <Divider />
                <CardBody className="p-6 space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">{t('settings.language')}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card className="border border-primary bg-primary/5">
                        <CardBody className="p-4 flex items-center gap-3">
                          <Icon icon="lucide:check-circle" className="text-primary" />
                          <div>
                            <p className="font-medium">English</p>
                            <p className="text-default-500 text-sm">English (United States)</p>
                          </div>
                        </CardBody>
                      </Card>
                      <Card className="border border-divider">
                        <CardBody className="p-4 flex items-center gap-3">
                          <div className="w-5"></div>
                          <div>
                            <p className="font-medium">Русский</p>
                            <p className="text-default-500 text-sm">Russian</p>
                          </div>
                        </CardBody>
                      </Card>
                    </div>
                  </div>
                  
                  <Divider />
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">{t('settings.timezone')}</h3>
                    <Input
                      label={t('settings.timezone')}
                      placeholder="UTC+03:00 Moscow"
                      variant="bordered"
                      startContent={<Icon icon="lucide:clock" className="text-default-400 text-sm" />}
                      value="UTC+03:00 Moscow"
                    />
                  </div>
                </CardBody>
              </Card>
            )}
            
            {selectedTab === 'notifications' && (
              <Card className="border border-divider">
                <CardHeader>
                  <h2 className="text-xl font-semibold">{t('settings.notificationSettings')}</h2>
                </CardHeader>
                <Divider />
                <CardBody className="p-6 space-y-6">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-medium">{t('settings.emailNotifications')}</h3>
                        <p className="text-default-500">{t('settings.emailNotificationsDescription')}</p>
                      </div>
                      <Switch 
                        isSelected={notifications.email}
                        onValueChange={(value) => handleNotificationChange('email', value)}
                        color="primary"
                      />
                    </div>
                    
                    <Divider />
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-medium">{t('settings.pushNotifications')}</h3>
                        <p className="text-default-500">{t('settings.pushNotificationsDescription')}</p>
                      </div>
                      <Switch 
                        isSelected={notifications.push}
                        onValueChange={(value) => handleNotificationChange('push', value)}
                        color="primary"
                      />
                    </div>
                    
                    <Divider />
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-medium">{t('settings.newsletter')}</h3>
                        <p className="text-default-500">{t('settings.newsletterDescription')}</p>
                      </div>
                      <Switch 
                        isSelected={notifications.newsletter}
                        onValueChange={(value) => handleNotificationChange('newsletter', value)}
                        color="primary"
                      />
                    </div>
                    
                    <Divider />
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-medium">{t('settings.projectUpdates')}</h3>
                        <p className="text-default-500">{t('settings.projectUpdatesDescription')}</p>
                      </div>
                      <Switch 
                        isSelected={notifications.projectUpdates}
                        onValueChange={(value) => handleNotificationChange('projectUpdates', value)}
                        color="primary"
                      />
                    </div>
                  </div>
                </CardBody>
                <Divider />
                <CardFooter className="flex justify-end gap-2 p-6">
                  <Button 
                    color="primary"
                  >
                    {t('settings.saveChanges')}
                  </Button>
                </CardFooter>
              </Card>
            )}
            
            {selectedTab === 'security' && (
              <Card className="border border-divider">
                <CardHeader>
                  <h2 className="text-xl font-semibold">{t('settings.securitySettings')}</h2>
                </CardHeader>
                <Divider />
                <CardBody className="p-6 space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">{t('settings.changePassword')}</h3>
                    <div className="space-y-4">
                      <Input
                        label={t('settings.currentPassword')}
                        placeholder="••••••••"
                        type="password"
                        variant="bordered"
                        startContent={<Icon icon="lucide:lock" className="text-default-400 text-sm" />}
                      />
                      <Input
                        label={t('settings.newPassword')}
                        placeholder="••••••••"
                        type="password"
                        variant="bordered"
                        startContent={<Icon icon="lucide:lock" className="text-default-400 text-sm" />}
                      />
                      <Input
                        label={t('settings.confirmPassword')}
                        placeholder="••••••••"
                        type="password"
                        variant="bordered"
                        startContent={<Icon icon="lucide:lock" className="text-default-400 text-sm" />}
                      />
                    </div>
                    <div className="pt-2">
                      <Button 
                        color="primary"
                      >
                        {t('settings.updatePassword')}
                      </Button>
                    </div>
                  </div>
                  
                  <Divider />
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">{t('settings.twoFactorAuth')}</h3>
                    <p className="text-default-500">{t('settings.twoFactorAuthDescription')}</p>
                    <Button 
                      color="primary"
                      variant="flat"
                      startContent={<Icon icon="lucide:shield" />}
                    >
                      {t('settings.enableTwoFactor')}
                    </Button>
                  </div>
                  
                  <Divider />
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium text-danger">{t('settings.dangerZone')}</h3>
                    <p className="text-default-500">{t('settings.dangerZoneDescription')}</p>
                    <Button 
                      color="danger"
                      variant="flat"
                      startContent={<Icon icon="lucide:trash-2" />}
                    >
                      {t('settings.deleteAccount')}
                    </Button>
                  </div>
                </CardBody>
              </Card>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};