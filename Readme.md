# **Instruction for localy run**

**Step - 1:** Clone the repository

**Step - 2:** install the all packges

```
    npm install
```

**Step - 3:** Create a .env file on the root

**Step - 4:** put the below code in the env file and probide your own database creadentials

```
    NODE_ENV= development
    PORT=localhost port
    DATABASE_URL= database url with valid userName and password
```

**Step - 5:** use the below commend for run the application

```
    npm run start:dev
```

use the below commend for check eslint errors and warnings
```
    npm run lint
```

use the below commend for fix those errors which are autometicaly fixable by eslint.
```
    npm run lint:fix
```

use the below commend for build this application.
```
    npm run build
```

**Thanks🥰🥰**