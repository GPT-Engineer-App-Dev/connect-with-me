import { Container, VStack, Box, Heading, Text, Image, SimpleGrid, Link, FormControl, FormLabel, Input, Textarea, Button, HStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Box as="nav" bg="gray.800" color="white" py={4}>
        <HStack spacing={8} justify="center">
          <Link href="#about" _hover={{ textDecoration: "none", color: "gray.400" }}>About Me</Link>
          <Link href="#projects" _hover={{ textDecoration: "none", color: "gray.400" }}>Projects</Link>
          <Link href="#blog" _hover={{ textDecoration: "none", color: "gray.400" }}>Blog</Link>
          <Link href="#contact" _hover={{ textDecoration: "none", color: "gray.400" }}>Contact</Link>
        </HStack>
      </Box>

      <Box as="section" id="hero" bg="gray.100" py={20} textAlign="center">
        <Heading as="h1" size="2xl" mb={4}>Welcome to My Personal Website</Heading>
        <Text fontSize="xl">Hi, I'm [Your Name], a passionate developer.</Text>
      </Box>

      <Box as="section" id="about" py={20} textAlign="center">
        <Heading as="h2" size="xl" mb={4}>About Me</Heading>
        <Image borderRadius="full" boxSize="150px" src="https://via.placeholder.com/150" alt="Profile Photo" mx="auto" mb={4} />
        <Text fontSize="lg" maxW="600px" mx="auto">I'm a software developer with a passion for creating amazing web applications. I love to learn new technologies and improve my skills.</Text>
      </Box>

      <Box as="section" id="projects" bg="gray.100" py={20} textAlign="center">
        <Heading as="h2" size="xl" mb={4}>Projects</Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} maxW="container.lg" mx="auto">
          <Box bg="white" p={6} boxShadow="md" borderRadius="md">
            <Heading as="h3" size="md" mb={2}>Project 1</Heading>
            <Text mb={4}>Description of project 1.</Text>
            <Link href="#" color="teal.500" isExternal>View Project</Link>
          </Box>
          <Box bg="white" p={6} boxShadow="md" borderRadius="md">
            <Heading as="h3" size="md" mb={2}>Project 2</Heading>
            <Text mb={4}>Description of project 2.</Text>
            <Link href="#" color="teal.500" isExternal>View Project</Link>
          </Box>
          <Box bg="white" p={6} boxShadow="md" borderRadius="md">
            <Heading as="h3" size="md" mb={2}>Project 3</Heading>
            <Text mb={4}>Description of project 3.</Text>
            <Link href="#" color="teal.500" isExternal>View Project</Link>
          </Box>
        </SimpleGrid>
      </Box>

      <Box as="section" id="blog" py={20} textAlign="center">
        <Heading as="h2" size="xl" mb={4}>Blog</Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} maxW="container.lg" mx="auto">
          <Box bg="white" p={6} boxShadow="md" borderRadius="md">
            <Heading as="h3" size="md" mb={2}>Blog Post 1</Heading>
            <Text mb={4}>Excerpt of blog post 1.</Text>
            <Link href="#" color="teal.500" isExternal>Read More</Link>
          </Box>
          <Box bg="white" p={6} boxShadow="md" borderRadius="md">
            <Heading as="h3" size="md" mb={2}>Blog Post 2</Heading>
            <Text mb={4}>Excerpt of blog post 2.</Text>
            <Link href="#" color="teal.500" isExternal>Read More</Link>
          </Box>
          <Box bg="white" p={6} boxShadow="md" borderRadius="md">
            <Heading as="h3" size="md" mb={2}>Blog Post 3</Heading>
            <Text mb={4}>Excerpt of blog post 3.</Text>
            <Link href="#" color="teal.500" isExternal>Read More</Link>
          </Box>
        </SimpleGrid>
      </Box>

      <Box as="section" id="contact" bg="gray.100" py={20} textAlign="center">
        <Heading as="h2" size="xl" mb={4}>Contact</Heading>
        <Box maxW="container.sm" mx="auto" bg="white" p={6} boxShadow="md" borderRadius="md">
          <FormControl id="name" mb={4}>
            <FormLabel>Your Name</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl id="email" mb={4}>
            <FormLabel>Your Email</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="message" mb={4}>
            <FormLabel>Your Message</FormLabel>
            <Textarea />
          </FormControl>
          <Button colorScheme="teal" size="lg">Send Message</Button>
        </Box>
      </Box>

      <Box as="footer" bg="gray.800" color="white" py={4} textAlign="center">
        <HStack spacing={4} justify="center" mb={4}>
          <Link href="#" isExternal><FaGithub size="24px" /></Link>
          <Link href="#" isExternal><FaLinkedin size="24px" /></Link>
          <Link href="#" isExternal><FaTwitter size="24px" /></Link>
        </HStack>
        <Text>&copy; {new Date().getFullYear()} [Your Name]. All rights reserved.</Text>
      </Box>
    </Container>
  );
};

export default Index;