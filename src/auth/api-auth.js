const serverUrl = process.env.REACT_APP_SERVER_URL;

const signin = async (user) => {
  try {
    let response = await fetch(`${serverUrl}/auth/signin/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(user),
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const signout = async () => {
  try {
    sessionStorage.clear("user")
    let response = await fetch(`${serverUrl}/auth/signout/`, { method: "GET" });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

export { signin, signout };
