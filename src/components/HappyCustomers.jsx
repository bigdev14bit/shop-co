import './HappyCustomers.css';

function HappyCustomers() {
    // Customer reviews.
    // Keeping the reviews as data makes the cards reusable
    // and easy to update later.
    const reviews = [
        {
            name: 'Sarah M.',
            rating: 5,
            review:
                'I am blown away by the quality and style of the clothes I received. Everything fits perfectly and looks exactly like the pictures.'
        },
        {
            name: 'Alex K.',
            rating: 5,
            review:
                'Finding clothes that match my style used to be difficult, but this store makes it so easy. The quality is excellent.'
        },
        {
            name: 'James L.',
            rating: 5,
            review:
                'The customer service was fantastic and my order arrived quickly. I will definitely be shopping here again.'
        },
        {
            name: 'Olivia R.',
            rating: 5,
            review:
                'The clothes are stylish, comfortable, and great quality. I have already recommended this store to my friends.'
        },
        {
            name: 'Michael D.',
            rating: 5,
            review:
                'Great selection and very good quality. The whole shopping experience was smooth from start to finish.'
        },
        {
            name: 'Emily T.',
            rating: 5,
            review:
                'I love the variety of styles available here. My order looked even better in person.'
        }
    ];

    return (
        <section className="happy-customers">
            <div className="container">

                {/* Section heading */}
                <h2 className="section-title">
                    OUR HAPPY CUSTOMERS
                </h2>

                {/* Customer review cards */}
                <div className="reviews-grid">
                    {reviews.map((customer) => (
                        <article
                            className="review-card"
                            key={customer.name}
                        >
                            {/* Star rating */}
                            <div className="review-rating">
                                {'★'.repeat(customer.rating)}
                            </div>

                            {/* Customer name */}
                            <h3 className="customer-name">
                                {customer.name}
                                <span className="verified">✓</span>
                            </h3>

                            {/* Review text */}
                            <p className="customer-review">
                                "{customer.review}"
                            </p>
                        </article>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default HappyCustomers;
