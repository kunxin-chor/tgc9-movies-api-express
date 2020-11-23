const express = require("express");
const hbs = require("hbs");
const axios = require("axios");
const wax = require("wax-on");
const helpers = require("handlebars-helpers");
let app = express();

app.use(
  express.urlencoded({
    extended: false
  })
);

// ROUTES
app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/show_movies", async (req, res) => {
  // 1. Get all the information
  let axiosResponse = await axios.get(
    "https://ckx-movies-api.herokuapp.com/movies"
  );

  // 2. pass the information to the template
  res.render("show_all_the_movies.hbs", {
    movies: axiosResponse.data
  });
});

app.get("/add_new_movie", (req, res) => {
  res.render("display_form.hbs");
});

// app.post('/add_new_movie', async (req,res)=>{
//     let title = req.body.title;
//     let plot = req.body.plot;

//     await axios.post('https://ckx-movies-api.herokuapp.com/movie/create', {
//         'title': title,
//         'plot': plot
//     })

//     res.redirect('/show_all_movies')
// })

app.post(
  "/add_new_movie",
  async (req, res) => {
    let title = req.body.title;
    let plot = req.body.plot;

    await axios.post(
      "https://ckx-movies-api.herokuapp.com/movie/create",
      {
        title: title,
        plot: plot
      } // end second argument
    ); // end axios.post
  } // end (req,res)
); // end app.post()

app.listen(3000, () => {
  console.log("server started");
});
