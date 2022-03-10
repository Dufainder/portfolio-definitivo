import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  useColorModeValue,
  SimpleGrid,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="walknote">
    <Container>
      <Title>
        Api-Food <Badge>2021</Badge>
      </Title>
      <P style={{color:useColorModeValue('black', 'cyan')}}>
      In this application you will be able to see different food recipes, with their information, 
      it has functionalities such as filtering by type of dates, it also has a search engine that 
      brings more recipes from the external API Sponcoolar. Even without deployment
      </P>
      <List ml={4} my={4}>


      <ListItem>
          <Meta>Website</Meta>
          <Link href="https://pi-food-gamma.vercel.app/home">
          https://pi-food-gamma.vercel.app/home <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
       

        <ListItem>
          <Meta>Platform</Meta>
          <span style={{color:useColorModeValue('black', 'cyan')}}>Windows/linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span style={{color:useColorModeValue('black', 'cyan')}}>React.js, JavaScript, SQl_Postgress, Redux, Express, SQL, Node.js, CSS, HTML</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/Dufainder/PI-Food">
          Github<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

      </List>

      {/* <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          <Link href="http://renewal49.hateblo.jp/entry/20120710/1341925681">
            <Badge mr={2}>リニューアル式</Badge>
            強力すぎて紹介しそびれていた音楽好きのための神アプリ『walknote』
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Link href="http://www.appbank.net/2011/10/15/iphone-application/309349.php">
            <Badge mr={2}>appbank</Badge>
            walknote:
            CD屋の試聴機が、自分向けになって手元に到着。そんな曲探しアプリ。無料。
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Link href="http://www.danshihack.com/2012/07/18/junp/iphoneapp-walknote.html">
            <Badge mr={2}>男子ハック</Badge>
            [おすすめの音楽をレコメンド！ストリーミング再生してくれるiPhoneアプリ「walknote」が素敵。
          </Link>
          <ExternalLinkIcon mx="2px" />
        </ListItem>

        <ListItem>
          <Badge mr={2}>タブロイド</Badge>
          <Link href="http://www.tabroid.jp/app/multimedia/2013/05/app.walknote.html">
            「YOU、これ聴いちゃいなよ」自分好みの曲が勝手に集まる音楽プレーヤー『walknote』
          </Link>
          <ExternalLinkIcon mx="2px" />
        </ListItem>
      </UnorderedList> */}

      {/* <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/walknote_01.png" alt="walknote" />
        <WorkImage src="/images/works/walknote_02.png" alt="walknote" />
      </SimpleGrid> */}

      <WorkImage src="/images/works/api-food1.png" alt="walknote" />
      <WorkImage src="/images/works/api-food2.png" alt="walknote" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
