import 'dotenv/config';

import mysql from 'mysql2/promise';
import { DATABASE_CONFIG } from '../constants/database';

const pool = mysql.createPool(DATABASE_CONFIG);
console.log('pool created');

export default pool;
