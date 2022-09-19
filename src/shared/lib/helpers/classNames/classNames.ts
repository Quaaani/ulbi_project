type Mods = Record<string, boolean | string>;

export const classNames = (
  cls: string,
  mods?: Mods,
  additional?: string[]
): string => {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([key, cls]) => Boolean(cls))
      .map(([key, cls]) => key),
  ].join(' ');
};
