  Middleware to obtain information for auditing processes with geolocation information.
## Installation

```bash
$ npm install trackology
```

## How to use

This package works like any other middleware, it can be used globally or implemented as route middleware.

```js
const audit = require('trackology')
const app = express()

app.use(audit.getAuditInformation())

app.get('/', function (req, res) {
  console.log(req.audit)
  res.send('Hello World')
})

app.listen(3000)
```

or

```js
const audit = require('trackology')
const app = express()

app.get('/', audit.getAuditInformation, function (req, res) {
  console.log(req.audit)
  res.send('Hello World')
})

app.listen(3000)
```

It will detect multiple headers of the client request, obtain the IP information of the request and give an approximate geolocation data. The audit information will be stored in a property of the request object called audit. (**request.audit** or **req.audit**).

## Why use it

  * Obtaining information for auditing processes
  * Analyze the regions from which the different requests are received.
  * Traffic management of requests. (Restrict, limit or allow access to different contents).

## What's next

  * Optimization in the management of the IP block database.
  * Possibility of integration with services such as SQS (AWS) or Azure Functions (Microsoft) for processing and storage of audit information.

Thank you for your feedback it is really appreciated!