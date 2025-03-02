import type { MouseEvent } from 'react'
import { useState } from 'react'
interface PropsType {
  images?: string[]
}
export const Carousel = (props: PropsType) => {
  const { images = ['http://pets-images.dev-apis.com/pets/0.jpg'] } = props
  const [active, setActive] = useState<number>(0)
  const handleIndexClick = (event: MouseEvent) => {
    const { index = 0 } = (event.target as HTMLImageElement).dataset
    setActive(+index)
  }
  return (
    <div className="carousel">
      <img data-testid="hero" src={images[active]} alt="animal" />
      <div className="carousel-smaller">
        {images.map((photo, index) => (
          <img
            key={photo}
            src={photo}
            className={index === active ? 'active' : ''}
            alt="animal thumbnail"
            onClick={(e) => handleIndexClick(e)}
            data-index={index}
            data-testid={`thumbnail${index}`}
          />
        ))}
      </div>
    </div>
  )
}
