import React, { useContext, useState } from "react";
import { LoginContext } from "./context/context";
import { Form } from "react-bootstrap";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";

export default function SimpleCard() {
  const LogInContext = useContext(LoginContext);
  const [name, setName] = useState({ userName: "" });
  const [password, setPassword] = useState({ password: "" });
  const [ipAddress, setIpAddress] = useState({
    ip: "",
    port: 10105,
    apiKey: "",
  });

  const handleUser = (e) => {
    setName({ userName: e.target.value });
    console.log("userName: ", name.userName);
  };

  const handlePassword = (e) => {
    setPassword({ password: e.target.value });
    console.log("password: ", password.password);
  };
  const handleIpAddress = (e) => {
    setIpAddress((ipAddress) => ({
      ...ipAddress,
      ip: e.target.value,
    }));
    console.log("Ip Address : ", ipAddress);
  };
  const handlePort = (e) => {
    setIpAddress((ipAddress) => ({
      ...ipAddress,
      port: e.target.value,
    }));
    console.log("Ip Address : ", ipAddress);
  };
  const handleApiKey = (e) => {
    setIpAddress((ipAddress) => ({
      ...ipAddress,
      apiKey: e.target.value,
    }));
    console.log("Ip Address : ", ipAddress);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //not to refresh the page
    console.log(name.userName, "ok >>>>", password.password);
    LogInContext.loginFunction(
      name.userName,
      password.password,
      ipAddress.ip,
      ipAddress.port,
      ipAddress.apiKey
    );
  };
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Form onSubmit={handleSubmit}>
            <Stack spacing={5}>
              <FormControl id="email"  onChange={handleUser}>
                <FormLabel>User Name</FormLabel>
                <Input type="text" width="300px"/>
              </FormControl>
              <FormControl id="password" onChange={handlePassword}>
                <FormLabel>Password</FormLabel>
                <Input type="password" width="300px" />
              </FormControl>
              <FormControl id="ipAddress" onChange={handleIpAddress}>
                <FormLabel>IP Address</FormLabel>
                <Input type="text" width="300px"/>
              </FormControl>
              <FormControl id="port" onChange={handlePort}>
                <FormLabel>Port Number</FormLabel>
                <Input type="text" width="300px"/>
              </FormControl>
              <FormControl id="apiKey" onChange={handleApiKey}>
                <FormLabel>API Key</FormLabel>
                <Input type="text" width="300px"/>
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                </Stack>
                <Button
                  bg={"blue.400"}
                  color={"black"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  type="onSubmit"
                >
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Form>
        </Box>
      </Stack>
    </Flex>
  );
}
