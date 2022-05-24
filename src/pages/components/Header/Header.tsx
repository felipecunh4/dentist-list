import InternalLink from '~components/InternalLink/InternalLink';

import scss from './Header.module.scss';

function Header() {
  return (
    <div className={scss.container}>
      <div className={scss.logoWrapper}>
        <InternalLink to="/ViniciusBSI" className={scss.logoLink}>
          <p className={scss.enterpriseName}>
            Consultorio<span className={scss.me}>.me</span>
          </p>
        </InternalLink>
      </div>
      <div className={scss.contentWrapper}>
        <ul className={scss.itemsWrapper}>
          <li className={scss.item}>
            <a className={scss.link} href="/ViniciusBSI/lista-espera">
              Visualizar lista de espera
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
