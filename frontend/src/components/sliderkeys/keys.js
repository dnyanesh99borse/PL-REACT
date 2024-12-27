import React, { useRef, useState, useEffect } from 'react';
import '../sliderkeys/keys.css';

const Keys = () => {
    {/*------logic for the cards of sliderkeys sections------------*/ }
    const cardData = [
        { imgSrc: require('../assets/notes.svg').default, title: "NOTES", subtitle: "All Subjects" },
        { imgSrc: require('../assets/assignments.svg').default, title: "TUTORIALS", subtitle: "Calculus, LADE, DM.." },
        { imgSrc: require('../assets/tutorials.svg').default, title: "ASSIGNMENTS", subtitle: "All Subjects" },
        { imgSrc: require('../assets/lectures2.svg').default, title: "LECTURES", subtitle: "Lectures (audio, visuals)" },
        { imgSrc: require('../assets/que paper.svg').default, title: "QUESTION PAPERS", subtitle: "SE, MTT, ET, PYQ's" },
        { imgSrc: require('../assets/passlog.svg').default, title: "PASSLOG", subtitle: "100% Guaranteed Data to Pass" }
    ];


    /*----------------logic for the keys sliding effect starts here-----------------*/
    const wrapperRef = useRef(null);
    const carouselRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [startScrollLeft, setStartScrollLeft] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(true);
    let timeoutId;

    useEffect(() => {
        const carousel = carouselRef.current;
        const firstCardWidth = carousel.querySelector('.card').offsetWidth;
        const cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

        // Duplicate cards for infinite scroll effect
        const carouselChildren = [...carousel.children];
        carouselChildren.slice(-cardPerView).reverse().forEach((card) => {
            carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
        });
        carouselChildren.slice(0, cardPerView).forEach((card) => {
            carousel.insertAdjacentHTML("beforeend", card.outerHTML);
        });

        // Set initial scroll position to avoid showing duplicated items on first view
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");

        // Event Listeners
        const handleMouseDown = (e) => {
            setIsDragging(false);
            carousel.classList.add("dragging");
            setStartX(e.pageX);
            setStartScrollLeft(carousel.scrollLeft);
        };

        const handleMouseMove = (e) => {
            if (!isDragging) return;
            carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
        };

        const handleMouseUp = () => {
            setIsDragging(false);
            carousel.classList.remove("dragging");
        };

        const handleScroll = () => {
            if (carousel.scrollLeft === 0) {
                carousel.classList.add("no-transition");
                carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
                carousel.classList.remove("no-transition");
            } else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
                carousel.classList.add("no-transition");
                carousel.scrollLeft = carousel.offsetWidth;
                carousel.classList.remove("no-transition");
            }
            clearTimeout(timeoutId);
            if (!wrapperRef.current.matches(":hover")) autoPlay();
        };

        const autoPlay = () => {
            if (window.innerWidth < 800 || !isAutoPlay) return;
            timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
        };

        autoPlay();

        // Event Listeners for dragging
        // carousel.addEventListener("mousedown", handleMouseDown);
        // carousel.addEventListener("mousemove", handleMouseMove);
        // document.addEventListener("mouseup", handleMouseUp);
        // carousel.addEventListener("scroll", handleScroll);
        // wrapperRef.current.addEventListener("mouseenter", () => clearTimeout(timeoutId));
        // wrapperRef.current.addEventListener("mouseleave", autoPlay);

        return () => {
            // Cleanup event listeners
            carousel.removeEventListener("mousedown", handleMouseDown);
            carousel.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
            carousel.removeEventListener("scroll", handleScroll);
        };
    }, [isDragging, isAutoPlay, startX, startScrollLeft]);

    const scrollCarousel = (direction) => {
        const firstCardWidth = carouselRef.current.querySelector('.card').offsetWidth;
        carouselRef.current.scrollLeft += direction === "left" ? -firstCardWidth : firstCardWidth;
    };

    return (
        
        < section className = "keys" >
        <div className="title">
            <h1>All The Keys <span>of your Success are here.</span></h1>
        </div>
        <div className="slider" id="keys" ref={wrapperRef}>
            <i id="left" className="fa-solid fa-angle-left" onClick={() => scrollCarousel("left")}></i>
            <ul className="carousel" ref={carouselRef}>
                {cardData.map((card, index) => (
                    <li className="card" key={index}>
                        <div className="img">
                            <img src={card.imgSrc} alt={card.title} draggable="false" />
                        </div>
                        <h2>{card.title}</h2>
                        <span>{card.subtitle}</span>
                    </li>
                ))}
            </ul>
            <i id="right" className="fa-solid fa-angle-right" onClick={() => scrollCarousel("right")}></i>
        </div>
        <div className="explore">
            <button><span>Explore All</span></button>
        </div>
    </section >

    
    )
};

export default Keys;