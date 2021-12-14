import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="first-footer">
      <div className="back">
        <a onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          BACK TO TOP
        </a>
      </div>
      <div className="footer">
        <div className="foot">
          <h3>КУПИТЬ</h3>
          <a style={{ color: "black" }}>Женщины</a>
          <a style={{ color: "black" }}>Мужчины</a>
          <a style={{ color: "black" }}>Малыши</a>
          <a style={{ color: "black" }}>Дети</a>
          <a style={{ color: "black" }}>H&M HOME</a>

        </div>

        <div className="foot">
          <h3>ИНФОРМАЦИЯ О КОМПАНИИ</h3>
          <a style={{ color: "black" }}>Карьера в H&M</a>
          <a style={{ color: "black" }}>О группе компании H&M</a>
          <a style={{ color: "black" }}>Экологическая и  </a>
          <a style={{ color: "black" }}>социальная ответственность </a>
          <a style={{ color: "black" }}>Пресса</a>
          <a style={{ color: "black" }}>Для инвесторов</a>
          <a style={{ color: "black" }}>Корпоративная ответственность</a>

        </div>

        <div className="foot">
          <h3>ПОМОЩЬ</h3>
          <a style={{ color: "black" }}>Служба поддержки</a>
          <a style={{ color: "black" }}>Мой акаунт</a>
          <a style={{ color: "black" }}>Найти магазины</a>
          <a style={{ color: "black" }}>Юридическая информация и </a>
          <a style={{ color: "black" }}>политика конфиденциальности</a>
          <a style={{ color: "black" }}>Контакты</a>
          <a style={{ color: "black" }}>Настройка куки-файлов</a>
        </div>

        <div className="foot">
          <h3>Стать участником</h3>
          <a style={{ color: "black" }}>Станьте участником нашей программы лоаяльности</a>
          <a style={{ color: "black" }}>сейчас и получите скидку в 10% </a>
          <a style={{ color: "black" }}>на вашу следующую покупку онлайн</a>
        </div>


      </div>
      <div className="img2">
        <a>
          <img
            src="https://i.pinimg.com/originals/fb/5a/bd/fb5abd833d11668f26f0ece919b45f63.jpg"
            alt=""
          />
        </a>
      </div>

    </div>

  );
};

export default Footer;
