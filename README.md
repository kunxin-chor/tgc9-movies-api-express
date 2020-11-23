# tgc9-movies-api-express

1. At the terminal, type in `npm init` and press [ENTER]. Press [ENTER] again and again till all questions are answered.

2. Install dependencies

    * express
    * hbs
    * wax-on
    * axios (if we are using API endpoint)

3. Add in a `gitignore` file (make sure it is done before any commits)
   Ignore the following type of files:

   * node_modules
   * yarn.lock

4. Initial commit

    ```
    git add .
    git commit -m "First commit"
    git push
    ```

## Setting up express

1. Install nodemon with `npm install -g nodemon`

2. Create the index.js file

3. do the minimal app for express:

   ```
   const express = require('express');
   let app = express();

   app.listen(3000, ()=>{
    console.log("server started");
   })
   ```

4. Test with `nodemon index.js`