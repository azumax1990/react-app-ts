import { Button, Drawer, DrawerBody, DrawerContent, DrawerOverlay } from "@chakra-ui/react";
import { memo, VFC } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onClickHome: () => void;
  onClickUser: () => void;
  onClickSetting: () => void;
}

export const MenuDrawer: VFC<Props> = memo((props) => {
  const { isOpen, onClose, onClickHome, onClickUser, onClickSetting } = props;
  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      placement="left"
      size="xs"
    >
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody p={0} bg="gray.100">
            <Button w="100%" onClick={onClickHome}>TOP</Button>
            <Button w="100%" onClick={onClickUser}>ユーザー一覧</Button>
            <Button w="100%" onClick={onClickSetting}>設定</Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  )
});