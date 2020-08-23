import Highlight, { defaultProps } from 'prism-react-renderer';
import palenight from 'prism-react-renderer/themes/palenight';

const CodeBlock = ({ children }) => {
  return (
    <Highlight
      {...defaultProps}
      theme={palenight}
      code={children}
      language='jsx'
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className}
          style={{
            ...style,
            padding: '15px 25px 0 25px',
            borderRadius: '5px',
            fontSize: '1rem',
            boxShadow:
              '0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.20)',
            overflowY: 'auto',
            maxHeight: '80vh',
            minWidth: '600px',
          }}
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};
export default CodeBlock;
