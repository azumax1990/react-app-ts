import { FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Stack } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { User } from "../../../types/apis/user";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  user: User | null;
}

export const UserModal: VFC<Props> = memo((props) => {
  const { isOpen, onClose, user } = props;
  return (
    <Modal isOpen={isOpen} onClose={onClose} autoFocus={false}>
      <ModalOverlay>
        <ModalContent pb={6}>
          <ModalHeader>ユーザー詳細</ModalHeader>
          <ModalCloseButton />
          <ModalBody mx={4}>
            <Stack spacing={6}>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input value={user?.name}/>
              </FormControl>
              <FormControl>
                <FormLabel>Full Name</FormLabel>
                <Input value={user?.username}/>
              </FormControl>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input value={user?.email} />
              </FormControl>
              <FormControl>
                <FormLabel>Tel</FormLabel>
                <Input value={user?.phone} />
              </FormControl>
            </Stack>
          </ModalBody>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  )
});