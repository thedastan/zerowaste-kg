import React from "react";
import { FaTelegramPlane, FaYoutube, FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoTiktok } from "react-icons/io5";
import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import MapWith2GIS from "./MapWith2GIS"; // Импорт компонента карты

import logo from "@/assets/img/contact-logo.png";
import {
  EMAIL_ADDRESS,
  EMAIL_ADDRESS_LINK,
  FACEBOOK_LINK,
  INSTAGRAM_LINK,
  LOCATION,
  LOCATION_LINK,
  PHONE_NUMBER,
  TELEGRAM_LINK,
  TIKTOK_LINK,
  YOUTUBE_LINK,
} from "@/constants/admin";

const nav_map = [
  { name: "Главная", path: "/#home" },
  { name: "О нас", path: "/#about" },
  { name: "Услуги", path: "/#services" },
  { name: "Преимущества", path: "/#advantages" },
];

const links = [
  { icon: <FaTelegramPlane />, link: TELEGRAM_LINK },
  { icon: <AiFillInstagram />, link: INSTAGRAM_LINK },
  { icon: <IoLogoTiktok />, link: TIKTOK_LINK },
  { icon: <FaFacebookF />, link: FACEBOOK_LINK },
];

const Map: React.FC = () => {
  return (
    <Box bg="#F5F5F5" py={10}>
      <Box className="container">
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          justifyContent="space-between"
        >
          <Box w={{ base: "100%", md: 400 }} h={320}>
            <MapWith2GIS />
          </Box>

          <Flex
            w={{ base: "100%", md: 790 }}
            flexDirection="column"
            justifyContent="space-between"
            p={{ base: "50px 0", md: "10px 0" }}
          >
            <Flex
              flexDirection={{ base: "column", md: "row" }}
              justifyContent="space-between"
            >
              <Flex flexDirection={{ base: "row", md: "column" }}>
                <Box>
                  <Image width={118} height={68} src={logo} alt="Контакт-логотип" />
                  <Text
                    mt={4}
                    w={192}
                    color="#979797"
                    fontSize={14}
                    fontWeight={400}
                  >
                    Экологичные решения для вашего бизнеса и дома
                  </Text>
                </Box>
                <Box mt={{ base: 4, md: 10 }}>
                  <Text color="#979797" fontSize={14} fontWeight={400}>
                    без выходных
                  </Text>
                  <Text fontSize={16} fontWeight={400}>
                    с 9:00 до 18:00
                  </Text>
                </Box>
              </Flex>
              <Flex
                flexDirection="column"
                gap={3}
                mt={{ base: 6, md: 0 }}
                alignItems={{ base: "flex-start", md: "flex-end" }}
              >
                <Link href={`tel:${PHONE_NUMBER}`} target="_blank">
                  <Text fontSize={{ base: 30, md: 52 }} fontWeight={600}>
                    {PHONE_NUMBER}
                  </Text>
                </Link>
                <Link href={EMAIL_ADDRESS_LINK} target="_blank">
                  <Text
                    color="#979797"
                    fontSize={{ base: 24, md: 32 }}
                    fontWeight={600}
                  >
                    {EMAIL_ADDRESS}
                  </Text>
                </Link>
                <Link href={LOCATION_LINK} target="_blank">
                  <Text
                    borderBottom={{ base: "none", md: "solid 1px #979797" }}
                    color="#979797"
                    fontSize={{ base: 16, md: 16 }}
                    fontWeight={400}
                  >
                    {LOCATION}
                  </Text>
                </Link>
              </Flex>
            </Flex>

            <Flex justifyContent="space-between" alignItems="center" mt={6}>
              <Flex gap={2}>
                {links.map((el, index) => (
                  <Link key={index} href={el.link} target="_blank">
                    <Flex
                      borderRadius={50}
                      bg="#EBEBEB"
                      p={3}
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Text color="#191919B2" fontSize={20}>
                        {el.icon}
                      </Text>
                    </Flex>
                  </Link>
                ))}
              </Flex>
              <Flex gap={4}>
                {nav_map.map((el, index) => (
                  <Link key={index} href={el.path}>
                    <Text fontSize={16} fontWeight={400}>
                      {el.name}
                    </Text>
                  </Link>
                ))}
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default Map;
