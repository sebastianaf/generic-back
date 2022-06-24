import fs from 'fs'
import path from 'path'
import mysql from "mysql"

import { dbOptions } from "../config/db";

require('dotenv').config()

//Solo ejecutar depués de conectar
const execQuery = (SQLquery) => {
  return new Promise((resolve, reyect) => {
    try {
      const connection = mysql.createPool(dbOptions);
      connection.query(SQLquery, (error, data, fields) => {
        resolve({ error, data, fields });
        connection.end();
      });
    } catch (error) {
      reyect(error);
    }
  });
};

const verifyReq = async (req, res, callback) => {
  try {
    let token = req.headers.authorization;
    if (token) {
      if (token===process.env.API_TOKEN) {
        await callback(token);
      } else {
        res.send({error:"BAD_TOKEN"});
      }
    } else {
      res.send({error:"NO_TOKEN"});
    }
  } catch (error) {
    res.send({ error: "REQUEST_ERROR" });
  }
};

const extractData = (queryData) => {
  try {
    let fields = [];
    queryData.fields
      ? queryData.fields[0].forEach((item) =>
          fields.push({ name: item.name, length: item.length })
        )
      : (fields = null);
    let data = [];
    queryData.data ? (data = queryData.data[0]) : (data = null);
    let out = queryData.error
      ? { error: "Query error", fields: null, data: null }
      : { error: null, fields, data };
    return out;
  } catch (error) {
    return { error: "Query error" };
  }
};

export { execQuery, extractData, verifyReq };
