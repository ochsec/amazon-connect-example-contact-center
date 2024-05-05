import os
from dotenv import load_dotenv
from connect.pg_client import PGClient

def main():
    print("HOST: ", os.getenv("PG_HOST"))
    pg_client = PGClient(
        host=os.getenv("PG_HOST"),
        database=os.getenv("PG_DB"),
        user=os.getenv("PG_USER"),
        password=os.getenv("PG_PASSWORD"),
        port=os.getenv("PG_PORT"),
    )
    
    # Create the database
    pg_client.execute_query("CREATE DATABASE IF NOT EXISTS monopolydb")

    # Create the customer table
    create_customer_query = """
        CREATE TABLE IF NOT EXISTS Customer (
            Id SERIAL PRIMARY KEY,
            FirstName VARCHAR(255) NOT NULL,
            MiddleInitial CHAR(1),
            LastName VARCHAR(255) NOT NULL,
            Address1 VARCHAR(255) NOT NULL,
            Address2 VARCHAR(255),
            City VARCHAR(255) NOT NULL,
            State VARCHAR(2) NOT NULL,
            ZipCode VARCHAR(10) NOT NULL,
            PhoneHome VARCHAR(20),
            PhoneMobile VARCHAR(20),
            DOB DATE NOT NULL,
            PIN VARCHAR(10)
        );
        """

    pg_client.execute_query(create_customer_query);

    # Create the bank account table
    create_account_query = """
        CREATE TABLE account (
            Id SERIAL PRIMARY KEY,
            CustomerId INT NOT NULL,
            AccountNumber CHAR(10) NOT NULL,
            AccountType CHAR(1),  -- 0 for Checking, 1 for Savings, etc. (assuming such encoding)
            AvailableBalance NUMERIC(12, 2),
            Transactions JSONB DEFAULT '[]',  -- Using JSONB for better performance with default empty array
            CheckNumber VARCHAR(255),  -- Assuming variable length for check numbers; adjust as necessary

            CONSTRAINT fk_customer
                FOREIGN KEY (CustomerId)
                REFERENCES Customer (Id),

            CONSTRAINT ck_account_number
                CHECK (AccountNumber ~ '^\d{10}$'),  -- Ensures account number is exactly 10 digits

            CONSTRAINT ck_account_type
                CHECK (AccountType IN ('0', '1'))  -- Adjust based on your actual types if different
        );"""

    pg_client.execute_query(create_account_query)

    # Create the credit card table
    create_creditcard_query = """
        CREATE TABLE creditcard (
            Id SERIAL PRIMARY KEY,
            CustomerId INT NOT NULL,
            AccountNumber CHAR(12) NOT NULL,
            ExpirationDate DATE,
            CCV CHAR(3),
            Balance NUMERIC(12, 2) NOT NULL DEFAULT 0.00,
            AvailableBalance NUMERIC(12, 2) NOT NULL DEFAULT 0.00,
            TransactionHistory JSONB DEFAULT '[]',

            CONSTRAINT fk_customer
                FOREIGN KEY (CustomerId)
                REFERENCES Customer (Id),

            CONSTRAINT ck_account_number
                CHECK (AccountNumber ~ '^[0-9]{12}$'),  -- Ensures account number is exactly 12 characters

            CONSTRAINT ck_ccv
                CHECK (CCV ~ '^[0-9]{3}$')  -- Ensures CCV is exactly 3 digits
        );"""
    
    pg_client.execute_query(create_creditcard_query)

if __name__ == "__main__":
    main()