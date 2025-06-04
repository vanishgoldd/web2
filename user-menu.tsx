import React from 'react';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, Avatar } from '@heroui/react';
import { Icon } from '@iconify/react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../context/auth-context';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const UserMenu: React.FC = () => {
  const { user, logout } = useAuth();
  const { t } = useTranslation();
  const history = useHistory();

  const handleLogout = () => {
    logout();
    history.push('/');
  };

  const getInitials = (email: string) => {
    return email.charAt(0).toUpperCase();
  };

  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <Button 
          variant="light" 
          isIconOnly 
          className="rounded-full"
          aria-label="User menu"
        >
          <Avatar
            name={getInitials(user?.email || '')}
            size="sm"
            className="transition-transform"
            color="primary"
          />
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="User actions">
        <DropdownItem key="email" className="h-14 gap-2" textValue={user?.email}>
          <p className="font-semibold">{user?.name || user?.email}</p>
          <p className="text-default-500 text-xs">{user?.email}</p>
        </DropdownItem>
        <DropdownItem 
          key="profile" 
          startContent={<Icon icon="lucide:user" />}
          as={Link}
          to="/profile"
        >
          {t('user.profile')}
        </DropdownItem>
        <DropdownItem 
          key="settings" 
          startContent={<Icon icon="lucide:settings" />}
          as={Link}
          to="/settings"
        >
          {t('user.settings')}
        </DropdownItem>
        <DropdownItem 
          key="logout" 
          color="danger" 
          startContent={<Icon icon="lucide:log-out" />}
          onPress={handleLogout}
        >
          {t('user.logout')}
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};