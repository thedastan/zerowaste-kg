// import HomeSections from '../components/home/index';
import HomeSections from "@/components/home/HomeSections";
import { Metadata } from "next";
import Head from "next/head";
import React from "react";

export const metadata: Metadata = {
	title: "ZeroWaste",
	description:
		"Очистные сооружения, бассейны, жироуловители, емкости для жидкостей",
	keywords:
		"очистные сооружения, плавательный бассейн, полипропилен, емкости, бишкек, кыргызстан, нарын, ош, ыссык-куль, талас, джалал-абад, чуй, чолпон-ата, баткен",
	robots: "index, follow",
	authors: [{ name: "ОсОО Металломир" }],
	// ...NO_INDEX_PAGE,
};

const Home = () => {
	return (
		<>
			<Head>
				<meta name="author" content="Экологичнее с ZeroWaste!" />

				<meta
					name="description"
					content="Очистные сооружения, бассейны, жироуловители, емкости для жидкостей"
				/>

				<link rel="manifest" href="/manifest.json" />
				<link rel="canonical" href="https://www.zerowaste.kg/" />
				<meta property="og:url" content="https://www.zerowaste.kg/" />
				<meta
					property="og:image"
					content="https://www.zerowaste.kg/logo192.png"
				/>
				<meta
					property="og:image"
					content="https://www.zerowaste.kg/logo192.png"
				/>
				<meta
					property="og:title"
					content="очистные сооружения - zerowaste.kg"
				/>
				<meta
					property="og:description"
					content="Очистные сооружения в бишкеке, бассейны, жироуловители, емкости для жидкостей в бишкеке"
				/>
				<meta
					name="keywords"
					content="очистные сооружения, плавательный бассейн, полипропилен, емкости, бишкек, кыргызстан, нарын, ош, ыссык-куль, талас, джалал-абад, чуй, чолпон-ата, баткен"
				/>
			</Head>
			<HomeSections />
		</>
	);
};

export default Home;
