import { memo, useEffect, useState } from "react";
import { Box } from "@chakra-ui/layout";
import { GetUser } from "../../../types/user/user";
import { useAppSelector } from "../../../app/hooks";
import { Log, selectPageLog } from "../../../features/page/pageSlice";
import { API, graphqlOperation } from "aws-amplify";
import {
  listLikeSortByUser,
  listPostsSortedByContributor,
  listPostsSortedByCorrespondingUser,
} from "../../../graphql/queries";
import {
  ListLikeSortByUserQuery,
  ListPostsQueryVariables,
  ListPostsSortedByContributorQuery,
  ListPostsSortedByCorrespondingUserQuery,
} from "../../../API";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import { WantPost } from "../../../types/post/WantPost";
import { UserPageCard } from "../../organism/card/UserPageCard";
import { Loading } from "../../atom/Loading/Loading";

type Prop = {
  user: GetUser;
};

export const UserPagePostList: React.VFC<Prop> = memo((props) => {
  const { user } = props;
  const [posts, setPosts] = useState<WantPost[] | null>();
  const [isLoading, setIsLoading] = useState(false);
  const logStatus = useAppSelector(selectPageLog);

  const getPosts = async (logStatus: Log) => {
    setIsLoading(true);
    //マイページ上で選択した履歴次第で取得するpostを動的に変更
    try {
      if (logStatus === "post" && user) {
        const res = (await API.graphql(
          graphqlOperation(listPostsSortedByContributor, {
            contributorId: user?.id,
            sortDirection: "DESC",
            limit: 25,
            nextToken: null,
          } as ListPostsQueryVariables)
        )) as GraphQLResult<ListPostsSortedByContributorQuery>;
        setPosts(res.data?.listPostsSortedByContributor?.items);
      } else if (logStatus === "production" && user) {
        const res = (await API.graphql(
          graphqlOperation(listPostsSortedByCorrespondingUser, {
            correspondingUserId: user?.id,
            sortDirection: "DESC",
            limit: 25,
            nextToken: null,
          } as ListPostsQueryVariables)
        )) as GraphQLResult<ListPostsSortedByCorrespondingUserQuery>;
        setPosts(res.data?.listPostsSortedByCorrespondingUser?.items);
      } else if (logStatus === "want" && user) {
        const res = (await API.graphql(
          graphqlOperation(listLikeSortByUser, {
            userId: user?.id,
            limit: 25,
            nextToken: null,
          } as ListPostsQueryVariables)
        )) as GraphQLResult<ListLikeSortByUserQuery>;
        const wantPosts = res.data?.listLikeSortByUser?.items?.map(
          (item) => item?.post
        );
        setPosts(wantPosts);
      }
    } catch (error) {
      console.log(error);
      alert("エラーが発生しました");
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getPosts(logStatus);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [logStatus, user]);
  
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Box>
          {posts?.map((post) => (
            <UserPageCard post={post} key={post?.id} />
          ))}
        </Box>
      )}
    </>
  );
});
