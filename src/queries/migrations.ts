import { TABLE_NAME as DISEASE_TABLE_NAME } from './diseases';
import { TABLE_NAME as PATIENT_TABLE_NAME } from './patients';

export const CREATE_PATIENTS_TABLE = `
  CREATE TABLE IF NOT EXISTS ${PATIENT_TABLE_NAME} (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    age INT
  );
`;

export const CREATE_DISEASES_TABLE = `
  CREATE TABLE IF NOT EXISTS ${DISEASE_TABLE_NAME} (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    picture TEXT,
    patient_id INT,
    FOREIGN KEY(patient_id) REFERENCES ${PATIENT_TABLE_NAME}(id)
  );
`;
