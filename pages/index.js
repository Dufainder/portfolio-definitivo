import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'

import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
// import { BioSection, BioYear } from '../components/bio'
import Timeline from '../components/timeline/TimeLine'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import {  IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import fullstack from '../public/images/works/fullstack.png'
import java from '../public/images/works/java.png'
import Image from 'next/image'
import theme from '../lib/theme'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

console.log(theme, 'que llega en theme?')

const Home = () => (
  <Layout>
    <Container>
      <Box
        color={useColorModeValue('black', 'cyan')}
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello, I&apos;m a full-stack developer!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title" color={useColorModeValue('purple', 'fuchsia')}>
            Dufainder Bedoya 
          </Heading>
          <p style={{color:'gray'}}>Fullstack Developer especializado en el front-end</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow='hidden'
          >
            <ProfileImage
              src="/images/dufainder.jpeg"
              alt="Profile image"
              borderRadius='full'
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About me
        </Heading>
        <Paragraph style={{color:useColorModeValue('black', 'cyan')}}>
        I love the world of technology, I am passionate about solving programming problems and 
        innovating code. I like other fields like reading, exercising and making friends. 
        I am currently looking for a job where I can put my skills and knowledge into practice to 
        achieve great goals. I consider myself a lively, positive, cheerful and respectful person. 
        These qualities have always helped me to work in a team in an excellent way.{' '}
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Projects
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Timeline/>
        {/* <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1984</BioYear>
          Born in Osaka (大阪), Japan.
        </BioSection>
        <BioSection>
          <BioYear>2010</BioYear>
          Completed the Master&apos;s Program in the Graduate School of
          Information Science at Nara Institute of Science and Technology
          (奈良先端科学技術大学院大学情報科学研究科修士課程)
        </BioSection>
        <BioSection>
          <BioYear>2010</BioYear>
          Worked at Yahoo! Japan (ヤフー株式会社入社)
        </BioSection>
        <BioSection>
          <BioYear>2012 to present</BioYear>
          Works as a freelance
        </BioSection> */}
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art, Music, Exercising,{' '}
          <Link href="https://500px.com/p/craftzdog" target="_blank">
            Photography
          </Link>
          .  
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Contact and learn
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/Dufainder" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @Dufainder
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/dufainder-bedoya/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin/>}
              >
                @Dufainder Bedoya
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.instagram.com/dufainder" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @dufainder
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem  cursor="none"
            thumbnail={fullstack}
          >
            Fullstack Developer
          </GridItem>
          <GridItem cursor="none"        
            thumbnail={java}
          >
            Javascript Developer
          </GridItem>
        </SimpleGrid>

        <Box align="center" my={4}>
          <NextLink href="/posts" scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Certificaciones.
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
