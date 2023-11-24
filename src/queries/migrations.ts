import { TABLE_NAME as DISEASE_TABLE_NAME } from './diseases';
import { TABLE_NAME as PATIENT_TABLE_NAME } from './patients';

export const CREATE_PATIENTS_TABLE = `
  CREATE TABLE IF NOT EXISTS ${PATIENT_TABLE_NAME} (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    age INTEGER
  );
`;

export const CREATE_DISEASES_TABLE = `
  CREATE TABLE IF NOT EXISTS ${DISEASE_TABLE_NAME} (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    picture TEXT,
    patient_id INTEGER,
    FOREIGN KEY(patient_id) REFERENCES patients(id)
  );
`;
