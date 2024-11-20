import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useDataWork } from "./data";
import Image from "next/image";
import { SlLocationPin } from "react-icons/sl";
import { GoArrowRight } from "react-icons/go";

const Works = () => {
	const { data_works } = useDataWork();
	return (
		<Box py={20}>
			<div className="container">
				<Box>
					<Flex justifyContent="space-between" alignItems="center">
						<Text
							textAlign="center"
							fontSize={{ base: 42, md: 120 }}
							fontWeight={600}>
							Наши работы
						</Text>
						<Text fontSize={35} display={{ base: "flex", md: "none" }}>
							<GoArrowRight />
						</Text>
					</Flex>
					<Flex
						mt={{ base: "0px", md: "-52px" }}
						justifyContent="start"
						overflowY="hidden"
						w="100%"
						gap={4}
						className="scrollContainer">
						{data_works.map((el, index) => (
							<Flex
								key={index}
								flexDirection="column"
								justifyContent={{ base: "space-between", md: "space-between" }}
								w={{ base: "350px", md: "602px" }}
								h={{ base: "500px", md: "424px" }}
								bg="#CCD2C8B2"
								borderRadius={10}
								flexShrink={0}
								flexGrow={0}
								backdropFilter="blur(10px)">
								<Box p={{ base: "20px 20px 0px 20px", md: 6 }}>
									<Text
										lineHeight={{ base: "30px", md: "40px" }}
										fontSize={{ base: 24, md: 16 }}
										fontWeight={600}>
										{el.title}
									</Text>
									<Text color="#4e4e4e" mt={4} fontSize={16} fontWeight={500}>
										{" "}
										<span style={{ fontWeight: "700" }}>Описание: </span>{" "}
										{el.desc}
									</Text>
									<Text color="#4e4e4e" mt={2} fontSize={16} fontWeight={500}>
										{" "}
										<span style={{ fontWeight: "700" }}>
											Производительность: 
										</span>{" "}
										{el.product}
									</Text>
								</Box>
								<Flex
									flexDirection={{ base: "column", md: "row" }}
									p={{ base: "0px 20px 20px 20px", md: 3 }}
									alignItems={{ base: "start", md: "end" }}
									justifyContent="space-between">
									<Flex alignItems="center" gap={2} p={{ base: "6px 0px", md:"6px 15px"}}>
										<Text>
											<SlLocationPin />
										</Text>
										<Text>{el.location}</Text>
									</Flex>
									<Box
										w={{ base: "100%", md: 280 }}
										h="155px"
										overflow="hidden">
										<Image
											style={{
												width: "100%",
												height: "100%",
												objectFit: "cover",
											}}
											src={el.image}
											alt="img"
										/>
									</Box>
								</Flex>
							</Flex>
						))}
					</Flex>
				</Box>
			</div>
		</Box>
	);
};

export default Works;
