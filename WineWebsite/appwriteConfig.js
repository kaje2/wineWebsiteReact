import { Client, Databases } from 'appwrite';

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1') // Seu endpoint Appwrite
    .setProject('675c2b49001b3862c237'); // Seu ID de projeto Appwrite

const databases = new Databases(client);

export { client, databases };
