#Hosted working Front-End Application link
http://khatibbucket.s3-website-us-east-1.amazonaws.com

#Infrastructure
-RDS
-S3
-Elastic Beanstalk
-CircleCi

#App dependencies
- [Angular](https://angular.io/) - Single Page Application Framework
- [Node](https://nodejs.org) - Javascript Runtime
- [Express](https://expressjs.com/) - Javascript API Framework

#Pipeline process
1. push the code to github
2. circleci workflow starts
3. install node, eb, aws-cli
4. install frontend dependencies
5. install api dependencies
6. run lint frontend
7. build frontend
8. build api
9. approve to start deploying in circleci
10. deploy frontend
11. deploy api