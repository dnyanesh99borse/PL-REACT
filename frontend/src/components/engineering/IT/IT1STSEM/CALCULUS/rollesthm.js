import React from "react";
import Header from "../../../../header/header";

const RollesTheorem = () => {
    return (
        <div style={{ padding: "20px" }}>
            <div className="header">
                <Header />
            </div>
            <h1>Rolle's Theorem</h1>
            <p>
                Rolle's theorem states that if a differentiable function has equal
                values at two points, there exists at least one point between them
                where the first derivative (slope) is zero.
            </p>
        </div>
    );
};

export default RollesTheorem;
