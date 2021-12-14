import React from "react";
import "./Home.css";
import { Card, Carousel } from "antd";
import photo from "./img/697765-800w.jpg";
import photo1 from "./img/FranceMFcover1920x1280px.jpg";
import photo2 from "./img/H-M-X-Balmain-instagram-5_2.jpg";
import photo3 from "./img/models.jpeg"

const contentStyle = {
  textAlign: 'center',
  height: '400px',
  color: '#fff',
  lineHeight: '160px',
  background: '#364d79',
};

const { Meta } = Card;
const Home = () => {
  return (
    <div>
      <div className="container">
        <Carousel autoplay>
          <div className="img-carousel">
            <img style={contentStyle} src={photo} alt="photo_1" />
          </div>
          <div className="img-carousel">
            <img style={contentStyle} src={photo1} alt="photo_2" />
          </div>
          <div className="img-carousel">
            <img style={contentStyle} src={photo2} alt="photo_3" />
          </div>
          <div className="img-carousel">
            <img style={contentStyle} src={photo3} alt="photo_4" />
          </div>
        </Carousel>
      </div>

      <div className="img">
        <a>
          <img
            style={{ width: "100px" }}
            src="data:image/png;base64,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"
            alt=""
          />
        </a>
        <a>
          <img
            style={{ width: "100px" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh8mIb-UCo4ZkT648K1Mx5SjKjyeD8cKXsC4VbqgMuC8nrsZyyu1FDI0RxYJxqg6HFHnk&usqp=CAU"
            alt=""
          />
        </a>
        <a>
          <img
            style={{ width: "100px" }}
            src="data:image/png;base64,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"
            alt=""
          />
        </a>
        <a>
          <img
            style={{ width: "170px" }}
            src="data:image/png;base64,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"
            alt=""
          />
        </a>
        <a>
          <img
            style={{ width: "100px" }}
            src="data:image/png;base64,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"
            alt=""
          />
        </a>
        <a>
          <img
            style={{ width: "100px" }}
            src="data:image/png;base64,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"
            alt=""
          />
        </a>
        <a>
          <img
            style={{ width: "100px" }}
            src="data:image/png;base64,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"
            alt=""
          />
        </a>
      </div>
      <div className="Shop">
        <a
          style={{ display: "flex", justifyContent: "center", color: "black" }}
        >
          RECOMENDED FOR YOU
        </a>
      </div>
      <div className="cards">
        <Card
          hoverable
          style={{ width: 320 }}
          cover={
            <img
              alt="example"
              src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F0d%2F4d%2F0d4dc066d0472b77cb9c7600943f1ab40b9c1627.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
            />
          }
        >
          <Meta title="H&M" description="New Collection" />
        </Card>
        <Card
          hoverable
          style={{ width: 320 }}
          cover={
            <img
              alt="example"
              src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fce%2Fc0%2Fcec07795aabafac578136cd8c1616858d3733974.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
            />
          }
        >
          <Meta title="H&M" description="New Collection" />
        </Card>
        <Card
          hoverable
          style={{ width: 320 }}
          cover={
            <img
              alt="example"
              src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F12%2F59%2F1259419590efeeb522ad9d6b35ad10cefcc88357.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
            />
          }
        >
          <Meta title="H&M" description="New Collection" />
        </Card>
        <Card
          hoverable
          style={{ width: 320 }}
          cover={
            <img
              alt="example"
              src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F8f%2F30%2F8f30a00ae2273e37e3e58d2b4560dffb38387469.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
            />
          }
        >
          <Meta title="H&M" description="New Collection" />
        </Card>
      </div>
    </div>
  );
};

export default Home;
