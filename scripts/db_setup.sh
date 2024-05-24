#!/bin/bash
DB_NAME="iw_complaint_manager";
DB_DIALECT="postgres";
DB_USER="postgres";
DB_HOST="localhost";
DB_PORT=5432;
DB_PASSWORD="password";

export PGPASSWORD="$DB_PASSWORD"
psql -U "$DB_USER" -h "$DB_HOST" -p "$DB_PORT" -c "CREATE DATABASE $DB_NAME";
psql -c "GRANT ALL PRIVILEGES ON DATABASE $DB_NAME TO $DB_USER";
echo "Database setup complete.";
