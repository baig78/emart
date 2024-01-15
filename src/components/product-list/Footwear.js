import React from "react";
import Card from "./Cards";
import cardsData from "../cardsData.json";

const Footwear = () => {
  const handleCardClick = (title) => {
    // alert(`Clicked on ${title} card!`);
  };
  const handleShareClick = async (card) => {
    console.log(
      "Clicked on WhatsApp. Title:",
      card.title,
      "Product Code:",
      card.productCode
    );
    try {
      if (navigator.share) {
        await navigator.share({
          title: `Check out this product: ${card.title}`,
          text: `Product Code: ${card.productCode}`,
          url: window.location.href, // Replace with the actual URL of your application
        });
      } else {
        alert("Web Share API is not supported in this browser.");
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  const handleWhatsAppClick = (card) => {
    console.log(
      "Clicked on WhatsApp. Title:",
      card.title,
      "Product Code:",
      card.productCode
    );
    const phoneNumber = "916302583224";
    const message = `Hello, I'm interested in \n${card.title} \nProduct Code: ${card.productCode}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };
  return (
    <>
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div className="container mt-5">
          <div className="row row-cols-1 row-cols-md-3 g-3">
            {cardsData.map((card, index) => (
              <div className="col-md-3" key={index}>
                <Card
                  title={card.title}
                  content={card.content}
                  imageUrl={card.imageUrl}
                  productCode={card.productCode}
                  oldPrice={card.oldPrice}
                  newPrice={card.newPrice}
                  onClick={() => handleCardClick(card.title)}
                  onShareClick={() => handleShareClick(card)}
                  onWhatsAppClick={() => handleWhatsAppClick(card)}
                />
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Footwear;
