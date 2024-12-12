"use client";
import { Box, Flex, Text } from "@chakra-ui/react";
import icon1 from "@/assets/img/icon1.png";
import icon2 from "@/assets/img/icon2.png";
import icon3 from "@/assets/img/icon3.png";

import sliderimg from "@/assets/img/img2.3.png";
import sliderimg1 from "@/assets/img/img3.3.png";
import sliderimg2 from "@/assets/img/img4.4.png";
import sliderimg3 from "@/assets/img/img5.3.png";

import Image from "next/image";

import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { useRef } from "react";

const Advantages = () => {
	const sliderRef = useRef<Slider | null>(null);

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
						gap: "10px",
					}}>
					{dots}
				</ul>
			</Box>
		),
		customPaging: () => (
			<Box
				w="10px"
				h="10px"
				borderRadius="full"
				bg="gray" // Цвет неактивной точки
				transition="background-color 0.3s ease"
				mt={{ base: 2, md: 4 }}
			/>
		),
	};

	const data = [
		{
			icon: icon1,
			title: "Опыт и профессионализм",
			desc: "Квалификацированные специалисты с зарубежным опытом гарантируют высокое количество к своим изделиям.",
		},
		{
			icon: icon2,
			title: "Собственные  технологии",
			desc: "Собственный цех и современные оборудования для сборки изделий обеспечивает скорость и качество.",
		},
		{
			icon: icon3,
			title: "Надёжные материалы",
			desc: "Используем только высококачественные материалы с гарантией до 30ти лет.",
		},
	];

	return (
		<Flex
			id="advantages"
			justifyContent="center"
			alignItems="center"
			py={20}
			color="white"
			// bg="#191919"
			bg="radial-gradient(circle at bottom left, #004737 30%, #191919 70%)">
			<div className="container">
				<Flex
					textAlign="center"
					flexDirection="column"
					justifyContent="center"
					alignItems="center">
					<Flex
						flexDirection="column"
						justifyContent="center"
						alignItems="center"
						w={{ base: "100%", md: 950 }}>
						<Text fontSize={{ base: 30, md: 52 }} fontWeight={600}>
							Преимущества
						</Text>
						<Text
							color="#ffffff85"
							textAlign="center"
							w={{ base: "100%", md: "516px" }}
							py={3}
							fontSize={18}
							fontWeight={400}>
							Мы объединяем опыт квалифицированных специалистов, собственное
							производство с современным швейцарским оборудованием.
						</Text>
						<Flex
							flexDirection={{ base: "column", md: "row" }}
							textAlign="start"
							gap={4}
							py={6}>
							{data.map((el, index) => (
								<Flex
								// data-aos="fade-up"
									// data-aos-delay={index * 200}  
									// data-aos-duration="800"
									bg="#77777727"
									borderRadius={10}
									flexDirection="column"
									// justifyContent="space-between"
									key={index}
									border="solid 1px #7777776b"
									w={{ base: "100%", md: "310px" }}
									h={{ base: "100%", md: "165px" }}	
									gap={2}
									p={4}>
									<Image width={36} height={36} src={el.icon} alt="img" />
									<Text fontSize={16} fontWeight={500}>
										{el.title}
									</Text>
									<Text color="#ffffff85" fontSize={13} fontWeight={400}>
										{el.desc}
									</Text>
								</Flex>
							))}
						</Flex>
						<Box
						data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom"
							borderRadius={10}
							w="100%"
							maxW={{ base: "100%", md: "950px" }}
							mx="auto">
							<Slider ref={sliderRef} {...settings}>
								<Box
									w="100%"
									h={{ base: "230px", md: "425px" }}
									overflow="hidden">
									<Image
										style={{
											width: "100%",
											height: "100%",
											objectFit: "cover",
										}}
										src={sliderimg}
										alt="img"
									/>
								</Box>
								<Box
									w="100%"
									h={{ base: "230px", md: "425px" }}
									overflow="hidden">
									<Image
										style={{
											width: "100%",
											height: "100%",
											objectFit: "cover",
										}}
										src={sliderimg1}
										alt="img"
									/>
								</Box>
								<Box
									w="100%"
									h={{ base: "230px", md: "425px" }}
									overflow="hidden">
									<Image
										style={{
											width: "100%",
											height: "100%",
											objectFit: "cover",
										}}
										src={sliderimg2}
										alt="img"
									/>
								</Box>
								<Box
									w="100%"
									h={{ base: "230px", md: "425px" }}
									overflow="hidden">
									<Image
										style={{
											width: "100%",
											height: "100%",
											objectFit: "cover",
										}}
										src={sliderimg3}
										alt="img"
									/>
								</Box>
							</Slider>
						</Box>
					</Flex>
				</Flex>
			</div>
		</Flex>
	);
};

export default Advantages;
