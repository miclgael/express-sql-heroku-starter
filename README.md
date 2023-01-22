# express-sql-heroku-starter

> ⚠️ I'm archiving this 2023-01-23. Reference these files at your own risk!

If you're not at the point where you're deploying to heroku, or using the `heroku local web` command. 

Find these lines in `config/config.js`

```js
module.exports = connection = mysql.createConnection({
  process.env.YOUR_DEPLOYMENT_DB_VARIABLE
})
```
And replace them with the following:

```js
module.exports = connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '****',
  database: 'your_local_db_name'
})
```

To connect to your local SQL server, via MAMP/phpMyAdmin, etcetc.

## OTHERWISE

`npm install` dependencies
`heroku local web` fires up at `localhost:5000`
