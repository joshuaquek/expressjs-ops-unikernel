# ExpressJS Ops Unikernal
A Simple ExpressJS Server as a Unikernel using the Ops NanoVM framework

## Pre-setup
Make sure you have NodeJS & Ops (https://nanovms.gitbook.io/ops/) installed

then run:
```bash
npm install
```

## Running locally
Running natively using nodejs:
```bash
npm start
```

or if you wish package it into a unikernal and run it locally via Ops:
```bash
npm run deploy:local
```

## Deploying to AWS
```bash
npm run deploy:aws
```

## Contributing
In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.
