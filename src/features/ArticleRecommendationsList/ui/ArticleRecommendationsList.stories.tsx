import { ComponentStory, ComponentMeta } from '@storybook/react'
import withMock from 'storybook-addon-mock'

import { ArticleRecommendationsList, ArticleRecommendationsListProps } from './ArticleRecommendationsList'

import { StoreDecorator, ThemeDecorator } from '@/shared/config/storybook'
import { Theme } from '@/app/providers/ThemeProvider'


export default {
  title: 'features/ArticleRecommendationsList',
  component: ArticleRecommendationsList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [StoreDecorator({}), withMock],
} as ComponentMeta<typeof ArticleRecommendationsList>

const Template: ComponentStory<typeof ArticleRecommendationsList> = (args: ArticleRecommendationsListProps) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100vh',
    }}
  >
    <ArticleRecommendationsList {...args} />
  </div>
)

const article = {
  id: '36eb9431-6b0c-4632-9e3d-6ef12cf57271',
  img: 'https://thumbs.dreamstime.com/b/consultant-presenting-tag-cloud-information-technology-224099191.jpg',
  view: '9913',
  createdAt: '15.11.2022',
  title: 'IT Technologies',
  subtitle: 'News about IT',
  type: ['IT'],
  blocks: [
    {
      id: '2c1981be-2b0b-4c1c-8e31-010c878fea87',
      type: 'TEXT',
      title: 'Заголовок этого блока',
      paragraphs: [
        'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
        'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
        'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
      ],
    },
    {
      id: '233e477f-0ec9-43ee-a2e9-52741d6ac05c',
      type: 'CODE',
      code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
    },
    {
      id: 'a31ac5c7-8ef8-4453-b48d-20b19f0e0701',
      type: 'TEXT',
      title: 'Заголовок этого блока',
      paragraphs: [
        'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
        'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
      ],
    },
  ],
  user: {
    id: '63b24a0c-f3b6-4928-a73f-d7f959084bfd',
    username: 'Omarbek',
    password: '5750579',
    roles: ['MANAGER'],
    avatar: 'https://global.discourse-cdn.com/business5/uploads/vrchat/optimized/2X/8/8b69c99796e45ade46980016a1a8bbb877e6b8ba_2_666x500.jpeg',
  },
}

export const Default = Template.bind({})
Default.args = {}
Default.parameters = {
  mockData: [
    {
      url: `${__API__}/articles?_limit=5`,
      method: 'GET',
      status: 200,
      response: [
        { ...article, id: '5b73ade6-f020-4595-9b1e-ae177ac4be23' },
        { ...article, id: 'b3adbeeb-ecad-4f42-8275-c5c93f0af2ed' },
        { ...article, id: '549dcff0-79b7-44cf-b3aa-782b090de7af' },
        { ...article, id: '2fd80f22-982c-4212-8f46-ea43d6d6f283' },
      ],
    },
  ],
}

export const DefaultDark = Template.bind({})
DefaultDark.args = {}
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)]

export const DefaultGreen = Template.bind({})
DefaultGreen.args = {}
DefaultGreen.decorators = [ThemeDecorator(Theme.GREEN)]
