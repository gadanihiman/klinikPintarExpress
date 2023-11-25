import genFakeDataToDB from '../src/utils/seed';

async function seed() {
  try {
    await genFakeDataToDB();
    console.log('Data seeding completed successfully.');
  } catch (err) {
    console.error('Data seeding failed:', err);
  }
}

seed();
