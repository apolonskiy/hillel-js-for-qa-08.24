import { expect } from '@playwright/test';
import { testNoSession as test, HomePage, generateUserData } from '../../src/index';

test.describe('Registration form', () => {
  let homePage, registrationPage, user;
  console.log(`BASE_URL = ${process.env.BASE_URL}`);

  test.beforeEach(async ({ registrationPage: regPageContext }) => {
    registrationPage = regPageContext;
    homePage = new HomePage(regPageContext.page);
    user = generateUserData();
    await homePage.navigateToPage();
    await homePage.openLogInForm();
    await registrationPage.openRegistationForm();
  });

  test('Registration form elements and initial empty state', async () => {
    await expect.soft(registrationPage.selectors.mainTitle()).toHaveText('Registration');
    await expect.soft(registrationPage.selectors.nameTitle()).toHaveText('Name');
    await expect.soft(registrationPage.selectors.lastNameTitle()).toHaveText('Last name');
    await expect.soft(registrationPage.selectors.emailTitle()).toHaveText('Email');
    await expect.soft(registrationPage.selectors.passwordTitle()).toHaveText('Password');
    await expect.soft(registrationPage.selectors.confirmPasswordTitle()).toHaveText('Re-enter password');
    await expect.soft(registrationPage.selectors.name()).toBeEmpty();
    await expect.soft(registrationPage.selectors.lastName()).toBeEmpty();
    await expect.soft(registrationPage.selectors.email()).toBeEmpty();
    await expect.soft(registrationPage.selectors.password()).toBeEmpty();
    await expect.soft(registrationPage.selectors.confirmPassword()).toBeEmpty();
    await expect.soft(registrationPage.selectors.closeButton()).toBeEnabled();
    await expect.soft(registrationPage.selectors.registerButton()).toHaveText('Register');
    await expect.soft(registrationPage.selectors.registerButton()).toHaveAttribute('disabled', '');
  });

  test('Successful user registration', async () => {
    registrationPage.registerUser(user.name, user.lastName, user.email, user.password, user.confirmPassword);
    await expect.soft(registrationPage.selectors.successMessage()).toHaveText('Registration complete');
  })

  test.describe('Registration fields validation', () => {
    test('Name - empty field', async () => {
      await registrationPage.selectors.name().click();
      await registrationPage.selectors.lastName().click();
      await expect.soft(registrationPage.selectors.error()).toHaveText('Name required');
      await expect.soft(registrationPage.selectors.name()).toHaveCSS('border-color', 'rgb(220, 53, 69)');
      await expect.soft(registrationPage.selectors.registerButton()).toBeDisabled();
    })

    test('Name - input < 2 characters', async () => {
      user.name = 't';
      await registrationPage.selectors.name().fill(user.name);
      await registrationPage.selectors.lastName().click();
      await expect.soft(registrationPage.selectors.error()).toHaveText('Name has to be from 2 to 20 characters long');
      await expect.soft(registrationPage.selectors.name()).toHaveCSS('border-color', 'rgb(220, 53, 69)');
      await expect.soft(registrationPage.selectors.registerButton()).toBeDisabled();
    })

    test('Name - input > 20 characters', async () => {
      user.name = 'Loremipsumdolorsitame';
      await registrationPage.selectors.name().fill(user.name);
      await registrationPage.selectors.lastName().click();
      await expect.soft(registrationPage.selectors.error()).toHaveText('Name has to be from 2 to 20 characters long');
      await expect.soft(registrationPage.selectors.name()).toHaveCSS('border-color', 'rgb(220, 53, 69)');
      await expect.soft(registrationPage.selectors.registerButton()).toBeDisabled();
    })

    test('Name - invalid input', async () => {
      user.name = ' !';
      await registrationPage.selectors.name().fill(user.name);
      await registrationPage.selectors.lastName().click();
      await expect.soft(registrationPage.selectors.error()).toHaveText('Name is invalid');
      await expect.soft(registrationPage.selectors.name()).toHaveCSS('border-color', 'rgb(220, 53, 69)');
      await expect.soft(registrationPage.selectors.registerButton()).toBeDisabled();
    })

    test('Last name - empty field', async () => {
      await registrationPage.selectors.name().fill(user.name);
      await registrationPage.selectors.lastName().click();
      await registrationPage.selectors.email().click();
      await expect.soft(registrationPage.selectors.error()).toHaveText('Last name required');
      await expect.soft(registrationPage.selectors.lastName()).toHaveCSS('border-color', 'rgb(220, 53, 69)');
      await expect.soft(registrationPage.selectors.registerButton()).toBeDisabled();
    })

    test('Last name - input < 2 characters', async () => {
      user.lastName = 't';
      await registrationPage.selectors.name().fill(user.name);
      await registrationPage.selectors.lastName().fill(user.lastName);
      await registrationPage.selectors.email().click();
      await expect.soft(registrationPage.selectors.error()).toHaveText('Last name has to be from 2 to 20 characters long');
      await expect.soft(registrationPage.selectors.lastName()).toHaveCSS('border-color', 'rgb(220, 53, 69)');
      await expect.soft(registrationPage.selectors.registerButton()).toBeDisabled();
    })

    test('Last name - input > 20 characters', async () => {
      user.lastName = 'Loremipsumdolorsitame';
      await registrationPage.selectors.name().fill(user.name);
      await registrationPage.selectors.lastName().fill(user.lastName);
      await registrationPage.selectors.email().click();
      await expect.soft(registrationPage.selectors.error()).toHaveText('Last name has to be from 2 to 20 characters long');
      await expect.soft(registrationPage.selectors.lastName()).toHaveCSS('border-color', 'rgb(220, 53, 69)');
      await expect.soft(registrationPage.selectors.registerButton()).toBeDisabled();
    })

    test('Last name - invalid input', async () => {
      user.lastName = ' !';
      await registrationPage.selectors.name().fill(user.name);
      await registrationPage.selectors.lastName().fill(user.lastName);
      await registrationPage.selectors.email().click();
      await expect.soft(registrationPage.selectors.error()).toHaveText('Last name is invalid');
      await expect.soft(registrationPage.selectors.lastName()).toHaveCSS('border-color', 'rgb(220, 53, 69)');
      await expect.soft(registrationPage.selectors.registerButton()).toBeDisabled();
    })

    test('Email - empty field', async () => {
      await registrationPage.selectors.name().fill(user.name);
      await registrationPage.selectors.lastName().fill(user.lastName);
      await registrationPage.selectors.email().click();
      await registrationPage.selectors.password().click();
      await expect.soft(registrationPage.selectors.error()).toHaveText('Email required');
      await expect.soft(registrationPage.selectors.email()).toHaveCSS('border-color', 'rgb(220, 53, 69)');
      await expect.soft(registrationPage.selectors.registerButton()).toBeDisabled();
    })

    test('Email - invalid input - without @', async () => {
      user.email = 'irinamarinkogmail.com';
      await registrationPage.selectors.name().fill(user.name);
      await registrationPage.selectors.lastName().fill(user.lastName);
      await registrationPage.selectors.email().fill(user.email);
      await registrationPage.selectors.password().click();
      await expect.soft(registrationPage.selectors.error()).toHaveText('Email is incorrect');
      await expect.soft(registrationPage.selectors.email()).toHaveCSS('border-color', 'rgb(220, 53, 69)');
      await expect.soft(registrationPage.selectors.registerButton()).toBeDisabled();
    })

    test('Email - invalid input - without .', async () => {
      user.email = 'irinamarinko@gmailcom';
      await registrationPage.selectors.name().fill(user.name);
      await registrationPage.selectors.lastName().fill(user.lastName);
      await registrationPage.selectors.email().fill(user.email);
      await registrationPage.selectors.password().click();
      await expect.soft(registrationPage.selectors.error()).toHaveText('Email is incorrect');
      await expect.soft(registrationPage.selectors.email()).toHaveCSS('border-color', 'rgb(220, 53, 69)');
      await expect.soft(registrationPage.selectors.registerButton()).toBeDisabled();
    })

    test('Email - invalid input - without alias', async () => {
      user.email = '@gmail.com';
      await registrationPage.selectors.name().fill(user.name);
      await registrationPage.selectors.lastName().fill(user.lastName);
      await registrationPage.selectors.email().fill(user.email);
      await registrationPage.selectors.password().click();
      await expect.soft(registrationPage.selectors.error()).toHaveText('Email is incorrect');
      await expect.soft(registrationPage.selectors.email()).toHaveCSS('border-color', 'rgb(220, 53, 69)');
      await expect.soft(registrationPage.selectors.registerButton()).toBeDisabled();
    })

    test('Password - empty field', async () => {
      await registrationPage.selectors.name().fill(user.name);
      await registrationPage.selectors.lastName().fill(user.lastName);
      await registrationPage.selectors.email().fill(user.email);
      await registrationPage.selectors.password().click();
      await registrationPage.selectors.confirmPassword().click();
      await expect.soft(registrationPage.selectors.error()).toHaveText('Password required');
      await expect.soft(registrationPage.selectors.password()).toHaveCSS('border-color', 'rgb(220, 53, 69)');
      await expect.soft(registrationPage.selectors.registerButton()).toBeDisabled();
    })

    test('Password - input < 8 characters', async () => {
      user.password = 'Qaz1!ws';
      await registrationPage.selectors.name().fill(user.name);
      await registrationPage.selectors.lastName().fill(user.lastName);
      await registrationPage.selectors.email().fill(user.email);
      await registrationPage.selectors.password().fill(user.password);
      await registrationPage.selectors.confirmPassword().click();
      await expect.soft(registrationPage.selectors.error()).toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
      await expect.soft(registrationPage.selectors.password()).toHaveCSS('border-color', 'rgb(220, 53, 69)');
      await expect.soft(registrationPage.selectors.registerButton()).toBeDisabled();
    })

    test('Password - input > 15 characters', async () => {
      user.password = 'Qaz1!wsXedcrfvtg';
      await registrationPage.selectors.name().fill(user.name);
      await registrationPage.selectors.lastName().fill(user.lastName);
      await registrationPage.selectors.email().fill(user.email);
      await registrationPage.selectors.password().fill(user.password);
      await registrationPage.selectors.confirmPassword().click();
      await expect.soft(registrationPage.selectors.error()).toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
      await expect.soft(registrationPage.selectors.password()).toHaveCSS('border-color', 'rgb(220, 53, 69)');
      await expect.soft(registrationPage.selectors.registerButton()).toBeDisabled();
    })

    test('Password - invalid input - without integer', async () => {
      user.password = 'Qaz!wsXedc';
      await registrationPage.selectors.name().fill(user.name);
      await registrationPage.selectors.lastName().fill(user.lastName);
      await registrationPage.selectors.email().fill(user.email);
      await registrationPage.selectors.password().fill(user.password);
      await registrationPage.selectors.confirmPassword().click();
      await expect.soft(registrationPage.selectors.error()).toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
      await expect.soft(registrationPage.selectors.password()).toHaveCSS('border-color', 'rgb(220, 53, 69)');
      await expect.soft(registrationPage.selectors.registerButton()).toBeDisabled();
    })

    test('Password - invalid input - without capital letter', async () => {
      user.password = 'qaz!5wsxedc';
      await registrationPage.selectors.name().fill(user.name);
      await registrationPage.selectors.lastName().fill(user.lastName);
      await registrationPage.selectors.email().fill(user.email);
      await registrationPage.selectors.password().fill(user.password);
      await registrationPage.selectors.confirmPassword().click();
      await expect.soft(registrationPage.selectors.error()).toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
      await expect.soft(registrationPage.selectors.password()).toHaveCSS('border-color', 'rgb(220, 53, 69)');
      await expect.soft(registrationPage.selectors.registerButton()).toBeDisabled();
    })

    test('Password - invalid input - without small letter', async () => {
      user.password = 'QZZ!5WSXEDC';
      await registrationPage.selectors.name().fill(user.name);
      await registrationPage.selectors.lastName().fill(user.lastName);
      await registrationPage.selectors.email().fill(user.email);
      await registrationPage.selectors.password().fill(user.password);
      await registrationPage.selectors.confirmPassword().click();
      await expect.soft(registrationPage.selectors.error()).toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
      await expect.soft(registrationPage.selectors.password()).toHaveCSS('border-color', 'rgb(220, 53, 69)');
      await expect.soft(registrationPage.selectors.registerButton()).toBeDisabled();
    })

    test('Confirmation password - empty field', async () => {
      await registrationPage.selectors.lastName().fill(user.lastName);
      await registrationPage.selectors.email().fill(user.email);
      await registrationPage.selectors.password().fill(user.password);
      await registrationPage.selectors.confirmPassword().click();
      await registrationPage.selectors.name().fill(user.name);
      await expect.soft(registrationPage.selectors.error()).toHaveText('Re-enter password required');
      await expect.soft(registrationPage.selectors.confirmPassword()).toHaveCSS('border-color', 'rgb(220, 53, 69)');
      await expect.soft(registrationPage.selectors.registerButton()).toBeDisabled();
    })

    test('Confirmation password - doesnt match password', async () => {
      user.confirmPassword += '1';
      await registrationPage.selectors.name().fill(user.name);
      await registrationPage.selectors.lastName().fill(user.lastName);
      await registrationPage.selectors.email().fill(user.email);
      await registrationPage.selectors.password().fill(user.password);
      await registrationPage.selectors.confirmPassword().fill(user.confirmPassword);
      await registrationPage.selectors.name().click();
      await expect.soft(registrationPage.selectors.error()).toHaveText('Passwords do not match');
      await expect.soft(registrationPage.selectors.confirmPassword()).toHaveCSS('border-color', 'rgb(220, 53, 69)');
      await expect.soft(registrationPage.selectors.registerButton()).toBeDisabled();
    })
  })

});