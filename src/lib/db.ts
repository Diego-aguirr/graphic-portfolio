import { Pool } from "pg";

// Validate required env vars at module load time
if (
  !process.env.POSTGRES_USER ||
  !process.env.POSTGRES_PASSWORD ||
  !process.env.POSTGRES_DB
) {
  throw new Error(
    "Missing required PostgreSQL environment variables: POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB"
  );
}

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOST || "localhost",
  port: parseInt(process.env.POSTGRES_PORT || "5433", 10),
  database: process.env.POSTGRES_DB,
});

export default pool;
