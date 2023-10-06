import { socialLinks } from '../data';

function SocialLink({ mainLink, subLink }) {
  return (
    <ul className={mainLink}>
      {socialLinks.map((link) => {
        const { id, href, icon } = link;
        return (
          <li key={id}>
            <a href={href} target="_blank" rel="noreferrer" className={subLink}>
              <i className={icon}></i>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
export default SocialLink;
