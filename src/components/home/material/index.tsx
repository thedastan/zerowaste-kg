import { Box, Flex, Text } from "@chakra-ui/react";
import img from "@/assets/img/material.png";
import Image from "next/image";

const Material = () => {
	const data = [
		{
			desc: "Высокая надежность",
		},
		{
			desc: "Безопасность для пищевых продуктов",
		},
		{
			desc: "Длительный срок эксплуатации",
		},
		{
			desc: "Сборка любых размеров",
		},
		{
			desc: "Легкость и простота",
		},
		{
			desc: "Идеальная герметичность",
		},
		{
			desc: "Любая конфигурация",
		},
	];

	const data2 = [
		{
			desc: "Высокая надежность",
		},
		{
			desc: "Любая конфигурация",
		},
		{
			desc: "Безопасность для пищевых продуктов",
		},
		{
			desc: "Длительный срок эксплуатации",
		},
		{
			desc: "Сборка любых размеров",
		},
		{
			desc: "Легкость и простота",
		},
		{
			desc: "Идеальная герметичность",
		},
	];
	return (
		<Box py={{ base: 20, md: 40 }}>
			<div className="container">
				<Flex
					flexDirection={{ base: "column", md: "row" }}
					justifyContent="space-between">
					<Box data-aos="fade-up-right" w={{ base: "100%", md: 680 }}>
						<Box h={{ base: "100%", md: "150px" }}>
							<Text
								position={{ base: "relative", md: "absolute" }}
								fontSize={{ base: 43, md: 102 }}
								fontWeight={500}>
								Полипропилен
							</Text>
						</Box>
						<Text mt={2} color="#646464" fontSize={15} fontWeight={400}>
							Пластический материал, отличающийся высокой прочностью при ударе и
							многократном изгибе, износостойкостью, хорошими теплоизоляционными
							свойствами в широком диапазоне температур и высокой химической
							стойкостью.
						</Text>

						<Box
							display={{ base: "flex", md: "none" }}
							mt={{ base: 10, md: 0 }}
							w={{ base: "100%", md: "550px" }}
							h={{ base: "330px", md: "500px" }}>
							<Image
								style={{ width: "100%", height: "100%" }}
								src={img}
								alt="img"
							/>
						</Box>

						<Box
							data-aos="fade-up-right"
							display={{ base: "none", md: "flex" }}
							mt={7}
							gap={2}
							flexWrap="wrap">
							{data.map((el, index) => (
								<Box
									mt={1}
									p={{ base: "10px 10px", md: "10px 15px" }}
									border="solid 1px #9e9e9e"
									borderRadius={100}
									transition="0.6s"
									_hover={{ bg: "#CCD2C8B2", transition: "0.2s" }}
									key={index}>
									<Text fontSize={{ base: 12, md: 15 }} fontWeight={400}>
										{el.desc}
									</Text>
								</Box>
							))}
						</Box>

						<Box
							display={{ base: "flex", md: "none" }}
							mt={7}
							gap={2}
							flexWrap="wrap">
							{data2.map((el, index) => (
								<Box
									mt={1}
									p={{ base: "10px 10px", md: "10px 15px" }}
									border="solid 1px #9e9e9e"
									_hover={{ bg: "#CCD2C8B2" }}
									transition="0.6s"
									borderRadius={100}
									key={index}>
									<Text fontSize={{ base: 12, md: 15 }} fontWeight={400}>
										{el.desc}
									</Text>
								</Box>
							))}
						</Box>
					</Box>
					<Box
						data-aos="zoom-out-left"
						display={{ base: "none", md: "flex" }}
						mt={{ base: 12, md: 0 }}
						w={{ base: "100%", md: "550px" }}
						h={{ base: "330px", md: "500px" }}>
						<Image
							style={{ width: "100%", height: "100%" }}
							src={img}
							alt="img"
						/>
					</Box>
				</Flex>
			</div>
		</Box>
	);
};

export default Material;
