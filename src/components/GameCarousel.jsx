import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './GameCarousel.css'

// Import game images
import betImg1 from '../assets/bet-img-1.png'
import betImg2 from '../assets/bet-img-2.png'
import betImg3 from '../assets/bet-img-3.png'
import betImg4 from '../assets/bet-img-4.png'
import betImg5 from '../assets/bet-img-5.png'
import betImg6 from '../assets/bet-img-6.png'
import betImg7 from '../assets/bet-img-7.png'
import betImg8 from '../assets/bet-img-8.png'

const GameCarousel = ({ activeTab }) => {
  const games = {
    TOP: [
      { id: 1, title: 'Gates of Olympus', subtitle: 'SUPER SCATTER', image: betImg1, number: '1' },
      { id: 2, title: 'Buffalo Force', subtitle: '', image: betImg2, number: '2' },
      { id: 3, title: 'Aviator', subtitle: '', image: betImg3, number: '3' },
      { id: 4, title: 'Sugar Rush 1000', subtitle: '', image: betImg4, number: '4' },
      { id: 5, title: '5 Hot Peppers', subtitle: '', image: betImg5, number: '5' },
      { id: 6, title: 'Fruits Frenzy', subtitle: '', image: betImg6, number: '6' },
      { id: 7, title: 'Book of Anunnaki', subtitle: 'HYPER JUMP', image: betImg7, number: '7' },
      { id: 8, title: 'Treasure Island', subtitle: 'BONUS SIX', image: betImg8, number: '8' },
      { id: 9, title: 'Wild West Gold', subtitle: '', image: betImg1, number: '9' },
      { id: 10, title: 'Sweet Bonanza', subtitle: 'MEGA WIN', image: betImg2, number: '10' }
    ],
    NEW: [
      { id: 11, title: 'Dragon Kingdom', subtitle: 'FRESH', image: betImg3, number: '1' },
      { id: 12, title: 'Ocean Treasure', subtitle: 'LATEST', image: betImg4, number: '2' },
      { id: 13, title: 'Fire Storm', subtitle: 'HOT', image: betImg5, number: '3' },
      { id: 14, title: 'Golden Palace', subtitle: 'TRENDING', image: betImg6, number: '4' },
      { id: 15, title: 'Magic Forest', subtitle: 'NEW', image: betImg7, number: '5' },
      { id: 16, title: 'Space Adventure', subtitle: 'EPIC', image: betImg8, number: '6' }
    ],
    POPULAR: [
      { id: 17, title: 'Mega Fortune', subtitle: 'JACKPOT', image: betImg1, number: '1' },
      { id: 18, title: 'Starburst', subtitle: 'CLASSIC', image: betImg2, number: '2' },
      { id: 19, title: 'Gonzo Quest', subtitle: 'ADVENTURE', image: betImg3, number: '3' },
      { id: 20, title: 'Book of Dead', subtitle: 'MYSTERY', image: betImg4, number: '4' }
    ]
  }

  const currentGames = games[activeTab] || games.TOP

  return (
    <section className="game-carousel-section">
      <div className="section-header">
        <h2 className="section-title">{activeTab}</h2>
        <button className="see-all-btn">
          SEE ALL ({currentGames.length > 4 ? '916' : currentGames.length})
        </button>
      </div>
      
      <div className="game-carousel-container">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={15}
          slidesPerView={2}
          navigation={{
            nextEl: '.game-swiper-button-next',
            prevEl: '.game-swiper-button-prev',
          }}
          pagination={{
            el: '.game-swiper-pagination',
            clickable: true,
          }}
          breakpoints={{
            480: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 6,
            },
            1200: {
              slidesPerView: 8,
            }
          }}
          className="game-swiper"
        >
          {currentGames.map((game) => (
            <SwiperSlide key={game.id}>
              <div className="game-card">
                <div className="game-image">
                  <img src={game.image} alt={game.title} className="game-img" />
                  <div className="game-number">{game.number}</div>
                  {game.subtitle && (
                    <div className="game-badge">{game.subtitle}</div>
                  )}
                  <div className="game-overlay">
                    <button className="play-button">PLAY</button>
                  </div>
                </div>
                <div className="game-info">
                  <h3 className="game-title">{game.title}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        {/* Navigation Buttons */}
        <div className="game-swiper-button-prev game-nav-button">
          <span className="arrow-icon">←</span>
        </div>
        <div className="game-swiper-button-next game-nav-button">
          <span className="arrow-icon">→</span>
        </div>
        
        {/* Pagination */}
        <div className="game-swiper-pagination"></div>
      </div>
    </section>
  )
}

export default GameCarousel
