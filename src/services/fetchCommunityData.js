export const fetchCommunityData = async () => {
  const token = localStorage.getItem("token");
  try {
    const response = await fetch("http://localhost:5000/communityTrades", {
      method: "GET",
      headers: {
        Authorization: token,
      },
    });
    if (response.status === 200) {
      const communityData = await response.json();
      console.log(communityData);
      return communityData;
    }
    if (response.status === 401) {
      return { status: 401 };
    }
  } catch (err) {
    console.log("There was an error fetching the collection data:", err);
  }
};
