import { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import Icon from "@chakra-ui/icon";
import { ScaleFade } from "@chakra-ui/transition";
import { Flex, HStack, Text, VStack } from "@chakra-ui/layout";

import { SNSPop } from "../../organism/pop/SNSPop";
import { CreateThankMutation } from "../../../API";
import { useAppSelector } from "../../../app/hooks";
import { selectUser } from "../../../features/user/userSlice";
import { createThank, deleteThank } from "../../../graphql/mutations";
import { Post } from "../../../types/post/NewPots";
import { PostStatusButton } from "../../atom/button/PostStatusButton";
import { CommentCount } from "../comment/CommentCount";
import { CommentIconText } from "../comment/CommentIconText";


type Prop = {
  post: Post;
  commentsCount: number;
  setCommentsCount: React.Dispatch<React.SetStateAction<number>>;
  setIsOpenComment: React.Dispatch<React.SetStateAction<boolean>>;
};

type CreateThank = {
  data: CreateThankMutation;
};

export const FinishPostCardFooter: React.VFC<Prop> = (props) => {
  const { post, setIsOpenComment, commentsCount, setCommentsCount } = props;

  const [isFetching, setIsFetching] = useState(false);
  const [isCurrentUserThank, setIsCurrentUserThank] = useState(false);
  const [thankId, setThankId] = useState<string | undefined>("");
  const [thankCount, setThankCount] = useState(0);
  const currentUser = useAppSelector(selectUser);

  const onClickCreateThank = async () => {
    if (isCurrentUserThank || isFetching) return;
    setIsFetching(true);

    const input = {
      correspondingUserId: post?.correspondingUser?.id,
      postId: post?.id,
      userId: currentUser?.id,
    };

    try {
      const res = (await API.graphql(
        graphqlOperation(createThank, { input })
      )) as CreateThank;
      setThankCount((pre) => pre + 1);
      setIsCurrentUserThank(true);
      setThankId(res.data.createThank?.id);
    } catch (error) {
      console.log(error);
      alert("エラーが発生しました");
    } finally {
      setIsFetching(false);
    }
  };

  const onClickCancelThank = async () => {
    if (!isCurrentUserThank || isFetching) return;
    setIsFetching(true);
    const input = {
      id: thankId,
    };

    try {
      await API.graphql(graphqlOperation(deleteThank, { input }));
      setIsCurrentUserThank(false);
      setThankCount((pre) => pre - 1);
    } catch (error) {
      console.log(error);
      alert("エラーが発生しました");
    } finally {
      setIsFetching(false);
    }
  };

  useEffect(() => {
    setCommentsCount(post?.comments?.items?.length ?? 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    //ログインしているユーザーがいいねしているかを確認。いいねしていれば返り値を格納する。
    const isThankPost = post?.Thanks?.items?.find(
      (item) => item?.userId === currentUser?.id
    );
    if (isThankPost) {
      setIsCurrentUserThank(true);
    }
    setThankId(isThankPost?.id);
    setThankCount(post?.Thanks?.items?.length ?? 0);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Flex borderTop="1px" borderColor="gray.200" p="1">
        <VStack w="33%" spacing="0">
          <HStack color="red.500" spacing="0">
            <Text fontWeight="semibold" fontSize="lg">
              {thankCount === 0 ? "" : thankCount}
            </Text>
            <Text>ありがとう</Text>
          </HStack>
        </VStack>
        <VStack w="33%" spacing="0">
          <CommentCount commentCount={commentsCount} />
        </VStack>
        <VStack w="33%" spacing="0">
          <HStack>
            <SNSPop post={post} />
          </HStack>
        </VStack>
      </Flex>
      <Flex borderTop="1px" borderColor="gray.200" p="1">
        <VStack
          color="gray.500"
          _hover={{ cursor: "pointer", opacity: "0.7" }}
          w="33%"
          spacing="0"
          onClick={isCurrentUserThank ? onClickCancelThank : onClickCreateThank}
        >
          {isCurrentUserThank ? (
            <ScaleFade initialScale={1.2} in={isCurrentUserThank}>
              <Icon as={AiFillHeart} fontSize="20px" color="red.500" />
            </ScaleFade>
          ) : (
            <Icon as={AiOutlineHeart} fontSize="20px" mt="4px" />
          )}
          <Text fontSize="xs" color={isCurrentUserThank ? "red.500" : ""}>
            ありがとう
          </Text>
        </VStack>
        <CommentIconText setIsOpenComment={setIsOpenComment} />
        <VStack w="33%" spacing="0">
          <HStack h="100%">
            <PostStatusButton text="完成" />
          </HStack>
        </VStack>
      </Flex>
    </>
  );
};
