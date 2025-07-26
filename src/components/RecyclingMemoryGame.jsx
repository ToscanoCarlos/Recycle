import React, { useState, useEffect } from 'react';
import { Recycle, Trash2, Battery, Leaf, Package, Wine, Shirt, Wrench } from 'lucide-react';

const RecyclingMemoryGame = () => {
  // Game cards data based on the PDF content - concept + example pairs
  const cardPairs = [
    // Organic Waste pair
    { id: 1, type: 'organic', icon: Leaf, text: 'Organic Waste', color: 'bg-green-500', pairType: 'concept' },
    { id: 1, type: 'organic', icon: '🍎', text: 'Apple Core', color: 'bg-green-400', pairType: 'example' },
    
    // Recyclable pair
    { id: 2, type: 'recyclable', icon: Recycle, text: 'Recyclable Materials', color: 'bg-blue-500', pairType: 'concept' },
    { id: 2, type: 'recyclable', icon: '🥤', text: 'Plastic Bottle', color: 'bg-blue-400', pairType: 'example' },
    
    // Non-recyclable pair
    { id: 3, type: 'non-recyclable', icon: Trash2, text: 'Non-Recyclable', color: 'bg-gray-500', pairType: 'concept' },
    { id: 3, type: 'non-recyclable', icon: '🧻', text: 'Dirty Tissues', color: 'bg-gray-400', pairType: 'example' },
    
    // Hazardous waste pair
    { id: 4, type: 'hazardous', icon: Battery, text: 'Hazardous Waste', color: 'bg-red-500', pairType: 'concept' },
    { id: 4, type: 'hazardous', icon: '🔋', text: 'Used Battery', color: 'bg-red-400', pairType: 'example' },
    
    // Glass reuse pair
    { id: 5, type: 'glass', icon: Wine, text: 'Glass Reuse', color: 'bg-cyan-500', pairType: 'concept' },
    { id: 5, type: 'glass', icon: '🫙', text: 'Glass Jar', color: 'bg-cyan-400', pairType: 'example' },
    
    // Fabric reuse pair
    { id: 6, type: 'fabric', icon: Shirt, text: 'Fabric Reuse', color: 'bg-purple-500', pairType: 'concept' },
    { id: 6, type: 'fabric', icon: '👕', text: 'Old T-Shirt', color: 'bg-purple-400', pairType: 'example' },
    
    // Upcycling pair
    { id: 7, type: 'upcycle', icon: Wrench, text: 'Upcycling', color: 'bg-orange-500', pairType: 'concept' },
    { id: 7, type: 'upcycle', icon: '🪑', text: 'Pallet Furniture', color: 'bg-orange-400', pairType: 'example' },
    
    // Paper recyclable pair
    { id: 8, type: 'paper', icon: Package, text: 'Paper Recycling', color: 'bg-indigo-500', pairType: 'concept' },
    { id: 8, type: 'paper', icon: '📦', text: 'Cardboard Box', color: 'bg-indigo-400', pairType: 'example' }
  ];

  // Create pairs of cards (cards are already paired conceptually)
  const createGameCards = () => {
    const shuffledCards = [...cardPairs].sort(() => Math.random() - 0.5);
    return shuffledCards.map((card, index) => ({
      ...card,
      uniqueId: `card-${index}`
    }));
  };

  const [cards, setCards] = useState(createGameCards());
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [moves, setMoves] = useState(0);
  const [gameWon, setGameWon] = useState(false);

  // Handle card click
  const handleCardClick = (clickedCard) => {
    if (flippedCards.length === 2) return;
    if (flippedCards.some(card => card.uniqueId === clickedCard.uniqueId)) return;
    if (matchedCards.includes(clickedCard.type)) return;

    const newFlippedCards = [...flippedCards, clickedCard];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      setMoves(moves + 1);
      
      // Check if cards match
      if (newFlippedCards[0].type === newFlippedCards[1].type) {
        setMatchedCards([...matchedCards, newFlippedCards[0].type]);
        setFlippedCards([]);
      } else {
        // Hide cards after 1 second if they don't match
        setTimeout(() => {
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  // Check if game is won
  useEffect(() => {
    if (matchedCards.length === 8 && matchedCards.length > 0) { // 8 pairs matched
      setGameWon(true);
    }
  }, [matchedCards]);

  // Reset game
  const resetGame = () => {
    setCards(createGameCards());
    setFlippedCards([]);
    setMatchedCards([]);
    setMoves(0);
    setGameWon(false);
  };

  // Check if card should be visible
  const isCardVisible = (card) => {
    return flippedCards.some(flipped => flipped.uniqueId === card.uniqueId) || 
           matchedCards.includes(card.type);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-green-800 mb-2 flex items-center justify-center gap-2">
            <Recycle className="text-green-600" />
            Recycling Memory Game
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            Match pairs of recycling and reuse concepts to win!
          </p>
          <div className="flex justify-center gap-4 items-center">
            <span className="bg-white px-4 py-2 rounded-lg shadow text-lg font-semibold">
              Moves: {moves}
            </span>
            <button
              onClick={resetGame}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
            >
              New Game
            </button>
          </div>
        </div>

        {/* Game Board */}
        <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto mb-8">
          {cards.map((card) => {
            const IconComponent = card.icon;
            const visible = isCardVisible(card);
            
            return (
              <div
                key={card.uniqueId}
                onClick={() => handleCardClick(card)}
                className={`
                  aspect-square cursor-pointer rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105
                  ${visible 
                    ? `${card.color} text-white` 
                    : 'bg-gradient-to-br from-gray-300 to-gray-400 hover:from-gray-400 hover:to-gray-500'
                  }
                  ${matchedCards.includes(card.type) ? 'ring-4 ring-yellow-400' : ''}
                `}
              >
                <div className="h-full flex flex-col items-center justify-center p-2">
                  {visible ? (
                    <>
                      {typeof card.icon === 'string' ? (
                        <div className="text-3xl mb-2">{card.icon}</div>
                      ) : (
                        <IconComponent size={32} className="mb-2" />
                      )}
                      <span className="text-xs font-semibold text-center leading-tight">
                        {card.text}
                      </span>
                    </>
                  ) : (
                    <Recycle size={32} className="text-gray-600" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Game Won Modal */}
        {gameWon && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-8 text-center shadow-2xl max-w-md mx-4">
              <div className="text-6xl mb-4">🎉</div>
              <h2 className="text-3xl font-bold text-green-800 mb-2">Congratulations!</h2>
              <p className="text-lg text-gray-600 mb-4">
                You completed the recycling memory game in {moves} moves!
              </p>
              <p className="text-sm text-gray-500 mb-6">
                Remember: Every small action matters for our planet! 🌍
              </p>
              <button
                onClick={resetGame}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
              >
                Play Again
              </button>
            </div>
          </div>
        )}

        {/* Instructions */}
        <div className="bg-white rounded-xl shadow-lg p-6 max-w-2xl mx-auto">
          <h3 className="text-xl font-bold text-gray-800 mb-3">How to Play:</h3>
          <ul className="text-gray-600 space-y-2">
            <li>• Click on cards to flip them and reveal recycling concepts</li>
            <li>• Find matching pairs: each recycling concept with its example</li>
            <li>• Match all 8 pairs to win the game</li>
            <li>• Try to complete it in as few moves as possible!</li>
          </ul>
          
          <h3 className="text-xl font-bold text-gray-800 mb-3 mt-6">Match These Pairs:</h3>
          <div className="grid grid-cols-1 gap-2 text-sm">
            <div className="flex items-center justify-between bg-green-50 p-2 rounded">
              <span className="flex items-center gap-2">
                <Leaf size={16} className="text-green-600" />
                Organic Waste
              </span>
              <span className="flex items-center gap-2">
                🍎 Apple Core
              </span>
            </div>
            <div className="flex items-center justify-between bg-blue-50 p-2 rounded">
              <span className="flex items-center gap-2">
                <Recycle size={16} className="text-blue-600" />
                Recyclable Materials
              </span>
              <span className="flex items-center gap-2">
                🥤 Plastic Bottle
              </span>
            </div>
            <div className="flex items-center justify-between bg-gray-50 p-2 rounded">
              <span className="flex items-center gap-2">
                <Trash2 size={16} className="text-gray-600" />
                Non-Recyclable
              </span>
              <span className="flex items-center gap-2">
                🧻 Dirty Tissues
              </span>
            </div>
            <div className="flex items-center justify-between bg-red-50 p-2 rounded">
              <span className="flex items-center gap-2">
                <Battery size={16} className="text-red-600" />
                Hazardous Waste
              </span>
              <span className="flex items-center gap-2">
                🔋 Used Battery
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecyclingMemoryGame;