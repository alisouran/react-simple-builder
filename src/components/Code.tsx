import SyntaxHighlighter from 'react-syntax-highlighter';
import { materialOceanic } from 'react-syntax-highlighter/dist/esm/styles/prism';
import prettier from 'prettier/standalone';
import parserJS from 'prettier/parser-babel';
import { useWidgetsContext } from '../context';
import CodeWidget from './blocks/widget/code';

// const types = {
//   banner: {
//     i_lib_code: ImportBanner,
//   },
// };

const codes: { [index: string]: any } = {
  widget: CodeWidget,
};

const CodeSection = () => {
  const { widgets } = useWidgetsContext();

  // const importLibraryCodes = `import { ${Object.values(
  //   Object.fromEntries(Object.entries(types).filter(([key]) => widgets.map((e: any) => e.type).includes(key))),
  // )
  //   .map((e) => e.i_lib_code.join(', '))
  //   .join(', ')} } from 'app-library';`;
  // const UNImportLibraryCodes = Array.from(new Set(importLibraryCodes.replaceAll('\n  ', '\n').split('\n'))).join('\n  ');

  const rawCode = `${`const Landing = () => { return(<>`}${widgets.map(
    (c: any) => `${codes[c.type]({ ...c })}`,
  )}${`</>)}`}`.replace(/\>,</g, '><');

  return (
    <div className="ltr">
      <SyntaxHighlighter
        className="ltr"
        wrapLongLines
        wrapLines
        language="jsx"
        style={materialOceanic}
      >{`${prettier.format(rawCode, { parser: 'babel', plugins: [parserJS] })}`}</SyntaxHighlighter>
    </div>
  );
};

export default CodeSection;
