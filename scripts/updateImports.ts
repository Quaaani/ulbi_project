import { Project } from 'ts-morph'

const project = new Project({})

// Добавляем файлы, с чьим исходным кодом мы будем работать
project.addSourceFilesAtPaths('src/**/*.ts')
project.addSourceFilesAtPaths('src/**/*.tsx')

// Получаем массив всех файлов
const files = project.getSourceFiles()

// Вспомогательная функция для определения нужной ноды
const isAbsolute = (value: string) => {
  const layers = ['shared', 'entities', 'features', 'widgets', 'pages', 'app']

  return layers.some((layer) => value.startsWith(layer))
}

// Обход
files.forEach((sourceFile) => {
  // Определяем с какими нодами AST мы будем работать (пример: импортами)
  const importDeclarations = sourceFile.getImportDeclarations()

  // Обход всех импорт нод
  importDeclarations.forEach((importDeclaration) => {
    // Получаем значение этой ноды
    const value = importDeclaration.getModuleSpecifierValue()

    // Переопределяем значение (пример: 'shared/hooks' => '@/shared/hooks')
    if (isAbsolute(value)) {
      importDeclaration.setModuleSpecifier(`@/${value}`)
    }
  })
})

// Сохранение изменений
project.save()
