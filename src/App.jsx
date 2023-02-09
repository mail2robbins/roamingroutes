import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* <header>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Destinations</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </header> */}

      <main>
        <h1>Roaming-Routes: Discover the World with Us</h1>
        <p>
          Welcome to Roaming-Routes, your ultimate source for travel
          inspiration, tips, and stories. Join us as we explore the most
          beautiful destinations, try new experiences, and share our adventures
          with you.
        </p>

        <section>
          <h2>Latest Posts</h2>
          <ul>
            <li>
              <h3>
                <h4>The Ultimate Guide to Hiking in the Swiss Alps</h4>
              </h3>
              <p>
                Discover the breathtaking beauty of the Swiss Alps with our
                comprehensive guide to the best hikes and trails in the region.
              </p>
              {/* <ins
                class="adsbygoogle"
                style="display:block"
                data-ad-client="ca-pub-7865735760405609"
                data-ad-slot="3875602576"
                data-ad-format="auto"
                data-full-width-responsive="true"
              ></ins>
              <script>
                (adsbygoogle = window.adsbygoogle || []).push({});
              </script> */}
            </li>
            <li>
              <h3>
                <h4>Uncovering the Hidden Gems of Tulum, Mexico</h4>
              </h3>
              <p>
                Explore the lesser-known spots in Tulum, from secret cenotes to
                off-the-beaten-path restaurants, for a truly authentic
                experience.
              </p>
              {/* <ins
                class="adsbygoogle"
                style="display:block"
                data-ad-client="ca-pub-7865735760405609"
                data-ad-slot="3875602576"
                data-ad-format="auto"
                data-full-width-responsive="true"
              ></ins>
              <script>
                (adsbygoogle = window.adsbygoogle || []).push({});
              </script> */}
            </li>
            <li>
              <h3>
                <h4>Tips for Planning a Road Trip Across the United States</h4>
              </h3>
              <p>
                Embark on an epic road trip across the U.S. with our expert
                tips, including the best route, must-visit destinations, and
                more.
              </p>
              {/* <ins
                class="adsbygoogle"
                style="display:block"
                data-ad-client="ca-pub-7865735760405609"
                data-ad-slot="3875602576"
                data-ad-format="auto"
                data-full-width-responsive="true"
              ></ins>
              <script>
                (adsbygoogle = window.adsbygoogle || []).push({});
              </script> */}
            </li>
          </ul>
        </section>

        <section>
          <h2>Popular Destinations</h2>
          <ul>
            <li>
              <h4>Europe</h4>
            </li>
            <li>
              <h4>Asia</h4>
            </li>
            <li>
              <h4>North America</h4>
            </li>
            <li>
              <h4>South America</h4>
            </li>
          </ul>
        </section>

        <section>
          <h2>Follow Us on Social Media</h2>
          <ul>
            <li>
              <a
                href="https://www.youtube.com/channel/UCTTZRRcOCK44htz4dAc5DeQ"
                target="_blank"
              >
                Youtube
              </a>
            </li>
          </ul>
        </section>
      </main>

      <footer>
        <p>&copy; 2023 Roaming-Routes</p>
      </footer>
    </div>
  );
}

export default App;
