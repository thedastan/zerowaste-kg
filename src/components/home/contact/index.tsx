"use client";
import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface IFormTelegram {
  name: string;
  number: number | string;
}

const Contact = () => {
  const { register, handleSubmit, reset } = useForm<IFormTelegram>();
  const [phone, setPhone] = useState("");

  const TOKEN = process.env.NEXT_PUBLIC_TG_TOKEN;
  const CHAT_ID = process.env.NEXT_PUBLIC_TG_CHAT_ID;

  const messageModel = (data: IFormTelegram) => {
    let messageTG = `Name: <b>${data.name}</b>\n`;
    messageTG += `Number: <b>${data.number}</b>\n`;
    return messageTG;
  };

  const onSubmit: SubmitHandler<IFormTelegram> = async (data) => {
    try {
      await axios.post(
        `https://api.telegram.org/bot${TOKEN}/sendMessage`,
        {
          chat_id: CHAT_ID,
          parse_mode: "html",
          text: messageModel(data),
        }
      );
      reset();
      toast.success("Заявка успешно отправлена!", {
        position: "top-right",
        autoClose: 3000,
      });
    } catch (err) {
      toast.error("Ошибка при отправке сообщения!", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <Box id="contact" pb={20}>
      <ToastContainer />
      <Box
        className="container1"
        w="100%"
        maxW="1300px"
        margin="0 auto"
        p={{ base: "0", md: "0 20px" }}
      >
        <Flex
          bg="#F5F5F5"
          borderRadius={{ base: 0, md: 17 }}
          py={{ base: 10, md: 20 }}
          justifyContent="center"
          gap={6}
          flexDirection={{ base: "column", md: "row" }}
          alignItems="center"
          w="100%"
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Flex
              flexDirection={{ base: "column", md: "row" }}
              gap={4}
              w="100%"
              alignItems="center"
            >
              {/* Name Input */}
              <Flex
                justifyContent="center"
                flexDirection="column"
                alignItems="start"
                gap={1}
              >
                <Text
                  color="#646464"
                  mt={-2}
                  ml={4}
                  fontSize={16}
                  fontWeight={400}
                  minWidth="100px"
                >
                  Имя
                </Text>
                <Input
                  {...register("name", { required: true })}
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

              {/* Phone Input */}
              <Flex
                w="100%"
                justifyContent="center"
                flexDirection="column"
                alignItems="start"
                gap={1}
              >
                <Text
                  color="#646464"
                  ml={4}
                  fontSize={16}
                  fontWeight={400}
                  minWidth="100px"
                >
                  Номер
                </Text>
                <PhoneInput
                  defaultCountry="kg"
                  className="phone-input"
                  {...register("number", { required: true })}
                  value={phone}
                  onChange={(phone) => setPhone(phone)}
                />
              </Flex>

              {/* Submit Button */}
              <Button
                type="submit"
                mt={{ base: -2, md: 3 }}
                w={330}
                h="56px"
                borderRadius={32}
              >
                Оставить заявку
              </Button>
            </Flex>
          </form>
        </Flex>
      </Box>
    </Box>
  );
};

export default Contact;
