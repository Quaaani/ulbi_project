// <Адрес страницы, позиция скролла в px>
export type ScrollSchema = Record<string, number>

export interface ScrollRestorationSchema {
  scroll: ScrollSchema
}
