import { memo, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FormControl } from "@chakra-ui/form-control";
import { Flex, Text } from "@chakra-ui/layout";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import { Textarea } from "@chakra-ui/textarea";

import { NormalButton } from "../../atom/button/NormalButton";
import { Input } from "@chakra-ui/input";
import { Post } from "../../../../types/post/NewPots";
import { API, graphqlOperation } from "aws-amplify";
import { updatePost } from "../../../../graphql/mutations";
import { useAppDispatch } from "../../../../redux/app/hooks";
import { deletePosts } from "../../../../redux/slices/post/postSlice";
import { changePageState } from "../../../../redux/slices/page/pageSlice";

type Prop = {
  onClose: () => void;
  isOpen: boolean;
  post: Post;
};

type Data = {
  url: string;
  content: string;
  title: string;
};

export const FinishPostModal: React.VFC<Prop> = memo((props) => {
  const { onClose, isOpen, post } = props;
  const dispatch = useAppDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(postFinishSchema),
  });

  const checkKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.key === "Enter" && e.preventDefault();
  };

  const submitFinishPost = async (data: Data) => {
    setIsLoading(true);
    const input = {
      id: post?.id,
      type: "finish",
      url: data.url,
      correspondingUserMessage: data.content,
      correspondingUserTitle: data.title,
    };

    try {
      await API.graphql(graphqlOperation(updatePost, { input }));
      if (post) {
        dispatch(deletePosts(post.id));
      }
      setIsLoading(false);
      dispatch(changePageState("finish"));
      onClose();
    } catch (error) {
      console.log(error);
      alert("エラーが発生しました");
      setIsLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form
        onSubmit={handleSubmit(submitFinishPost)}
        onKeyDown={(e) => checkKeyDown}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center" mt="4">
            完成したサービスについて書いてみよう
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <Text fontSize="14px" color="red.500">
                {errors.title?.message}
              </Text>
              <Input
                placeholder="サービスにタイトルをつけよう*"
                borderRadius="10px"
                color="gray.700"
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
                resize="none"
                placeholder="このサービスについてコメントがあれば書いてみよう"
                {...register("content")}
              />
            </FormControl>
            <FormControl mt="4">
              <Text fontSize="14px" color="red.500">
                {errors.url?.message}
              </Text>
              <Input
                placeholder="URLを記載しよう*(例）https://www.morecon.net"
                borderRadius="10px"
                color="gray.700"
                {...register("url")}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Flex w="100%" justifyContent="center">
              <NormalButton
                hover={{ bg: "blue.500", color: "white" }}
                text="完成"
                w={{ base: "90%", md: "80%" }}
                borderColor="blue.200"
                bg="blue.300"
                color="white"
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
const VIOLATION_CONTENT_COUNT = "本文は350文字以下で入力してください";
const VIOLATION_TITLE_COUNT = "タイトルは40文字以下で入力してください";

const postFinishSchema = yup.object().shape({
  url: yup.string().required(REQUIRE),
  title: yup.string().max(40, VIOLATION_TITLE_COUNT).required(REQUIRE),
  content: yup.string().max(350, VIOLATION_CONTENT_COUNT),
});
