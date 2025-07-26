export const fetchTradesData = async () => {
  const token = localStorage.getItem("token");
  try {
    const response = await fetch("http://localhost:5000/trades/myTrades", {
      method: "GET",
      headers: {
        Authorization: token,
      },
    });
    const tradesData = await response.json();
    if (tradesData.length === 0) {
      console.log("there is no cards to trade");
      return [];
    }
    if (response.status === 200) {
      return tradesData;
    }
    if (response.status === 401) {
      return { status: 401 };
    }
    return [];
  } catch (err) {
    console.log("There was an error fetching all the card data", err);
  }
};

export const fetchTradesDataByUserID = async (user_id) => {
  const token = localStorage.getItem("token");
  try {
    const response = await fetch(
      `http://localhost:5000/trades/byUser/${user_id}`,
      {
        method: "GET",
        headers: {
          Authorization: token,
        },
      }
    );
    const tradesData = await response.json();
    if (tradesData.length === 0) {
      console.log("there is no cards to trade");
      return [];
    }
    if (response.status === 200) {
      return tradesData;
    }
    if (response.status === 401) {
      return { status: 401 };
    }
    return [];
  } catch (err) {
    console.log("There was an error fetching all the card data", err);
  }
};

export const addCardToTrade = async (cardData) => {
  const token = localStorage.getItem("token");
  try {
    const response = await fetch(`http://localhost:5000/trades`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(cardData),
    });
    const data = await response.json();
    console.log("Response from the backend = ", data);
  } catch (err) {
    console.log("There was an error sending the card to trade:", err);
  }
};

export const deleteTradeLine = async (trade_line_id) => {
  const token = localStorage.getItem("token");
  try {
    const response = await fetch(
      `http://localhost:5000/trades/delete/${trade_line_id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: token,
        },
      }
    );
    const deleteData = await response.json();
    console.log("Response from the backend =", deleteData);
  } catch (err) {
    console.log("There was an error deleting this line from the trades", err);
  }
};
