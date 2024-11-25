import img from "@/assets/img/ZERO WASTE.png";
import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import Map from "./map";
import { MOTION_WEB_LINK, WHATSAPP_LINK } from "@/constants/admin";
import Link from "next/link";
import { RiWhatsappFill } from "react-icons/ri";

const Footer = () => {
  return (
    <>
      <Map />

      {/* WhatsApp Link Button */}
      <Link href={WHATSAPP_LINK} target="_blank">
        <Text
          zIndex={1}
          boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
          position="fixed"
          bottom={{ lg: "60px", base: "5px" }}
          right={{ lg: "65px", base: "5px" }}
          bg="white"
          borderRadius="50%"
          color="#1FBF35"
          fontSize="40px"
          p={4}
          animation="pulse 1.5s infinite"
          _before={{
            content: `""`,
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            bg: "rgba(31, 191, 53, 0.3)",
            zIndex: -1,
            animation: "pulse-scale 1.5s infinite",
          }}
        >
          <RiWhatsappFill />
        </Text>
      </Link>

      {/* Global Styles for Animations */}
      <style jsx global>{`
        @keyframes pulse-scale {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.8;
          }
          100% {
            transform: translate(-50%, -50%) scale(1.5);
            opacity: 0;
          }
        }
        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>

      {/* Footer Content */}
      <Box bg="#28282A">
        <Box className="container">
          {/* Logo Section */}
          <Box w="100%" h={{ base: "75px", md: "170px" }} overflow="hidden" pt={9}>
            <Image data-aos="fade-up" src={img} alt="Zero Waste Logo" />
          </Box>
        </Box>

        {/* Divider Line */}
        <Box w="100%" h="1px" bg="#afafaf48" />

        <Box className="container">
          {/* Footer Text */}
          <Flex
            gap={2}
            textAlign="center"
            flexDirection={{ base: "column", md: "row" }}
            justifyContent="space-between"
            py={4}
            color="#afafaf48"
          >
            <Text fontSize={14}>© 2014-2024 «Zero Waste». Все права защищены</Text>
            <Link href={MOTION_WEB_LINK} target="_blank">
              <Text fontSize={14}>Разработано в Motion Web IT Studio</Text>
            </Link>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
