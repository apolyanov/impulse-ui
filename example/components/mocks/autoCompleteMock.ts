import { faker } from '@faker-js/faker';

const humans = () => {
  const data: any[] = [];

  for (let i = 0; i < 10_000; i++) {
    data.push({
      name: faker.person.fullName(),
      gal: `GAL-${i}`,
    });
  }

  return data;
};

const humans2 = () => {
  const data: any[] = [];

  for (let i = 0; i < 10_000; i++) {
    data.push({
      label: faker.person.fullName(),
      value: `GAL-${i}`,
    });
  }

  return data;
};

export { humans, humans2 };
