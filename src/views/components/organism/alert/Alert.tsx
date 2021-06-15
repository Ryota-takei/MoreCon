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
  onClick: () => Promise<void> | void;
  buttonText: string;
  dialogBody: string;
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
            <AlertDialogBody fontWeight="bold" textAlign="center" mt="8">
              {props.dialogBody}
            </AlertDialogBody>

            <AlertDialogFooter mt="5">
              <Button size="sm" onClick={props.onClose}>
                キャンセル
              </Button>
              <Button
                bg="blue.300"
                onClick={props.onClick}
                ml={3}
                size="sm"
                color="white"
                px="5"
                _hover={{ bg: "blue.500" }}
              >
                {props.buttonText}
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
});
