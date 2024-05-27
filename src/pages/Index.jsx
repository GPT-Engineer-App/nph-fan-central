import { Container, VStack, Box, Image, Text, Heading, Flex, Link, SimpleGrid, FormControl, FormLabel, Input, Textarea, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaHome, FaInfoCircle, FaImages, FaNewspaper, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="md">NPH Fan Site</Heading>
        <Flex>
          <Link as={RouterLink} to="/" p={2} display="flex" alignItems="center">
            <FaHome />
            <Text ml={2}>Home</Text>
          </Link>
          <Link as={RouterLink} to="#biography" p={2} display="flex" alignItems="center">
            <FaInfoCircle />
            <Text ml={2}>Biography</Text>
          </Link>
          <Link as={RouterLink} to="#gallery" p={2} display="flex" alignItems="center">
            <FaImages />
            <Text ml={2}>Gallery</Text>
          </Link>
          <Link as={RouterLink} to="#news" p={2} display="flex" alignItems="center">
            <FaNewspaper />
            <Text ml={2}>News</Text>
          </Link>
          <Link as={RouterLink} to="#contact" p={2} display="flex" alignItems="center">
            <FaEnvelope />
            <Text ml={2}>Contact</Text>
          </Link>
        </Flex>
      </Flex>

      {/* Hero Section */}
      <Box as="section" bg="gray.100" p={10} textAlign="center">
        <Image src="/images/nph-hero.jpg" alt="Neil Patrick Harris" borderRadius="md" mb={4} />
        <Heading size="xl" mb={4}>Welcome to the Neil Patrick Harris Fan Site</Heading>
        <Text fontSize="lg">Your ultimate source for all things NPH!</Text>
      </Box>

      {/* Biography Section */}
      <Box as="section" id="biography" p={10} bg="white">
        <Heading size="lg" mb={4}>Biography</Heading>
        <Text fontSize="md">
          Neil Patrick Harris (born June 15, 1973) is an American actor, singer, writer, producer, and television host. He is known for his comedy roles on television and his dramatic and musical stage roles. Harris is known for playing the title character on Doogie Howser, M.D. (1989–1993), Barney Stinson on How I Met Your Mother (2005–2014, for which he was nominated for four Emmy Awards), and Count Olaf in A Series of Unfortunate Events (2017–2019).
        </Text>
      </Box>

      {/* Gallery Section */}
      <Box as="section" id="gallery" p={10} bg="gray.100">
        <Heading size="lg" mb={4}>Gallery</Heading>
        <SimpleGrid columns={[1, 2, 3]} spacing={10}>
          <Image src="/images/nph1.jpg" alt="NPH 1" borderRadius="md" />
          <Image src="/images/nph2.jpg" alt="NPH 2" borderRadius="md" />
          <Image src="/images/nph3.jpg" alt="NPH 3" borderRadius="md" />
        </SimpleGrid>
      </Box>

      {/* News Section */}
      <Box as="section" id="news" p={10} bg="white">
        <Heading size="lg" mb={4}>News</Heading>
        <VStack spacing={4} align="start">
          <Box>
            <Heading size="md">Latest News Title 1</Heading>
            <Text fontSize="sm">Date: 2023-10-01</Text>
            <Text fontSize="md">Summary of the latest news about NPH...</Text>
          </Box>
          <Box>
            <Heading size="md">Latest News Title 2</Heading>
            <Text fontSize="sm">Date: 2023-09-15</Text>
            <Text fontSize="md">Summary of another news about NPH...</Text>
          </Box>
        </VStack>
      </Box>

      {/* Contact Section */}
      <Box as="section" id="contact" p={10} bg="gray.100">
        <Heading size="lg" mb={4}>Contact</Heading>
        <FormControl id="name" mb={4}>
          <FormLabel>Name</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl id="email" mb={4}>
          <FormLabel>Email</FormLabel>
          <Input type="email" />
        </FormControl>
        <FormControl id="message" mb={4}>
          <FormLabel>Message</FormLabel>
          <Textarea />
        </FormControl>
        <Button colorScheme="blue">Submit</Button>
      </Box>
    </Container>
  );
};

export default Index;