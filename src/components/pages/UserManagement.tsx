import { memo,　useCallback,　useEffect,　VFC } from "react"
import { Center,  Spinner, useDisclosure, Wrap, WrapItem } from "@chakra-ui/react";

import { AllUsers } from "../../apis/getUsers";
import { useSelectUser } from "../../hooks/useSelectUser"; 
import { UserCard } from "../organisms/users/UserCard";
import { UserModal } from "../organisms/users/UserModal";

export const UserManagement: VFC = memo(() => {
  const { getUsers, loading, users } = AllUsers()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { onSelectUser, selectedUser } = useSelectUser()

  useEffect(() => getUsers(), [])

  const onClickOpen = useCallback((id: number) => {
    console.log(id)
    onSelectUser({ id, users, onOpen })
  }, [users, onOpen, onSelectUser]);

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
                id={user.id}
                imageUrl="https://source.unsplash.com/random"
                userName={user.username}
                fullName={user.name}
                onClick={onClickOpen}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserModal isOpen={isOpen} onClose={onClose} user={selectedUser}/>
    </>
  )
});