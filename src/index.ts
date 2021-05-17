const SymbolRegex = /[.,\/#!$%\^&\*;:{}=\-_`~()]/g;

export type StringOrStrings = string | string[];

/**
 *
 * @param s The string or strings to be replaced
 * @param r The content to be replaced
 * @param reg Customize RegExp
 * @returns Replaced result
 */
const replaceSymbol = (
  s: StringOrStrings,
  r: string = '',
  reg: RegExp = SymbolRegex,
) => {
  if (typeof s === 'string') {
    return s.replace(reg, r);
  }

  if (typeof s === 'object') {
    const a: string[] = [];
    s.forEach((i) => {
      if (typeof i === 'string') {
        a.push(i.replace(reg, r));
      } else {
        a.push(i);
      }
    });
    return a;
  }

  return '';
};

export { replaceSymbol };

export default replaceSymbol;
