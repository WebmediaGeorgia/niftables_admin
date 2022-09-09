// @ts-nocheck
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';
class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const page = ctx.renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />),
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          {this.props.styleTags}
          <link href="/fonts/fonts.css" rel="stylesheet"/>
        </Head>
        <body>
          <Main />
					<div id='modal' />
					<div id='preview' />
          <div id='global-loader' />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
