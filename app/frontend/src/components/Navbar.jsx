function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">STREAMHUB</h1>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#movies">Movies</a>
        <a href="#series">Series</a>
        <a href="#my-list">My List</a>
      </div>
    </nav>
  );
}

export default Navbar;