import { Center, Spinner, Wrap, WrapItem } from "@chakra-ui/react";
import { memo,　useEffect,　VFC } from "react"
import { AllUsers } from "../../apis/getUsers";
import { UserCard } from "../organisms/users/UserCard";

export const UserManagement: VFC = memo(() => {
  const { getUsers, loading, users } = AllUsers()
  useEffect(() => getUsers(), [])

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner color="teal.200" />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {users.map((user) => (
            <WrapItem key={user.id} mx="auto">
              <UserCard
                imageUrl="https://source.unsplash.com/random"
                userName={user.username}
                fullName={user.name}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
    </>
  
  )
});