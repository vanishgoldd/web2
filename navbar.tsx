import React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { 
  Navbar as HeroNavbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem, 
  Link, 
  Button, 
  NavbarMenuToggle, 
  NavbarMenu, 
  NavbarMenuItem 
} from '@heroui/react';
import { Icon } from '@iconify/react';
import { ThemeSwitcher } from './theme-switcher';
import { LanguageSwitcher } from './language-switcher';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../context/auth-context';
import { UserMenu } from './user-menu';
import { Link as ReactRouterLink } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();
  const { t } = useTranslation();
  const { user } = useAuth();
  
  const menuItems = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.templates'), path: '/templates' },
    { name: t('nav.pricing'), path: '/pricing' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <HeroNavbar 
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
      maxWidth="xl"
      className="border-b border-divider"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <ReactRouterLink to="/" className="flex items-center gap-2">
            <Icon icon="lucide:layers" className="text-primary text-2xl" />
            <p className="font-bold text-inherit text-xl">DevFolio</p>
          </ReactRouterLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item.path} isActive={isActive(item.path)}>
            <Link 
              as={ReactRouterLink} 
              to={item.path} 
              color={isActive(item.path) ? "primary" : "foreground"}
              className="font-medium"
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden sm:flex">
          <LanguageSwitcher />
        </NavbarItem>
        <NavbarItem className="hidden sm:flex">
          <ThemeSwitcher />
        </NavbarItem>
        
        {user ? (
          <NavbarItem>
            <UserMenu />
          </NavbarItem>
        ) : (
          <>
            <NavbarItem className="hidden sm:flex">
              <Link as={ReactRouterLink} to="/login" color="foreground">
                {t('nav.login')}
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Button 
                as={ReactRouterLink} 
                to="/signup" 
                color="primary" 
                variant="flat" 
                radius="full"
                className="font-medium"
              >
                {t('nav.signup')}
              </Button>
            </NavbarItem>
          </>
        )}
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item) => (
          <NavbarMenuItem key={item.path}>
            <Link
              as={ReactRouterLink}
              to={item.path}
              color={isActive(item.path) ? "primary" : "foreground"}
              className="w-full font-medium"
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
        
        {!user && (
          <NavbarMenuItem>
            <Link
              as={ReactRouterLink}
              to="/login"
              color="foreground"
              className="w-full font-medium"
              size="lg"
            >
              {t('nav.login')}
            </Link>
          </NavbarMenuItem>
        )}
        
        <NavbarMenuItem className="mt-5 flex gap-4">
          <LanguageSwitcher />
          <ThemeSwitcher />
        </NavbarMenuItem>
      </NavbarMenu>
    </HeroNavbar>
  );
};