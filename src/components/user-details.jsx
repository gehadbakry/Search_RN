import { useContext, useEffect } from "react";
import { getUserDetails } from "../actions";
import { usersContext } from "../context";
import { VStack, Box, Divider,Text, Heading, AspectRatio, Image, Center, HStack, Stack, NativeBaseProvider } from 'native-base';
export const UserDetails = ({ route }) => {
  const { id } = route.params;

  const resolve = async () => {
    dispatch(await getUserDetails(id));
  };
  useEffect(() => {
    if (id) resolve();

    return () => dispatch({ type: "CLEAR" });
  }, []);
  const { state, dispatch } = useContext(usersContext);
  const user = state.users.details;

  if (!user) return <Text>Loading ...</Text>;
  return (
     <Box >
    {/* //   <Box border="1" borderRadius="md" margin="5">
    //   <VStack space="4" divider={<Divider />}>
    //     <Box px="4" pt="4">
    //       <Text style={{fontWeight:"bold",fontSize:20,color:"blue"}}>{user.name} Details</Text>
    //     </Box>
    //     <Box px="4" pt="4">
    //       <Text style={{fontWeight:"bold",fontSize:20,color:"blue"}}>{user.email} Details</Text>
    //     </Box>
    //     <Box px="4" pt="4">
    //       <Text style={{fontWeight:"bold",fontSize:20,color:"blue"}}>{user.phone} Details</Text>
    //     </Box>
    //   </VStack>
    // </Box> */}

    <Box alignItems="center">
      <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
      borderColor: "coolGray.600",
      backgroundColor: "gray.700"
    }} _web={{
      shadow: 2,
      borderWidth: 0
    }} _light={{
      backgroundColor: "gray.50"
    }}>
        <Box>
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image  source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdqvWUSxgzqb_WvFRI-zgQfbjA-xRI8jAy6g&usqp=CAU"
          }} alt="image" />
          </AspectRatio>
          <Center bg="violet.500" _dark={{
          bg: "violet.400"
        }} _text={{
          color: "warmGray.50",
          fontWeight: "700",
          fontSize: "xs"
        }} position="absolute" bottom="0" px="3" py="1.5">
            PHOTOS
          </Center>
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
            {user.name}
            </Heading>
            <Text fontSize="xs" _light={{
            color: "violet.500"
          }} _dark={{
            color: "violet.400"
          }} fontWeight="500" ml="-0.5" mt="-1">
              Details.
            </Text>
          </Stack>
          <Text fontWeight="400">
          {user.email}
          </Text>
          <Text fontWeight="400">
          {user.phone}
          </Text>
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <Text color="coolGray.600" _dark={{
              color: "warmGray.200"
            }} fontWeight="400">
                6 mins ago
              </Text>
            </HStack>
          </HStack>
        </Stack>
      </Box>
    </Box>
    </Box>
    
  );
};
