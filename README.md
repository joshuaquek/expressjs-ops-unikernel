# ExpressJS Ops Unikernal
A Simple ExpressJS Server as a Unikernel using the Ops NanoVM framework

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

## Contributing
In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.
