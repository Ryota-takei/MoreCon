import React, { memo, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Textarea } from "@chakra-ui/textarea";
import { Input } from "@chakra-ui/input";
import { Storage, API, graphqlOperation } from "aws-amplify";
import { Image } from "@chakra-ui/image";
import { useDisclosure } from "@chakra-ui/hooks";
import { Box, Flex, HStack, Text, VStack } from "@chakra-ui/layout";

import {
  getCurrentUserInformation,
  selectUser,
} from "../../features/user/userSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { UseAdminCheck } from "../../hooks/auth/UseAdminCheck";
import { Form } from "../organism/layout/Form";
import { ImageTrimmingModal } from "../organism/modal/ImageTrimmingModal";
import { NormalButton } from "../atom/button/NormalButton";
import { updateUser } from "../../graphql/mutations";
import { UseGetUniqueStr } from "../../hooks/function/UseGetUniqueStr";
import { useGetImage } from "../../hooks/function/useGetImage";
import { useHistory } from "react-router";

type InputValue = {
  name: string;
  profile: string;
};

export const ProfilePage: React.VFC = memo(() => {
  const [uploadImage, setUploadImage] = useState<Blob | string | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const userInformation = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const history = useHistory()
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {getUniqueStr} = UseGetUniqueStr()
  
  //カスタムフック
  const {imageUrl} = useGetImage(userInformation)
  const { notAdminCheck } = UseAdminCheck();


  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(profileChangeSchema),
  });

  useEffect(() => {
    notAdminCheck();
    dispatch(getCurrentUserInformation());
  }, []);

  useEffect(() => {
    setValue("name", userInformation?.name);
    setValue("profile", userInformation?.profile);
  }, [userInformation]);

  const onChangeProfile = async (data: InputValue) => {
    let fileName;
    if (uploadImage && typeof uploadImage === "string") {
      fileName = uploadImage;
    } else if (uploadImage && typeof uploadImage !== "string") {
      try {
        fileName = getUniqueStr();
        await Storage.put(fileName, uploadImage);
      } catch (error) {
        console.log(error);
        alert("エラーが発生しました");
      }
    }
    const input = {
      id: userInformation?.id,
      image: fileName,
      name: data.name,
      profile: data.profile,
    };

    try {
      const res = await API.graphql(graphqlOperation(updateUser, { input }));
      console.log(res);
      history.push(`/user/${userInformation?.displayId}`)
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  console.log(userInformation);
  console.log(uploadImage, previewImage);
  console.log(imageUrl);

  return (
    <>
      <Form heading="プロフィール編集">
        <Box mt="2">
          <VStack
            _hover={{ opacity: "0.8", cursor: "pointer" }}
            onClick={onOpen}
          >
            {previewImage ? (
              <Image
                src={previewImage}
                alt="プロフィール画像"
                borderRadius="full"
                boxSize="120px"
              />
            ) : (
              <Image
                src={imageUrl}
                alt="プロフィール画像"
                borderRadius="full"
                boxSize="120px"
                mx="auto"
                border="1px"
                borderColor="gray.100"
              />
            )}
            <Text color="blue.300" fontWeight="bold">
              アイコンを変更
            </Text>
          </VStack>
        </Box>
        <form onSubmit={handleSubmit(onChangeProfile)}>
          <VStack spacing="8">
            <Box w="80%">
              <HStack alignItems="center">
                <Text fontSize="14px" color="gray.600" fontWeight="bold" mb="1">
                  表示名
                </Text>
                <Text fontSize="14px" color="red.500">
                  {errors.name?.message}
                </Text>
              </HStack>
              <Input
                borderColor="gray.400"
                borderRadius="10px"
                color="gray.700"
                _placeholder={{
                  fontSize: "14px",
                  color: "gray.400",
                }}
                bg="gray.100"
                {...register("name")}
              />
            </Box>
            <Box w="80%">
              <HStack>
                <Text fontSize="14px" color="gray.600" fontWeight="bold" mb="1">
                  自己紹介
                </Text>
                <Text fontSize="14px" color="red.500">
                  {errors.profile?.message}
                </Text>
              </HStack>
              <Textarea
                h="200px"
                borderColor="gray.400"
                borderRadius="10px"
                color="gray.700"
                bg="gray.100"
                resize="none"
                {...register("profile")}
              />
            </Box>
            <Flex w="80%" justifyContent="flex-end">
              <NormalButton
                hover={{ bg: "blue.300", color: "white" }}
                text="変更を保存"
                borderColor="blue.200"
                bg="white"
                color="blue.200"
                type="submit"
              />
            </Flex>
          </VStack>
        </form>
      </Form>
      <ImageTrimmingModal
        isOpen={isOpen}
        onClose={onClose}
        setImage={setPreviewImage}
        setUploadImage={setUploadImage}
      />
    </>
  );
});

const REQUIRE = "必須入力項目です";
const VIOLATION_NAME_COUNT = "名前は16文字以下で入力してください";
const VIOLATION_PROFILE_COUNT = "プロフィールは250文字以下で入力してください";

const profileChangeSchema = yup.object().shape({
  name: yup.string().required(REQUIRE).max(16, VIOLATION_NAME_COUNT),
  profile: yup.string().required(REQUIRE).max(250, VIOLATION_PROFILE_COUNT),
});
