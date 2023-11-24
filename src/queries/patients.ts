export const TABLE_NAME = 'patients';

export const CREATE_PATIENT = `
  INSERT INTO ${TABLE_NAME} (name, age) VALUES (?, ?)
`;
