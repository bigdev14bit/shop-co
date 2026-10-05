import './BrowseByStyle.css';

// Import the images we already have in our assets folder
import casualImage from '../assets/man-wearing-white.png';
import formalImage from '../assets/man-calling.png';
import partyImage from '../assets/cow-girl.png';
import gymImage from '../assets/man-with-weigh.png';


function BrowseByStyle() {
    // All dress styles are kept in one array.
    // This makes it easy to add another style later without
    // repeating the same JSX structure.
    const dressStyles = [
        {
            name: 'Casual',
            image: casualImage,
        },
        {
            name: 'Formal',
            image: formalImage,
        },
        {
            name: 'Party',
            image: partyImage,
        },
        {
            name: 'Gym',
            image: gymImage,
        },
    ];

    return (
        <section className="browse-by-style">
            <div className="container">

                {/* Main section heading */}
                <h2 className="section-title">
                    BROWSE BY DRESS STYLE
                </h2>

                {/*
                    The four style cards will be arranged by CSS.
                    Desktop: 2 cards per row.
                    Mobile: they will adapt to the smaller screen.
                */}
                <div className="dress-style-grid">

                    {dressStyles.map((style) => (
                        <div
                            className="dress-style-card"
                            key={style.name}
                        >
                            {/* Style name */}
                            <h3>{style.name}</h3>

                            {/* Style image */}
                            <img
                                src={style.image}
                                alt={`${style.name} dress style`}
                            />
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}

export default BrowseByStyle;
