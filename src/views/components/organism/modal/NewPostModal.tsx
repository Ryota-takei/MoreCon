import { memo, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  Input,
  Textarea,
  Flex,
  Text,
} from "@chakra-ui/react";

import { selectUser } from "../../../../redux/slices/user/userSlice";
import { NormalButton } from "../../atom/button/NormalButton";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { API, graphqlOperation } from "aws-amplify";
import { createPost } from "../../../../graphql/mutations";
import { changePostStatus } from "../../../../redux/slices/post/postSlice";
import { changePageState } from "../../../../redux/slices/page/pageSlice";

type Prop = {
  isOpen: boolean;
  onClose: () => void;
  setDisplayTitle: React.Dispatch<React.SetStateAction<string>>;
};

type InputValue = {
  title: string;
  content: string;
};

export const NewPostModal: React.VFC<Prop> = memo((props) => {
  const { onClose, isOpen, setDisplayTitle } = props;

  const [isLoading, setIsLoading] = useState(false);
  const userInformation = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(postChangeSchema),
  });

  const watchFields = watch(["title"]);
  const onCloseModal = () => {
    onClose();

    if (watchFields[0]) {
      setDisplayTitle(watchFields[0]);
    }
  };

  const checkKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.key === "Enter" && e.preventDefault();
  };

  const onSubmitPost = async (data: InputValue) => {
    setIsLoading(true);
    const input = {
      content: data.content,
      title: data.title,
      timestamp: Math.floor(Date.now() / 1000),
      contributorId: userInformation?.id,
      likeCount: 0,
      type: "new",
    };
    try {
      await API.graphql(graphqlOperation(createPost, { input }));
      setValue("title", "");
      setValue("content", "");
      setIsLoading(false);
      dispatch(changePostStatus(true));
      dispatch(changePageState("newPosts"));
      onClose();
      setDisplayTitle("");
    } catch (error) {
      console.log(error);
      alert("??????????????????????????????");
      setIsLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onCloseModal}>
      <form
        onSubmit={handleSubmit(onSubmitPost)}
        onKeyDown={(e) => checkKeyDown}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center">???????????????</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <Text fontSize="14px" color="red.500">
                {errors.title?.message}
              </Text>
              <Input
                placeholder="????????????"
                borderRadius="10px"
                color="gray.700"
                bg="gray.100"
                {...register("title")}
              />
            </FormControl>

            <FormControl mt={4}>
              <Text fontSize="14px" color="red.500">
                {errors.content?.message}
              </Text>
              <Textarea
                h="200px"
                borderColor="gray.400"
                borderRadius="10px"
                color="gray.700"
                bg="gray.100"
                resize="none"
                placeholder="????????????????????????????????????????????????"
                {...register("content")}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Flex w="100%" justifyContent="center">
              <NormalButton
                hover={{ bg: "blue.300", color: "white" }}
                text="??????"
                w={{ base: "90%", md: "80%" }}
                borderColor="blue.200"
                bg="white"
                color="blue.200"
                type="submit"
                isLoading={isLoading}
              />
            </Flex>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  );
});

const REQUIRE = "????????????????????????";
const VIOLATION_NAME_COUNT = "???????????????30???????????????????????????????????????";
const VIOLATION_PROFILE_COUNT = "?????????400???????????????????????????????????????";

const postChangeSchema = yup.object().shape({
  title: yup.string().required(REQUIRE).max(30, VIOLATION_NAME_COUNT),
  content: yup.string().required(REQUIRE).max(400, VIOLATION_PROFILE_COUNT),
});
