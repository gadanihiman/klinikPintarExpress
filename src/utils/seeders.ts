import { Database } from 'sqlite3';
import { faker } from '@faker-js/faker';
import { CREATE_DISEASE } from '../queries/diseases';
import { CREATE_PATIENT } from '../queries/patients';

type Patient = {
  name: string;
  age: number;
};

type Disease = {
  name: string;
  picture: string;
  patientId: number;
};

function runInsertPatient(db: Database, patient: Patient): Promise<number> {
  return new Promise((resolve, reject) => {
    db.run(
      CREATE_PATIENT,
      [patient.name, patient.age],
      function (this: { lastID: number }, err: Error | null) {
        if (err) {
          reject(err);
        } else {
          resolve(this.lastID);
        }
      },
    );
  });
}

const genFakeDataToDB = async (db: Database) => {
  const insertDisease = db.prepare(CREATE_DISEASE);

  const patientIds: number[] = [];

  // Generate fake patients
  for (let i = 0; i < 5; i++) {
    const patient: Patient = {
      name: faker.person.fullName(),
      age: faker.number.int({ min: 1, max: 100 }),
    };

    const patientId = await runInsertPatient(db, patient);
    patientIds.push(patientId);
  }

  // Generate fake diseases
  for (let i = 0; i < 10; i++) {
    const disease: Disease = {
      name: faker.string.alphanumeric(10),
      picture: faker.image.url(),
      patientId:
        patientIds[faker.number.int({ min: 0, max: patientIds.length - 1 })],
    };

    insertDisease.run(disease.name, disease.picture, disease.patientId);
  }

  insertDisease.finalize();
};

export default genFakeDataToDB;
