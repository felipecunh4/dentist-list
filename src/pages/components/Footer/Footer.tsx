import scss from './Footer.module.scss';

function Footer() {
  return (
    <div className={scss.container}>
      <p className={scss.description}>© 2022 - Todos os direitos reservados.</p>
    </div>
  );
}

export default Footer;
