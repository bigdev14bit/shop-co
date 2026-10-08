// src/components/CategoryStrip.jsx
import './CategoryStrip.css';

function CategoryStrip() {
    const categories = [
        'Dresses',
        'Tops',
        'Bottoms',
        'Outerwear',
        'Sets',
        'Ankara',
        'Casual',
        'Office Wear',
        'Statement Pieces',
    ];

    // Duplicate the list so the marquee loops seamlessly.
    const looped = [...categories, ...categories];

    return (
        <section className="category-strip">
            <div className="category-strip-track">
                {looped.map((cat, idx) => (
                    <span className="category-strip-item" key={idx}>
                        {cat}
                        <span className="category-strip-dot">•</span>
                    </span>
                ))}
            </div>
        </section>
    );
}

export default CategoryStrip;
