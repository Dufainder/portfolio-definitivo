import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import vue from '../public/images/contents/diplomavue.png'
import henry from '../public/images/contents/diplomahenry.png'
import udea from '../public/images/contents/udea.png'
import linux from '../public/images/contents/linux.png'
import diseño from '../public/images/contents/diseño.png'
import ingles from '../public/images/contents/ingles.png'


const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Certificaciones
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
    
          <GridItem
             title="Certificacion Ingeniero de Telecomunicaiones"
             thumbnail={udea}
          />
          <GridItem
            title="Certificacion Full-Stack"
            thumbnail={henry}
          />
                  
          
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
        <GridItem
            title="Curso basico de Vue.js"
            thumbnail={vue}
          />
          <GridItem
            title="Use de Linux para desarrolladores"
            thumbnail={linux}
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.5}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Conceptos basicos de diseño para desarrolladores"
            thumbnail={diseño}
          />
          <GridItem
            title="Ingles practico"
            thumbnail={ingles}
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
