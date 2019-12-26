export default ({
  styleTags = '',
  styleLinks = '',
  defaultState,
  html = '',
  helmet,
  scriptTags = '',
}) => {
  return `<!DOCTYPE html>
  <html lang="en-US">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="/images/logo.png">
    ${helmet.title.toString()}
    ${helmet.meta.toString()}
    ${helmet.link.toString()}
    ${helmet.script.toString()}
    ${styleLinks}
    ${styleTags}
  </head>
  <body>
  <div id="app">${html}</div><script>window.defaultState = ${JSON.stringify(
    defaultState
  ).replace(/</g, '\\u003c')} </script> ${scriptTags}
  </body>
  </html>
  `;
};
