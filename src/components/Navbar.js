import logo from '../images/logo.svg';
import SocialLink from './SocialLink';
import PageLink from './PageLink';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <PageLink mainLink="nav-links" subLink="nav-link" />

        <SocialLink mainLink="nav-icons" subLink="nav-icon" />
      </div>
    </nav>
  );
}
export default Navbar;
