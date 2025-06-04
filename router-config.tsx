import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import { HomePage } from './pages/home';
import { TemplatesPage } from './pages/templates';
import { PricingPage } from './pages/pricing';
import { LoginPage } from './pages/login';
import { SignupPage } from './pages/signup';
import { ProfilePage } from './pages/profile';
import { SettingsPage } from './pages/settings';
import { Navbar } from './components/navbar';
import { Footer } from './components/footer';

// Используем HashRouter вместо BrowserRouter для статической версии
export const RouterConfig: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/templates" component={TemplatesPage} />
            <Route path="/pricing" component={PricingPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={SignupPage} />
            <Route path="/profile" component={ProfilePage} />
            <Route path="/settings" component={SettingsPage} />
          </Switch>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};