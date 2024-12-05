import { Link, useLocation } from react-router-dom


const Nav = () => {
  const currentPage = useLocation().pathname;

  return (
    <nav className="nav">
      <p className="nav-item">
        <Link
          to="/"
          ClassName={currentPage === "/" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
      </p>
      <p className="nav-item">
        <Link
          to="/SavedCandidates"
          className={
            currentPage === "/SavedCandidates" ? "nav-link active" : "nav-link"}>
            Potential Candidates
          </Link>
        </p>
      </nav>
    );
  };
  




  // TODO: Add necessary code to display the navigation bar and link between the pages







  
  return (
    <div>Nav</div>
  )
};

export default Nav;
