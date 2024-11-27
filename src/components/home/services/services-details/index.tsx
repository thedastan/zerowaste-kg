"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { useServicesData } from "../data";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Image from "next/image";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Card from "./card";

const ServicesDetails = () => {
	const { id } = useParams();
	const { services_data } = useServicesData();
	const sliderRef = useRef<Slider | null>(null);
	const sliderRef2 = useRef<Slider | null>(null);

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		appendDots: (dots: any) => (
			<Box>
				<ul
					style={{
						margin: 0,
						padding: 0,
						listStyle: "none",
						display: "flex",
						justifyContent: "center",
						gap: "0px",
					}}>
					{dots}
				</ul>
			</Box>
		),
		customPaging: (i: number) => (
			<Box
				w={{ base: "10px", md: "10px" }}
				h={{ base: "10px", md: "10px" }}
				borderRadius="full"
				bg="gray"
				transition="background-color 0.3s ease"
				mt={2}
				ml={1}
				onClick={() => sliderRef.current?.slickGoTo(i)} // Manually go to the slide
			/>
		),
	};

	const finds = services_data.find((el) => el.id === +id);

	if (!finds) {
		return <Text>Сервис не найден</Text>; // Early return after hooks are defined
	}

	return (
		<Box>
			<Box position="relative" bg="#ECF0F4" w="100%" h="100%">
				{/* Первая наклонная линия */}
				<Box
					position="absolute"
					top="0"
					bottom="0"
					left="25%"
					width="100px"
					bg="linear-gradient(135deg, transparent, rgba(255, 255, 255, 0.7) 10%, transparent)"
					zIndex="1"
					filter="blur(20px)"
					transform="skewX(-40deg)"
				/>

				{/* Вторая наклонная линия */}
				<Box
					position="absolute"
					top="0"
					bottom="0"
					right="35%"
					width="100px"
					bg="linear-gradient(-135deg, transparent, rgba(255, 255, 255, 0.7) 10%, transparent)"
					zIndex="1"
					filter="blur(20px)"
					transform="skewX(-40deg)"
				/>

				{/* Содержимое */}
				<Box
					display={{ base: "none", md: "flex" }}
					flexDirection="column"
					className="container"
					position="relative"
					zIndex="2">
					<Box mb={6}>
						<Text
							data-aos="fade-up"
							py={6}
							pt={28}
							textAlign="center"
							fontSize={{ base: 30, md: 52 }}
							fontWeight="600">
							{finds.title}
						</Text>

						<Box py={4} pb={{ base: 20, md: 4 }}>
							<Slider ref={sliderRef} {...settings}>
								{finds.image.map((el, index) => (
									<Box
										key={index}
										w="100%"
										h={{ base: "230px", md: "454px" }}
										overflow="hidden"
										borderRadius={14}>
										<Image
											data-aos="zoom-out-up"
											style={{
												width: "100%",
												height: "100%",
												objectFit: "cover",
											}}
											src={el.img}
											alt="img"
										/>
									</Box>
								))}
							</Slider>
							<Flex
								justifyContent="center"
								alignItems="center"
								position="relative"
								flexDirection="row-reverse"
								gap={60}
								mt={-1}>
								<Button
									onClick={() => sliderRef.current?.slickNext()}
									color="black"
									bg="none"
									zIndex={1}>
									<BsArrowRight />
								</Button>
								<Button
									onClick={() => sliderRef.current?.slickPrev()}
									bg="none"
									color="black"
									zIndex={1}>
									<BsArrowLeft />
								</Button>
							</Flex>
						</Box>
					</Box>
				</Box>

				<Box
					display={{ base: "flex", md: "none" }}
					flexDirection="column"
					position="relative"
					zIndex="2">
					<Box mb={6}>
						<Text
							py={6}
							pt={28}
							textAlign="center"
							fontSize={{ base: 30, md: 52 }}
							fontWeight="600">
							{finds.title}
						</Text>

						<Box py={4} pb={{ base: 20, md: 4 }}>
							<Slider ref={sliderRef2} {...settings}>
								{finds.image.map((el, index) => (
									<Box
										key={index}
										w="100%"
										h={{ base: "230px", md: "454px" }}
										overflow="hidden"
										borderRadius={0}>
										<Image
											style={{
												width: "100%",
												height: "100%",
												objectFit: "cover",
											}}
											src={el.img}
											alt="img"
										/>
									</Box>
								))}
							</Slider>
							<Flex
								justifyContent="center"
								alignItems="center"
								position="relative"
								flexDirection="row-reverse"
								gap={60}
								mt={-1}>
								<Button
									onClick={() => sliderRef2.current?.slickNext()}
									color="black"
									bg="none"
									zIndex={1}>
									<BsArrowRight />
								</Button>
								<Button
									onClick={() => sliderRef2.current?.slickPrev()}
									bg="none"
									color="black"
									zIndex={1}>
									<BsArrowLeft />
								</Button>
							</Flex>
						</Box>
					</Box>
				</Box>
			</Box>

			<Box
				className="container"
				style={{
					position: "relative",
				}}>
				<Flex
					flexDirection={{ base: "column-reverse", md: "row" }}
					py={10}
					gap={20}
					justifyContent="space-between">
					<Box data-aos="fade-right">
						<Card currentId={id} />
					</Box>
					<Box>
						{finds.text.map((textItem, index) => (
							<Box key={index} mb={4}>
								<Text data-aos="fade-left" data-aos-delay="300" fontSize={{ base: 24, md: 36 }} fontWeight="600" mb={2}>
									{textItem.bold}
								</Text>

								{textItem.description.map((descItem, descIndex) => (
									<Box key={descIndex} mb={4}>
										<Text data-aos="fade-left"  textIndent="1.5em"  data-aos-delay="400" color="#556172" fontSize={18} fontWeight="400" mb={2}>
											{descItem.desc}
										</Text>

										<Box>
											{descItem.lists?.map((listItem, listIndex) => (
												<Box data-aos="fade-left" data-aos-delay="500" key={listIndex} pl={4}>
													<Text color="#556172" fontSize={18} fontWeight="400">
														• {listItem.list}
													</Text>
												</Box>
											))}
										</Box>
									</Box>
								))}
							</Box>
						))}
					</Box>
					 
				</Flex>
			</Box>
		</Box>
	);
};

export default ServicesDetails;
