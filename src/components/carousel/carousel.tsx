import { useEffect, useState } from 'react'
import './carousel.css'

const TIME_RUNNING = 1500
const TIME_AUTO_NEXT = 3500

let transitionTimeout: NodeJS.Timeout
let autoNextTimeout: NodeJS.Timeout

interface ItemsProps {
  id: string
  url: string
  title: string
  name: string
  des: string
}

interface CarouselProps {
  items?: ItemsProps[] | []
}

const defaultItems: ItemsProps[] = [
  {
    id: '1',
    url: 'https://images.pexels.com/photos/30625568/pexels-photo-30625568.jpeg',
    title: 'PEACEFUL VALLEY',
    name: 'Sunrise',
    des: 'A peaceful valley surrounded by towering mountains. A perfect destination for solitude.',
  },
  {
    id: '2',
    url: 'https://images.pexels.com/photos/30702722/pexels-photo-30702722.jpeg',
    title: 'PEACEFUL VALLEY',
    name: 'Valley',
    des: 'A peaceful valley surrounded by towering mountains. A perfect destination for solitude.',
  },
  {
    id: '3',
    url: 'https://images.pexels.com/photos/30625568/pexels-photo-30625568.jpeg',
    title: 'PEACEFUL VALLEY',
    name: 'Sunrise',
    des: 'A peaceful valley surrounded by towering mountains. A perfect destination for solitude.',
  },
  {
    id: '4',
    url: 'https://images.pexels.com/photos/30702722/pexels-photo-30702722.jpeg',
    title: 'PEACEFUL VALLEY',
    name: 'Valley',
    des: 'A peaceful valley surrounded by towering mountains. A perfect destination for solitude.',
  },
  {
    id: '5',
    url: 'https://images.pexels.com/photos/30625568/pexels-photo-30625568.jpeg',
    title: 'PEACEFUL VALLEY',
    name: 'Sunrise',
    des: 'A peaceful valley surrounded by towering mountains. A perfect destination for solitude.',
  },
  {
    id: '6',
    url: 'https://images.pexels.com/photos/30702722/pexels-photo-30702722.jpeg',
    title: 'PEACEFUL VALLEY',
    name: 'Valley',
    des: 'A peaceful valley surrounded by towering mountains. A perfect destination for solitude.',
  },
  {
    id: '7',
    url: 'https://images.pexels.com/photos/30625568/pexels-photo-30625568.jpeg',
    title: 'PEACEFUL VALLEY',
    name: 'Sunrise',
    des: 'A peaceful valley surrounded by towering mountains. A perfect destination for solitude.',
  },
  {
    id: '8',
    url: 'https://images.pexels.com/photos/30702722/pexels-photo-30702722.jpeg',
    title: 'PEACEFUL VALLEY',
    name: 'Valley',
    des: 'A peaceful valley surrounded by towering mountains. A perfect destination for solitude.',
  },
  {
    id: '9',
    url: 'https://images.pexels.com/photos/30625568/pexels-photo-30625568.jpeg',
    title: 'PEACEFUL VALLEY',
    name: 'Sunrise',
    des: 'A peaceful valley surrounded by towering mountains. A perfect destination for solitude.',
  },
  {
    id: '10',
    url: 'https://images.pexels.com/photos/30702722/pexels-photo-30702722.jpeg',
    title: 'PEACEFUL VALLEY',
    name: 'Valley',
    des: 'A peaceful valley surrounded by towering mountains. A perfect destination for solitude.',
  },
]

export const Carousel = ({ items }: CarouselProps) => {
  items = items || defaultItems
  const [carouselItems] = useState(() => {
    return items.slice(-1).concat(items.slice(0, -1))
  })
  function resetAnimation() {
    const runningTimeBar = document.querySelector(
      '.carousel .timeRunning',
    ) as HTMLElement
    if (!runningTimeBar) return
    runningTimeBar.style.animation = 'none'
    void runningTimeBar.offsetHeight

    runningTimeBar.style.animation = `runningTime ${TIME_AUTO_NEXT / 1000}s linear forwards`
  }
  function updateProgressBar() {
    const list = document.querySelector('.list')
    const progressBar = document.querySelector('.progress-bar')! as HTMLElement
    const items = Array.from(document.querySelectorAll('.item'))
    if (!list) return
    const totalSlides = items.length
    const sliderItems = Array.from(list?.querySelectorAll('.item'))
    const activeItem = parseInt(
      sliderItems[1]
        .querySelector('.title')
        ?.getAttribute('data-item') as string,
    )

    const progressPercentage = (activeItem / totalSlides) * 100
    progressBar.style.width = `${progressPercentage}%`
  }

  function resetCarouselState() {
    const carousel = document.querySelector('.carousel')
    clearTimeout(transitionTimeout)
    clearTimeout(autoNextTimeout)

    transitionTimeout = setTimeout(() => {
      carousel?.classList.remove('next')
      carousel?.classList.remove('prev')
    }, TIME_RUNNING)

    autoNextTimeout = setTimeout(() => {
      handleSlideNavigation('next')
    }, TIME_AUTO_NEXT)

    resetAnimation()
  }
  function afterSlideChange() {
    const list = document.querySelector('.list')
    if (!list) return
    const slideNumberElement = document.querySelector('.slide-number')
    if (slideNumberElement) slideNumberElement.remove()
    const slideItems = Array.from(list?.querySelectorAll('.item'))
    const activeItem: number = parseInt(
      slideItems[1]
        .querySelector('.title')!
        .getAttribute('data-item') as string,
    )

    const activeIndex =
      activeItem < 10 ? `0${activeItem}` : activeItem.toString()

    const div = document.createElement('div')
    div.classList.add('slide-number')
    div.textContent = `${activeIndex}/${slideItems.length}`

    const arrowsDiv = document.querySelector('.arrows')

    arrowsDiv?.appendChild(div)

    console.log(`Current active slide original index: ${activeItem}`)

    updateProgressBar()
    resetCarouselState()
  }
  function handleSlideNavigation(direction: 'next' | 'prev') {
    const carousel = document.querySelector('.carousel')
    const list = document.querySelector('.list')
    if (!carousel || !list) return
    const sliderItems = list.querySelectorAll('.item')
    if (autoNextTimeout) clearTimeout(autoNextTimeout)
    if (direction === 'next') {
      list?.appendChild(sliderItems[0])
      carousel?.classList.add('next')
    } else if (direction === 'prev') {
      list?.prepend(sliderItems[sliderItems.length - 1])
      carousel?.classList.add('prev')
    }

    afterSlideChange()
  }
  useEffect(() => {
    autoNextTimeout = setTimeout(() => {
      handleSlideNavigation('next')
    }, TIME_AUTO_NEXT)

    resetAnimation()
    afterSlideChange()
  }, [])

  return (
    <div className="carousel">
      <div className="list">
        {carouselItems.map((item, index) => (
          <div
            key={item.id}
            className="item"
            style={{
              backgroundImage: `url(${item.url})`,
              backgroundColor: '#111111',
            }}
            data-item={index === 0 ? carouselItems.length : index}
          >
            <div className="content">
              <div
                className="title"
                data-item={index === 0 ? carouselItems.length : index}
              >
                {item.name}
              </div>
              <div className="name">{item.title}</div>
              <div className="des">{item.des}</div>
            </div>
          </div>
        ))}
      </div>

      {/* next prev button */}
      <div className="arrows">
        <button
          className="prev"
          onClick={() => {
            handleSlideNavigation('prev')
          }}
        >
          <i className="bi bi-arrow-left"></i>
        </button>
        <button
          className="next"
          onClick={() => {
            handleSlideNavigation('next')
          }}
        >
          <i className="bi bi-arrow-right"></i>
        </button>

        <div className="progress-bar-container">
          <div className="progress-bar"></div>
        </div>
        <div className="slide-number"></div>
      </div>

      {/* time running */}
      <div className="timeRunning"></div>
    </div>
  )
}
