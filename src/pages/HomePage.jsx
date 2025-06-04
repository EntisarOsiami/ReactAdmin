import { useEffect, useState } from 'react';

// username : admin , password :123 <= for testing

function HomePage() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const cardsData = JSON.parse(localStorage.getItem('cards'));
    if (cardsData) {
      setCards(cardsData);
    }
  }, []);


  return (
    <>
      <div className='flex flex-col max-w-2xl mx-auto p-8'>
        <h3 className='font-bold text-green-800 text-3xl'>Card</h3>
        <p className='text-green-800 font-bold  p-2'>
          Only admin can add cards and delete them
        </p>

  
        <div className='my-4 p-2'>
          {cards.length > 0 ? (
            cards.map((card) => (
              <div
                key={card.id}
                className='border p-4 mb-4 rounded-lg shadow-md'>
                <p className='text-gray-500'>Card ID: {card.id}</p>
                <p className='text-gray-500'>Title: {card.title}</p>
                <p className='text-gray-500'>Content: {card.content}</p>

              </div>
            ))
          ) : (
            <p>No cards available</p>
          )}
        </div>
      </div>
    </>
  );
}

export default HomePage;
