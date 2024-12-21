import React from "react";
import "./rollesthm.css"; // Import the CSS for styling

const RollesTheorem = () => {

    return (
        <div className="rolles-container">
            <header className="rolles-header">
                <h1>Rolle's Theorem - Engineering Calculus</h1>
            </header>

            <section className="rolles-intro">
                <h2>Introduction</h2>
                <p>
                    Rolle's Theorem states that if a differentiable function has equal
                    values at two distinct points, there exists at least one point between
                    them where the first derivative (slope) is zero.
                </p>
            </section>

            <section className="rolles-videos">
                <h2>Learn Rolle's Theorem From More Considerable Videos</h2>
                <div className="video">
                    <div className="video-box">
                        <h3>Watch in Hindi</h3>
                        <iframe width="545" height="315" src="https://www.youtube.com/embed/bQ_B9cHBYfQ?si=uRy1Gzhi24lSrO5j&amp;start=17" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        {/* <iframe
                            className="video-frame"
                            src="https://youtu.be/bQ_B9cHBYfQ?si=bOWi1Um61moYYUNM" // Replace with a relevant Hindi video
                            title="Rolle's Theorem in Hindi"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe> */}
                    </div>
                    <div className="video-box">
                        <h3>Watch in English</h3>
                        <iframe width="545" height="315" src="https://www.youtube.com/embed/LHym1ARc2cE?si=INGuQHoQoOew9-kw&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        {/* <iframe
                            className="video-frame"
                            src="https://www.youtube.com/embed/8JmEr5Tmr7g" // Replace with a relevant English video
                            title="Rolle's Theorem in English"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe> */}
                    </div>
                </div>
            </section>

            <section className="rolles-definition">
                <h2>Definition</h2>
                <p>
                    Rolle's Theorem applies to a continuous function <i>f(x)</i> over a
                    closed interval [a, b], where <i>f(a) = f(b)</i>. It guarantees at
                    least one <i>c ∈ (a, b)</i> such that <i>f'(c) = 0</i>.
                </p>
            </section>

            <section className="rolles-steps">
                <h2>Steps to Solve Rolle's Theorem Problems</h2>
                <ol>
                    <li>Verify that the function is continuous over the closed interval.</li>
                    <li>Ensure the function is differentiable in the open interval.</li>
                    <li>Check that the values of the function at the endpoints are equal.</li>
                    <li>
                        Find <i>f'(x)</i> (the derivative of the function) and solve
                        <i>f'(c) = 0</i> to find the value(s) of <i>c</i>.
                    </li>
                </ol>
            </section>

            <section className="rolles-example">
                <h2>Example</h2>
                <p>Given <i>f(x) = x² - x</i>, verify Rolle's theorem over [0, 1]:</p>
                <div className="example-steps">
                    <ol>
                        <li>
                            <b>Step 1:</b> The function <i>f(x)</i> is continuous and
                            differentiable over [0, 1].
                        </li>
                        <li>
                            <b>Step 2:</b> <i>f(0) = f(1)</i> (both are 0), so the theorem
                            applies.
                        </li>
                        <li>
                            <b>Step 3:</b> Compute <i>f'(x) = 2x - 1</i>. Set <i>f'(c) = 0</i>.
                        </li>
                        <li>
                            <b>Step 4:</b> Solve for <i>c</i>: <i>c = 1/2</i>. This is the
                            required point.
                        </li>
                    </ol>
                </div>
            </section>

            <section className="rolles-resources">
                <h2>Additional Resources</h2>
                <ul>
                    <li>
                        <a
                            href="https://example.com/rolles-theorem.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Download PDF on Rolle's Theorem
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://example.com/engineering-calculus-resources"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Explore More Calculus Topics
                        </a>
                    </li>
                </ul>
            </section>
        </div>
    );
};

export default RollesTheorem;




