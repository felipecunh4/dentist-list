import Document, { Html, Head, Main, NextScript } from 'next/document';

class CustomDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head />
        <body>
          <Main />
          <div id="drawers-portal" />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
