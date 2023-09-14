import React from 'react';
import './Header.css'; // CSS dosyasını dahil edin veya stil kodlarını buraya ekleyin

interface ImageOverlayProps {
  imageUrl: string;
  title: string;
  subtitle: string;
  link: string;
}

const ImageWithOverlay: React.FC<ImageOverlayProps> = ({ imageUrl, title, subtitle, link }) => {
  return (
    <div className="image-container">
      <img src={imageUrl} alt={title} className="image" />

      <div className="text-container">
        <h2 className="overlay-text">{title}</h2>
        <h3 className="overlay-text">{subtitle}</h3>
        <a href={link} className="learn-more-link">Learn more</a>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div>
      <ImageWithOverlay
        imageUrl="/src/image/hero_iphone14_yellow__eun20sn4imi6_mediumtall.jpg"
        title="iPhone 14 Pro"
        subtitle="Wonderful."
        link="#"
      />

      <ImageWithOverlay
        imageUrl="/src/image/hero_iphone14pro_spring__9xo85pm6sbmm_large (1).jpg"
        title="iPhone 14"
        subtitle="Amazing."
        link="#"
      />
      
      <ImageWithOverlay
        imageUrl="/src/Image/hero_macbook_air_15_midnight__ct0pgwizvree_mediumtall.jpg"
        title="MacBook Air 15"
        subtitle="Impressively big. Impossibly thin.<"
        link="#"
      />
    </div>
  );
};

export default App;
