# Internship-19-Snouter

Web API in NestJS

Navigate to project folder:
~ cd snouter

Install dependecies:
~ npm install

Start the PostgreSQL database with docker:
~ docker-compose up -d

Apply databse migrations:
~ npx prisma migrate dev

Seed the database:
~ npx prisma db seed

Run the app:
~ npm run start:dev
