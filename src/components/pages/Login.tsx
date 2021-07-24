import { Box, Divider, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import { ChangeEvent, memo, useState, VFC } from "react"
import { PrimaryButton } from "../atoms/button/PrimaryButton";

import { useAuth } from "../../apis/useAuth";

export const Login: VFC = memo(() => {

  const [userId, setUsersId] = useState('');
  const { login, loading } = useAuth();

  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => setUsersId(e.target.value);
  const onclickLogin = () => login(userId)



  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={8} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center" >ユーザー管理アプリ</Heading>
        <Divider my={4} />
        <Stack spacing={6} py={4} px={4}>
          <Input placeholder="ユーザーid" value={userId} onChange={onChangeUserId}/>
          <PrimaryButton onClick={onclickLogin} disabled={userId === ''} loading={loading}>ログイン</PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  )
});