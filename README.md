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

5. As we type, save frequently and see if nodemon crashed.
If nodemon crashed, means the most recent lines have error.

6. Do a test route 

   ```
   app.get('/test', function(req, res){
       res.send("hello world");
   })
   ```

7. Go on to add in the dependencies line by line. save
   after each dependencies and see if nodemon crashed.

## Steps for doing Create

1. Find a way a to retrieve all the information we need

2. Just send back the information.

example: if using axios:

```
app.get('/show_movies', async (req,res)=>{
    
    // 1. Get all the information
    let response = await axios.get('https://ckx-movies-api.herokuapp.com/movies')
    res.send(response.data)
    // 2. pass the information to the template

})
```
3. Create the hbs file and display the information.

   * Create the `views` folder/directory
   * put a simple .hbs inside and just say hello world
   * once that working, pass over the information and just show it by itself

### Troubleshooting API calls

1. We need the error message. Scroll up to see the actual error.

2. find the type of errors

   * 404 not found - means the endpoint URL is wrong
   * time out - means something with the endpoint URL 
   * 500 - could be the data you send over is wrong and the endpoint crashed. (POST, PATCH, PUT)

## Create new movie

1. For form processing, make sure we the following code BEFORE any of the routes

```
app.use(express.urlencoded({
    extended: false
}))
```

2. Make sure the form in the .hbs file has `method="POST"`
   and has a submit button.

3. Make sure all the `input type=text` has a `name` attribute

4. Create a `POST` version of the route that displays the form

5. Have minimal processing:

```
app.post('/add_new_movie', (req,res)=>{
    res.send(req.body);
})

```

6. Fill in the form with anything, and then submit. We should see
an echo of what we have submitted.

7. Then use axios to send data the API endpoint