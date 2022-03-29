import React from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';



import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'


// Import Swiper styles
// import './styles.css'
import 'swiper/css';
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'



import vue from '../public/images/contents/diplomavue.png'
import henry from '../public/images/contents/diplomahenry.png'
import udea from '../public/images/contents/udea.png'
import linux from '../public/images/contents/linux.png'
import diseño from '../public/images/contents/diseño.png'
import ingles from '../public/images/contents/ingles.png'




SwiperCore.use([Navigation, Pagination, Scrollbar, A11y ]);


const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4} mt='20px'>
        Certifications
      </Heading>

      <Section delay={0.3}>
       
      <Swiper className='swiper-control'
      spaceBetween={50}
      slidesPerView={2}
      pagination={{dynamicBullets: true,}}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      breakpoints={{
        // when window width is >= 640px
        100: {
          slidesPerView: 1,
        },
        // when window width is >= 768px
        464: {
        
          slidesPerView: 2,
        },
        
        1024: {
            slidesPerView: 2,
          },


          
        }}>
      
      
        <SwiperSlide>
        <GridItem
               title="Ingeniería de Telecomunicaiones"
               thumbnail={udea}
            />
        </SwiperSlide>

      <SwiperSlide>
      <GridItem
              title="Full-Stack Web Developer"
              thumbnail={henry}
          />
      </SwiperSlide>


      <SwiperSlide>
          <GridItem
            title="Curso basico de Vue.js"
            thumbnail={vue}
          />
      </SwiperSlide>

      <SwiperSlide>
      <GridItem
            title="Use de Linux para desarrolladores"
            thumbnail={linux}
          />
      </SwiperSlide>

      <SwiperSlide>
      <GridItem
              title="Conceptos basicos de diseño para desarrolladores"
              thumbnail={diseño}
          />
      </SwiperSlide>


      <SwiperSlide>
      <GridItem
               title="Ingles practico"
               thumbnail={ingles}
          />
      </SwiperSlide>



      
      </Swiper>

   


      </Section>

     
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
