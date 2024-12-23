"use client";

import { Box, Container, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

import { CONTAINER_WIDTH } from "@/config/_variables.config";

import { useDataWork } from "./data";
import { useFullWindowSize } from "@/hooks/useFullHeight";
import { GoArrowRight } from "react-icons/go";
import img from "@/assets/img/contact-logo.png";

const Works = () => {
	const { clientWidth } = useFullWindowSize();
	const { data_works } = useDataWork();
	return (
		<Box mt={{ md: "125px", base: "60px" }}>
			<Flex
				p={4}
				justifyContent={{ base: "space-between", md: "center" }}
				alignItems="center">
				<Text
					textAlign="center"
					fontSize={{ base: 40, md: 120 }}
					fontWeight={600}>
					Наши работы
				</Text>
				<Text fontSize={35} display={{ base: "flex", md: "none" }}>
					<GoArrowRight />
				</Text>
			</Flex>
			<Flex
				mt={{ md: "-67px", base: "0px" }}
				overflowX="auto"
				className="unscroll"
				h="100%">
				<Flex
					gap="6"
					px={{
						xl: `${(clientWidth - parseInt(CONTAINER_WIDTH)) / 2 + 16}px`,
						base: "4",
					}}
					h={{ md: "100%", base: "550px" }}>
					{data_works.map((el, index) => (
						<Flex
							key={index}
							flexDirection="column"
							justifyContent={{ base: "space-between", md: "space-between" }}
							w={{ base: "350px", md: "602px" }}
							h={{ base: "500px", md: "464px" }}
							bg="#CCD2C8B2"
							borderRadius={10}
							flexShrink={0}
							flexGrow={0}
							backdropFilter="blur(5px)">
							<Box p={4}>
								<Text
									lineHeight={{ base: "30px", md: "40px" }}
									fontSize={{ base: 24, md: 36 }}
									fontWeight={{ base: 500, md: 500 }}>
									{el.title}
								</Text>
								 
								<Text color="#4e4e4e" mt={4} fontSize={16} fontWeight={400}>
									{" "}
									<span style={{ fontWeight: "700" }}>Описание: </span>{" "}
									{el.desc}
								</Text>
								<Text color="#4e4e4e" mt={4} fontSize={16} fontWeight={400}>
 								 {el.product ? (
								    <>
      								<span style={{ fontWeight: "700" }}>Производительность: </span>
      								{el.product}
   									 </>
  									) : null}
								</Text>
							</Box>
							<Flex
								flexDirection={{ base: "column", md: "row" }}
								p={{ base: "0px 20px 20px 20px", md: 3 }}
								alignItems={{ base: "start", md: "end" }}
								justifyContent="space-between">
								<Flex
									alignItems="center"
									gap={2}
									p={{ base: "6px 0px", md: "6px 15px" }}>
									<Text>{el.location}</Text>
								</Flex>
								<Box w={{ base: "100%", md: 280 }} borderRadius={3} h="170px" overflow="hidden">
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
			</Flex>
		</Box>
	);
};

export default Works;
