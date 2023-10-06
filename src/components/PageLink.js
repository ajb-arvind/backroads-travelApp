import { pageLinks } from '../data';
function PageLink({ mainLink, subLink }) {
  return (
    <ul className={mainLink} id="nav-links">
      {pageLinks.map((link) => {
        const { id, href, text } = link;
        return (
          <li key={id}>
            <a href={href} className={subLink}>
              {' '}
              {text}{' '}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
export default PageLink;
