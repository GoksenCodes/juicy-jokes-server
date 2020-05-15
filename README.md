# Juicy-jokes Server

This is a development server template for juicy jokes.


## SETUP 



1. Clone the app

```
git clone git@github.com:YOUR_GITHUB_NAME/YOUR_PROJECT_NAME.git
```

2. cd into your project

```
cd YOUR_PROJECT_NAME
```

3. install dependencies

```
npm install
```

4. Configure your database in `config/config.json`

The default assumes a postgres database with

- username: postgres
- password: secret

```json
// config/config.json
{
  "development": {
    "username": "postgres",
    "password": "secret",
    "database": "YOUR_PROJECT_NAME_HERE_development",
    "host": "localhost",
    "dialect": "postgres",
    "operatorsAliases": "0"
  }
}
```

5. Create database, run migrations & seed data

```bash
npx sequelize-cli db:create
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```

6. start server 

```
node.index.js
```


## Endpoints

| Method | Path                       | Purpose                             | required parameters   | auth |
| ------ | -------------------------- | ----------------------------------- | --------------------- | ---- |
| GET    | '/'                        | Get a random joke                   | none                  | no   |
| POST   | '/    '                    | Post a joke                         | setup,punchline       | no   |

## Built With

* Node.js
* Express
* Sequilize
* Postgres
