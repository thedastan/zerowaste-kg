import ServicesDetails from "@/components/home/services/services-details";
import { Metadata } from "next";

type Params = {
	params: {
		id: string;
	};
};

export async function generateMetadata({ params }: Params): Promise<Metadata> {
	const { id } = params;
	const title =
		id === "1"
			? "Плавательные бассейны"
			: id === "2"
			? "Локальные очистные сооружения"
			: id === "3"
			? "Жироуловительи"
			: id === "4"
			? "ЕМКОСТИ для жидкостей"
			: id === "5"
			? "Рыбные хозяйства"
			: "ZeroWaste";
	const description =
		id === "1"
			? "Крытые и открытые плавательные бассейны любой формы и размеров из Полипропилена и ПВХ пленки"
			: id === "2"
			? "Стационарные и мобильные ЛОС для предприятий и населенных мест любой формы и производительности"
			: id === "3"
			? "Жироуловители любой производительности для домашних хозяйств и пищевых предприятий"
			: id === "4"
			? "Нестандартные емкости для питьевой воды, молока и других пищевых и непищевых жидкостей"
			: id === "5"
			? "Инкубационные цеха для рыбы, Установка замкнутого водоснабжения (УЗВ)"
			: "ZeroWaste";
	return {
		title,
		description,
		robots: "index, follow",
	};
}

const ServicesIdPage = ({ params }: Params) => {
	return (
		<div>
			<ServicesDetails id={params.id} />
		</div>
	);
};

export default ServicesIdPage;
