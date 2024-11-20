"use client";
import { Box, Flex, Text } from "@chakra-ui/react";
import icon1 from "@/assets/img/icon1.png";
import icon2 from "@/assets/img/icon2.png";
import icon3 from "@/assets/img/icon3.png";

import sliderimg from "@/assets/img/advantages-img.png";
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
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};
	
	

	const data = [
		{
			icon: icon1,
			title: "Опыт и профессионализм",
			desc: "Квалифицированные специалисты с большим опытом гарантируют высокое качество и внимание к деталям.",
		},
		{
			icon: icon2,
			title: "Собственные  технологии",
			desc: "Собственный цех и современные швейцарские инструменты обеспечивают скорость, и качество.",
		},
		{
			icon: icon3,
			title: "Надёжные материалы",
			desc: "Используем только проверенные чешские, немецкие и японские материалы с гарантией до 15 лет.",
		},
	];
	return (
		<Flex
			justifyContent="center"
			alignItems="center"
			py={20}
			color="white"
			bg="#191919">
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
						<Flex flexDirection={{ base: "column", md: "row" }} textAlign="start" gap={4} py={6}>
							{data.map((el, index) => (
								<Flex
									bg="#77777727"
									borderRadius={10}
									flexDirection="column"
									justifyContent="space-between"
									key={index}
									border="solid 1px #7777776b"
									w={{ base: "100%", md: "310px" }}
									h="100%"
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
						<Box borderRadius={10} w="100%" maxW={{ base: "100%", md: "950px" }} mx="auto">
							<Slider ref={sliderRef} {...settings}>
								<Image src={sliderimg} alt="img" />
								<Image src={sliderimg} alt="img" />
								<Image src={sliderimg} alt="img" />
								<Image src={sliderimg} alt="img" />
								<Image src={sliderimg} alt="img" />
								<Image src={sliderimg} alt="img" />
							</Slider>
						</Box>
					</Flex>
				</Flex>
			</div>
		</Flex>
	);
};

export default Advantages;
