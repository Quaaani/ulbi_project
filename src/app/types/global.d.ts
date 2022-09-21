// Декларация для .scss расширений (препроцессеров)
declare module '*.scss' {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

// Декларация для .svg расширений
declare module '*.svg' {
  import React from 'react';
  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

// Декларация для разных файлов
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';

// Объявление глобальных переменных
declare const __IS_DEV__: boolean
