import '../styles/components/sidebar.sass'

import InformationContainer from './InformationContainer';
import SocialNetworks from './SocialNetworks';

import Avatar from '../img/perfil.jpg'

const Sidebar = () => {
  return <aside id="sidebar">
    <img src={Avatar} alt="Foto do Sammy" />
    <p className="title">Desenvolvedor</p>
    <SocialNetworks />
    <InformationContainer />
    <a href="" className="btn">Download Curriculo</a>
  </aside>;
};

export default Sidebar;
