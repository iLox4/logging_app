import fs from "fs";
import { errorInitializingDB, infoInitilizingDB } from "./dbMessages";
import path from "path";
import { getPool } from "./utils";

const pool = getPool();

export async function runQuery(query: string, infoMessage: string, errorMessage: string, sqlData?: Array<string | boolean | number | Date | Record<string, any>>) {
    let client;
    try {
        client = await pool.connect();
        const result = await client.query(query, sqlData);
        console.log(infoMessage);
        return result;
    } catch (error: any) {
        console.error(errorMessage, error);
        throw new Error(errorMessage);
    } finally {
        if (client) {
            client.release();
        }
    }
}

async function initDb() {
    const initDbPath = path.join(__dirname, "../../db/initdb.sql");
    const initDbSql = fs.readFileSync(initDbPath, "utf8");
    await runQuery(initDbSql, infoInitilizingDB, errorInitializingDB);
}

initDb().then();
