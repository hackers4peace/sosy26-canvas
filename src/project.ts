import { makeProject } from '@motion-canvas/core'
import grants from './scenes/grants?scene'
import authz from './scenes/authz-screen?scene'
import balance from './scenes/balance?scene'

const font = new FontFace(
  'Sriracha',
  'url(https://fonts.gstatic.com/s/sriracha/v16/0nkrC9D4IuYBgWcI9NbfTwE.woff2)'
)

font.load().then(() => document.fonts.add(font))

export default makeProject({
  scenes: [authz, grants, balance],
})
