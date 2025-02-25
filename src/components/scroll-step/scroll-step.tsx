// import Lenis from 'lenis'
// import { gsap } from 'gsap'

// import { ScrollTrigger } from 'gsap/ScrollTrigger'

// gsap.registerPlugin(ScrollTrigger)
// import './scroll-step.css'
// import { useEffect } from 'react'
// export const ScrollStep = () => {
//   useEffect(() => {
//     const lenis = new Lenis()
//     lenis.on('scroll', ScrollTrigger.update)
//     gsap.ticker.add((time) => {
//       lenis.raf(time * 1000)
//     })
//     gsap.ticker.lagSmoothing(0)

//     const stickySection = document.querySelector('.steps')
//     const stickyHeight = window.innerHeight * 7
//     const cards = document.querySelectorAll('.card')
//     const countContainer = document.querySelector('.count-container')
//     const totalCards = cards.length
//     ScrollTrigger.create({
//       trigger: stickySection,
//       start: 'top top',
//       end: `+=${stickyHeight}px`,
//       pin: true,
//       pinSpacing: true,
//       onUpdate: (self) => {
//         positionCards(self.progress)
//       },
//     })
//   }, [])
//   return (
//     <div className="container">
//       <nav>
//         <p id="logo">Voxel</p>
//         <button>Download Now</button>
//       </nav>
//       <section className="intro"></section>

//       <section className="steps">
//         <div className="step-counter">
//           <div className="counter-title">
//             <h1>Steps</h1>
//           </div>
//           <div className="count">
//             <div className="count-container">
//               <h1>01</h1>
//               <h1>02</h1>
//               <h1>03</h1>
//               <h1>04</h1>
//               <h1>05</h1>
//             </div>
//           </div>
//         </div>
//         <div className="cards">
//           <div className="card">
//             <div className="card-img">
//               <img
//                 src="https://images.pexels.com/photos/30352189/pexels-photo-30352189/free-photo-of-yarynkaa-b.jpeg"
//                 alt=""
//               />
//             </div>
//             <div className="card-content">
//               <p>
//                 Effortlessly create and manage your projects with Voxel's
//                 intuitive interface. ensure that your projects are always on
//                 track.
//               </p>
//             </div>
//           </div>
//           <div className="card">
//             <div className="card-img">
//               <img
//                 src="https://images.pexels.com/photos/30352189/pexels-photo-30352189/free-photo-of-yarynkaa-b.jpeg"
//                 alt=""
//               />
//             </div>
//             <div className="card-content">
//               <p>
//                 Effortlessly create and manage your projects with Voxel's
//                 intuitive interface. ensure that your projects are always on
//                 track.
//               </p>
//             </div>
//           </div>
//           <div className="card">
//             <div className="card-img">
//               <img
//                 src="https://images.pexels.com/photos/30352189/pexels-photo-30352189/free-photo-of-yarynkaa-b.jpeg"
//                 alt=""
//               />
//             </div>
//             <div className="card-content">
//               <p>
//                 Effortlessly create and manage your projects with Voxel's
//                 intuitive interface. ensure that your projects are always on
//                 track.
//               </p>
//             </div>
//           </div>
//           <div className="card">
//             <div className="card-img">
//               <img
//                 src="https://images.pexels.com/photos/30352189/pexels-photo-30352189/free-photo-of-yarynkaa-b.jpeg"
//                 alt=""
//               />
//             </div>
//             <div className="card-content">
//               <p>
//                 Effortlessly create and manage your projects with Voxel's
//                 intuitive interface. ensure that your projects are always on
//                 track.
//               </p>
//             </div>
//           </div>
//           <div className="card empty"></div>
//           <div className="card empty"></div>
//         </div>
//       </section>
//       <section className="outro">
//         <p>
//           Our 3D design tool id built to enhance your creative workflow,{' '}
//           <span>providing an all-in-one solution</span> for crafting stunning
//           visuals and prototypes.
//         </p>
//       </section>
//     </div>
//   )
// }
