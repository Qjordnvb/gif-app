const ENDPOINT =
  "https://gif-app-react.herokuapp.com";

export default function register({
  username,
  password,
}) {
  return fetch(`${ENDPOINT}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  }).then((res) => {
    if (!res.ok)
      throw new Error("Response is NOT ok");
    return true;
  });
}
