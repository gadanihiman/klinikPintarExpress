import { Database } from 'sqlite3';

import { DATABASE_NAME } from '../constants/database';
import {
  CREATE_DISEASES_TABLE,
  CREATE_PATIENTS_TABLE,
} from '../queries/migrations';
import genFakeDataToDB from './seeders';

function connectToDatabase(dbName?: string): Promise<Database> {
  return new Promise((resolve, reject) => {
    const db = new Database(dbName || DATABASE_NAME, (err) => {
      if (err) {
        console.error('Error opening database', err);
        reject(err);
      } else {
        db.run(CREATE_PATIENTS_TABLE, (err) => {
          if (err) {
            console.error('Error creating patients table', err);
            reject(err);
            return;
          }
          db.run(CREATE_DISEASES_TABLE, async (err) => {
            if (err) {
              console.error('Error creating disease table', err);
              reject(err);
            } else {
              resolve(db);
              await genFakeDataToDB(db);
            }
          });
        });
      }
    });
  });
}

export default connectToDatabase;
