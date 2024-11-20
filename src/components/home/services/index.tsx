"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import { useServicesData } from "./data";

const Services = () => {
	const router = useRouter();
	const { services_data } = useServicesData();

	return (
		<Box py={20}>
			<Box className="container">
				 <Flex justifyContent="center" pb={{ base: 10, md: 24 }} w="100%">
				 <Text w={720} textAlign="center" fontSize={{ base: 28, md: 52 }} fontWeight={600}>
					Сделайте шаг к устойчивому будущему с нашими{" "}
					<span style={{ color: "#0E6B56" }}>услугами</span>
				</Text>
				 </Flex>
				<Flex justifyContent="center" flexWrap="wrap" gap={4}>
					{services_data.slice(0, 2).map((el, index) => (
						<Flex
							as="div"
							className="service-card"
							justifyContent="space-between"
							alignItems="center"
							flexDirection="column"
							bg="#F4F4F4"
							w={{ base:"100%", md: "620px"}}
							h={{ base:"435px", md: "620px"}}
							borderRadius={12}
							p={10}
							mt={4}
							key={index}
							onClick={() => router.push(`/${el.id}`)}>
							<Text
								as="div"
								className="service-id"
								color="#4E565C"	
								p={{ base:"0px 15px", md: "5px 20px"}}
								borderRadius={8}
								border="2px solid #bbbbbb"
								fontSize={18}
								fontWeight={400}>
								{String(el.id).padStart(2, "0")}
							</Text>
							<Text
								lineHeight={{ base:"30px", md: "40px"}}
								w={{ base:"100%", md:400}}
								textAlign="center"
								fontSize={{ base:24, md: 34}}
								fontWeight={600}>
								{el.title}
							</Text>
							<Box   mt={2} position="relative" w={{ base:200, md: 332}} h={{ base: 200, md: 332}}>
								<Box
									className="image-wrapper"
									w="100%"
									h="100%"
									borderRadius="50%"
									overflow="hidden"
									position="relative">
									<span className="hover-text">{el.cart_desc}</span>
									<Image
										src={el.image[0].img}
										alt="Service Image"
									
										style={{
											width: "100%",
											height: "100%",
											objectFit: "cover",
										}}
									/>
								</Box>
							</Box>
							<Flex mt={{ base:3, md: 0}} gap={2} alignItems="center">
								<Text fontSize={18} fontWeight={400}>
									Узнать подробнее
								</Text>
								<Text fontSize={22} fontWeight={400}>
									<GoArrowUpRight />
								</Text>
							</Flex>
						</Flex>
					))}
				</Flex>

				<Box display={{ base: "flex", md: "none" }} justifyContent="center" flexWrap="wrap" gap={4}>
					{services_data.slice(2, 3).map((el, index) => (
						<Flex
							as="div"
							className="service-card"
							justifyContent="space-between"
							alignItems="center"
							flexDirection="column"
							bg="#F4F4F4"
							w={{ base:"100%", md: "620px"}}
							h={{ base:"435px", md: "620px"}}
							borderRadius={12}
							p={10}
							mt={4}
							key={index}
							onClick={() => router.push(`/${el.id}`)}>
							<Text
								as="div"
								className="service-id"
								color="#4E565C"	
								p={{ base:"0px 15px", md: "5px 20px"}}
								borderRadius={8}
								border="2px solid #bbbbbb"
								fontSize={18}
								fontWeight={400}>
								{String(el.id).padStart(2, "0")}
							</Text>
							<Text
								lineHeight={{ base:"30px", md: "40px"}}
								w={{ base:"100%", md:400}}
								textAlign="center"
								fontSize={{ base:24, md: 34}}
								fontWeight={600}>
								{el.title}
							</Text>
							<Box   mt={2} position="relative" w={{ base:200, md: 332}} h={{ base: 200, md: 332}}>
								<Box
									className="image-wrapper"
									w="100%"
									h="100%"
									borderRadius="50%"
									overflow="hidden"
									position="relative">
									<span className="hover-text">{el.cart_desc}</span>
									<Image
										src={el.image[0].img}
										alt="Service Image"
									
										style={{
											width: "100%",
											height: "100%",
											objectFit: "cover",
										}}
									/>
								</Box>
							</Box>
							<Flex mt={{ base:3, md: 0}} gap={2} alignItems="center">
								<Text fontSize={18} fontWeight={400}>
									Узнать подробнее
								</Text>
								<Text fontSize={22} fontWeight={400}>
									<GoArrowUpRight />
								</Text>
							</Flex>
						</Flex>
					))}
				</Box>

				<Box display={{ base: "none", md: "flex" }} justifyContent="center" flexWrap="wrap" gap={4}>
					{services_data.slice(2, 3).map((el, index) => (
						<Flex
							as="div"
							className="service-card"
							justifyContent={{ base: "space-between", md: "space-around" }}
							alignItems="center"
							flexDirection={{ base: "column", md: "row" }}
							bg="#F4F4F4"
							w="100%"
							h={{ base:"435px", md: "440px"}}
							borderRadius={12}
							p={10}
							mt={4}
							key={index}
							onClick={() => router.push(`/${el.id}`)}>
							<Flex
								h="260px"
								flexDirection="column"
								alignItems="center"
								justifyContent="space-between"
								textAlign="center">
								<Text
									as="div"
									className="service-id"
									color="#4E565C"
									p={{ base:"0px 15px", md: "5px 20px"}}
									borderRadius={8}
									border="2px solid #bbbbbb"
									fontSize={18}
									fontWeight={400}>
									{String(el.id).padStart(2, "0")}
								</Text>
								<Text
									lineHeight="40px"
									w={400}
									textAlign="center"
									fontSize={{ base:24, md: 34}}
									fontWeight={600}>
									{el.title}
								</Text>

								<Box display={{ base:"block", md: "none"}}  mt={2} position="relative" w={{ base:200, md: 332}} h={{ base: 200, md: 332}}>
								<Box
									className="image-wrapper"
									w="100%"
									h="100%"
									borderRadius="50%"
									overflow="hidden"
									position="relative">
									<span className="hover-text">{el.cart_desc}</span>
									<Image
										src={el.image[0].img}
										alt="Service Image"
									
										style={{
											width: "100%",
											height: "100%",
											objectFit: "cover",
										}}
									/>
								</Box>
							</Box>

								<Flex gap={2} alignItems="center">
									<Text fontSize={18} fontWeight={400}>
										Узнать подробнее
									</Text>
									<Text fontSize={22} fontWeight={400}>
										<GoArrowUpRight />
									</Text>
								</Flex>
							</Flex>

							<Box display={{ base:"none", md: "flex"}} mt={2} position="relative" w={332} h={332}>
								<Box
									className="image-wrapper"
									w="100%"
									h="100%"
									borderRadius="50%"
									overflow="hidden"
									position="relative">
									<span className="hover-text">{el.cart_desc}</span>
									<Image
										src={el.image[0].img}
										alt="Service Image"
										width={332}
										height={332}
										style={{
											width: "100%",
											height: "100%",
											objectFit: "cover",
										}}
									/>
								</Box>
							</Box>
						</Flex>
					))}
				</Box>

				<Flex justifyContent="center" flexWrap="wrap" gap={4}>
					{services_data.slice(3,5).map((el, index) => (
						<Flex
							as="div"
							className="service-card"
							justifyContent="space-between"
							alignItems="center"
							flexDirection="column"
							bg="#F4F4F4"
							w={{ base:"100%", md: "620px"}}
							h={{ base:"435px", md: "620px"}}
							borderRadius={12}
							p={10}
							mt={4}
							key={index}
							onClick={() => router.push(`/${el.id}`)}>
							<Text
								as="div"
								className="service-id"
								color="#4E565C"	
								p={{ base:"0px 15px", md: "5px 20px"}}
								borderRadius={8}
								border="2px solid #bbbbbb"
								fontSize={18}
								fontWeight={400}>
								{String(el.id).padStart(2, "0")}
							</Text>
							<Text
								lineHeight={{ base:"30px", md: "40px"}}
								w={{ base:"100%", md:400}}
								textAlign="center"
								fontSize={{ base:24, md: 34}}
								fontWeight={600}>
								{el.title}
							</Text>
							<Box mt={2} position="relative" w={{ base:200, md: 332}} h={{ base: 200, md: 332}}>
								<Box
									className="image-wrapper"
									w="100%"
									h="100%"
									borderRadius="50%"
									overflow="hidden"
									position="relative">
									<span className="hover-text">{el.cart_desc}</span>
									<Image
										src={el.image[0].img}
										alt="Service Image"
									
										style={{
											width: "100%",
											height: "100%",
											objectFit: "cover",
										}}
									/>
								</Box>
							</Box>
							<Flex mt={{ base:3, md: 0}} gap={2} alignItems="center">
								<Text fontSize={18} fontWeight={400}>
									Узнать подробнее
								</Text>
								<Text fontSize={22} fontWeight={400}>
									<GoArrowUpRight />
								</Text>
							</Flex>
						</Flex>
					))}
				</Flex>
			</Box>
		</Box>
	);
};

export default Services;
