import { Line } from "@motion-canvas/2d"
import { shadow } from "./styles"

export function makeArrow() {
  return new Line({
    lineDash: [20, 20],
    startArrow: true,
    endArrow: false,
    stroke: "black",
    lineWidth: 5,
    arrowSize: 15,
    opacity: 0,
    ...shadow,
  })

}
