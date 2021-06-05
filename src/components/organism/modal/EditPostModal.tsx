import { memo, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { API, graphqlOperation } from "aws-amplify";
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
import { NormalButton } from "../../atom/button/NormalButton";
import { Post } from "../../../types/post/NewPots";
import { updatePost } from "../../../graphql/mutations";
import { useDispatch } from "react-redux";
import { editPosts } from "../../../features/post/newPostSlice";

type Prop = {
  isOpen: boolean;
  onClose: () => void;
  post: Post;
};
type InputValue = {
  title: string;
  content: string;
};

export const EditPostModal: React.VFC<Prop> = memo((props) => {
  const { isOpen, onClose, post } = props;
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(postChangeSchema),
  });

  useEffect(() => {
    setValue("title", post?.title);
    setValue("content", post?.content);
  }, []);

  const onSubmitEditPost = async (data: InputValue) => {
    setIsLoading(true)
    console.log(data)
    const input = {
      id: post?.id,
      title: data.title,
      content: data.content,
    };
    try {
      const res = await API.graphql(graphqlOperation(updatePost, { input }));
      dispatch(editPosts(input));
      setValue("title", "");
      setValue("content", "");
      console.log(res)
      console.log(input)
      setIsLoading(false)
      onClose();
    } catch (error) {
      console.log(error);
      alert("エラーが発生しました");
      setIsLoading(false)
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit(onSubmitEditPost)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center">投稿を編集</ModalHeader>
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
                text="更新する"
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

const REQUIRE = "必須入力項目です";
const VIOLATION_NAME_COUNT = "タイトルは２0文字以下で入力してください";
const VIOLATION_PROFILE_COUNT = "本文は350文字以下で入力してください";

const postChangeSchema = yup.object().shape({
  title: yup.string().required(REQUIRE).max(20, VIOLATION_NAME_COUNT),
  content: yup.string().required(REQUIRE).max(250, VIOLATION_PROFILE_COUNT),
});
