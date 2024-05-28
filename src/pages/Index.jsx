import { Container, VStack, Box, Heading, Text, Image, SimpleGrid, Link, FormControl, FormLabel, Input, Textarea, Button } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.lg" p={4}>
      {/* Navigation Bar */}
      <Box as="nav" d="flex" justifyContent="space-between" alignItems="center" mb={8}>
        <Heading size="lg">My Personal Website</Heading>
        <Box>
          <Link href="#about" mx={2}>About Me</Link>
          <Link href="#projects" mx={2}>Projects</Link>
          <Link href="#blog" mx={2}>Blog</Link>
          <Link href="#contact" mx={2}>Contact</Link>
        </Box>
      </Box>

      {/* Hero Section */}
      <Box as="section" textAlign="center" py={20} bg="gray.100" mb={8}>
        <Heading size="2xl" mb={4}>Welcome to My Personal Website</Heading>
        <Text fontSize="xl">Hi, I'm [Your Name], a [Your Profession].</Text>
      </Box>

      {/* About Me Section */}
      <Box as="section" id="about" mb={8}>
        <Heading size="xl" mb={4}>About Me</Heading>
        <SimpleGrid columns={[1, null, 2]} spacing={10}>
          <Image src="path/to/your/photo.jpg" alt="Your Photo" borderRadius="full" boxSize="150px" />
          <Text fontSize="lg">[Your short bio goes here. Talk about your background, interests, and what you do.]</Text>
        </SimpleGrid>
      </Box>

      {/* Projects Section */}
      <Box as="section" id="projects" mb={8}>
        <Heading size="xl" mb={4}>Projects</Heading>
        <SimpleGrid columns={[1, null, 2, 3]} spacing={10}>
          {/* Repeat this Box for each project */}
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
            <Image src="path/to/project/image.jpg" alt="Project Image" mb={4} />
            <Heading size="md" mb={2}>Project Title</Heading>
            <Text>[Short description of the project.]</Text>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Blog Section */}
      <Box as="section" id="blog" mb={8}>
        <Heading size="xl" mb={4}>Blog</Heading>
        <VStack spacing={8}>
          {/* Repeat this Box for each blog post */}
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} w="100%">
            <Heading size="md" mb={2}>Blog Post Title</Heading>
            <Text>[Excerpt from the blog post...]</Text>
            <Link href="#" color="teal.500">Read more</Link>
          </Box>
        </VStack>
      </Box>

      {/* Contact Section */}
      <Box as="section" id="contact" mb={8}>
        <Heading size="xl" mb={4}>Contact</Heading>
        <form>
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
          <Button type="submit" colorScheme="teal">Send</Button>
        </form>
      </Box>

      {/* Footer */}
      <Box as="footer" textAlign="center" py={4} borderTopWidth="1px">
        <Text>&copy; {new Date().getFullYear()} My Personal Website. All rights reserved.</Text>
        <Box d="flex" justifyContent="center" mt={4}>
          <Link href="https://github.com" mx={2}><FaGithub size="24px" /></Link>
          <Link href="https://linkedin.com" mx={2}><FaLinkedin size="24px" /></Link>
          <Link href="https://twitter.com" mx={2}><FaTwitter size="24px" /></Link>
        </Box>
      </Box>
    </Container>
  );
};

export default Index;