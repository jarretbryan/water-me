var html = require('choo/html')

var TITLE = 'water-me - route not found'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)
  return html`
    <body class="sans-serif pa3">
      <h1>Tend to your garden.</h1>
      <a class="pt2" href="/">It's time for me to go back.</a>
    </body>
  `
}
