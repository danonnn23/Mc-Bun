
const Features = ({ items }) => {
  return (
    <div className="features-container">
      {items.map((item, index) => (
        <div 
          key={index} 
          className="feature-card" 
          style={{ backgroundColor: item.color }}
        >
          <h2>{item.tag}</h2>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Features