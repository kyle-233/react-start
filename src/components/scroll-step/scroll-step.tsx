import Lenis from 'lenis'
import { gsap } from 'gsap'

import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
import './scroll-step.css'
import { useEffect } from 'react'
export const ScrollStep = () => {
  useEffect(() => {
    const lenis = new Lenis()
    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })
    gsap.ticker.lagSmoothing(0)

    const stickySection = document.querySelector('.steps')
    const stickyHeight = window.innerHeight * 5
    const cards = document.querySelectorAll('.card')
    const countContainer = document.querySelector('.count-container')
    const totalCards = cards.length

    ScrollTrigger.create({
      trigger: stickySection,
      start: 'top top',
      end: `+=${stickyHeight}px`,
      pin: true,
      pinSpacing: true,
      onUpdate: (self) => {
        positionCards(self.progress)
      },
    })

    const getRadius = () => {
      return window.innerWidth < 900
        ? window.innerWidth * 7.5
        : window.innerWidth * 2.5
    }

    const arcAngle = Math.PI * 0.4
    const startAngle = Math.PI / 2 - arcAngle / 2

    const positionCards = (progress = 0) => {
      const radius = getRadius()
      const totalTravel = 1 + totalCards / 7.5
      const adjustedProgress = (progress * totalTravel - 1) * 0.75

      cards.forEach((card, i) => {
        const normalizedProgress = (totalCards - 1 - i) / totalCards
        const cardProgress = normalizedProgress + adjustedProgress
        const angle = startAngle + arcAngle * cardProgress

        const x = Math.cos(angle) * radius
        const y = Math.sin(angle) * radius
        const rotation = (angle - Math.PI / 2) * (180 / Math.PI)

        gsap.set(card, {
          x: x,
          y: -y + radius,
          rotation: -rotation,
          transformOrigin: 'center center',
        })
      })
    }

    positionCards(0)

    let currentCardIndex = 0

    const options = {
      root: null,
      rootMargin: '0% 0%',
      threshold: 0.5,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // lastScrollY = window.scrollY

          const cardIndex = Array.from(cards).indexOf(entry.target)

          currentCardIndex = cardIndex

          const targetY = 150 - currentCardIndex * 150

          gsap.to(countContainer, {
            y: targetY,
            duration: 0.3,
            ease: 'power1.out',
            overwrite: true,
          })
        }
      })
    }, options)

    cards.forEach((card) => {
      observer.observe(card)
    })

    window.addEventListener('resize', () => positionCards(0))
  }, [])
  return (
    <div className="container">
      <nav>
        <p id="logo">Voxel</p>
        <button>Download Now</button>
      </nav>
      <section className="intro"></section>

      <section className="steps">
        <div className="step-counter">
          <div className="counter-title">
            <h1>Steps</h1>
          </div>
          <div className="count">
            <div className="count-container">
              <h1>01</h1>
              <h1>02</h1>
              <h1>03</h1>
              <h1>04</h1>
              <h1>05</h1>
            </div>
          </div>
        </div>
        <div className="cards">
          <div className="card">
            <div className="card-img">
              <img
                src="https://images.pexels.com/photos/30352189/pexels-photo-30352189/free-photo-of-yarynkaa-b.jpeg"
                alt=""
              />
            </div>
            <div className="card-content">
              <p>
                Effortlessly create and manage your projects with Voxel's
                intuitive interface. ensure that your projects are always on
                track.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-img">
              <img
                src="https://images.pexels.com/photos/30352189/pexels-photo-30352189/free-photo-of-yarynkaa-b.jpeg"
                alt=""
              />
            </div>
            <div className="card-content">
              <p>
                Effortlessly create and manage your projects with Voxel's
                intuitive interface. ensure that your projects are always on
                track.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-img">
              <img
                src="https://images.pexels.com/photos/30352189/pexels-photo-30352189/free-photo-of-yarynkaa-b.jpeg"
                alt=""
              />
            </div>
            <div className="card-content">
              <p>
                Effortlessly create and manage your projects with Voxel's
                intuitive interface. ensure that your projects are always on
                track.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-img">
              <img
                src="https://images.pexels.com/photos/30352189/pexels-photo-30352189/free-photo-of-yarynkaa-b.jpeg"
                alt=""
              />
            </div>
            <div className="card-content">
              <p>
                Effortlessly create and manage your projects with Voxel's
                intuitive interface. ensure that your projects are always on
                track.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-img">
              <img
                src="https://images.pexels.com/photos/30352189/pexels-photo-30352189/free-photo-of-yarynkaa-b.jpeg"
                alt=""
              />
            </div>
            <div className="card-content">
              <p>
                Effortlessly create and manage your projects with Voxel's
                intuitive interface. ensure that your projects are always on
                track.
              </p>
            </div>
          </div>
          <div className="card empty"></div>
          <div className="card empty"></div>
        </div>
      </section>

      <section className="outro">
        <p>
          Our 3D design tool id built to enhance your creative workflow,{' '}
          <span>providing an all-in-one solution</span> for crafting stunning
          visuals and prototypes.
        </p>
      </section>
    </div>
  )
}
