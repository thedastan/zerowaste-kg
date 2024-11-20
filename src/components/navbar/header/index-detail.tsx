"use client";
import React, { useState } from "react";
import {
	Box,
	Button,
	Flex,
	IconButton,
	Link,
	Popover,
	PopoverTrigger,
	Select,
	SelectItem,
	Text,
} from "@chakra-ui/react";
import { IoChevronDown, IoClose, IoCloseOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdAccessTimeFilled } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

import Image from "next/image";

import logo from "@/assets/img/icon.png";

import { PHONE_NUMBER } from "@/constants/admin";
import { useServicesData } from "@/components/home/services/data";
import { useRouter } from "next/navigation";

const HeaderDetail = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggleMenu = () => setIsOpen(!isOpen);
	const { services_data } = useServicesData();
	const [selectedService, setSelectedService] = useState("");
	const router = useRouter();
	const handleChange = (event: any) => {
		setSelectedService(event.target.value);
	};

	const nav = [
		{
			name: "Главная",
			path: "#home",
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

	return (
		<Box position="fixed" zIndex={1000} w="100%" bg="#ECF0F4" py={4}>
			<div className="container">
				<Flex justify="space-between" align="center">
					<Flex w="148px">
          <Link href="/">
          <Image src={logo} alt="img" /></Link>
					</Flex>

					<IconButton
						display={{ base: "block", md: "none" }}
						aria-label="Toggle Navigation"
						variant="outline"
						color="black"
						borderColor="black"
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
						bg="#ECF0F4"
						w={{ base: "100%", md: "50%" }}
						top="0"
						left="0"
						zIndex={1}>
						<IconButton
							display={{ base: "block", md: "none" }}
							aria-label="Toggle Navigation"
							variant="outline"
							color="black"
							borderColor="black"
							border="none"
							left={0}
							onClick={toggleMenu}
							as={isOpen ? IoCloseOutline : RxHamburgerMenu}
						/>

						<Box
							display={{ base: "none", md: "flex" }}
							color="black"
							gap="30px"
							w="100%"
              
							border="none">
							{nav.map((el, index) => {
								if (el.name === "Услуги") {
									return (
										<Box key={index}>
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
										color="black"
										// w="100%"
										textDecor="none">
										{el.name}
									</Link>
								);
							})}
						</Box>

						<Box
							mt={4}
							py={4}
							w="100%"
							display={{ base: "flex", md: "none" }}
							flexDirection="column"
							gap={5}>
							{nav.map((el, index) => {
								if (el.name === "Услуги") {
									return (
										<Box key={index}>
											<select
												style={{
													background: "none",
													border: "solid 1px grey",
													padding: "10px",
													width: "100%",
													textAlign: "center",
													WebkitAnimation: "none",
													appearance: "none" ,
													MozAnimation: "none",
													backgroundImage: "none",
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
														Услуги <IoChevronDown />
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
										display="flex"
										justifyContent="center"
										color="black"
										w="100%"
										border="solid 1px grey"
										p={4}
										textAlign="center"
										textDecor="none">
										{el.name}
									</Link>
								);
							})}
						</Box>
					</Flex>

					<Box display={{ md: "flex", base: "none" }}>
						<Box>
							<Link href={`tel:${PHONE_NUMBER}`} target={"_blank"}>
								<Button
									color="whote"
									borderRadius={32}
									w={130}
									h="48px"
									bg="black"
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

export default HeaderDetail;
