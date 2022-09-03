import * as dotenv from "dotenv";
dotenv.config();

// ENV variables 
// - AWS_ACCESS_KEY_ID
// - AWS_SECRET_ACCESS_KEY
// Are Also needed

//'postgres://postgres:12345678@database-1.chl1kfuz4ezd.us-east-1.rds.amazonaws.com:5432/postgres'
export const config = {
    // username: `${process.env.POSTGRES_USERNAME}`, 
    // password: process.env.POSTGRES_PASSWORD, 
    // database: process.env.POSTGRES_DB, 
    // host: process.env.POSTGRES_HOST, 
    // aws_media_bucket: process.env.AWS_BUCKET,
    // aws_region: process.env.AWS_REGION,
    // aws_profile: process.env.AWS_PROFILE,
    // jwt: {
    //   secret: process.env.JWT_SECRET,
    // }
    username: "postgres", 
    password: "12345678", 
    database: "postgres", 
    host: "database-1.chl1kfuz4ezd.us-east-1.rds.amazonaws.com", 
    port: Number(process.env.PORT), 
    dialect: "postgres",
    aws_media_bucket: "arn:aws:s3:::khatibbucket",
    aws_region: "us-east-1",
    aws_profile: "default",
    jwt: {
      secret: "mysecretstring",
    },
    url: process.env.URL
};
