import { TABLE_NAME as PATIENT_TABLE_NAME } from './patients';

export const TABLE_NAME = 'disease';

export const CREATE_DISEASE = `
  INSERT INTO ${TABLE_NAME} (name, picture, patient_id) VALUES (?, ?, ?)
`;

export const UPDATE_DISEASE = `
  UPDATE ${TABLE_NAME} SET name = ?, picture = ?, patient_id = ? WHERE id = ?
`;

export const DELETE_DISEASE = `
  DELETE FROM ${TABLE_NAME} WHERE id = ?
`;

export const GET_LIST_DISEASE = `SELECT * FROM ${TABLE_NAME}`;

export const GET_DISEASE_JOIN_PATIENT = `
  SELECT
    d.id,
    d.name,
    d.picture,
    p.name AS patient_name,
    p.age AS patient_age
  FROM ${TABLE_NAME} AS d
  INNER JOIN ${PATIENT_TABLE_NAME} AS p ON p.id = d.patient_id
`;
