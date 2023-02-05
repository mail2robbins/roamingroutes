import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <div id="sidebar">
        <h1>Attractions to visit</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search locations"
              placeholder="Search locations"
              type="search"
              name="q"
            />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </form>
        </div>
        <nav>
          <ul>
            <li>
              <a href={`/home`}>home</a>
            </li>
            <li>
              <a href={`/privacy`}>privacy</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
