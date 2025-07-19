export const fetchCardData = async () => {
  try {
    const response = await fetch("http://localhost:5000/cards");
    const cardData = await response.json();
    return cardData;
  } catch (err) {
    console.log("there was an error fetching the data:", err);
  }
};

export const fetchCardByRelicNumber = async (relic_number) => {
  try {
    const response = await fetch(`http://localhost:5000/cards/${relic_number}`);
    const cardData = await response.json();
    return cardData;
  } catch (err) {
    console.log("There was an error fetching the card data", err);
  }
};

export const addCardToCollection = async (cardData) => {
  const token = localStorage.getItem("token");
  try {
    const response = await fetch(`http://localhost:5000/collection`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(cardData),
    });
    const data = await response.json();
    console.log("response from backend = ", data);
  } catch (err) {
    console.log("there was an error sending the card", err);
  }
};
