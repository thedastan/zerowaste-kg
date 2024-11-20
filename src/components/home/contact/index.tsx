"use client";
import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const Contact = () => {
  const [phone, setPhone] = useState("");
  return (
    <Box  pb={20}>
      <Box className="container">
        <Flex
          bg="#F5F5F5"
          borderRadius={17}
          py={{ base: 10, md: 20 }}
          justifyContent="center"
          gap={6}
          flexDirection={{ base: "column", md: "row" }}
          alignItems="center"
        >
         
          <Flex justifyContent="center" flexDirection="column" alignItems="start" gap={1}>
            <Text color="#646464" mt={-2} ml={4} fontSize={16} fontWeight={400} minWidth="100px">
						Имя
            </Text>
            <Input
              fontSize={16}
              fontWeight={400}
              w={330}
              h="63px"
              padding="10px 20px"
              borderRadius={32}
              bg="rgb(221, 224, 224)"
              border="none"
              type="text"
              placeholder="Введите имя"
            />
          </Flex>

         
          <Flex justifyContent="center" flexDirection="column" alignItems="start" gap={1}>
            <Text color="#646464" ml={4} fontSize={16} fontWeight={400} minWidth="100px">
						Номер
            </Text>
            <PhoneInput
              defaultCountry="kg"
              className={"phone-input"}
               
              value={phone}
              onChange={(phone) => setPhone(phone)}
            />
          </Flex>

          
          <Button mt={{ base: -2, md: 4 }} w={330} h="56px" borderRadius={32}>
            Оставить заявку
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default Contact;
