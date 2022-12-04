import { PluginItem } from '@babel/core'

const babelRemovePropsPlugin = (): PluginItem => ({
  visitor: {
    Program(path, state) {
      // Получаем массив из аргументов вызова плагина (пример: buildPlugin(['data-testid']))
      const forbidden = state.opts.props || []

      // traverse() - метод для обхода всех нод в AST
      path.traverse({
        // Нода, с которой мы будем работать (пропсы у DOM узлов)
        JSXIdentifier(current) {
          // Получаем имя нужной ноды (пример: data-testid)
          const nodeName = current.node.name

          // Проверка, есть ли в массиве из аргументов очередная нода
          if (forbidden.includes(nodeName)) {
            // Убираем ее из узла
            current.parentPath.remove()
          }
        },
      })
    },
  },
})

export default babelRemovePropsPlugin
