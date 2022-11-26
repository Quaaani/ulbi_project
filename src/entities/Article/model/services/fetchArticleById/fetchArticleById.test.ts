import { TestAsyncThunk } from 'shared/lib/helpers/tests/testAsyncThunk'

import { Article, ArticleBlockType, ArticleType } from '../../types/articleSchema'

import { fetchArticleById } from './fetchArticleById'

describe('fetchArticleById Async Test', () => {
  const mockData: Article = {
    id: 'b515cfc8-e9a8-4f30-9a38-786deeb7cd47',
    user: {
      id: 'e6882431-311d-4f41-b0dd-38c03ef71af7',
      username: 'Antonbek',
      avatar: 'https://ih1.redbubble.net/image.1382109690.8812/st,small,507x507-pad,600x600,f8f8f8.jpg',
    },
    title: 'JavaScript News',
    subtitle: 'Latest new features in JS 2022',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS697md4hWAeEQKRseCn0oBkuQ6jAsrpuDsg&usqp=CAU',
    views: 1042,
    createdAt: '04.11.2022',
    type: [ArticleType.IT],
    blocks: [
      {
        id: '2c1981be-2b0b-4c1c-8e31-010c878fea87',
        type: ArticleBlockType.TEXT,
        title: 'Заголовок этого блока',
        paragraphs: [
          'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
          'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
          'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
        ],
      },
      {
        id: '233e477f-0ec9-43ee-a2e9-52741d6ac05c',
        type: ArticleBlockType.CODE,
        code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
      },
      {
        id: 'a31ac5c7-8ef8-4453-b48d-20b19f0e0701',
        type: ArticleBlockType.TEXT,
        title: 'Заголовок этого блока',
        paragraphs: [
          'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
          'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
        ],
      },
      {
        id: '32fc16cb-c737-415c-8c39-a43d51fe65e9',
        type: ArticleBlockType.IMAGE,
        src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
        title: 'Рисунок 1 - скриншот сайта',
      },
      {
        id: '63c475da-9986-4beb-9404-d9a1c8c3973d',
        type: ArticleBlockType.CODE,
        code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);",
      },
      {
        id: 'ec7bfb7f-34ee-4fc2-a7c8-2875be14861b',
        type: ArticleBlockType.TEXT,
        title: 'Заголовок этого блока',
        paragraphs: [
          'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
          'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
        ],
      },
      {
        id: '2fccd683-6a1b-42f1-8643-4b6626a80c6b',
        type: ArticleBlockType.IMAGE,
        src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
        title: 'Рисунок 1 - скриншот сайта',
      },
      {
        id: '77cb24c5-b9cc-4f95-be0b-d1efcc3ff322',
        type: ArticleBlockType.TEXT,
        title: 'Заголовок этого блока',
        paragraphs: [
          'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
        ],
      },
      {
        id: '8404e8a3-dce5-4256-a6fb-f9d81d173af7',
        type: ArticleBlockType.CODE,
        code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
      },
      {
        id: '6609da0c-a6cf-434b-99b3-75f726b844d1',
        type: ArticleBlockType.TEXT,
        title: 'Заголовок этого блока',
        paragraphs: [
          'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
          'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
        ],
      },
    ],
  }

  test('Success GET Request Test', async () => {
    const thunk = new TestAsyncThunk(fetchArticleById)
    thunk.api.get.mockReturnValue(Promise.resolve({ data: mockData }))
    const result = await thunk.callThunk('b515cfc8-e9a8-4f30-9a38-786deeb7cd47')

    expect(thunk.api.get).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(mockData)
  })
  test('Error GET Request Test', async () => {
    const thunk = new TestAsyncThunk(fetchArticleById)
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))
    const result = await thunk.callThunk('a987bf1f-0aaf-4078-8a47-4cc96796aef9')

    expect(thunk.api.get).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toEqual('fetchArticleById Error')
  })
})
