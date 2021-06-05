import { memo } from "react";
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

import { selectUser } from "../../../features/user/userSlice";
import { NormalButton } from "../../atom/button/NormalButton";
import { useAppSelector } from "../../../app/hooks";
import { API, graphqlOperation } from "aws-amplify";
import { createPost } from "../../../graphql/mutations";

type Prop = {
  isOpen: boolean;
  onClose: () => void;
  setDisplayTitle: React.Dispatch<React.SetStateAction<string>>;
};

type InputValue = {
  title: string
  content: string
}

export const NewPostModal: React.VFC<Prop> = memo((props) => {
  const { onClose, isOpen, setDisplayTitle } = props;
  const userInformation = useAppSelector(selectUser);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(postChangeSchema),
  });
  const watchFields = watch(["title"]);

  const onCloseModal = () => {
    onClose();
    setDisplayTitle(watchFields[0]);
  };

  const checkKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.key === "Enter" && e.preventDefault();
  };

  const onSubmitPost = async(data:InputValue) => {
    const input = {
      content: data.content,
      title: data.title,
      timestamp:Math.floor(Date.now() / 1000),
      contributorId: userInformation?.id,
      type: "new"
    }
    try {
      const post = await  API.graphql(graphqlOperation(createPost,{input}))
      onClose()
    } catch(error) {
      console.log(error)
      alert("エラーが発生しました")
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
          <ModalHeader textAlign="center">投稿を作成</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <Text fontSize="14px" color="red.500">
                {errors.title?.message}
              </Text>
              <Input
                placeholder="タイトル"
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
                placeholder="欲しいサービスなどを書いてみよう"
                {...register("content")}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Flex w="100%" justifyContent="center">
              <NormalButton
                hover={{ bg: "blue.300", color: "white" }}
                text="投稿"
                w={{ base: "90%", md: "80%" }}
                borderColor="blue.200"
                bg="white"
                color="blue.200"
                type="submit"
              />
            </Flex>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  );
});

const REQUIRE = "必須入力項目です";
const VIOLATION_NAME_COUNT = "タイトルは２0文字以下で入力してください";
const VIOLATION_PROFILE_COUNT = "本文は350文字以下で入力してください";

const postChangeSchema = yup.object().shape({
  title: yup.string().required(REQUIRE).max(20, VIOLATION_NAME_COUNT),
  content: yup.string().required(REQUIRE).max(250, VIOLATION_PROFILE_COUNT),
});
