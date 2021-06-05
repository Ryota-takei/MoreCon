import React, { memo } from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/modal";
import { Button } from "@chakra-ui/button";

type Prop = {
  isOpen: boolean;
  onClose: () => void;
  cancelRef: React.RefObject<HTMLButtonElement>;
  onClickDeletePost: () => Promise<void>;
};

export const Alert: React.VFC<Prop> = memo((props) => {
  
  return (
    <>
    <AlertDialog
      isOpen={props.isOpen}
      onClose={props.onClose}
      leastDestructiveRef={props.cancelRef}
    >
      <AlertDialogOverlay>
        <AlertDialogContent p="3">
          <AlertDialogBody fontWeight="bold" textAlign="center">
            本当に削除しますか？
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button size="sm" onClick={props.onClose}>
              キャンセル
            </Button>
            <Button
              colorScheme="blue"
              onClick={props.onClickDeletePost}
              ml={3}
              size="sm"
            >
              削除
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
    </>
  );
});
