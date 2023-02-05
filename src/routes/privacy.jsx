import { Form } from "react-router-dom";

export default function Privacy() {
  const privacy = {
    first: "Your",
    last: "Name",
    avatar: "https://placekitten.com/g/200/200",
    twitter: "your_handle",
    notes: "Some notes",
    favorite: true,
  };

  return (
    <div id="privacy">
      <div>
        <img key={privacy.avatar} src={privacy.avatar || null} />
      </div>

      <div>
        <h2>Privacy</h2>

        <h4>GDPR</h4>

        <p>
          We respect your privacy and are committed to protecting your personal
          data. In accordance with the General Data Protection Regulation
          (GDPR), we would like to inform you about the data we collect and how
          it is used.
        </p>
        <p>
          When you visit our website, we collect information such as your IP
          address, location, and browsing habits. This information helps us
          understand our audience and improve our website.
        </p>

        <p>
          We may also use cookies to personalize your experience and show you
          relevant content and ads. By using our website, you consent to the
          collection and use of your data as described in this policy.
        </p>

        <p>
          If you would like to opt out of data collection or change your
          preferences, you can do so by adjusting your browser settings or
          contacting us.
        </p>

        <p>
          Thank you for visiting our website and for supporting our commitment
          to protecting your privacy.
        </p>

        <h4>CPRA</h4>

        <p>
          We value your privacy and are committed to protecting your personal
          information. In accordance with the California Privacy Rights Act
          (CPRA), we would like to inform you about the personal data we
          collect, how it is used, and your rights under the CPRA.
        </p>

        <p>
          When you visit our website, we may collect information such as your IP
          address, location, and browsing habits. This information helps us
          understand our audience and improve our website.
        </p>

        <p>
          We may also use cookies and other tracking technologies to personalize
          your experience and show you relevant content and ads. By using our
          website, you consent to the collection and use of your personal
          information as described in this policy.
        </p>

        <p>
          Under the CPRA, you have the right to request that we delete your
          personal information, and to opt out of the sale of your personal
          information. To exercise these rights, please contact us.
        </p>

        <p>
          Thank you for visiting our website and for supporting our commitment
          to protecting your privacy under the CPRA.
        </p>
      </div>
    </div>
  );
}

function Favorite({ privacy }) {
  // yes, this is a `let` for later
  let favorite = privacy.favorite;
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
