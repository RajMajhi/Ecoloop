import SearchBar from "./SearchBar";

export default function Home() {
  return (
    <div className="page">
      <header className="header">
        <div className="logo">EcoLoop</div>
        <nav className="nav">
          <a href="#market">Marketplace</a>
          <a href="#impact">Impact</a>
          <a href="#community">Community</a>
          <button className="ghost">Get Early Access</button>
        </nav>
      </header>

      <main className="hero" id="market">
        <div className="hero-text">
          <p className="eyebrow">Sustainable Marketplace</p>
          <h1>
            A circular economy hub for creators, collectors, and conscious
            shoppers.
          </h1>
          <p className="subtitle">
            EcoLoop connects eco-friendly startups and everyday households,
            keeping great products in motion instead of in landfills.
          </p>

          <SearchBar />

          <div className="cta-row">
            <button className="primary">Explore the Marketplace</button>
            <button className="secondary">List an Item</button>
          </div>

          <div className="stats">
            <div>
              <h3>2.4k+</h3>
              <p>Items reused this month</p>
            </div>
            <div>
              <h3>180+</h3>
              <p>Eco startups onboarded</p>
            </div>
            <div>
              <h3>98%</h3>
              <p>Positive community rating</p>
            </div>
          </div>
        </div>

        <div className="hero-card" id="impact">
          <div className="badge">Live Impact</div>
          <h2>Turn pre-loved into planet-loved.</h2>
          <p>
            Every exchange saves resources and unlocks value for communities.
            Track your impact in real time and see how every loop makes a
            difference.
          </p>
          <ul>
            <li>Verified eco-friendly sellers</li>
            <li>Smart pickup and delivery matching</li>
            <li>Community-driven trust scores</li>
          </ul>
        </div>
      </main>

      <section className="strip" id="community">
        <p>
          Join makers and mindful shoppers building a zero-waste marketplace.
        </p>
        <button className="primary">Join the Waitlist</button>
      </section>
    </div>
  );
}