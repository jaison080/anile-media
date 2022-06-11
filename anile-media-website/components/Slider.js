import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/sea-green';
function Slider() {
  return (
    <Splide
      options={ {
        rewind: true,
        gap:'21rem',
        width:'100%',
        height:'300px',
        perPage:4,
        type   : 'loop',
        focus:'center'
      } }
      aria-label="My Favorite Images"
    >
      <SplideSlide>
        <img src="https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/vectors/term-bg-1-666de2d941529c25aa511dc18d727160.jpg" alt="Image 1"/>
      </SplideSlide>
      <SplideSlide>
        <img src="https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/vectors/term-bg-1-666de2d941529c25aa511dc18d727160.jpg" alt="Image 1"/>
      </SplideSlide>
      <SplideSlide>
        <img src="https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/vectors/term-bg-1-666de2d941529c25aa511dc18d727160.jpg" alt="Image 1"/>
      </SplideSlide>
      <SplideSlide>
        <img src="https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/vectors/term-bg-1-666de2d941529c25aa511dc18d727160.jpg" alt="Image 1"/>
      </SplideSlide>
      <SplideSlide>
        <img src="https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/vectors/term-bg-1-666de2d941529c25aa511dc18d727160.jpg" alt="Image 2"/>
      </SplideSlide>
      <SplideSlide>
        <img src="https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/vectors/term-bg-1-666de2d941529c25aa511dc18d727160.jpg" alt="Image 3"/>
      </SplideSlide>
    </Splide>
  );
}
export default Slider