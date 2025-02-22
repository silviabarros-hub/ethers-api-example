# Ethers API call

- Smart Contract Interaction
Utilizes Ethers.js to connect to any smart contract. This example shows the interaction with one deployed on the Binance Smart Chain, enabling interaction with its functions.

RESTful API: Provides an Express.js API endpoint (/silviabarrosapitest) that clients can use to fetch token details and wallet balances.

CORS Support: Configured to allow Cross-Origin Resource Sharing (CORS) requests, enabling frontend applications to communicate with the API from different domains.

Added/Updated files:
/Users/silviabarros/test-project/api/lib/routes/silviabarrosapitest.js
/Users/silviabarros/test-project/contracts/contract_ABI.js
/Users/silviabarros/test-project/api/lib/routes/index.js
/Users/silviabarros/test-project/api/index.js


# Lunie Official Monorepo

## Workspaces:

- `/api`: an API to interact with many different PoS blockchains
    ([README](https://github.com/luniehq/lunie/blob/develop/api/README.md))

- `/app`: Lunie [web](https://app.lunie.io), [iOS](https://testflight.apple.com/join/mFLnwrWM), and [Android](https://play.google.com/store/apps/details?id=org.lunie.lunie)
    ([README](https://github.com/luniehq/lunie/blob/develop/app/README.md))

- `/extension`: [Lunie browser extension](https://chrome.google.com/webstore/detail/lunie-browser-extension/hbaijkfbhhdhhjdfbpdafkjimohblhgf).
    ([README](https://github.com/luniehq/lunie/blob/develop/extension/README.md))

## Preparation:

To install the required modules for `/api`, `/app`, and `/extension` all at once, run:

```bash
$ yarn
```

If you're only interested in `/api`, `/app`, or `/extension` there are instructions below for how to work in one workspace at a time.

#### To install new dependencies in a single workspace:

Run this command with the following syntax:

```bash
$ yarn workspace <workspace-name> add <package-name>
```

As an example:

```bash
$ yarn workspace extension add cool-vue-package
```

## To run the code in a single workspace:

- API:
```bash
$ yarn workspace api start
```

- App:
```bash
$ yarn workspace app serve
```

### To build extension:

```bash
$ export LUNIE_API=https://staging-api.lunie.io
$ yarn workspace extension build
```

### To build extension enabling localhost connection

```bash
$ export LUNIE_API=https://staging-api.lunie.io
$ yarn workspace extension build:dev
```
