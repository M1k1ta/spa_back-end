# spa_back-end

[DEMO](https://spa-back-end-5cn9.onrender.com)

GET

  [/messages](https://spa-back-end-5cn9.onrender.com/messages)

  [/messages?order=desc&sort=email&page=1](https://spa-back-end-5cn9.onrender.com/messages?order=desc&sort=email&page=1)

  [/files/1](https://spa-back-end-5cn9.onrender.com/files/1)

POST

  /messages need send {
    userName,
    email,
    homePage,
    editorState,
    photos,
    docs,
    relatedId,
  }

  /messages return newMessage

  /files send data = new FormData() in FormData array files
  
  /files return {
    photosLinks: [],
    docsLinks: [],
  }
