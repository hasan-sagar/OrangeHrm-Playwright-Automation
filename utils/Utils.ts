import { faker } from "@faker-js/faker";

interface User {
  userName: string;
  firstName: string;
  lastName: string;
}

function generateRandomUser(): User {
  const userName = faker.internet.userName();
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();

  return {
    userName,
    firstName,
    lastName,
  };
}

export default generateRandomUser;
