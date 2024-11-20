"use client";
import React from "react";
import { useServicesData } from "../data";
import { useRouter } from "next/navigation";
import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";

type CardProps = {
	currentId: any;  
};


const Card: React.FC<CardProps> = ({ currentId }) => {
	const { services_data } = useServicesData();
	const router = useRouter();

	const filteredServices = services_data.filter((el) => el.id !== +currentId);

	return (
		<Box>
			<Flex
				justifyContent="space-between"
				flexDirection={{ base: "column", md: "column" }}
				alignItems="center"
				className="container"
				gap={10}>
				<Box
					display={{ base: "flex", md: "none" }}
					w="100%"
					h="1px"
					bg="#FFFFFF5E"
				
				/>

				{filteredServices.map((el, index) => (
					<>
						<Flex
							key={index}
							alignItems="center"
							justifyContent="center"
							onClick={() => router.push(`/${el.id}`)}
							cursor="pointer"
							gap={6}
							w={{ base: "100%", md: 400 }}
							h="127px">
							<Box
								border="solid 1px #FFFFFF5E"
								w={150}
								h="117px"
								
								overflow="hidden">
								{el.image.map((item, itemIndex) => (
									<Image
										key={itemIndex}
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
								justifyContent="center"
								alignItems="start"
								color="black"
								 
								gap={4}>
								<Text fontSize={20} fontWeight={400}>
									{el.title}
								</Text>
								 <Flex alignItems="center" gap={2}><Text
									cursor="pointer"
									 
									fontSize={14}
									fontWeight={400}>
									Подробнее
								</Text>
								<Text><GoArrowUpRight /></Text></Flex>
							</Flex>
						</Flex>
						{index < filteredServices.length - 1 && (
							<Box
								w={{ base: "100%", md: "100%" }}
								h={{ base: "1px", md: "2px" }}
								bg="#ECF0F4"
							/>
						)}
					</>
				))}
			</Flex>
		</Box>
	);
};

export default Card;
