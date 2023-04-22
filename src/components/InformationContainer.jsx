import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";

import "../styles/components/informationcontainer.sass";

function InformationContainer() {
  return (
    <section id="information">
      <div className="infor-card">
        <AiFillPhone id="phone-icon" />
        <div>
          <h3>Telefone</h3>
          <p>(88)99346-8031</p>
        </div>
      </div>
      <div className="infor-card">
        <AiOutlineMail id="email-icon" />
        <div>
          <h3>Email</h3>
          <p>sammyfe2021@gmail.com</p>
        </div>
      </div>
      <div className="infor-card">
        <AiFillEnvironment id="pin-icon" />
        <div>
          <h3>Localização</h3>
          <p>Quixeramobim/Ceará</p>
        </div>
      </div>
    </section>
  );
}

export default InformationContainer;
