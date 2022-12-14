import { Container, Flex, Heading, Text } from '@chakra-ui/react';
import Twemoji from '@/libs/Twemoji';
import Link from '@/components/Link';

export default function Cover() {
  return (
    <Flex as='section' w='100%' py={24} layerStyle="cover">
      <Container maxW='container.xl'>
        <Heading>HUFS Developers</Heading>
        <Text display='flex' mt={1.5} fontSize='0.9rem' alignItems='center'>
          <Twemoji emoji='ποΈ' width={16} height={16} />
          &nbsp;νκ΅­μΈλ κ°λ°μλ₯Ό μν νλ‘μ νΈ μ μ₯μ
        </Text>
        <Text mt={6} fontSize='0.8rem' opacity='0.6'>
          by team&nbsp;
          <Link href='https://github.com/hufsdevelopers' isExternal={true} target='_blank'>
            hufsdevelopers.
          </Link>
        </Text>
      </Container>
    </Flex>
  );
}