// import gsap from 'gsap'
// import { useGSAP } from '@gsap/react'
// import './hero.css'
// import { useRef } from 'react'

// gsap.registerPlugin(useGSAP)
// export const Hero = () => {
//   const waveContainer = useRef(null)
//   useGSAP(() => {
//     //GSAP 3 introduces advanced stagger values
//     const grid: [number, number] = [5, 13] //[rows, columns]
//     const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 })

//     interface AnimateBoxesParams {
//       from:
//         | number
//         | [number, number]
//         | 'start'
//         | 'center'
//         | 'end'
//         | 'edges'
//         | 'random'
//         | undefined
//       axis: 'x' | 'y' | undefined | null
//       ease: string
//     }

//     const animateBoxes = ({ from, axis, ease }: AnimateBoxesParams) => {
//       //one stagger call does all the animation:
//       tl.to('.box', {
//         duration: 0.5,
//         scale: 0.6,
//         y: 60,
//         yoyo: true,
//         repeat: 1,
//         ease: 'power1.inOut',
//         stagger: {
//           amount: 1.5,
//           grid: grid,
//           axis: axis as 'x' | 'y' | undefined,
//           ease: ease,
//           from: from,
//         },
//       })
//     }

//     //builds a grid of <div class="box"> elements, dropped into #container (unrelated to animation code)
//     buildGrid({
//       grid: grid,
//       className: 'box',
//       width: 1000,
//       gutter: 15,
//       parent: '#wave-container',
//       onCellClick: onCellClick,
//     })

//     // animateBoxes('center')

//     //---- the rest of the code below just handles all the interactivity ----

//     const selections: AnimateBoxesParams = {
//       from: 'center',
//       axis: null,
//       ease: 'none',
//     }

//     // animateBoxes(selections)

//     const updateFrom = (value: AnimateBoxesParams['from']) => {
//       const current = selections.from
//       let parsedVal = value
//       let newIsNumber = !isNaN(Number(value))
//       const oldIsNumber = !isNaN(Number(current))
//       if (newIsNumber) {
//         parsedVal = parseInt(value as string, 10)
//       } else if (value === 'end') {
//         parsedVal = grid[0] * grid[1] - 1
//         newIsNumber = true
//       }
//       if (current !== parsedVal) {
//         selections.from = parsedVal

//         if (newIsNumber) {
//           const moveDom = []
//           for (let i = 0; i <= 2; i++) {
//             for (let j = 0; j <= 2; j++) {
//               moveDom.push(
//                 `[data-index="${(value as number) + (i - 1) * 13 + (j - 1)}"]`,
//               )
//             }
//           }
//           gsap.fromTo(
//             "[data-index='" + parsedVal + "']",
//             { rotation: 0 },
//             {
//               duration: 0.4,
//               rotation: 360,
//               backgroundColor: '#0ae448',
//               ease: 'power1.inOut',
//             },
//           )
//           tl.seek(0).clear()
//           tl.to(moveDom, {
//             duration: 0.5,
//             scale: 0.6,
//             y: 60,
//             yoyo: true,
//             repeat: 1,
//             ease: 'power1.inOut',
//             stagger: {
//               amount: 1.5,
//               grid: grid,
//               from: parsedVal,
//             },
//           })
//           // gsap.fromTo(
//           //   moveDom,
//           //   { scale: 1 },
//           //   {
//           //     duration: 0.5,
//           //     scale: 0.6,
//           //     // y: 60,
//           //     yoyo: true,
//           //     repeat: 1,
//           //     // ease: 'power1.inOut',
//           //     stagger: {
//           //       amount: 1.5,
//           //       grid: grid,
//           //       from: parsedVal,
//           //     },
//           //   },
//           // )
//           // if (oldIsNumber) {
//           //   gsap.to("[data-index='" + current + "']", {
//           //     duration: 0.3,
//           //     backgroundColor: '#abff84',
//           //   })
//           // }
//         }
//       }
//     }

//     function onCellClick(e: MouseEvent) {
//       const target = e.target as BoxElement
//       updateFrom(target.index!)
//       // updateAnimation()
//     }

//     function updateAnimation() {
//       tl.seek(0).clear()
//       animateBoxes(selections)
//     }

//     //helper function to build a grid of <div> elements
//     interface BuildGridVars {
//       grid?: [number, number]
//       width?: number
//       gutter?: number
//       className?: string
//       parent?: string | HTMLElement
//       onCellClick?: (e: MouseEvent) => void
//     }

//     interface BoxElement extends HTMLDivElement {
//       index?: number
//     }

//     function buildGrid(vars: BuildGridVars) {
//       vars = vars || {}
//       const container = document.createElement('div'),
//         rows = vars.grid?.[0] || 5,
//         cols = vars.grid?.[1] || 5,
//         width = vars.width || 100,
//         gutter = vars.gutter || 1,
//         className = vars.className || '',
//         w = (width - cols * gutter) / cols,
//         parent =
//           typeof vars.parent === 'string'
//             ? document.querySelector(vars.parent)
//             : vars.parent
//               ? vars.parent
//               : document.body,
//         css =
//           'display: inline-block; margin: 0 ' +
//           (gutter / width) * 100 +
//           '% ' +
//           (gutter / width) * 100 +
//           '% 0; width: ' +
//           (w / width) * 100 +
//           '%;',
//         l = rows * cols
//       let box: BoxElement
//       for (let i = 0; i < l; i++) {
//         box = document.createElement('div') as BoxElement
//         box.style.cssText = css
//         box.setAttribute('class', className)
//         box.index = i
//         box.setAttribute('data-index', i.toString())
//         if (vars.onCellClick) {
//           box.addEventListener('click', vars.onCellClick)
//         }
//         container.appendChild(box)
//       }
//       container.style.cssText =
//         'width:' +
//         width +
//         'px; line-height: 0; padding:' +
//         gutter +
//         'px 0 0 ' +
//         gutter +
//         'px; display:inline-block;'
//       parent!.appendChild(container)
//       return container
//     }

//     //this just helps avoid the pixel-snapping that some browsers do.
//     gsap.set('.box', { rotation: 0.5, force3D: true })
//   }, [])
//   return (
//     <>
//       <div className="hero-container">
//         <div
//           ref={waveContainer}
//           id="wave-container"
//           className="wave-container"
//         ></div>
//         <div className="detail-container"></div>
//       </div>
//     </>
//   )
// }
