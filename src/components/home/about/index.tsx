import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { FiCheck } from "react-icons/fi";
import ava from "@/assets/img/amangeldiev.png";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/img/aboutlogo.png";
import text from "@/assets/img/abouttext.png";

const About = () => {
	const data = [
		{
			text: "Используем и изготавливаем только высококачественные оборудования",
		},
		{
			text: "Немецкие и японские комплектующие и швейцарские инструменты",
		},
		{
			text: "Наши специалисты имеют многолетний опыт работы в зарубежных крупных компаниях",
		},
	];
	return (
		<Box id="about">
			<Box className="container2">
				<Flex
					flexDirection={{ base: "column", md: "row" }}
					gap={10}
					justifyContent="space-between">
					<Flex
						justifyContent={{ base: "center", md: "space-between" }}
						alignItems="center"
						w="100%"
						data-aos="fade-up-right"
						p={{ base: "40px 15px", md: "40px 50px" }}
						borderRadius="17px"
						bg="#191919"
						flexDirection={{ base: "column", md: "row" }}
						color="white">
						<Box>
							<Text fontSize={{ base: 30, md: 52 }} fontWeight={600}>
								О компании
							</Text>
							<Text
								mt={4}
								w={{ base: "100%", md: 540 }}
								fontSize={18}
								fontWeight={400}>
								Наша компания с 2014 года занимается производством и установкой
								комплексных инженерных сооружении в Кыргызстане, а также в
								странах СНГ и Персидского Залива.
							</Text>
							<Flex mt={6} flexDirection="column" gap={6}>
								{data.map((el, index) => (
									<Flex gap={3} alignItems="center" key={index}>
										<Text
											bg="#77777727"
											p="1px"
											borderRadius={4}
											border="solid 2px #797979">
											<FiCheck />
										</Text>
										<Text color="#aaaaaa" fontSize={16} fontWeight={400}>
											{el.text}
										</Text>
									</Flex>
								))}
							</Flex>
							<Link href={"#contact"}>
								<Button
									mt={8}
									w={330}
									h="60px"
									borderRadius={50}
									bg="#0E6B56"
									color="white">
									Оставить заявку
								</Button>
							</Link>
						</Box>
						<Flex alignItems="center" paddingRight={{ base: 0, md: 20}} justifyContent="center" mt={{ base: 10, md: 0}} flexDir="column"  >
							<Flex justifyContent="center" alignItems="center" w={{ base: "100%", md: 240 }} h="100%">
								<Image
									style={{ width: "100px", height: "100px" }}
									src={logo}
									alt="img"
								/>
							</Flex>

							<Box w={{ base: "100%", md: 240 }} h="100%">
								<Image
									style={{ width: "240px", height: "60px" }}
									src={text}
									alt="img"
								/>
							</Box>
						</Flex>
					</Flex>
					 
				</Flex>
			</Box>
		</Box>
	);
};

export default About;
