import { Container, Badge, Link, List, ListItem, useColorModeValue } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Inkdrop">
    <Container>
      <Title>
        Henry-Network<Badge>2022-</Badge>
      </Title>
      <P style={{color:useColorModeValue('black', 'cyan')}}>
      A social network was created exclusively for the soyHenry community, in it you can 
      create publications, find friends, chat, and create experiences that is an exclusive
      function where students share their experiences studying the different modules of the program.
      A small and complex social network.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://social-network-chi.vercel.app/">
          https://social-network-chi.vercel.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span style={{color:useColorModeValue('black', 'cyan')}}>Windows/Linux/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span style={{color:useColorModeValue('black', 'cyan')}}>React.js, Redux, JavaScript, Node.js, MongoDB, Express, Styled-components, Firebase, CSS, HTML</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/Agus-Sartorio/socialNetwork">
          Github<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/henry1.png" alt="henry-network" />
      <WorkImage src="/images/works/henry2.png" alt="henry-network" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
