import img from "@/assets/img/ZERO WASTE.png";
import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import Map from "./map";
import { WHATSAPP_LINK } from "@/constants/admin";
import Link from "next/link";
import { RiWhatsappFill } from "react-icons/ri";

 
const Footer = () => {
	 
	return (
		<>
			 <Map/>
			 <Link href={WHATSAPP_LINK} target={"_blank"}>
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
					p={4}>
					<RiWhatsappFill />
				</Text>
			</Link>
			<Box bg="#28282A">
				<Box className="container">
					<Box w="100%" h={{ base: "75px", md: "170px" }} overflow="hidden" pt={9}>
						<Image src={img} alt="img" />
					</Box>
				</Box>
				<Box w="100%" h="1px" bg="#afafaf48" />
				<Box className="container">
					<Flex gap={2} textAlign="center" 	flexDirection={{ base: "column", md: "row" }} justifyContent="space-between" py={4} color="#afafaf48">
						<Text>© 2023 «Zero Waste». Все права защищены</Text>
						<Text>Разработал Motion Web LLC</Text>
					</Flex>
				</Box>
			</Box>
		</>
	);
};

export default Footer;
