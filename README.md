# sapper-lambda-template

Proof of concept cloudformation template to deploy sapper in lambda.

Currently works using a modified version of sapper until #356 resolves.

Same code base support local dev with hot module reloading when process.env.NODE_ENV = development.

Start with usual `sapper dev` in Sapper directory

## Requirements.

An aws account, aws cli, a TLD in Route53 and an s3 bucket for cloudformation to use temporarily.

You need to host this on a custom domain because API gateway adds /Prod or /Stage to the prefix of all the methods, which would mean you need to update Sapper to respect these modified route paths.

## Build

```
$ cd Sapper
$ npm install
$ aws cloudformation package --template-file Server.yaml --s3-bucket YOUR_S3_BUCKET_NAME --output-template-file deploy.yaml
```

## Deploy

```
$ aws cloudformation deploy --template-file deploy.yaml --stack-name SAPPER-LAMBDA --parameter-overrides PublicHostedZoneId=xxxx DomainName=xxxxx CertificateArn=xxxx --capabilities CAPABILITY_IAM
```

There is a annoying issue, that after first time deployment, you need to go into api gateway console, and for both the resources (`/` and `/{proxy+}`) you need to:

1. Click on the word ANY
2. Click the Integration Request box
3. Click the pencil to edit the lambda function, and then click save again
4. Once you have done both resources re-deploy the API to prod.

## Update

You can update the Sapper lambda with `npm run replace XXXX` where XXXX is the function name that cloudformation gave your lambda.