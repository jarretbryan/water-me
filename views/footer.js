var html = require('choo/html')

module.exports = footer

function footer() {
    return html`
     <div>
        <small class="f6 db tc">Made with 💛 by<a href="https://www.github.com/jarretbryan" title="github" class="f6 dib ph2 link mid-gray dim">jarretbryan</a></small>
        <div class="tc mt3">
            <a href="https://www.github.com/jarretbryan" title="github" class="f6 dib ph2 link mid-gray dim">github</a>
            <a href="https://www.twitter.com/jaybeekeeper"    title="Terms" class="f6 dib ph2 link mid-gray dim">twitter</a>
            <a href="https://jarretbryan.github.io"  title="personal" class="f6 dib ph2 link mid-gray dim">personal</a>
        </div>
     
     </div>
  `
}
