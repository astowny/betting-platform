import './HeroSection.css'

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-background">
        <div className="underwater-scene">
          <div className="shark-container">
            <div className="shark">🦈</div>
          </div>
          <div className="fish-container">
            <div className="fish">🐠</div>
            <div className="fish">🐟</div>
            <div className="fish">🐡</div>
          </div>
          <div className="coral">🪸</div>
        </div>
      </div>
      
      <div className="hero-content">
        <div className="bonus-badge">
          <span className="badge-text">CASINO WELCOME BONUS</span>
        </div>
        
        <div className="bonus-offer">
          <h1 className="bonus-title">
            100% UP TO €500 + 200 FS
            <br />
            + 1 BONUS CRAB
          </h1>
        </div>
        
        <button className="join-button">
          JOIN NOW
        </button>
        
        <div className="carousel-dots">
          <span className="dot active"></span>
          <span className="dot"></span>
        </div>
      </div>
      
      <div className="hero-navigation">
        <button className="nav-arrow nav-arrow-left">‹</button>
        <button className="nav-arrow nav-arrow-right">›</button>
      </div>
    </section>
  )
}

export default HeroSection
