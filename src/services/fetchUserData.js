export const fetchUserData = async (user_id) => {
  const token = localStorage.getItem("token");
  try {
    const response = await fetch(`http://localhost:5000/users/${user_id}`, {
      method: "GET",
      headers: {
        Authorization: token,
      },
    });
    if (response.status === 200) {
      const userData = await response.json();
      return userData;
    }
    if (response.status === 401) {
      return { status: 401 };
    }
  } catch (err) {
    console.log("There was an error fetching the user data", err);
  }
};

export const registerNewUser = async (userData) => {
  try {
    const response = await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    return { status: response.status, data };
  } catch (err) {
    console.log("there was an error adding the new user", err);
  }
};

export const loginUser = async (loginData) => {
  try {
    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(loginData),
    });
    const data = await response.json();
    return { status: response.status, data };
  } catch (err) {
    console.log("there was an error logging in with these details", err);
  }
};

export const fetchMyProfile = async () => {
  const token = localStorage.getItem("token");

  try {
    const response = await fetch(
      `http://localhost:5000/users/profile/myProfile`,
      {
        method: "GET",
        headers: {
          Authorization: token,
        },
      }
    );
    if (response.status === 200) {
      const userData = await response.json();
      return userData;
    }
    if (response.status === 401) {
      return { status: 401 };
    }
  } catch (err) {
    console.log("There was an error fetching the user data", err);
  }
};
