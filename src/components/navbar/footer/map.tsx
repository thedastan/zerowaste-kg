import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoTiktok } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

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
import Link from "next/link";
import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

 
const Map = () => {
	 
	const nav_map = [
		{
			name: "Главная",
			path: "/#home",
		},
		{
			name: "О нас",
			path: "/#about",
		},
		{
			name: "Услуги",
			path: "/#services",
		},
		{
			name: "Преимущества",
			path: "/#advantages",
		},
		 
	];

	const links = [
		{
			icon: <FaTelegramPlane />,
			link: TELEGRAM_LINK,
		},
		{
			icon: <AiFillInstagram />,
			link: INSTAGRAM_LINK,
		},
		{
			icon: <IoLogoTiktok />,
			link: TIKTOK_LINK,
		},
		 
		{
			icon: <FaFacebookF />,
			link: FACEBOOK_LINK,
		},
	];

	return (
		<Box id="map" bg="#F5F5F5" py={10}>
			<Box
       display={{ base: "flex", md: "none" }}
				border="solid 1px #EBEBEB"
				borderRadius={6}
				w={{ base: "100%", md: 400 }}
				h={320}>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.531639993039!2d74.59336307583916!3d42.88272880192142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7e1819d5fbd%3A0x1bf97658c91c4ede!2zMTA20LAsIDYw0LAg0YPQuy4g0KLQvtCz0L7Qu9C-0Log0JzQvtC70LTQviwg0JHQuNGI0LrQtdC6!5e0!3m2!1sru!2skg!4v1732020327708!5m2!1sru!2skg"
					width="100%"
					height="100%"
					loading="lazy"></iframe>
			</Box>
			<Box className="container">
				<Flex
					flexDirection={{ base: "column", md: "row" }}
					justifyContent="space-between">
					<Box
          display={{ base: "none", md: "flex" }}
						border="solid 1px #EBEBEB"
						borderRadius={6}
						w={{ base: "100%", md: 400 }}
						h={320}>
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.531639993039!2d74.59336307583916!3d42.88272880192142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7e1819d5fbd%3A0x1bf97658c91c4ede!2zMTA20LAsIDYw0LAg0YPQuy4g0KLQvtCz0L7Qu9C-0Log0JzQvtC70LTQviwg0JHQuNGI0LrQtdC6!5e0!3m2!1sru!2skg!4v1732020327708!5m2!1sru!2skg"
							width="100%"
							height="100%"
							loading="lazy"></iframe>
					</Box>
					<Flex	
						w={{ base: "100%", md: 790 }}
						p={{ base: "50px 0", md: "10px 0" }}
						flexDirection="column"
						justifyContent="space-between">
						<Flex
							flexDirection={{ base: "column", md: "row" }}
							justifyContent="space-between">
							<Flex
								justifyContent="space-between"
								flexDirection={{ base: "row", md: "column" }}>
								<Box>
									<Image width={118} height={68} src={logo} alt="img" />
									<Text
										mt={4}
										w={192}
										color="#979797"
										fontSize={14}
										fontWeight={400}>
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
							<Box
								display={{ base: "flex", md: "none" }}
								mt={6}
								w="100%"
								h="1px"
								bg="#b9b9b9"
							/>
							<Flex
								gap={3}
								justifyContent="space-between"
								flexDirection="column"
								p={{ base: "30px 0", md: "0px 0" }}>
								<Link href={`tel:${PHONE_NUMBER}`} target={"_blank"}>
									<Text data-aos="fade-left" data-aos-delay="200"
									 fontSize={{ base: 30, md: 52 }} fontWeight={600}>
										{PHONE_NUMBER}
									</Text>
								</Link>

								<Link href={EMAIL_ADDRESS_LINK} target={"_blank"}>
									<Text data-aos="fade-left" data-aos-delay="300"

										color="#979797"
										fontSize={{ base: 24, md: 32 }}
										fontWeight={600}>
										{EMAIL_ADDRESS}
									</Text>
								</Link>

								<Link href={LOCATION_LINK} target={"_blank"}>
									<Text data-aos="fade-left" data-aos-delay="400"
										borderBottom={{ base: "none", md: "solid 1px #979797" }}
										color="#979797"
										fontSize={{ base: 16, md: 16 }}
										fontWeight={400}>
										{LOCATION}
									</Text>
								</Link>
							</Flex>
						</Flex>

						<Box
							display={{ base: "flex", md: "flex" }}
							w="100%"
							h="1px"
							bg="#b9b9b9"
						/>

						<Flex
						data-aos="fade-left" data-aos-delay="500"
							flexDirection={{ base: "column-reverse", md: "row" }}
							alignItems={{ base: "start", md: "center" }}
							justifyContent="space-between">
							<Flex alignItems="center" justifyContent="center" gap={2}>
								{links.map((el, index) => (
									<Link key={index} href={el.link}>
										<Flex
											 
											borderRadius={50}
											gap={4}
											bg="#EBEBEB"
											p={3}
											w="100%"
											alignItems="center"
											justifyContent="center">
											<Text color="#191919B2" fontSize={20} fontWeight={400}>
												{el.icon}
											</Text>
										</Flex>
									</Link>
								))}
							</Flex>
							<Flex
								gap={4}
								flexWrap="wrap"
								p={{ base: "20px 0", md: "0px 0" }}
								w={{ base: "189px", md: "470px" }}
								justifyContent={{ base: "start", md: "space-between" }}>
								{nav_map.map((el, index) => (
									 <Link key={index} href={el.path}>
									 <Flex  >
										<Text fontSize={16} fontWeight={400}>
											{el.name}
										</Text>
									</Flex>
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
