import React from 'react';
import { Card, CardBody, Input, Button, Link, Divider, Checkbox } from '@heroui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../context/auth-context';
import { useHistory } from 'react-router-dom';
import { addToast } from '@heroui/react';

export const LoginPage: React.FC = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [rememberMe, setRememberMe] = React.useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const { t } = useTranslation();
  const { login } = useAuth();
  const history = useHistory();

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Имитация задержки сети
    setTimeout(() => {
      login(email, password);
      setIsLoading(false);
      addToast({
        title: t('login.successTitle'),
        description: t('login.successMessage'),
        color: "success"
      });
      history.push('/');
    }, 1000);
  };

  return (
    <div className="flex min-h-[calc(100vh-64px)] items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        className="w-full max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">{t('login.title')}</h1>
          <p className="mt-2 text-default-600">{t('login.subtitle')}</p>
        </div>
        
        <Card className="border border-divider">
          <CardBody className="p-6">
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <Input
                  label={t('login.email')}
                  type="email"
                  value={email}
                  onValueChange={setEmail}
                  placeholder={t('login.emailPlaceholder')}
                  variant="bordered"
                  isRequired
                  startContent={
                    <Icon icon="lucide:mail" className="text-default-400 text-sm" />
                  }
                  isDisabled={isLoading}
                />
              </div>
              
              <div>
                <Input
                  label={t('login.password')}
                  type={isPasswordVisible ? "text" : "password"}
                  value={password}
                  onValueChange={setPassword}
                  placeholder={t('login.passwordPlaceholder')}
                  variant="bordered"
                  isRequired
                  startContent={
                    <Icon icon="lucide:lock" className="text-default-400 text-sm" />
                  }
                  endContent={
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="focus:outline-none"
                      disabled={isLoading}
                    >
                      {isPasswordVisible ? (
                        <Icon icon="lucide:eye" className="text-default-400 text-sm" />
                      ) : (
                        <Icon icon="lucide:eye-off" className="text-default-400 text-sm" />
                      )}
                    </button>
                  }
                  isDisabled={isLoading}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <Checkbox 
                  isSelected={rememberMe}
                  onValueChange={setRememberMe}
                  size="sm"
                  isDisabled={isLoading}
                >
                  <span className="text-sm">{t('login.rememberMe')}</span>
                </Checkbox>
                <Link href="#" size="sm" className="text-primary">
                  {t('login.forgotPassword')}
                </Link>
              </div>
              
              <Button 
                type="submit" 
                color="primary" 
                className="w-full"
                size="lg"
                isLoading={isLoading}
              >
                {t('login.button')}
              </Button>
            </form>
            
            <div className="mt-6">
              <div className="relative">
                <Divider className="my-4" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="bg-content1 px-2 text-xs text-default-500">
                    {t('login.or')}
                  </span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3 mt-6">
                <Button 
                  variant="bordered" 
                  startContent={<Icon icon="logos:github-icon" />}
                  className="w-full"
                >
                  {t('login.github')}
                </Button>
                <Button 
                  variant="bordered" 
                  startContent={<Icon icon="logos:google-icon" />}
                  className="w-full"
                >
                  {t('login.google')}
                </Button>
              </div>
            </div>
          </CardBody>
        </Card>
        
        <div className="text-center mt-6">
          <p className="text-default-600 text-sm">
            {t('login.noAccount')}{' '}
            <Link as={ReactRouterLink} to="/signup" className="text-primary font-medium">
              {t('login.signup')}
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};