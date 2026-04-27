import { makeScene2D, Img } from "@motion-canvas/2d"
import { beginSlide, all } from "@motion-canvas/core"
export default makeScene2D(function* (view) {
  const seasaw = new Img({
    src: 'https://raw.githubusercontent.com/hackers4peace/sosy26-canvas/refs/heads/main/src/j8sT8Qp.png',
    width: 1920,
    height: 1080,
  })
  view.add([seasaw])
  yield* beginSlide('Compare Scope')
  yield* all(
    seasaw.opacity(1, 1)
  )
  yield* beginSlide('End')
})
