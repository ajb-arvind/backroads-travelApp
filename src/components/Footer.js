import SocialLink from './SocialLink';
import PageLink from './PageLink';

function Footer() {
  return (
    <footer className="section footer">
      <PageLink mainLink="footer-links" subLink="footer-link" />
      <SocialLink mainLink="footer-icons" subLink="footer-icon" />
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
}
export default Footer;
