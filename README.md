# spa_back-end

[DEMO](https://spa-back-end-5cn9.onrender.com)

[FRONT-END](https://github.com/M1k1ta/spa_front-end)

[SCHEME_BD](https://www.figma.com/file/xBjjAgeCtjX7x5Kv4mYBNf/Untitled?type=whiteboard&node-id=0%3A1&t=UhbXXTrGos1xJOHf-1)

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
    photos: [{
      id,
      name,
      type,
      link,
    }],
    docs: [],
  }
