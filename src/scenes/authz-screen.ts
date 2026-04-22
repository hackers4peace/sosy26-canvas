import { beginSlide, all } from "@motion-canvas/core";
import { makeScene2D, Rect, Img } from "@motion-canvas/2d"
import { FixedCamera } from "../fixed-camera";
import { makeActor, actors } from "../model/actors"
import { grid } from '../model/layout'
import { makeMode, makeStorage, makeResource, makeNeed, makeManager, makeCombined } from "../model/storage"
import { makeArrow } from "../model/arrow"
import { makeGrant } from '../model/grants'

function makeScope(width: number, height: number) {
  return new Rect({
    width,
    height,
    padding: 10,
    radius: 8,
    stroke: 'orange',
    lineWidth: 4,
    opacity: 0,
  })
}

export default makeScene2D(function* (view) {
  const max = makeActor(actors.max)
  max.position(grid(0, -1))

  const muas = makeManager()
  muas.position(grid(-1, -1))

  const sm1 = makeStorage({ square: false })
  sm1.position(grid(-1.7, -1))

  const sm2 = makeStorage()
  sm2.position(grid(-2.3, -1))

  const gm2 = makeGrant({ shape: 'square' })
  gm2.position(sm2.position)

  const sm3 = makeStorage({ pentagon: false })
  sm3.position(grid(-2.9, -1))

  const gm3 = makeGrant({ shape: 'square' })
  gm3.position(sm3.position)

  const sm4 = makeStorage({ triangle: false })
  sm4.position(grid(-3.5, - 1))

  const gm4 = makeGrant({ shape: 'square' })
  gm4.position(sm4.position)

  const sme = makeActor(actors.sme)
  sme.position(grid(-1, 0))

  const suas = makeManager()
  suas.position(grid(-1.6, 0))

  const ss1 = makeStorage({ triangle: false })
  ss1.position(grid(-2.3, 0))

  const gs1 = makeGrant({ shape: 'square' })
  gs1.position(ss1.position)

  const ss2 = makeStorage({ pentagon: false })
  ss2.position(grid(-2.9, 0))

  const gs2 = makeGrant({ shape: 'square' })
  gs2.position(ss2.position)

  const ss3 = makeStorage()
  ss3.position(grid(-3.5, 0))

  const gs3 = makeGrant({ shape: 'square' })
  gs3.position(ss3.position)

  const acme = makeActor(actors.acme)
  acme.position(grid(-1, 1))

  const auas = makeManager()
  auas.position(grid(-1.6, 1))

  const sa1 = makeStorage({ square: false })
  sa1.position(grid(-2.3, 1))

  const sa2 = makeStorage()
  sa2.position(grid(-2.9, 1))

  const ga2 = makeGrant({ shape: 'square' })
  ga2.position(sa2.position)

  const app = makeActor(actors.app)
  app.position(grid(1, 1))

  const odi = makeActor(actors.solid)
  odi.position(grid(1, -1))

  const repo = new Rect({
    layout: true,
    direction: 'column',
    width: 200,
    opacity: 0,
    children: [
      makeResource('triangle'),
      makeResource('square'),
      makeResource('pentagon'),
    ]
  });
  repo.position(grid(2, -1))

  const modes = new Rect({
    layout: true,
    direction: 'column',
    width: 200,
    opacity: 0,
    children: [
      makeMode('create'),
      makeMode('read'),
      makeMode('update'),
      makeMode('delete'),
    ]
  });
  modes.position(grid(2.75, -1))

  const needs = new Rect({
    layout: true,
    direction: 'column',
    width: 250,
    opacity: 0,
    children: [
      makeNeed('square'),
    ]
  });
  needs.position(grid(2, 1))

  const screen = new Rect({
    layout: true,
    direction: 'column',
    width: 300,
    opacity: 0,
    children: [
      makeCombined('square'),
    ]
  });
  screen.position(grid(0, -0.2))

  const scopeMax = makeScope(180, 180)
  scopeMax.position(sm3.position)

  const scopeSME = makeScope(180, 180)
  scopeSME.position(ss1.position)

  const am2 = makeArrow()
  const am3 = makeArrow()
  const am4 = makeArrow()
  const as1 = makeArrow()
  const as2 = makeArrow()
  const as3 = makeArrow()
  const aa2 = makeArrow()

  const signpost = new Img({
    src: 'https://cdn-icons-png.flaticon.com/512/1744/1744806.png',
    width: 100,
    height: 100,
    opacity: 0
  })
  signpost.x(app.x() - 10)
  signpost.y(app.y() - 200)

  const camera = new FixedCamera({
    children: [max, odi, app, repo, needs, screen, modes, muas, sm1, sm2, sm3, sm4, gm2, gm3, gm4, sme, suas, ss1, ss2, ss3, gs1, gs2, gs3, acme, auas, sa1, sa2, ga2, am2, am3, am4, as1, as2, as3, aa2, scopeMax, scopeSME, signpost]
  })
  view.add(camera)

  yield* beginSlide('Max')
  yield* all(
    max.opacity(1, 1),
  )
  yield* beginSlide('App')
  yield* all(
    app.opacity(1, 1),
    needs.opacity(1, 1),
  )
  yield* beginSlide('Shape repo')
  yield* all(
    odi.opacity(1, 1),
    repo.opacity(1, 1),
  )
  yield* beginSlide('AuthZ Screen')
  yield* all(
    screen.opacity(1, 1),
  )
  yield* beginSlide('Modes show')
  yield* all(
    modes.opacity(1, 1),
  )
  yield* beginSlide('Modes hide')
  yield* all(
    modes.opacity(0, 1),
  )
  yield* beginSlide('Max stack')
  yield* all(
    sm1.opacity(0.5, 1),
    sm2.opacity(0.5, 1),
    sm3.opacity(0.5, 1),
  )
  yield* beginSlide('SME stack')
  yield* all(
    sme.opacity(0.5, 1),
    ss1.opacity(0.5, 1),
    ss2.opacity(0.5, 1),
  )
  yield* beginSlide('Managers')
  yield* all(
    muas.opacity(1, 1),
    suas.opacity(0.5, 1),
  )
  yield* beginSlide('Current grants')
  yield* all(
    gm2.opacity(1, 1),
    gm2.position(grid(-0.3, 0.3), 1),
    gm3.opacity(1, 1),
    gm3.position(grid(0, 0.3), 1),
    gs1.opacity(1, 1),
    gs1.position(grid(-0.3, 0.6), 1),
    gs2.opacity(1, 1),
    gs2.position(grid(0, 0.6), 1),
    sm2.opacity(1, 1),
    sm3.opacity(1, 1),
    ss1.opacity(1, 1),
    ss2.opacity(1, 1),
    suas.opacity(1, 1),
    sme.opacity(1, 1),
  )
  yield* beginSlide('Max more')
  yield* all(
    sm4.opacity(0.5, 1),
    camera.centerOn(grid(-1, 0), 1),
  )
  yield* beginSlide('SME more')
  yield* all(
    ss3.opacity(0.5, 1),
  )
  yield* beginSlide('ACME stack')
  yield* all(
    acme.opacity(0.5, 1),
    auas.opacity(0.5, 1),
    sa1.opacity(0.5, 1),
    sa2.opacity(0.5, 1),
  )
  yield* beginSlide('scope registry')
  yield* all(
    scopeMax.opacity(1, 1),
    scopeSME.opacity(1, 1),
  )
  yield* beginSlide('scope agent')
  yield* all(
    scopeMax.height(260, 1),
    scopeMax.width(1000, 1),
    scopeMax.x(scopeMax.x() + 200, 1),
    scopeSME.height(260, 1),
    scopeSME.width(1000, 1),
    scopeSME.x(scopeSME.x() + 20, 1),
  )
  yield* beginSlide('scope all')
  yield* all(
    scopeMax.opacity(0, 1),
    scopeSME.height(900, 1),
  )
  yield* beginSlide('Future grants')
  yield* all(
    gm4.opacity(1, 1),
    gm4.position(grid(0.3, 0.3), 1),
    gs3.opacity(1, 1),
    gs3.position(grid(0.3, 0.6), 1),
    ga2.opacity(1, 1),
    ga2.position(grid(-0.3, 0.9), 1),
    sm4.opacity(1, 1),
    ss3.opacity(1, 1),
    sa2.opacity(1, 1),
    acme.opacity(1, 1),
    auas.opacity(1, 1),
  )
  yield* beginSlide('App directions')
  yield* all(
    signpost.opacity(1, 1)
  )
  yield* beginSlide('Discovery')
  am2.points([gm2.position(), gm2.position()])
  am3.points([gm3.position(), gm3.position()])
  am4.points([gm4.position(), gm4.position()])
  am2.opacity(1)
  am3.opacity(1)
  am4.opacity(1)
  as1.points([gs1.position(), gs1.position()])
  as2.points([gs2.position(), gs2.position()])
  as3.points([gs3.position(), gs3.position()])
  as1.opacity(1)
  as2.opacity(1)
  as3.opacity(1)
  aa2.points([ga2.position(), ga2.position()])
  aa2.opacity(1)
  yield* all(
    am2.points([sm2.position(), gm2.position()], 1),
    am3.points([sm3.position(), gm3.position()], 1),
    am4.points([sm4.position(), gm4.position()], 1),
    as1.points([ss1.position(), gs1.position()], 1),
    as2.points([ss2.position(), gs2.position()], 1),
    as3.points([ss3.position(), gs3.position()], 1),
    aa2.points([sa2.position(), ga2.position()], 1),
  )
  yield* beginSlide('End')
})
