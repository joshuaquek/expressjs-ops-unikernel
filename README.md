# 🥜 ExpressJS Ops Unikernel
A Simple ExpressJS Server (NodeJS) as a Unikernel using the Ops NanoVM framework

## Pre-setup
Make sure you have NodeJS & Ops (https://nanovms.gitbook.io/ops/) installed

then run:
```bash
npm install
```

## Running locally
Running natively using nodejs locally on your com:
```bash
npm start
```

or if you wish package it into a unikernal and run it locally on your com via Ops:
```bash
npm run local:deploy
```

## Deploying to AWS
Run these two commands below to get your first unikernel running on AWS
* The first command uploads your unikernel to AWS as an AMI
* The second command takes that AMI and creates an instance out of it
```bash
npm run aws:upload
npm run aws:deploy
```

## Configuration File
You can further configure your unikernel via `config.json`
```json
{
  "Dirs": ["node_modules"], // sub-directories to include in your unikernel
  "CloudConfig": {
    "Platform": "aws",
    "ProjectID": "expressjs-unikernel-demo",
    "Zone": "ap-southeast-1",
    "BucketName": "expressjs-unikernel-demo-s3-bucket",
    "VPC": "vpc-0bacb815016d9c718",       // AWS VPC ID
    "Subnet": "subnet-09dcbcba1246621a7"  // AWS Subnet ID
  },
  "RunConfig": {
    "Ports": ["80"]   // Ports to be exposed
  }
}
```

If one decides to use unikernels for production purposes, it would be advisable from an architectural perspective to deploy your unikernel instances on a private subnet (via the `Subnet` key-value pair in your `config.json`), and then route traffic to these private instances using a HTTP/HTTPS load balancer. 

## Contributing
In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.

## License
MIT