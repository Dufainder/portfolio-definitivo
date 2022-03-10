import {
  Box,
  Container,
  Badge,
  Link,
  List,
  ListItem,
  useColorModeValue,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="The four painters">
    <Container>
      <Title>
        btc-project<Badge>2022</Badge>
      </Title>
      <P style={{color:useColorModeValue('black', 'cyan')}}>
      This project shows real information on the variation in the price of the most 
      important cryptocurrencies worldwide. It also shows detailed information on each currency,
      such as the best exchange offers, as well as a graph over time of price variations.
      </P>
      <List ml={4} my={4}>
      <ListItem>
          <Meta>Website</Meta>
          <Link href="https://crypto-project-vue2.netlify.app/">
          https://crypto-project-vue2.netlify.app<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem></ListItem>

        <ListItem>
          <Meta>Platform</Meta>
          <span style={{color:useColorModeValue('black', 'cyan')}}>Windows/linux</span>
        </ListItem>

        <ListItem>
          <Meta>Stack</Meta>
          <span style={{color:useColorModeValue('black', 'cyan')}}>Vue.js, Tailwind, HTML, CSS, Chart.js, APIs, Node.js</span>
        </ListItem>

        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/Dufainder/crypto-project">
          Github<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>



        {/* <ListItem>
          <Meta>Presentation</Meta>
          <Link href="https://speakerdeck.com/craftzdog/the-fun-deep-learning">
            The fun Deep Learning <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="https://archive.craftz.dog/blog.odoruinu.net/2015/12/23/the-four-painters-a-video-work-created-with-deep-learning/">
            The four painters: A Video Work Created with Deep Learning{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="https://archive.craftz.dog/blog.odoruinu.net/2015/12/19/created-movie-with-deep-learning/">
            Deep Learningを使って映像作品を作った
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      */}
      </List>

      {/* <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          <Link href="https://news.ycombinator.com/item?id=10782289">
            <Badge mr={2}>Hacker News</Badge>
            The Four Painters: A Video Work Created with Deep Learning
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Link href="https://gigazine.net/news/20151224-deep-learning-four-painters/">
            <Badge mr={2}>Gigazine</Badge>
            実写映像を人工知能「ディープラーニング」でゴッホや葛飾北斎っぽく変換した「the
            four painters」
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </UnorderedList>

      <Box>
        <iframe
          src="https://player.vimeo.com/video/146373709"
          width="100%"
          height="400"
          frameBorder="0"
          allowFullScreen
        />
      </Box> */}

      <WorkImage src="/images/works/btc1.png" alt="walknote" />
      <WorkImage src="/images/works/btc2.png" alt="walknote" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
