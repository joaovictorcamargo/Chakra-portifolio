import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  SimpleGrid,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube.png'
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'

const Home = () => (
  <Container>
    <Box
    borderRadius="lg"
    bg="red"
    p={3}
    mb={6}
    align="center"
    >
      Hello, I'm a frontend developer based in Brasil!
    </Box>

    <Box
    display={{md: 'flex'}}
    >
      <Box
      flexGrow={1}
      >
        <Heading
        as="h2" 
        variant="page-title"
        >
          Joao Victor

        </Heading>
        <p>(Developer / Writer / Thinker )</p>

      </Box>

    </Box>
  </Container>
)

export default Home
