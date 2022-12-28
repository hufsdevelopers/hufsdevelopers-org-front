import Layout from '@/components/Layout';
import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react';

import Link from '@/components/Link';
import Twemoji from '@/libs/Twemoji';

export default function Home() {
  return (
    <Layout>
      <Flex as="section" w="100%" py={24} alignItems="center" bgColor="#FCFCFC">
        <Container maxW="container.xl">
          <Heading>HUFS Developers</Heading>
          <Text display="flex" mt={1.5} fontSize="0.9rem" alignItems="center">
            <Twemoji emoji="🏛️" width={16} height={16} />
            &nbsp;한국외대 개발자를 위한 프로젝트 저장소
          </Text>
          <Text mt={6} fontSize="0.8rem" opacity="0.6">
            by team{' '}
            <Link href="https://github.com/hufsdevelopers" isExternal={true} target="_blank">
              hufsdevelopers.
            </Link>
          </Text>
        </Container>
      </Flex>
      <Box as="section" w="100%">
        <Container maxW="container.xl" py={10}>
          <Heading display="flex" fontSize="2xl" alignItems="center">
            <Twemoji emoji="📧" width={28} height={28} />
            &nbsp;훕디 메일링 서비스
          </Heading>
          <Text display="flex" mt={1.5} fontSize="0.9rem" alignItems="center">
            설정한 토픽에 맞게 매일마다 메일을 보내드립니다&nbsp;
            <Twemoji emoji="😊" width={16} height={16} />
          </Text>
        </Container>
      </Box>
    </Layout>
  );
}
