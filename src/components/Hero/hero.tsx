// import * as Three from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js'
// import {
//   simulationVertexShader,
//   simulationFragmentShader,
//   renderVertexShader,
//   renderFragmentShader,
// } from './shaders.ts'
// import './hero.css'
// import { useEffect } from 'react'
// export const Hero = () => {
//   useEffect(() => {
//     document.addEventListener('DOMContentLoaded', () => {
//       const scene = new Three.Scene()
//       const simScene = new Three.Scene()

//       const camera = new Three.OrthographicCamera(-1, 1, 1, -1, 0, 1)

//       const renderer = new Three.WebGLRenderer({
//         antialias: true,
//         alpha: true,
//         preserveDrawingBuffer: true,
//       })

//       renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
//       renderer.setSize(window.innerWidth, window.innerHeight)
//       document.body.appendChild(renderer.domElement)

//       const mouse = new Three.Vector2()
//       let frame = 0

//       const width = window.innerWidth * window.devicePixelRatio
//       const height = window.innerHeight * window.devicePixelRatio
//       const options = {
//         format: Three.RGBAFormat,
//         type: Three.FloatType,
//         minFilter: Three.LinearFilter,
//         magFilter: Three.LinearFilter,
//         stencilBuffer: false,
//         depthBuffer: false,
//       }
//       let rtA = new Three.WebGLRenderTarget(width, height, options)
//       let rtB = new Three.WebGLRenderTarget(width, height, options)
//     })
//   }, [])
//   return (
//     <>
//       <nav>
//         <div className="logo">
//           <p>Soft Horizon</p>
//         </div>
//         <div className="nav-items">
//           <p>Product</p>
//           <p>Concept</p>
//           <p>Partners</p>
//           <button>Try now</button>
//         </div>
//       </nav>

//       <footer>
//         <h1>Expanding perspectives with serene and boundless possibilities</h1>
//         <div className="footer-links">
//           <p>Sign Up</p>
//           <p>Log In</p>
//         </div>
//       </footer>
//     </>
//   )
// }
