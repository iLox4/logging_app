import dotenv from "dotenv";
import { Pool } from "pg";

// Load environment variables from .env file
dotenv.config();

export function getPool() {
    if (process.env.NODE_ENV === "development") {
        return new Pool({
            user: process.env.LOCAL_POSTGRES_USER,
            host: process.env.LOCAL_POSTGRES_HOST,
            database: process.env.LOCAL_POSTGRES_DB,
            password: process.env.LOCAL_POSTGRES_PASSWD,
            port: Number(process.env.LOCAL_POSTGRES_PORT)
        });
    }
        
    const vcapServices = JSON.parse(process.env.VCAP_SERVICES || '{}');
    const postgresService = vcapServices["postgresql-db"] && vcapServices["postgresql-db"][0];

    if (!postgresService?.credentials) {
        throw new Error('ERROR: could not load postgres credentials! Make sure that postgres service is running and is bind to this app!');
    }

    return new Pool({ 
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
}