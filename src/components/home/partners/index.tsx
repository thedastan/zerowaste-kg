'use client'
import partners1 from "@/assets/img/partners1.png";
import partners2 from "@/assets/img/partners2.png";
import partners3 from "@/assets/img/partners3.png";
import partners4 from "@/assets/img/partners4.png";
import partners5 from "@/assets/img/partners5.png";
import partners6 from "@/assets/img/partners6.png";
import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

// Data for partners
const data = [
	{ image: partners1 },
	{ image: partners2 },
	{ image: partners3 },
	{ image: partners4 },
	{ image: partners5 },
	{ image: partners6 },
	 
];
 
// const moveLeft = `
//   @keyframes moveLeft {
//     0% {
//       transform: translateX(100%);
//     }
//     100% {
//       transform: translateX(-100%);
//     }
//   }
// `;

const Partners = () => {
	return (
		<Box display={{ base: "none", md: "flex" }} py={20}>
			<Box className="container" style={{ overflow: "hidden" }}>
				<Text textAlign="center" py={4} fontSize={52} fontWeight={600}>
					Партнеры
				</Text>
			 
				{/* <style jsx global>{moveLeft}</style> */}
				<Flex
					gap={2}
					style={{
						animation: "moveLeft 30s linear infinite",
						display: "flex",
						width: "max-content",  
					}}
				>
					{data.map((el, index) => (
						<Box key={index} flexShrink={0}> 
							<Image style={{width:"100%", height:"71px"}} src={el.image} alt="img" />
						</Box>
					))}
				</Flex>
			</Box>
		</Box>
	);
};

export default Partners;
