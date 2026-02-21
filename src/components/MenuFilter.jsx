// MenuFilter.jsx
const MenuFilter = ({ items = [], activeCategory, onSelect }) => {
  
  if (!items || items.length === 0) {
    return <div>Loading categories...</div>;
  }

  return (
    <div className="menu-filters-container">
      {/* Міняємо categories на items */}
      {items.map((cat) => (
        <button 
          key={cat.id} 
          className={`category-card ${activeCategory === cat.id ? 'active' : ''}`} 
          onClick={() => onSelect(cat.id)}
        >
          <div className="category-card__img-wrapper">
             <img src={cat.img} alt={cat.label} />
          </div>
          <span className="category-card__label">{cat.label}</span>
        </button>
      ))}
    </div>
  );
};

export default MenuFilter;