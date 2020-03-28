# Movie Tracking App

## About

Movie app which allows to save favorites from [OMDb API](http://www.omdbapi.com/).

## Installation and setup

Clone the repository 

```sh
git clone https://github.com/jensrott/movie-tracking-app.git
```

Go to folder destination:

```sh
cd movie-tracking-app
```

Enter your data in a .env.example file and rename to .env
Get your api key [here](http://www.omdbapi.com/apikey.aspx)

```sh
REACT_APP_API_KEY=REACT_APP_API_KEY
```

Install all dependencies and run the application:

```sh
npm install
npm run start
```

## Features

* Search movies/series
* View movie detail page
* Add Favorites
* Delete Favorites
* Form validation
* Snackbar when adding or removing items
* And more

## Features for later versions

* Adding more tests
* Dropdown list api results when typing
* Change theme colors based on the season
* Dark mode
* Use Context API