import { Form } from "react-router-dom";

export default function Home() {
  const home = {
    first: "Your",
    last: "Name",
    avatar: "https://placekitten.com/g/200/200",
    twitter: "your_handle",
    notes: "Some notes",
    favorite: true,
  };

  return (
    <div id="home">
      <div className="App">
        <h1>Roaming Routes - coming soon!</h1>
      </div>
    </div>
  );
}

function Favorite({ home }) {
  // yes, this is a `let` for later
  let favorite = home.favorite;
  return (
    <Form method="post">
      <button
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
      >
        {favorite ? "★" : "☆"}
      </button>
    </Form>
  );
}
