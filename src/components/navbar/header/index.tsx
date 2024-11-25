"use client";
import React, { useState } from "react";
import {
	Box,
	Button,
	Flex,
	IconButton,
	Link,
	MenuContent,
	MenuItem,
	MenuRoot,
	MenuTrigger,
	Popover,
	PopoverTrigger,
	Select,
	SelectItem,
	Text,
} from "@chakra-ui/react";

import Image from "next/image";

import logo from "@/assets/img/logo.png";

import { useServicesData } from "@/components/home/services/data";
import { useRouter } from "next/navigation";

import { FaTelegramPlane } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoTiktok } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

import {
	FACEBOOK_LINK,
	INSTAGRAM_LINK,
	PHONE_NUMBER,
	TELEGRAM_LINK,
	TIKTOK_LINK,
} from "@/constants/admin";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggleMenu = () => setIsOpen(!isOpen);
	const { services_data } = useServicesData();
	const [selectedService, setSelectedService] = useState("");
	const router = useRouter();

	const closeMenu = () => {
		setIsOpen(false);
	};

	const nav = [
		{
			name: "Главная",
			path: "/",
		},
		{
			name: "О нас",
			path: "#about",
		},
		{
			name: "Услуги",
			path: "/",
		},
		{
			name: "Преимущества",
			path: "#advantages",
		},
		{
			name: "Контакты",
			path: "#map",
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
		<Box
			position="fixed"
			zIndex={1000}
			w="100%"
			bg="#5252525b"
			backdropFilter="blur(25px)"
			py={4}>
			<div className="container">
				<Flex justify="space-between" align="center">
					<Flex w="148px">
						<Link href="/">
							<Image src={logo} alt="img" />
						</Link>
					</Flex>

					<IconButton
						display={{ base: "block", md: "none" }}
						aria-label="Toggle Navigation"
						variant="outline"
						// color="white"
						// borderColor="white"
						border="none"
						onClick={toggleMenu}
						className="burger-icon-button">
						<div className={`burger-icon ${isOpen ? "open" : ""}`}>
							<div className="bar bar-top"></div>
							<div className="bar bar-middle"></div>
							<div className="bar bar-bottom"></div>
						</div>
					</IconButton>

					<Flex
						justifyContent="center"
						alignItems="end"
						direction={{ base: "column", md: "row" }}
						display={{ base: isOpen ? "flex" : "none", md: "flex" }}
						gap={{ base: 4, md: 8 }}
						position={{ base: "absolute", md: "static" }}
						p={4}
						bg={{ base: "#d6d6d6", md: "none" }}
						w={{ base: "100%", md: "50%" }}
						transition="1s"
						top="70px"
						left="0"
						zIndex={1}>
						<Box
							display={{ base: "none", md: "flex" }}
							// color="white"
							gap="30px"
							w="100%"
							textAlign="center"
							border="none">
							{nav.map((el, index) => {
								if (el.name === "Услуги") {
									return (
										<Box color="white" key={index}>
											<select
												style={{
													background: "none",
													border: "none",
													width: "100px",
												}}
												value={selectedService}
												onChange={(event) => {
													const selectedId = event.target.value;
													setSelectedService(selectedId);
													if (selectedId) {
														router.push(`/${selectedId}`);
													}
												}}>
												{!selectedService && (
													<option value="" disabled>
														Услуги
													</option>
												)}
												{services_data.map((service) => (
													<option
														style={{ color: "black" }}
														key={service.id}
														value={service.id}>
														{service.title}
													</option>
												))}
											</select>
										</Box>
									);
								}

								return (
									<Link
										key={index}
										href={el.path}
										border="none"
										color={{ base: "black", md: "white" }}
										// w="100%"
										textDecor="none">
										{el.name}
									</Link>
								);
							})}
						</Box>

						<Flex
							justifyContent="center"
							align="center"
							textAlign="center"
							mt={4}
							py={4}
							w="100%"
							display={{ base: "flex", md: "none" }}
							flexDirection="column"
							gap={5}>
							<Flex
								flexDirection="column"
								justifyContent="center"
								alignItems="center"
								textAlign="center"
								gap={2}>
								{nav.slice(0, 2).map((el, index) => (
									<Link onClick={() => closeMenu()} key={index} href={el.path}>
										<Text  fontSize={14} fontWeight={400}>{el.name}</Text>
									</Link>
								))}
							 

								<MenuRoot>
									<MenuTrigger asChild>
										<Button bg="none" variant="outline"  fontSize={14} fontWeight={400} h="100%" border="none">
										Услуги
										</Button>
									</MenuTrigger>
									<MenuContent onClick={() => closeMenu()} display="flex" flexDirection="column" gap="10px" position="absolute" mt="180px" p={2}>
										{services_data.map((el, index) => (
											<MenuItem
												key={index}
												 
												onClick={() => router.push(`/${el.id}`)}
												value="new-txt">
												{el.title}
											</MenuItem>
										))}
									</MenuContent>
								</MenuRoot>

								{nav.slice(3, 6).map((el, index) => (
									<Link onClick={() => closeMenu()} key={index} href={el.path}>
										<Text  fontSize={14} fontWeight={400}>{el.name}</Text>
									</Link>
								))}
							</Flex>

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

							<Flex alignItems="center" justifyContent="center">
								<Link href={`tel:${PHONE_NUMBER}`} target={"_blank"}>
									<Button
										color="black"
										borderRadius={32}
										w="200px"
										h="48px"
										bg="white"
										fontSize={16}
										fontWeight={500}>
										Связаться
									</Button>
								</Link>
							</Flex>
						</Flex>
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
