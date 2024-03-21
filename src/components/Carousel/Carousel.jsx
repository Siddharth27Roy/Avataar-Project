import React, { useRef, useEffect } from 'react';
import './Carousel.css';

function Carousel({items}) {
    
    const galleryContainerRef = useRef(null);
    const galleryControlContainerRef = useRef(null);
    const galleryItemsRef = useRef([]);

    useEffect(() => {
        const galleryContainer = galleryContainerRef.current;
        const galleryControlContainer = galleryControlContainerRef.current;
        const galleryItems = galleryItemsRef.current;

        class Carousel {
            constructor(container, items, controls) {
                this.carouselContainer = container;
                this.carouselControls = controls;
                this.carouselArray = [...items];
            }

            updateGallery() {
                this.carouselArray.forEach((item) => {
                    item.classList.remove('gallery-item-1');
                    item.classList.remove('gallery-item-2');
                    item.classList.remove('gallery-item-3');
                    item.classList.remove('gallery-item-4');
                    item.classList.remove('gallery-item-5');
                });

                this.carouselArray.slice(0, 5).forEach((item, index) => {
                    item.classList.add(`gallery-item-${index + 1}`);
                });
            }

            setCurrentState(direction) {
                if (direction.className == 'gallery-controls-previous') {
                    this.carouselArray.unshift(this.carouselArray.pop());
                }
                else {
                    this.carouselArray.push(this.carouselArray.shift());
                }
                this.updateGallery();
            }

            setControls() {
                this.carouselControls.forEach((control) => {
                    galleryControlContainer.appendChild(document.createElement('button')).className = `gallery-controls-${control}`;
                });
            }

            useControls() {
                const triggers = [...galleryControlContainer.childNodes];
                triggers.forEach((control) => {
                    control.addEventListener('click', e => {
                        e.preventDefault();
                        this.setCurrentState(control);
                    });
                });
            }
        }

        const exampleCarousel = new Carousel(galleryContainer, galleryItems, ['previous', 'next']);

        exampleCarousel.setControls();
        exampleCarousel.useControls();
    }, []);

    return (
        <div className='box'>
            <div className='gallery'>
                <div className='gallery-container' ref={galleryContainerRef}>
                    {items.map((item, index) => (
                        <div key={index} className={`gallery-item gallery-item-${index + 1}`} ref={(element) => galleryItemsRef.current[index] = element}>
                            <img  src={item.Img} className='gallery-img' alt={item.Name}  />
                            <div className='gallery-text '>
                                <p>{item.Name}</p>
                            </div>
                        </div>
                        
                    ))}
                </div>
                <div className='gallery-controls' ref={galleryControlContainerRef}></div>
            </div>
        </div>
    );
}

export default Carousel;
