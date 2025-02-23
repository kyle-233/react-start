import './carousel.css'

export const Carousel = () => {
  return (
    <div className="carousel">
      <div className="list">
        <div
          className="item"
          style={{
            backgroundImage:
              'url(https://iamges.pexels.com/photo/552785/pexels-photo-552785.jpeg)',
          }}
        >
          <div className="content">
            <div className="title">SUNRISE ON PEAKS</div>
            <div className="name">Sunrise</div>
            <div className="des">
              Witness the serene beauty of the sunrise over majestic mountain
              peaks. A moment of pure tranquility.
            </div>
          </div>
        </div>
        <div
          className="item"
          style={{
            backgroundImage:
              'url(https://iamges.pexels.com/photo/2073873/pexels-photo-2073873.jpeg)',
          }}
        >
          <div className="content">
            <div className="title">PEACEFUL VALLEY</div>
            <div className="name">Valley</div>
            <div className="des">
              A peaceful valley surrounded by towering mountains. A perfect
              destination for solitude.
            </div>
          </div>
        </div>
      </div>

      {/* next prev button */}
      <div className="arrows">
        <button className="prev">
          <i className="bi bi-arrow-left"></i>
        </button>
        <button className="next">
          <i className="bi bi-arrow-right"></i>
        </button>

        <div className="slidde-number"></div>
      </div>

      {/* time runing */}
      <div className="timeRunning"></div>
    </div>
  )
}
