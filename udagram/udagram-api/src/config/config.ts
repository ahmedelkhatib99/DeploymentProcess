import * as dotenv from "dotenv";
dotenv.config();

// ENV variables 
// - AWS_ACCESS_KEY_ID
// - AWS_SECRET_ACCESS_KEY
// Are Also needed

//'postgres://postgres:12345678@database-1.chl1kfuz4ezd.us-east-1.rds.amazonaws.com:5432/postgres'
export const config = {
  username: `${process.env.POSTGRES_USERNAME}`, //postgres
  password: process.env.POSTGRES_PASSWORD, //12345678
  database: process.env.POSTGRES_DB, //postgres
  port: Number(process.env.PORT), //5432
  host: process.env.POSTGRES_HOST, //database-1.chl1kfuz4ezd.us-east-1.rds.amazonaws.com
  dialect: "postgres",
  aws_region: process.env.AWS_REGION,
  aws_profile: process.env.AWS_PROFILE,
  aws_media_bucket: process.env.AWS_BUCKET,
  url: process.env.URL,
  jwt: {
    secret: process.env.JWT_SECRET,
  },
};
