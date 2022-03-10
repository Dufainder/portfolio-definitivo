import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import {useColorModeValue} from '@chakra-ui/react'

import suggestions from '../public/images/works/suggestions.png'
import apifood from '../public/images/works/Api-Food.png'
import btcproject from '../public/images/works/btc-project.png'
import wheatherweb from '../public/images/works/weatherweb.png'


const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="inkdrop" title="Henry Network" thumbnail={suggestions}>
          A social network was created exclusively for the soyHenry community, in it you can create 
          publications, find friends, chat, and create experiences.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="walknote"
            title="API-FOOD"
            thumbnail={apifood}
            style={{color:useColorModeValue('black', 'cyan')}}
          >
            In this application you will be able to see different food recipes, with their information.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="fourpainters"
            title="btc-project"
            thumbnail={btcproject}
            style={{color:useColorModeValue('black', 'cyan')}}
          >
           This project shows real information on the variation 
           in the price of the most important cryptocurrencies worldwide. 
           It also shows detailed information on each currency,
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="menkiki" thumbnail={wheatherweb} title="Wather-web" style={{color:useColorModeValue('black', 'cyan')}}>
          This web-app allows you to search for cities and see their temperature in real time.
           It also shows detailed information on the weather status of each city.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
{/* 
      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem
            id="modetokyo"
            thumbnail={thumbModeTokyo}
            title="mode.tokyo"
          >
            The mode magazine for understanding to personally enjoy Japan
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="styly" thumbnail={thumbStyly} title="Styly">
            A VR Creative tools for fashion brands
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="pichu2" thumbnail={thumbPichu2} title="Pichu*Pichu">
            Twitter client app for iPhone Safari
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
            id="freedbtagger"
            thumbnail={thumbFreeDBTagger}
            title="freeDBTagger"
          >
            Automatic audio file tagging tool using FreeDB for Windows
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem id="amembo" thumbnail={thumbAmembo} title="Amembo">
            P2P private file sharing tool with MSN Messenger integration for
            Windows
          </WorkGridItem>
        </Section>
      </SimpleGrid> */}
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
