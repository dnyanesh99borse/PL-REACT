import React, { useState, useEffect } from "react";



const Keys = () => {

    return (
        < section className="keys" >
            <h1 >All The Keys <span> of your Success are
                here.</span>
            </h1>
            <div className="slider" id="keys">
                <i id="left" className="fa-solid fa-angle-left"></i>
                <ul className="carousel">
                    <li className="card">
                        <div className="img"><img src="assets/images/tutorials.svg" alt="img" draggable="false"/></div>
                        <h2>TUTORIALS</h2>
                        <span>Calculus,LADE,DM..</span>
                    </li>
                    <li className="card">
                        <div className="img"><img src="assets/images/assignments.jpg" alt="img" draggable="false"/></div>
                        <h2>ASSIGNMENTS</h2>.
                        <span>All Subjects</span>
                    </li>
                    <li className="card">
                        <div className="img"><img src="assets/images/notes.svg" alt="img" draggable="false"/></div>
                        <h2>NOTES</h2>
                        <span>All Subjects</span>
                    </li>
                    <li className="card">
                        <div className="img"><img src="assets/images/lectures2.svg" alt="img" draggable="false"/></div>
                        <h2>LECTURES</h2>
                        <span>Lectures(audio,visuals)</span>
                    </li>
                    <li className="card">
                        <div className="img"><img src="assets/images/que paper.jpg" alt="img" draggable="false"/></div>
                        <h2>QUESTION PAPERS</h2>
                        <span>SE,MTT,ET,PYQ's</span>
                    </li>
                    <li className="card">
                        <div className="img"><img src="assets/images/passlog.svg" alt="img" draggable="false"/></div>
                        <h2>PASSLOG</h2>
                        <span>100% Guarenteed Data to Pass</span>
                    </li>
                </ul>
                <i id="right" className="fa-solid fa-angle-right"></i>
            </div>

            <div className="explore">
                <button><span>Explore All</span></button>
            </div>

        </section >

    );
};

export default Keys;