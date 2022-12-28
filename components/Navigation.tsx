import React from 'react';
import { Container, Box, Flex, Text } from '@chakra-ui/react';
import Link from '@/components/Link';

export default function Navigation() {
  return (
    <Box as="nav" position="fixed" w="100%" boxShadow="sm">
      <Container display="flex" maxW="container.xl" h={14} alignItems="center" justifyContent="space-between">
        <Link href="/">
          <Text as="h1" variant="navigation" fontWeight="black">
            HUFSDEVELOPERS
          </Text>
        </Link>
        <Flex gap={8}>
          <Link href="/recruit">
            <Text variant="navigation">리쿠르팅</Text>
          </Link>
          <Link href="/contact">
            <Text variant="navigation">문의하기</Text>
          </Link>
          <Link href="/login">
            <Text variant="navigation">로그인</Text>
          </Link>
        </Flex>
      </Container>
    </Box>
  );
}
