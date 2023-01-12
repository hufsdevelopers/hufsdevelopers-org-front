import { Container, Flex, Heading, Text } from '@chakra-ui/react';
import Twemoji from '@/libs/Twemoji';
import Link from '@/components/Link';

export default function Cover() {
  return (
    <Flex as='section' w='100%' py={24} layerStyle="cover">
      <Container maxW='container.xl'>
        <Heading>HUFS Developers</Heading>
        <Text display='flex' mt={1.5} fontSize='0.9rem' alignItems='center'>
          <Twemoji emoji='🏛️' width={16} height={16} />
          &nbsp;한국외대 개발자를 위한 프로젝트 저장소
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