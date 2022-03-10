import React, { useState, useRef, useEffect } from 'react';
//CarouselButton, CarouselButtonDot, CarouselButtons, SectionDivider,Section, 
import {
  useColorModeValue,
} from '@chakra-ui/react'
import { 
  CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, 
  CarouselItemTitle, CarouselMobileScrollNode, 
   } from './TimeLineStyles';


const TimeLineData = [
  { year: 2017, text: 'Empiezo a trabajar como electricista y sigo mis estudios en ingenieria', },
  { year: 2018, text: 'Aprendí mucha computacion y matematicas en la UdeA', },
  { year: 2019, text: 'sixth semester where I have seen more physical mathematics and algorithms'},
  { year: 2020, text: 'The pandemic starts and I leave the U to be a FullStack developer', },
  { year: 2021, text: 'I continue my studies as a programmer I enter soyHenry And I feel prepared to work', },
  { year: 2022, text: 'Soy certificado como Full-stack Dveloper por soyHnery', },
];

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: 'smooth' });
  }

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));
      
      scroll(carouselRef.current, scrollLeft);
    }
  }

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);

      setActiveItem(index);
    }
  }

  // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    }

    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <>
        
        <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
            <>
                {TimeLineData.map((item,i)=>(
                         
                         <CarouselMobileScrollNode key={i} final={i === TOTAL_CAROUSEL_COUNT - 1 } >

                             <CarouselItem
                               index={i}
                               id={`carousel_items-${i}`}   
                                active={activeItem}
                                onClick={(e) => handleClick(e,i)}
                             >
                               <CarouselItemTitle style={{color:useColorModeValue('black','')}}>
                                 {item.year}
                                 <CarouselItemImg
                    width="208"
                    height="6"
                    viewBox="0 0 208 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z"
                      fill="url(#paint0_linear)"
                      fillOpacity="0.33"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="-4.30412e-10"
                        y1="0.5"
                        x2="208"
                        y2="0.500295"
                        gradientUnits="userSpaceOnUse">
                        <stop stopColor="white" />
                        <stop
                          offset="0.79478"
                          stopColor="white"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </CarouselItemImg>
              </CarouselItemTitle>
           <CarouselItemText style={{color:useColorModeValue('black','cyan')}}>{item.text}</CarouselItemText>
        </CarouselItem>
    </CarouselMobileScrollNode>

                ))}
            </>

      
        </CarouselContainer>
        
        {/* <CarouselButtons>
        {TimeLineData.map((item, index) => (
          <CarouselButton 
            key={index}
            index={index}
            active={activeItem}
            onClick={(e) => handleClick(e, index)}
            type="button"
          >
            <CarouselButtonDot active={activeItem} />
          </CarouselButton>
        ))}
      </CarouselButtons>
    */}
     
       
    </>
  );
};

export default Timeline;
