import { faker } from '@faker-js/faker';

export const generateUserData = () => {
  const specialChars = '!@#$%^&*(),.?":{}|<>';
  const randomIndex = Math.floor(Math.random() * specialChars.length);
  const generatedPassword = faker.internet.password({ length:10 }) + Math.floor(Math.random() * 10) + specialChars[randomIndex];

  return {
    name: faker.person.firstName(),
    lastName: faker.person.lastName().replace(/-/g, ""),
    email: faker.number.hex({ min: 0, max: 999999 }) + '_irinamarinko@gmail.com',
    password: generatedPassword,
    confirmPassword: generatedPassword,
  }
}