import mysql from 'mysql2/promise';
import { faker } from '@faker-js/faker';

import { CREATE_DISEASE } from '../queries/diseases';
import { CREATE_PATIENT } from '../queries/patients';
import pool from './databaseConnection';

type Patient = {
  name: string;
  age: number;
};

type Disease = {
  name: string;
  picture: string;
  patientId: number;
};

async function runInsertPatient(db: mysql.Connection, patient: Patient): Promise<number> {
  const [result] = await db.execute(
    CREATE_PATIENT,
    [patient.name, patient.age]
  );
  const insertId = (result as mysql.ResultSetHeader).insertId;
  return insertId;
}

const genFakeDataToDB = async () => {
  const db = await pool.getConnection();

  try {
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

      await db.execute(
        CREATE_DISEASE,
        [disease.name, disease.picture, disease.patientId]
      );
    }
  } finally {
    await db.release();
  }
};

export default genFakeDataToDB;
