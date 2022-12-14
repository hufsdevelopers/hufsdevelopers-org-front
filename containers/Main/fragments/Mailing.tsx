import { Box, Container, Heading, Text } from '@chakra-ui/react';
import Twemoji from '@/libs/Twemoji';

export default function Mailing() {
  return (
    <Box as='section' w='100%'>
      <Container maxW='container.xl' py={10}>
        <Heading display='flex' fontSize='2xl' alignItems='center'>
          <Twemoji emoji='π§' width={28} height={28} />
          &nbsp;νλ λ©μΌλ§ μλΉμ€
        </Heading>
        <Text display='flex' mt={1.5} fontSize='0.9rem' alignItems='center'>
          μ€μ ν ν ν½μ λ§κ² λ§€μΌ λ©μΌμ λ³΄λ΄λλ¦½λλ€&nbsp;
          <Twemoji emoji='π' width={16} height={16} />
        </Text>
      </Container>
    </Box>
  );
}