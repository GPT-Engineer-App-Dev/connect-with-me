import { Container, VStack, Box, Heading, Text, Image, SimpleGrid, GridItem, FormControl, FormLabel, Input, Textarea, Button, Link, Flex } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Box as="header" bg="gray.800" color="white" py={4}>
        <Flex justify="space-between" align="center" px={8}>
          <Heading as="h1" size="lg">My Personal Website</Heading>
          <Flex as="nav" gap={4}>
            <Link href="#about" _hover={{ textDecoration: "none", color: "gray.400" }}>About Me</Link>
            <Link href="#projects" _hover={{ textDecoration: "none", color: "gray.400" }}>Projects</Link>
            <Link href="#blog" _hover={{ textDecoration: "none", color: "gray.400" }}>Blog</Link>
            <Link href="#contact" _hover={{ textDecoration: "none", color: "gray.400" }}>Contact</Link>
          </Flex>
        </Flex>
      </Box>

      <Box as="section" id="hero" bg="gray.100" py={20} textAlign="center">
        <Heading as="h2" size="2xl" mb={4}>Welcome to My Personal Website</Heading>
        <Text fontSize="xl">I'm a web developer passionate about creating amazing web experiences.</Text>
      </Box>

      <Box as="section" id="about" py={20} px={8}>
        <Heading as="h2" size="xl" mb={8} textAlign="center">About Me</Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Box>
            <Image borderRadius="full" boxSize="200px" src="https://via.placeholder.com/200" alt="Profile Photo" mx="auto" />
          </Box>
          <Box>
            <Text fontSize="lg">
              Hi, I'm John Doe, a web developer with a passion for creating beautiful and functional websites. I have experience in various web technologies and love to learn and explore new trends in web development.
            </Text>
          </Box>
        </SimpleGrid>
      </Box>

      <Box as="section" id="projects" bg="gray.100" py={20} px={8}>
        <Heading as="h2" size="xl" mb={8} textAlign="center">Projects</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Box bg="white" p={6} borderRadius="md" boxShadow="md">
            <Heading as="h3" size="md" mb={4}>Project 1</Heading>
            <Text>A brief description of Project 1.</Text>
          </Box>
          <Box bg="white" p={6} borderRadius="md" boxShadow="md">
            <Heading as="h3" size="md" mb={4}>Project 2</Heading>
            <Text>A brief description of Project 2.</Text>
          </Box>
          <Box bg="white" p={6} borderRadius="md" boxShadow="md">
            <Heading as="h3" size="md" mb={4}>Project 3</Heading>
            <Text>A brief description of Project 3.</Text>
          </Box>
        </SimpleGrid>
      </Box>

      <Box as="section" id="blog" py={20} px={8}>
        <Heading as="h2" size="xl" mb={8} textAlign="center">Blog</Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Box bg="white" p={6} borderRadius="md" boxShadow="md">
            <Heading as="h3" size="md" mb={4}>Blog Post 1</Heading>
            <Text>A brief summary of Blog Post 1.</Text>
          </Box>
          <Box bg="white" p={6} borderRadius="md" boxShadow="md">
            <Heading as="h3" size="md" mb={4}>Blog Post 2</Heading>
            <Text>A brief summary of Blog Post 2.</Text>
          </Box>
        </SimpleGrid>
      </Box>

      <Box as="section" id="contact" bg="gray.100" py={20} px={8}>
        <Heading as="h2" size="xl" mb={8} textAlign="center">Contact</Heading>
        <Box maxW="md" mx="auto" bg="white" p={6} borderRadius="md" boxShadow="md">
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
          <Button colorScheme="blue" size="lg" width="full">Send Message</Button>
        </Box>
      </Box>

      <Box as="footer" bg="gray.800" color="white" py={4} textAlign="center">
        <Text>&copy; {new Date().getFullYear()} My Personal Website. All rights reserved.</Text>
      </Box>
    </Container>
  );
};

export default Index;