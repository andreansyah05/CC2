// components/Carousel.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselComponent = () => { 
  return (
    <div className="  rounded-xl mx-auto mt-[190px]">
      <Carousel
        showArrows={true}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        transitionTime={500}

        swipeable={true}
        centerMode={true}
        centerSlidePercentage={30}
      >
        <div className="mx-auto">
          <img 
          className="h-[300px]"
          src="/ascot.png"   />
          
        </div>
        <div>
          <img 
          className="h-[300px]"
          src="baktimulia.png"  />
          
        </div>
        <div>
          <img 
          className="h-[300px]"
          src="ciputra.png"  />
          
        </div>
        <div>
          <img 
          className="h-[300px]"
          src="citadines.png"  />
          
        </div>
        <div>
          <img 
          className="h-[300px]"
          src="dreamtel.png"  />
          
        </div>
        <div>
          <img 
          className="h-[300px]"
          src="element.png"   />
          
        </div>
        
      </Carousel>
    </div>
  );
};

export default CarouselComponent;