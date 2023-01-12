import { Box, Container, Heading, Text } from '@chakra-ui/react';
import Twemoji from '@/libs/Twemoji';

export default function Mailing() {
  return (
    <Box as='section' w='100%'>
      <Container maxW='container.xl' py={10}>
        <Heading display='flex' fontSize='2xl' alignItems='center'>
          <Twemoji emoji='📧' width={28} height={28} />
          &nbsp;훕디 메일링 서비스
        </Heading>
        <Text display='flex' mt={1.5} fontSize='0.9rem' alignItems='center'>
          설정한 토픽에 맞게 매일 메일을 보내드립니다&nbsp;
          <Twemoji emoji='😊' width={16} height={16} />
        </Text>
      </Container>
    </Box>
  );
}