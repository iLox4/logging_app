import { Pool } from "pg";
import fs from "fs";
import { errorInitializingDB, infoInitilizingDB } from "./dbMessages";
import path from "path";

const vcapServices = JSON.parse(process.env.VCAP_SERVICES || '{}');
const postgresService = vcapServices["postgresql-db"] && vcapServices["postgresql-db"][0];

if (!postgresService?.credentials) {
    throw new Error('ERROR: could not load postgres credentials! Make sure that postgres service is running and is bind to this app!');
}

const pool = new Pool({ 
    user: postgresService.credentials.username,
    password: postgresService.credentials.password,
    host: postgresService.credentials.hostname,
    database: postgresService.credentials.dbname,
    port: postgresService.credentials.port,
    ssl: {
        ca: postgresService.credentials.sslrootcert,
        cert: postgresService.credentials.sslcert,
    },
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000, 
});

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
