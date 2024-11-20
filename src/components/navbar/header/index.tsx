import React, { useState } from "react";
import {
	Box,
	Button,
	Flex,
	IconButton,
	Link,
	Select,
	SelectItem,
	Text,
} from "@chakra-ui/react";
import { IoClose, IoCloseOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdAccessTimeFilled } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

import Image from "next/image";

import logo from "@/assets/img/logo.png";

import { PHONE_NUMBER } from "@/constants/admin";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggleMenu = () => setIsOpen(!isOpen);

	const nav = [
		{
			name: "Главная",
			path: "/",
		},
		{
			name: "О нас",
			path: "/",
		},
		{
			name: "Услуги",
			path: "/",
		},
		{
			name: "Преимущества",
			path: "/",
		},
		{
			name: "Контакты",
			path: "/",
		},
	];

	return (
		<Box position="fixed" zIndex={1000} w="100%" bg="#0E6B56" py={4}>
			<div className="container">
				<Flex
					// p={{ base: isOpen ? "0 " : "0 20px", md: "0 20px" }}
					justify="space-between"
					align="center">
					<Flex w="148px">
						<Image src={logo} alt="img" />
					</Flex>

					<IconButton
						display={{ base: "block", md: "none" }}
						aria-label="Toggle Navigation"
						variant="outline"
						color="white"
						borderColor="white"
						border="none"
						onClick={toggleMenu}
						as={isOpen ? IoClose : RxHamburgerMenu}
					/>

					<Flex
						justifyContent="center"
						alignItems="end"
						direction={{ base: "column", md: "row" }}
						display={{ base: isOpen ? "flex" : "none", md: "flex" }}
						gap={{ base: 4, md: 8 }}
						position={{ base: "absolute", md: "static" }}
						p={4}
						bg={{ md: "#0E6B56", base: "#EFEFEF" }}
						w={{ base: "100%", md: "50%" }}
						top="0"
						left="0"
						zIndex={1}>
						<IconButton
							display={{ base: "block", md: "none" }}
							aria-label="Toggle Navigation"
							variant="outline"
							color="black"
							borderColor="white"
							border="none"
							left={0}
							onClick={toggleMenu}
							as={isOpen ? IoCloseOutline : RxHamburgerMenu}
						/>
						<Box
							display={{ base: "none", md: "flex" }}
							color="white"
							gap="30px"
							border="none">
							{nav.map((el, index) => (
								<Link
									key={index}
									href={el.path}
									border="none"
									color="white"
									textDecor="none">
									{el.name}
								</Link>
							))}
						</Box>

						<Box
							mt={4}
							py={4}
							w="100%"
							display={{ base: "flex", md: "none" }}
							flexDirection="column"
							gap={5}>
							{nav.map((el, index) => (
								<Flex
									key={index}
									borderRadius={10}
									gap={4}
									bg="white"
									p={4}
									w="100%"
									alignItems="center"
									justifyContent="center">
									<Text fontSize={16} fontWeight={400}>
										{el.name}
									</Text>
								</Flex>
							))}
							 
							 
						 
						</Box>
					</Flex>

					<Box display={{ md: "flex", base: "none" }}>
						<Box>
							<Link href={`tel:${PHONE_NUMBER}`} target={"_blank"}>
								<Button
									color="black"
									borderRadius={32}
									w={130}
									h="48px"
									bg="white"
									fontSize={16}
									fontWeight={500}>
									Связаться
								</Button>
							</Link>
						</Box>
					</Box>
				</Flex>
			</div>
		</Box>
	);
};

export default Header;
