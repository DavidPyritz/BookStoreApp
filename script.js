let books = [
  {
    name: "Die Geheimnisse des Ozeans",
    author: "Clara Meer",
    likes: 1250,
    liked: true,
    price: 19.99,
    publishedYear: 2018,
    genre: "Fantasy",
    comments: [
      {
        name: "Leser123",
        comment:
          "Ein faszinierendes Abenteuerbuch, das mich von der ersten Seite an gefesselt hat.",
      },
      {
        name: "Bookworm84",
        comment:
          "Eine romantische Geschichte, die mein Herz berührt und mich zum Nachdenken gebracht hat.",
      },
      {
        name: "FantasyFanatic",
        comment:
          "Eine spannende Fantasiewelt, die ich nur schwer aus der Hand legen konnte.",
      },
      {
        name: "SciFiGuru",
        comment:
          "Ein cleverer Science-Fiction-Roman mit interessanten Zeitreise-Konzepten und Charakteren.",
      },
      {
        name: "NovelLover",
        comment:
          "Ein Buch, das voller magischer Überraschungen steckt und mich begeistert hat.",
      },
    ],
  },
  {
    name: "Der vergessene Pfad",
    author: "Maximilian Schwarz",
    likes: 980,
    liked: false,
    price: 14.5,
    publishedYear: 2021,
    genre: "Fantasy",
    comments: [],
  },
  {
    name: "Die Farben des Himmels",
    author: "Laura Blau",
    likes: 1520,
    liked: true,
    price: 22.95,
    publishedYear: 2019,
    genre: "Romantik",
    comments: [
      {
        name: "LeserPeter",
        comment:
          "Die Handlung war fesselnd und die Charaktere unglaublich lebendig dargestellt.",
      },
      {
        name: "BookLover21",
        comment:
          "Ein romantisches Meisterwerk, das mich tief berührt und bewegt hat.",
      },
      {
        name: "FantasyNerd",
        comment:
          "Fantastische Welten und epische Abenteuer - genau mein Geschmack!",
      },
      {
        name: "SciFiEnthusiast",
        comment:
          "Die Zeitreise-Elemente waren genial und haben die Story spannend gemacht.",
      },
      {
        name: "ReadingAddict",
        comment:
          "Ein unvergessliches Buch, das mich auf eine magische Reise mitgenommen hat.",
      },
    ],
  },
  {
    name: "Das Rätsel der Zeit",
    author: "Alexander Weiss",
    likes: 750,
    liked: false,
    price: 18.0,
    publishedYear: 2020,
    genre: "Science-Fiction",
    comments: [
      {
        name: "BuchKenner",
        comment:
          "Ein spannendes Abenteuer, das mich von Anfang an mitgerissen hat.",
      },
      {
        name: "LeseWurm",
        comment:
          "Die Liebesgeschichte war herzergreifend und wunderschön geschrieben.",
      },
    ],
  },
  {
    name: "Der letzte Wächter",
    author: "Sabine Grün",
    likes: 1300,
    liked: true,
    price: 16.75,
    publishedYear: 2017,
    genre: "Fantasy",
    comments: [],
  },
  {
    name: "Im Schatten des Mondes",
    author: "Philipp Silber",
    likes: 890,
    liked: false,
    price: 12.3,
    publishedYear: 2022,
    genre: "Science-Fiction",
    comments: [
      {
        name: "BücherLiebhaber",
        comment:
          "Eine magische Reise durch eine faszinierende Fantasiewelt, absolut fesselnd.",
      },
      {
        name: "Leseratte",
        comment:
          "Ein packender Science-Fiction-Roman, der mich zum Nachdenken gebracht hat.",
      },
    ],
  },
  {
    name: "Jenseits der Sterne",
    author: "Oliver Schwarz",
    likes: 1450,
    liked: true,
    price: 21.0,
    publishedYear: 2015,
    genre: "Science-Fiction",
    comments: [
      {
        name: "Leser123",
        comment:
          "Ein fesselndes Abenteuer, das mich von Anfang bis Ende mitgerissen hat.",
      },
    ],
  },
  {
    name: "Das verborgene Königreich",
    author: "Elena Gold",
    likes: 920,
    liked: false,
    price: 17.5,
    publishedYear: 2020,
    genre: "Fantasy",
    comments: [
      {
        name: "Bookworm92",
        comment:
          "Ein faszinierendes Buch, das mich von der ersten Seite an gefesselt hat.",
      },
    ],
  },
  {
    name: "Liebe in Zeiten des Krieges",
    author: "Emilia Rot",
    likes: 1800,
    liked: true,
    price: 19.99,
    publishedYear: 2016,
    genre: "Romantik",
    comments: [
      {
        name: "Bibliophile23",
        comment:
          "Die Fantasiewelt war so lebendig, ich konnte das Buch kaum aus der Hand legen.",
      },
      {
        name: "StorySeeker",
        comment:
          "Eine unglaublich berührende Liebesgeschichte, die mich tief bewegt hat.",
      },
      {
        name: "SciFiExplorer",
        comment:
          "Spannende Zukunftsvisionen und interessante Charaktere machten diesen Roman einzigartig.",
      },
    ],
  },
];

function init() {
  let mainContainer = document.getElementById("mainContainer");
  mainContainer.innerHTML = ``;
  for (let index = 0; index < books.length; index++) {
    mainContainer.innerHTML += getMainHtml(index);

    showBookTitle(index);
    likeButton(index);
    likeButton2(index);
    showBookInfo(index);
    authorYearGenre(index);
    showComments(index);
  }
}

function showBookTitle(index) {
  let title = document.getElementById(`title${index}`);
  title.innerHTML = books[index].name;
}

function authorYearGenre(index) {
  let authorName = document.getElementById(`authorName${index}`);
  authorName.innerHTML = books[index].author;
  let yearNumber = document.getElementById(`yearNumber${index}`);
  yearNumber.innerHTML = books[index].publishedYear;
  let genreName = document.getElementById(`genreName${index}`);
  genreName.innerHTML = books[index].genre;
}

function addComments(index) {
  let commentInputRef = document.getElementById(`comment_input${index}`);
  let commentInput = commentInputRef.value;

  books[index].comments.push({ name: "Neuer Leser", comment: commentInput }); //Leserkommentare Object muss manuell hinzugefügt werden da noch nicht existiert
                                                                              //die geschweifte Klammer ist deswegen weil alle objecte so geschrieben werden siehe oben
  init();
}

function showComments(index) {
  let contentRef = document.getElementById(`content${index}`);
  contentRef.innerHTML = "";

  for (let ind = 0; ind < books[index].comments.length; ind++) {
    contentRef.innerHTML += `
  <div class="commentStyle">
    <div>${books[index].comments[ind].comment}</div>
    <div>${books[index].comments[ind].name}</div>
</div>
   `;
  }
}

function likeButton(index) {
  let likeContainer = document.getElementById(`liked${index}`);
  if (books[index].liked === true) {
    likeContainer.innerHTML = `
  <i onclick="change(${index})" class="material-icons" style="font-size:36px">thumbs_up_down</i>
  `;
  } else {
    likeContainer.innerHTML = `
  <i onclick="change(${index})" class="material-icons" style="font-size:36px">thumbs_up_down</i>
  `;
  }
}

function likeButton2(index) {
  let likeContainer = document.getElementById(`likes${index}`);
  likeContainer.innerHTML = books[index].likes;
}

function change(index) {
  if (books[index].liked === true) {
    books[index].liked = false;
    books[index].likes--;
  } else {
    books[index].liked = true;
    books[index].likes++;
  }
  likeButton(index);
  likeButton2(index);
}

function showBookInfo(index) {
  let prices = document.getElementById(`prices${index}`);
  prices.innerHTML = `${books[index].price} €`;
}

function getMainHtml(index) {
  return `
<div class="DieGeheimnissedesOzeans">
    <h2 id="title${index}"></h2>
    <div class="separator">
    </div>
    <div class="bookStyle">
        <img src="./img/book1.png" alt="">
    </div>
    <div class="separator">
    </div>
    <div class="showBookInfoStyle">
        <div id="prices${index}">
        </div>
        <div class="likeHeartStyle">
            <div id="liked${index}">
            </div>
            <div id="likes${index}">
            </div>
        </div>
    </div>
    <div class="authorYearGenre">
        <div><span>Author:</span> <span id="authorName${index}"></span></div>
        <div><span>Erscheinungsjahr:</span> <span id="yearNumber${index}"></span></div>
        <div><span>Genre:</span> <span id="genreName${index}"></span></div>
    </div>
    <div class="separator">
    </div>
    <div class="commentsUsers">
        <h3>Kommentare:</h3>     
        <div class="contentStyle" id="content${index}">
        </div>     
    </div>
    <div class="inputFieldStyle">
            <input id="comment_input${index}" type="text" placeholder="Schreibe Dein Kommentar">
            <button class="buttonStyle" onclick="addComments(${index})">hinzufügen</button>
    </div>
</div>
  `;
}
