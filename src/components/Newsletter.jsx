import { useState } from 'react';
import { FiMail } from 'react-icons/fi';
import './Newsletter.css';

function Newsletter() {
    // Keeps track of what the user types into the email field.
    const [email, setEmail] = useState('');

    // Handles the newsletter form submission.
    const handleSubmit = (event) => {
        event.preventDefault();

        // For now, we don't have a backend to actually subscribe
        // the user. We simply validate that an email was entered.
        if (!email.trim()) {
            return;
        }

        // Temporary behaviour until we connect a real newsletter service.
        alert(`Thanks for subscribing, ${email}!`);

        // Clear the input after submission.
        setEmail('');
    };

    return (
        <section className="newsletter">
            <div className="newsletter-container">

                {/* Newsletter heading */}
                <h2>
                    STAY UP TO DATE ABOUT
                    <br />
                    OUR LATEST OFFERS
                </h2>

                {/*
                    Newsletter form.
                    Using a form instead of a normal div means
                    pressing Enter can also submit the email.
                */}
                <form
                    className="newsletter-form"
                    onSubmit={handleSubmit}
                >
                    {/* Email input */}
                    <div className="newsletter-input-wrapper">
                        <FiMail className="newsletter-mail-icon" />

                        <input
                            type="email"
                            placeholder="Enter your email address"
                            value={email}
                            onChange={(event) =>
                                setEmail(event.target.value)
                            }
                            required
                        />
                    </div>

                    {/* Subscribe button */}
                    <button type="submit">
                        Subscribe to Newsletter
                    </button>
                </form>

            </div>
        </section>
    );
}

export default Newsletter;
