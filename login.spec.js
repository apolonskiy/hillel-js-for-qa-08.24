import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';

import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';

describe('Login Test', () => {
  it('should login with valid credentials', () => {
    LoginPage.visit();
    LoginPage.fillEmail('your_email@example.com');
    LoginPage.fillPassword('your_password');
    LoginPage.clickLoginButton();

    // Перевірка після успішного входу
    HomePage.verifyWelcomeMessage();
    // Інші перевірки на головній сторінці...
  });
});