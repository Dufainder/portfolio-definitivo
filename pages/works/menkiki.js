import {
  Box,
  Container,
  Badge,
  Link,
  List,
  ListItem,
  useColorModeValue,
  SimpleGrid,
  UnorderedList,
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Menkiki (麺利き)">
    <Container>
      <Title>
        Wheather-Webb<Badge>2021</Badge>
      </Title>
      <P style={{color:useColorModeValue('black', 'cyan')}}>
      This web-app allows you to search for cities and see their temperature in real time. 
      It also shows detailed information on the weather status of each city.
      </P>
      <List ml={4} my={4}>

      <ListItem>
          <Meta>Website</Meta>
          <Link href="https://weather-web-seven.vercel.app/">
          https://weather-web-seven.vercel.app/<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
       
        <ListItem>
          <Meta>Platform</Meta>
          <span style={{color:useColorModeValue('black', 'cyan')}}>Windows/Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span style={{color:useColorModeValue('black', 'cyan')}}>React, Javascript, Node.js, HTML, CSS, Styled-components, APIs</span>
        </ListItem>

        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/Dufainder/Weather-Web">
          Github<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

      </List>

        <WorkImage src="/images/works/wheater1.png" alt="menkiki" />
        <WorkImage src="/images/works/wheater2.png" alt="menkiki" />
      
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
