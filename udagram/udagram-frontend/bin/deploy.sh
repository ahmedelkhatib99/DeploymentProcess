aws s3 cp --recursive --acl public-read ./www s3://khatibbucket/
aws s3 cp --acl public-read --cache-control="max-age=0, no-cache, no-store, must-revalidate" ./www/index.html s3://khatibbucket/
eb setenv POSTGRES_USERNAME=$POSTGRES_USERNAME
eb setenv POSTGRES_PASSWORD=$POSTGRES_PASSWORD
eb setenv POSTGRES_HOST=$POSTGRES_HOST
eb setenv POSTGRES_DB=$POSTGRES_DB
eb setenv AWS_BUCKET=$AWS_BUCKET
eb setenv AWS_DEFAULT_REGION=$AWS_DEFAULT_REGION
eb setenv AWS_EB_PROFILE=$AWS_EB_PROFILE
eb setenv JWT_SECRET=$JWT_SECRET