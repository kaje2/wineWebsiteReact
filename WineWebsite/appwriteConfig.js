import { Client, Databases } from 'appwrite';

const client = new Client();
client
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject('675c2b49001b3862c237');

const databases = new Databases(client);

export { client, databases };
