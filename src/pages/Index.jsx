import { Container, VStack, Heading, Text, Box, Image, HStack, IconButton, Link } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const projects = [
  {
    title: "Custom Wooden Table",
    description: "A beautifully handcrafted wooden table made from reclaimed wood.",
    image: "https://images.unsplash.com/photo-1524098837898-6b1c101a85f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjB0YWJsZXxlbnwwfHx8fDE3MTY5NjQwMjN8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    title: "Rustic Bookshelf",
    description: "A rustic bookshelf with a vintage finish, perfect for any living room.",
    image: "https://images.unsplash.com/photo-1524401597352-ec4463663233?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxydXN0aWMlMjBib29rc2hlbGZ8ZW58MHx8fHwxNzE2OTY0MDI0fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    title: "Modern Kitchen Cabinets",
    description: "Sleek and modern kitchen cabinets designed for a contemporary home.",
    image: "https://images.unsplash.com/photo-1686023858216-4f54c853acf2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwY2FiaW5ldHN8ZW58MHx8fHwxNzE2OTY0MDI0fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Index = () => {
  return (
    <Container maxW="container.lg" py={10}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center">
          Carpenter Portfolio
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Welcome to my portfolio. Here you can find some of my best woodworking projects.
        </Text>
        <VStack spacing={8}>
          {projects.map((project, index) => (
            <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden" w="100%">
              <Image src={project.image} alt={project.title} />
              <Box p={6}>
                <Heading as="h3" size="lg" mb={2}>
                  {project.title}
                </Heading>
                <Text>{project.description}</Text>
              </Box>
            </Box>
          ))}
        </VStack>
        <HStack spacing={4} justify="center" mt={10}>
          <Link href="https://facebook.com" isExternal>
            <IconButton aria-label="Facebook" icon={<FaFacebook />} size="lg" />
          </Link>
          <Link href="https://instagram.com" isExternal>
            <IconButton aria-label="Instagram" icon={<FaInstagram />} size="lg" />
          </Link>
          <Link href="https://linkedin.com" isExternal>
            <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" />
          </Link>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
