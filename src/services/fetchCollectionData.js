export const fetchCollectionData = async () => {
  const token = localStorage.getItem("token");
  try {
    const response = await fetch("http://localhost:5000/collection", {
      method: "GET",
      headers: {
        Authorization: token,
      },
    });
    if (response.status === 200) {
      const collectionData = await response.json();
      console.log(collectionData);
      return collectionData;
    }
    if (response.status === 401) {
      return { status: 401 };
    }
  } catch (err) {
    console.log("There was an error fetching the collection data:", err);
  }
};

export const deleteCollectionLine = async (collection_line_id) => {
  const token = localStorage.getItem("token");
  try {
    const response = await fetch(
      `http://localhost:5000/collection/delete/${collection_line_id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: token,
        },
      }
    );
    const deleteItem = await response.json();
    return deleteItem;
  } catch (err) {
    console.log("There was error deleting the line", err);
  }
};
