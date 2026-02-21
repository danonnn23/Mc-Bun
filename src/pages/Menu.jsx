import data from '../db.json';
import MenuFilter from '../components/MenuFilter.jsx';
import { useState } from 'react';

function Menu() {
    const categories = data.category; 
    const [activeCategory, setActiveCategory] = useState('all');

    const handleSelectCategory = (categoryId) => {
        setActiveCategory(categoryId);
    };
    return (
        <>
            <main className="menu-container">
                <div className="menu-container__responsive-grid">
                    <section className="cmp-header-section">
                        <div className="cmp-header-section__filter-container">
                            <MenuFilter items={categories} 
                                        activeCategory={activeCategory} 
                                        onSelect={handleSelectCategory}>
                            </MenuFilter>
                        </div>
                        <div className="cmp-header-section__cart-container">
                            
                        </div>
                    </section>
                    <section className="cmp-menu-section">
                    </section>
                </div>
            </main>
        </>
    )
}

export default Menu