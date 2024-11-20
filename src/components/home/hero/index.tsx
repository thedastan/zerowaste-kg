"use client";
import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import img from "@/assets/img/heroimg.png";
import { useServicesData } from "../services/data";
import { useRouter } from "next/navigation";

const Hero = () => {
	const { services_data } = useServicesData();
	const router = useRouter();
	return (
		<>
			<Box h={{ base: "100%", md: 820 }} w="100%" bg="#0E6B56">
				<Box className="container2">
					<Flex
						pt={6}
						flexDir="column"
						justifyContent="center"
						alignItems="center"
						w="100%"
						textAlign="center"
						color="white">
						<Text fontSize={{ base: 26, md: 52 }} fontWeight={700}>
							Экологичнее с ZeroWaste!
						</Text>
						<Text
							mt={4}
							textAlign="center"
							w={{ base: "100%", md: 648 }}
							fontSize={18}
							fontWeight={400}>
							Многопрофильная компания по изготовлению комплексных инженерных
							сооружений по современной зарубежной технологии.
						</Text>
					</Flex>
				</Box>
				<Box py={10}>
					<Box
						display={{ base: "none", md: "flex" }}
						w="100%"
						h="1px"
						bg="#FFFFFF5E"
					/>
					<Flex
						justifyContent="space-between"
						flexDirection={{ base: "column", md: "row" }}
						alignItems="center"
						py={4}
						gap={6}
						className="container">
						<Box
							display={{ base: "flex", md: "none" }}
							w="100%"
							h="1px"
							bg="#FFFFFF5E"
						/>

						{services_data
							.slice(0, 1)
							.concat(services_data.slice(3, 4), services_data.slice(4, 5))
							.map((el, index) => (
								<>
									<Flex
										key={index}
										alignItems="center"
										justifyContent="center"
										gap={6}
										w={{ base: "100%", md: 400 }}
										h="127px">
										<Box
											border="solid 1px #FFFFFF5E"
											w={150}
											h="117px"
											overflow="hidden">
											{el.image.map((item, index) => (
												<Image
												key={index}
													src={item.img}
													alt="Service Image"
													style={{
														width: "100%",
														height: "100%",
														objectFit: "cover",
													}}
												/>
											))}
										</Box>
										<Flex
											h="110px"
											w={180}
											flexDir="column"
											justifyContent="space-between"
											alignItems="start"
											color="white">
											<Text fontSize={22} fontWeight={400}>
												{el.title}
											</Text>
											<Text
												cursor="pointer"
												onClick={() => router.push(`/${el.id}`)}
												fontSize={14}
												fontWeight={400}>
												Подробнее
											</Text>
										</Flex>
									</Flex>
									{index < services_data.slice(0, 3).length - 1 && (
										<Box
											w={{ base: "100%", md: "1px" }}
											h={{ base: "1px", md: "140px" }}
											bg="#FFFFFF5E"
										/>
									)}
								</>
							))}
					</Flex>
					<Box
						display={{ base: "none", md: "flex" }}
						w="100%"
						h="1px"
						bg="#FFFFFF5E"
					/>
				</Box>
			</Box>
			<Box>
				<div className="container">
					<Box
						display={{ base: "none", md: "flex" }}
						borderRadius={14}
						mt={-400}
						w="100%"
						h="454px"
						overflow="hidden">
						<Image
							style={{ width: "100%", height: "100%", objectFit: "cover" }}
							src={img}
							alt="img"
						/>
					</Box>
				</div>
				<Box
					display={{ base: "flex", md: "none" }}
					w="100%"
					h="230px"
					overflow="hidden">
					<Image
						style={{ width: "100%", height: "100%", objectFit: "cover" }}
						src={img}
						alt="img"
					/>
				</Box>
			</Box>
		</>
	);
};

export default Hero;
