import './GameGrid.css'

const GameGrid = ({ activeTab }) => {
  const games = {
    TOP: [
      { id: 1, title: 'Gates of Olympus', subtitle: 'SUPER SCATTER', image: '🏛️', number: '1' },
      { id: 2, title: 'Buffalo Force', subtitle: '', image: '🦬', number: '2' },
      { id: 3, title: 'Aviator', subtitle: '', image: '✈️', number: '3' },
      { id: 4, title: 'Sugar Rush 1000', subtitle: '', image: '🍭', number: '4' },
      { id: 5, title: '5 Hot Peppers', subtitle: '', image: '🌶️', number: '5' },
      { id: 6, title: 'Fruits Frenzy', subtitle: '', image: '🍎', number: '6' },
      { id: 7, title: 'Book of Anunnaki', subtitle: 'HYPER JUMP', image: '📚', number: '7' },
      { id: 8, title: 'Treasure Island', subtitle: 'BONUS SIX', image: '🏴‍☠️', number: '8' }
    ],
    NEW: [
      { id: 9, title: 'New Game 1', subtitle: 'FRESH', image: '🎰', number: '1' },
      { id: 10, title: 'New Game 2', subtitle: 'LATEST', image: '🎲', number: '2' },
      { id: 11, title: 'New Game 3', subtitle: 'HOT', image: '🔥', number: '3' },
      { id: 12, title: 'New Game 4', subtitle: 'TRENDING', image: '⭐', number: '4' }
    ]
  }

  const currentGames = games[activeTab] || games.TOP

  return (
    <section className="game-grid-section">
      <div className="section-header">
        <h2 className="section-title">{activeTab}</h2>
        <button className="see-all-btn">
          SEE ALL ({currentGames.length > 4 ? '916' : currentGames.length})
        </button>
      </div>
      
      <div className="game-grid">
        {currentGames.map((game) => (
          <div key={game.id} className="game-card">
            <div className="game-image">
              <div className="game-icon">{game.image}</div>
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
        ))}
      </div>
      
      {activeTab === 'NEW' && (
        <div className="section-header">
          <h2 className="section-title">NEW</h2>
          <button className="see-all-btn">SEE ALL (916)</button>
        </div>
      )}
    </section>
  )
}

export default GameGrid
