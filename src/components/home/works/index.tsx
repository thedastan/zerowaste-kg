// import { Box, Flex, Text } from "@chakra-ui/react";
// import React from "react";
// import { useDataWork } from "./data";
// import Image from "next/image";
// import { SlLocationPin } from "react-icons/sl";
// import { GoArrowRight } from "react-icons/go";

// const Works = () => {
// 	const { data_works } = useDataWork();
// 	return (
// 		<Box py={20}>
// 			<Box
// 			// className="container"
// 			w="100%"
// 			m="0px auto"
// 			maxW="1300px"

// 			>
// 				<Box>
// 					<Flex justifyContent={{ base: "space-between", md: "center" }} alignItems="center">
// <Text
// 	textAlign="center"
// 	fontSize={{ base: 40, md: 120 }}
// 	fontWeight={600}>
// 	Наши работы
// </Text>
// <Text fontSize={35} display={{ base: "flex", md: "none" }}>
// 	<GoArrowRight />
// </Text>
// 					</Flex>
// 					<Flex
// 						mt={{ base: "0px", md: "-52px" }}
// 						justifyContent="start"
// 						position="absolute"
// 						overflowY="hidden"
// 						w="100%"
// 						gap={4}

// 						>
// 						{data_works.map((el, index) => (
// 							<Flex
// 								key={index}
// 								flexDirection="column"
// 								justifyContent={{ base: "space-between", md: "space-between" }}
// 								w={{ base: "350px", md: "602px" }}
// 								h={{ base: "500px", md: "424px" }}
// 								bg="#CCD2C8B2"
// 								borderRadius={10}
// 								flexShrink={0}
// 								flexGrow={0}
// 								backdropFilter="blur(5px)">
// 								<Box p={{ base: "20px 20px 0px 20px", md: 6 }}>
// 									<Text
// 										lineHeight={{ base: "30px", md: "40px" }}
// 										fontSize={{ base: 24, md: 36 }}
// 										fontWeight={{ base: 500, md: 500 }}>
// 										{el.title}
// 									</Text>
// 									<Text color="#4e4e4e" mt={4} fontSize={16} fontWeight={400}>
// 										{" "}
// 										<span style={{ fontWeight: "700" }}>Описание: </span>{" "}
// 										{el.desc}
// 									</Text>
// 									<Text color="#4e4e4e" mt={4} fontSize={16} fontWeight={400}>
// 										{" "}
// 										<span style={{ fontWeight: "700" }}>
// 											Производительность:
// 										</span>{" "}
// 										{el.product}
// 									</Text>
// 								</Box>
// 								<Flex
// 									flexDirection={{ base: "column", md: "row" }}
// 									p={{ base: "0px 20px 20px 20px", md: 3 }}
// 									alignItems={{ base: "start", md: "end" }}
// 									justifyContent="space-between">
// 									<Flex alignItems="center" gap={2} p={{ base: "6px 0px", md:"6px 15px"}}>
// 										<Text>
// 											<SlLocationPin />
// 										</Text>
// 										<Text>{el.location}</Text>
// 									</Flex>
// 									<Box
// 										w={{ base: "100%", md: 280 }}
// 										h="155px"
// 										overflow="hidden">
// 										<Image
// 											style={{
// 												width: "100%",
// 												height: "100%",
// 												objectFit: "cover",
// 											}}
// 											src={el.image}
// 											alt="img"
// 										/>
// 									</Box>
// 								</Flex>
// 							</Flex>
// 						))}
// 					</Flex>
// 				</Box>
// 			</Box>
// 		</Box>
// 	);
// };

// export default Works;

"use client";

import { Box, Container, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

import { CONTAINER_WIDTH } from "@/config/_variables.config";

import { useDataWork } from "./data";
import { useFullWindowSize } from "@/hooks/useFullHeight";
import { GoArrowRight } from "react-icons/go";

const Works = () => {
	const { clientWidth } = useFullWindowSize();
	const { data_works } = useDataWork();
	return (
		<Box mt={{ md: "125px", base: "60px" }}>
			 
			<Flex p={4} justifyContent={{ base: "space-between", md: "center" }} alignItems="center">
					<Text
						textAlign="center"
						fontSize={{ base: 40, md: 120 }}
						fontWeight={600}
					 >
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
				h="100%"
				>
				<Flex
					gap="6"
				  
					px={{
						xl: `${(clientWidth - parseInt(CONTAINER_WIDTH)) / 2 + 16}px`,
						base: "4",
					}} 	h={{ md: "450px", base: "550px"}}>
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
								<Flex
									alignItems="center"
									gap={2}
									p={{ base: "6px 0px", md: "6px 15px" }}>
									 
									<Text>{el.location}</Text>
								</Flex>
								<Box w={{ base: "100%", md: 280 }} h="155px" overflow="hidden">
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
{/* <div id="map" className="leaflet-container leaflet-touch leaflet-retina leaflet-fade-anim leaflet-grab leaflet-touch-drag leaflet-touch-zoom no-touch" tabindex="0" style="position: relative;">
	<div className="leaflet-pane leaflet-map-pane" style="transform: translate3d(-304px, 0px, 0px);"><div className="leaflet-pane leaflet-tile-pane"><div class="leaflet-layer " style="z-index: 0; opacity: 1;">
		<div className="leaflet-tile-container leaflet-zoom-animated" style="z-index: 17; transform: translate3d(-1800px, -525px, 0px) scale(2);"></div>
		<div className="leaflet-tile-container leaflet-zoom-animated" style="z-index: 18; transform: translate3d(-600px, -175px, 0px) scale(1);"><img alt="" src="https://tile3.maps.2gis.com/tiles?x=185390&amp;y=96441&amp;z=18&amp;v=1&amp;ts=online_hd"
		  					className="leaflet-tile leaflet-tile-loaded" style="width: 256px; height: 256px; transform: translate3d(448px, -34px, 0px); opacity: 1;"><img alt="" src="https://tile1.maps.2gis.com/tiles?x=185393&amp;y=96440&amp;z=18&amp;v=1&amp;ts=online_hd" 
								className="leaflet-tile leaflet-tile-loaded" style="width: 256px; height: 256px; transform: translate3d(1728px, -34px, 0px); opacity: 1;"><img alt="" src="https://tile2.maps.2gis.com/tiles?x=185388&amp;y=96442&amp;z=18&amp;v=1&amp;ts=online_hd"
					className="leaflet-tile leaflet-tile-loaded" style="width: 256px; height: 256px; transform: translate3d(448px, 478px, 0px); opacity: 1;"><img alt="" src="https://tile3.maps.2gis.com/tiles?x=185393&amp;y=96442&amp;z=18&amp;v=1&amp;ts=online_hd"
					 className="leaflet-tile leaflet-tile-loaded" style="width: 256px; height: 256px; transform: translate3d(1728px, 478px, 0px); opacity: 1;"></div></div></div><div class="leaflet-pane leaflet-shadow-pane"></div><div class="leaflet-pane leaflet-overlay-pane"></div><div 
						className="leaflet-pane leaflet-marker-pane"><div class="leaflet-marker-icon override-default leaflet-zoom-animated leaflet-interactive" tabindex="0" style="margin-left: -10px; margin-top: -10px; width: 20px; height: 20px; transform: translate3d(648px, 182px, 0px); z-index: 182;">
							<div className="bullet-marker" style="border-color: #0281f2;"></div></div></div><div className="leaflet-pane leaflet-tooltip-pane"><div class="leaflet-tooltip permanent-tooltip leaflet-zoom-animated leaflet-tooltip-left" style="opacity: 1; transform: translate3d(564px, 167px, 0px);">Наш Офис</div>
							</div><div className="leaflet-pane leaflet-popup-pane"></div><div class="leaflet-proxy leaflet-zoom-animated" style="transform: translate3d(4.74601e+07px, 2.4689e+07px, 0px) scale(131072);"></div></div><div className="leaflet-control-container"><div className="leaflet-top leaflet-left"></div><div className="leaflet-top leaflet-right">
								<div className="dg-control-round leaflet-control"><a className="dg-control-round__icon dg-control-round__icon_name_fullscreen" href="#" title="Развернуть"></a></div></div><div className="leaflet-bottom leaflet-left"></div><div className="leaflet-bottom leaflet-right"><div className="dg-attribution leaflet-control"><div className="dg-attribution__copyright"><ul 
								className="dg-attribution__links"><li className="dg-attribution__link-item"><a href="https://dev.2gis.ru/?utm_source=copyright&amp;utm_medium=map&amp;utm_campaign=partners" target="_blank" className="dg-attribution__link" dir="ltr">Работает на API 2ГИС</a></li><li className="dg-attribution__link-item"><a href="https://law.2gis.ru/api-rules/" target="_blank"
								className="dg-attribution__link">Лицензионное соглашение</a></li></ul><div className="dg-attribution__button-wrapper"><a className="dg-attribution__open2gis-button_name_open dg-attribution__open2gis-button dg-attribution__open2gis-icon-button" href="https://2gis.ru" target="_blank" name="linkButton">Доехать с 2ГИС</a></div></div></div></div></div></div> */}

				</Flex>
				
			</Flex>
		</Box>
	);
};

export default Works;

