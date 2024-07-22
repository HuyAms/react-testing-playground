import { User } from "../types/User";
import { faker } from '@faker-js/faker';
import { UniqueEnforcer } from 'enforce-unique';

const emailUnqieEnforcer = new UniqueEnforcer();

export function buildUser(overrides?: Partial<User>): User {

    const username = faker.internet.userName().toLowerCase()

    const email = emailUnqieEnforcer.enforce(() => `${username}@${faker.internet.domainName()}`)
    
    return {
        id: faker.string.uuid(),
        username,
        email,
        role: faker.helpers.arrayElement(['admin', 'user']),
        persona: faker.helpers.arrayElement(["Internal", "External"]),
        features: [],
        ...overrides
    }
}