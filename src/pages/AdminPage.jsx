import { useEffect, useState } from 'react';

// username : admin , password :123 <= for testing

function AdminPage() {
  const [userData, setUserData] = useState(null);
  const [cards, setCards] = useState([]);


  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    console.log(userData);
    if (userData) {
      setUserData(userData);
    }
  }, []);


  useEffect(() => {
    const cardsData = JSON.parse(localStorage.getItem('cards'));
    if (cardsData) {
      setCards(cardsData);
    }
  }, []);

  //add a new card and store it in localStorage

  const add = () => {
    const newCard = {
      id: cards.length + 1,
      title: `Card ${cards.length + 1}`,
      content: `lorm ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    };
    const updatedCards = [...cards, newCard];
    setCards(updatedCards);
    localStorage.setItem('cards', JSON.stringify(updatedCards));
  };

  // delete by the index because the cards are stored in localStorage
  const del = (index) => {
    const updatedCards = cards.filter((_, i) => i !== index);
    setCards(updatedCards);
    localStorage.setItem('cards', JSON.stringify(updatedCards));
  };
  return (
    <>
      <div className='flex flex-col max-w-2xl mx-auto p-8'>
        <h3 className='font-bold text-green-800 text-3xl'>Card</h3>
        <p className='text-green-800 font-bold  p-2'>
          Only admin can add cards and delete them
        </p>

        {userData && userData.type === 'admin' && (
          <button
            onClick={add}
            className='py-2 px-3 bg-green-800 font-bold rounded-2xl text-white text-xl'>
            Add card
          </button>
        )}
        <div className='my-4 p-2'>
          {cards.length > 0 ? (
            cards.map((card, index) => (
              <div
                key={card.id}
                className='border p-4 mb-4 rounded-lg shadow-md'>
                <p className='text-gray-500'>Card ID: {card.id}</p>
                <p className='text-gray-500'>Title: {card.title}</p>
                <p className='text-gray-500'>Content: {card.content}</p>
                {userData && userData.type === 'admin' && (
                  <button
                    onClick={() => del(index)}
                    className='bg-red-800  rounded-2xl text-white font-bold py-2 px-3  m-2'>
                    Delete
                  </button>
                )}
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

export default AdminPage;
