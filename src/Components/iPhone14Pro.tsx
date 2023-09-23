import { Link } from "react-router-dom";
import "./iPhone14Pro.css"; // İhtiyaç duyarsanız stil dosyasını ekleyin

const iPhone14Pro = () => {
  const iPhones = [
    {
      color: "Space Gray",
      isNew: true,
      name: "iPhone 14 Pro",
      description: "The Ultimate iPhone",
      image: "/src/image/large.jpg",
      value: "$999", // Kiymet değeri
    },
    {
      color: "Silver",
      isNew: true,
      name: "iPhone 14 ",
      description: "The Ultimate iPhone",
      image: "/src/image/lage2.jpg",
      value: "$799", // Kiymet değeri
    },
    {
      color: "Gold",
      isNew: true,
      name: "iPhone 13",
      description: "The Ultimate iPhone",
      image: "/src/image/large3.jpg",
      value: "$599", // Kiymet değeri
    },
    {
      color: "Midnight Green",
      isNew: true,
      name: "iPhone SE",
      description: "The Ultimate iPhone",
      image: "/src/image/large.4.jpg",
      value: "$459", // Kiymet değeri
    },
  ];
  return (
    <div className="iphone-grid">
      {iPhones.map((iphone, index) => (
        <div key={index} className="iphone">
          <img src={iphone.image} alt={`iPhone 14 Pro ${iphone.color}`} />
          {iphone.isNew && <div className="new-label">New</div>}
          <div className="iphone-name">{iphone.name}</div>
          <div className="iphone-description">{iphone.description}</div>
          <div className="iphone-value">From {iphone.value}</div>
          {/* Kiymet değeri */}
          <button className="buy-button">
            <Link to="/where-to-buy/buy">Buy</Link>
          </button>
          <button className="learn-more-button">Learn More</button>
        </div>
      ))}
    </div>
  );
};

export default iPhone14Pro;
