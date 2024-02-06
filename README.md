# BookShelf-App



<p align="center">
  <a href="https://github.com/riimuru/gogoanime">
    <img src="https://avatars.githubusercontent.com/u/90430786?v=4" alt="Logo" width="150" >
  </a>

  <h3 align="center">BookShelf App</h3>

  <p align="center">
    <samp>A free anime app restful API serving anime from <a href="https://luckyanimeku.netlify.app/">LuckyAnime</a></samp>
    <br />
    <a href="#routes"><strong>Explore the api »</strong></a>
    <br />
    <br />
    <a href="https://github.com/riimuru/gogoanime/issues/new?assignees=riimuru&labels=bug&template=bug-report.yml">Bug report</a>
    ·
    <a href="https://github.com/riimuru/gogoanime/issues/new?assignees=riimuru&labels=enhancement&template=feature-request.md">Feature request</a>
  </p>
  <p align="center">
    <a href="https://github.com/riimuru/gogoanime/actions/workflows/docker-build.yml">
      <img src="https://github.com/riimuru/gogoanime/actions/workflows/docker-build.yml/badge.svg" alt="stars">
    </a>
     <a href="https://github.com/riimuru/gogoanime/actions/workflows/codeql-analysis.yml">
      <img src="https://github.com/riimuru/gogoanime/actions/workflows/codeql-analysis.yml/badge.svg" alt="stars">
    </a>
    <a href="https://github.com/riimuru/gogoanime">
      <img src="https://img.shields.io/github/stars/riimuru/gogoanime" alt="stars">
    </a>
    <a href="https://discord.gg/qTPfvMxzNH">
      <img src="https://img.shields.io/discord/987492554486452315?color=7289da&label=discord&logo=discord&logoColor=7289da" alt="Discord">
    </a>
        <a href="https://github.com/consumet/extensions/blob/master/LICENSE">
      <img src="https://img.shields.io/github/license/consumet/extensions" alt="GitHub">
    </a>
  </p>
</p>


## Installation
Run the following command to clone the repository, and install the dependencies:

```sh
git clone https://github.com/LuckyIndraEfendi/BookShelf-App.git
cd BookShelf-App
npm install #or yarn install
```

### Handling Command when error

```sh
npm install --legacy-peer-deps #or yarn install
```

### Run React + Vite on the development mode

```sh
npm run dev 
```
Now the React + Vite is running on http://localhost:3000


## Database Setup 
```sh
npm run db 
```
Now the server is running on http://localhost:5000/books


## Routes
Below you'll find examples using [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) but you can use any other http library out there.

### Get Recent Book Lists                            

```js
fetch("http://localhost:5000/books")
  .then((response) => response.json())
  .then((booklist) => console.log(booklist));
```

Output >>

```json
[

    {
      "id" : 1,
      "judulBuku": "Rimuru Tempest - Tensei Shitara Slime datta ken",
      "description": "The main protagonist of the series and Founder as well as Chancellor and King of the monster nation known as the Jura-Tempest Federation. Originally Mikami Satoru, a 37-year-old general contractor, he was stabbed by a passing robber while protecting one of his co-workers and reincarnated in a new world as a slime, one of the lowest monsters on the food chain",
      "pengarang": "Tensura Nikkiii",
      
    },

    {...},
    ...
]
```

### Get Books Search

| Parameter       | Description         |
| --------------- | ------------------- |
| `q` (string)    | anime title         |

```js
fetch("http://localhost:5000?q=rimuru")
  .then((response) => response.json())
  .then((animelist) => console.log(animelist));
```

Output >>

```json
[
  {
      "id" : 1,
      "judulBuku": "Rimuru Tempest - Tensei Shitara Slime datta ken",
      "description": "The main protagonist of the series and Founder as well as Chancellor and King of the monster nation known as the Jura-Tempest Federation. Originally Mikami Satoru, a 37-year-old general contractor, he was stabbed by a passing robber while protecting one of his co-workers and reincarnated in a new world as a slime, one of the lowest monsters on the food chain",
      "pengarang": "Tensura Nikkiii",
      
    },
    {...},
    ...
]
```


### Heroku
Host your own instance of the api on heroku using the button below.

[![Deploy on Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/riimuru/gogoanime/tree/main)

### Render
Host your own instance of the api on render using the button below.

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/riimuru/gogoanime-api)

### Railway
Host your own instance of the api on railway using the button below.

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template/Lg6DEp?referralCode=dv4TuD)


