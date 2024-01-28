import mysql from "mysql2";

import dotenv from "dotenv";
dotenv.config();

const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  })
  .promise();

export async function getUserInfo() {
  const [rows] = await pool.query("SELECT * FROM userinfo");
  return rows;
}

export async function getUserInfoId(id) {
  const [rows] = await pool.query(
    `
      SELECT * 
      FROM userinfo
      WHERE id = ?`,
    [id]
  );
  return rows[0];
}

export async function createUser(firstName, lastName, birthday) {
  const [result] = await pool.query(
    `
      INSERT INTO userinfo (firstName, lastName, birthday)
      VALUES (?, ?, ?)
      `,
    [firstName, lastName, birthday]
  );
  const id = result.insertId;
  return getUserInfoId(id);
}

// const info = await createUser("Anoop", "Jalla", "2000-02-01");
// console.log(info);
