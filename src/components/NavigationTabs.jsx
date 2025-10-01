import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, FreeMode } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/free-mode'
import './NavigationTabs.css'

const NavigationTabs = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'PROVIDERS', label: 'PROVIDERS', icon: '🎮' },
    { id: 'TOP', label: 'TOP', icon: '⭐' },
    { id: 'NEW', label: 'NEW', icon: '🆕' },
    { id: 'POPULAR', label: 'POPULAR', icon: '🔥' },
    { id: 'EXCLUSIVE', label: 'EXCLUSIVE', icon: '💎' },
    { id: 'TOP_LIVE_CASINO', label: 'TOP LIVE CASINO', icon: '🎲' },
    { id: 'ROULETTE', label: 'ROULETTE', icon: '🎯' },
    { id: 'GAME_SHOWS', label: 'GAME SHOWS', icon: '📺' },
    { id: 'BLACKJACK', label: 'BLACKJACK', icon: '🃏' },
    { id: 'HOT_JACKPOTS', label: 'HOT JACKPOTS', icon: '💰' },
    { id: 'SLOTS', label: 'SLOTS', icon: '🎰' },
    { id: 'POKER', label: 'POKER', icon: '♠️' },
    { id: 'BACCARAT', label: 'BACCARAT', icon: '🎴' },
    { id: 'LOTTERY', label: 'LOTTERY', icon: '🎫' }
  ]

  return (
    <nav className="navigation-tabs">
      <div className="tabs-navigation-container">
        <div className="tabs-swiper-container">
          <Swiper
            modules={[Navigation, FreeMode]}
            spaceBetween={8}
            slidesPerView="auto"
            freeMode={true}
            grabCursor={true}
            navigation={{
              nextEl: '.tabs-swiper-button-next',
              prevEl: '.tabs-swiper-button-prev',
            }}
            className="tabs-swiper"
          >
            {tabs.map((tab) => (
              <SwiperSlide key={tab.id} className="tab-slide">
                <button
                  className={`tab ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <span className="tab-icon">{tab.icon}</span>
                  <span className="tab-label">{tab.label}</span>
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Navigation Arrows positioned to the right */}
        <div className="tabs-navigation-arrows">
          <button className="tabs-swiper-button-prev tabs-nav-button">
            <span className="arrow-icon">←</span>
          </button>
          <button className="tabs-swiper-button-next tabs-nav-button">
            <span className="arrow-icon">→</span>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default NavigationTabs
