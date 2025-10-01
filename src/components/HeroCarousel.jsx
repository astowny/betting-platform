import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import './HeroCarousel.css'

const HeroCarousel = () => {
  const slides = [
    {
      id: 1,
      badge: 'CASINO WELCOME BONUS',
      title: '100% UP TO €500 + 200 FS',
      subtitle: '+ 1 BONUS CRAB',
      background: 'underwater-blue',
      creatures: ['🦈', '🐠', '🐟', '🐡', '🪸']
    },
    {
      id: 2,
      badge: 'LIVE CASINO BONUS',
      title: '50% UP TO €300 + 100 FS',
      subtitle: '+ LIVE DEALER ACCESS',
      background: 'underwater-green',
      creatures: ['🐙', '🦀', '🐠', '🌊', '🪸']
    },
    {
      id: 3,
      badge: 'SPORTS BETTING BONUS',
      title: '200% UP TO €1000',
      subtitle: '+ FREE BET',
      background: 'underwater-purple',
      creatures: ['🦈', '🐋', '🐟', '🌊', '🪸']
    }
  ]

  return (
    <section className="hero-carousel">
      <div className="hero-carousel-container">
        <div className="hero-swiper-container">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectFade]}
            spaceBetween={0}
            slidesPerView={1}
            navigation={{
              nextEl: '.hero-swiper-button-next',
              prevEl: '.hero-swiper-button-prev',
            }}
            pagination={{
              el: '.hero-swiper-pagination',
              clickable: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            effect="fade"
            fadeEffect={{
              crossFade: true
            }}
            loop={true}
            className="hero-swiper"
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className={`hero-slide ${slide.background}`}>
                  <div className="hero-background">
                    <div className="underwater-scene">
                      <div className="creatures-container">
                        {slide.creatures.map((creature, index) => (
                          <div
                            key={index}
                            className={`creature creature-${index + 1}`}
                            style={{
                              animationDelay: `${index * 0.5}s`
                            }}
                          >
                            {creature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="hero-content">
                    <div className="bonus-badge">
                      <span className="badge-text">{slide.badge}</span>
                    </div>

                    <div className="bonus-offer">
                      <h1 className="bonus-title">
                        {slide.title}
                        <br />
                        {slide.subtitle}
                      </h1>
                    </div>

                    <button className="join-button">
                      JOIN NOW
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Pagination */}
          <div className="hero-swiper-pagination"></div>
        </div>

        {/* Navigation Buttons positioned to the right */}
        <div className="hero-navigation-arrows">
          <button className="hero-swiper-button-prev hero-nav-button">
            <span className="arrow-icon">←</span>
          </button>
          <button className="hero-swiper-button-next hero-nav-button">
            <span className="arrow-icon">→</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default HeroCarousel
