import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/sea-green';
function Slider() {
  return (
    <Splide
      options={ {
        rewind: true,
        width:'100%',
        gap:'20%',
        height:'500px',
        perPage:4,
        type   : 'loop',
        focus:'center'
      } }
      aria-label="My Favorite Images"
    >
      <SplideSlide>
        <img src="https://via.placeholder.com/350x500" width="400px" alt="Image 6"/>
      </SplideSlide>
      <SplideSlide>
        <img src="https://via.placeholder.com/350x500" width="400px" alt="Image 5"/>
      </SplideSlide>
      <SplideSlide>
        <img src="https://via.placeholder.com/350x500" width="400px" alt="Image 4"/>
      </SplideSlide>
      <SplideSlide>
        <img src="https://via.placeholder.com/350x500" width="400px" alt="Image 6"/>
      </SplideSlide>
      <SplideSlide>
        <img src="https://via.placeholder.com/350x500" width="400px" alt="Image 5"/>
      </SplideSlide>
      <SplideSlide>
        <img src="https://via.placeholder.com/350x500" width="400px" alt="Image 4"/>
      </SplideSlide>
    </Splide>
  );
}
export default Slider