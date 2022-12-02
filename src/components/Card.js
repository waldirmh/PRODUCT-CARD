import React from "react"; /* imr--> el atajo */
import "../assets/css/Card.css";
import image from "../assets/imagens/image-product-desktop.jpg";
import iconcard from "../assets/imagens/icon-cart.svg";
function Card() {
  return (
    <div className="card">
      <img src={image} />
      <div className="description">
        <h4>Perfume</h4>
        <h1>Gabrielle Essence Eau De Parfum</h1>
        <p className="detail">
          A floral, solar and voluptuos interpretation composed by olivier
          Polge, perfumer-Creator for the House of CHANEL{" "}
        </p>
        <p className="price">
          <span>$149.99</span>
          <span>$169.99</span>
        </p>
        <button class="primary-button add-to-cart-button">
          <img src={ iconcard} alt="Add to Cart" />
          Add to Card
        </button>
      </div>
    </div>
  );
}

export { Card };
