import React from "react";
import theme from "theme";
import { Theme, Icon, Link, Text, List, Image, Box, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Stack } from "@quarkly/components";
import * as Components from "components";
import { MdKeyboardArrowLeft } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"vacancies/specialist-sluzhby-tehnicheskoj-podderzhki"} />
		<Helmet>
			<title>
				Специалист службы технической поддержки
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<meta property={"og:description"} content={"Job at uCoz. Job opportunities currently available at uCoz. Office and remote work. Learn how to join us and what it's like working in uTeam."} />
			<meta property={"og:image"} content={"https://images.unsplash.com/photo-1612832021455-245704c6755a?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/602a760f8db767001e87894b/images/favicon_uteam.png?v=2021-02-17T00:32:41.999Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/602a760f8db767001e87894b/images/favicon_uteam.png?v=2021-02-17T00:32:41.999Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/602a760f8db767001e87894b/images/favicon_uteam.png?v=2021-02-17T00:32:41.999Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/602a760f8db767001e87894b/images/favicon_uteam.png?v=2021-02-17T00:32:41.999Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/602a760f8db767001e87894b/images/favicon_uteam.png?v=2021-02-17T00:32:41.999Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/602a760f8db767001e87894b/images/favicon_uteam.png?v=2021-02-17T00:32:41.999Z"} />
			<meta name={"msapplication-TileColor"} content={"#5291FA"} />
		</Helmet>
		<Components.Header />
		<Section padding="140px 0 60px 0" sm-padding="110px 0 40px 0" lg-padding="120px 0 80px 0">
			<Override slot="SectionContent" align-items="center" />
			<Stack margin="0px 0px 0px 0px" max-width="850px">
				{"    "}
				<StackItem display="flex" width="100%">
					<Override slot="StackItemContent" align-items="flex-start" justify-content="flex-start" flex-direction="column" />
					{"        "}
					<Link
						margin="0px 0px 20px 0px"
						color="#4a8cfa"
						font="14px 'AvenirNextCyrMedium', sans-serif"
						transition="color 0.2s linear 0s"
						display="flex"
						className="noprint"
						href="/vacancies"
						text-decoration-line="initial"
						hover-color="#3d72cc"
					>
						<Icon
							size="20px"
							margin="-1px 2px 0px -2px"
							hover-color="inherit"
							category="md"
							icon={MdKeyboardArrowLeft}
							color="inherit"
						/>
						К списку вакансий
					</Link>
					<Text
						sm-font="normal 500 40px/1.2 'AvenirNextCyrDemi', sans-serif"
						font="normal 500 44px/1.2 'AvenirNextCyrDemi', sans-serif"
						margin="0px 0px 25px -3px"
						display="inline-block"
						sm-margin="0px 0px 20px 0px"
						text-align="left"
						color="#263238"
					>
						Специалист службы технической поддержки
					</Text>
					<Text
						margin="0px 0px 20px 0px"
						display="inline-block"
						sm-margin="0px 0px 10px 0px"
						text-align="center"
						color="#333"
						letter-spacing=".2"
						font="normal 400 18px/1.2 'AvenirNextCyrMedium', sans-serif"
					>
						Проект uCalc | Ростов-на-Дону
					</Text>
					<Text
						sm-margin="10px 0px 20px 0px"
						letter-spacing="0.3px"
						color="#333"
						font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif"
						margin="0px 0px 0px 0px"
						display="inline-block"
					>
						Мы ищем энергичного, аккуратного и внимательного специалиста в команду технической поддержки uKit Group
						<br />
						{"\n\n"}
					</Text>
					<Text
						font="normal 400 20px/1.2 'AvenirNextCyrMedium', sans-serif"
						margin="24px 0px 18px 0px"
						display="inline-block"
						sm-margin="10px 0px 20px 0px"
						text-align="left"
						color="#333"
						letter-spacing=".2"
					>
						Задачи:
					</Text>
					<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px">
						<Text font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif" margin="0px 0px 12px 5px">
							Письменно отвечать на вопросы пользователей сервиса по почте и в соцсетях
						</Text>
					</List>
					<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px">
						<Text font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif" margin="0px 0px 12px 5px">
							Pешение сопутствующих интересных задач
						</Text>
					</List>
					<Text
						sm-margin="10px 0px 20px 0px"
						text-align="left"
						color="#333"
						letter-spacing=".2"
						font="normal 400 20px/1.2 'AvenirNextCyrMedium', sans-serif"
						margin="20px 0px 18px 0px"
						display="inline-block"
					>
						Требования:
						<br />
					</Text>
					<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px">
						<Text font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif" margin="0px 0px 12px 5px">
							Высокий уровень письменной грамотности
						</Text>
					</List>
					<List padding="0px 0px 0px 20px" margin="0px 0px 0px 0px">
						<Text font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif" margin="0px 0px 12px 5px">
							Увлеченность современными веб-технологиями
						</Text>
					</List>
					<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px">
						<Text font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif" margin="0px 0px 12px 5px">
							Понимание базовых принципов работы сайтов на уровне веб-мастера
						</Text>
					</List>
					<Text
						color="#333"
						font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif"
						margin="0px 0px 10px 0px"
						display="inline-block"
						sm-margin="10px 0px 20px 0px"
						letter-spacing="0.3px"
					>
						Большим плюсом будут:
					</Text>
					<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px">
						<Text font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif" margin="0px 0px 12px 5px">
							Знание английского языка
						</Text>
					</List>
					<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px">
						<Text font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif" margin="0px 0px 12px 5px">
							Опыт создания и ведения собственного сайта
						</Text>
					</List>
					<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px">
						<Text margin="0px 0px 12px 5px" font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif">
							Опыт работы в поддержке хостинга/регистратора доменов/веб-студии
						</Text>
					</List>
					<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px" />
					<Text
						text-align="left"
						color="#333"
						letter-spacing=".2"
						font="normal 400 20px/1.2 'AvenirNextCyrMedium', sans-serif"
						margin="20px 0px 12px 0px"
						display="inline-block"
						sm-margin="10px 0px 20px 0px"
					>
						Условия:
						<br />
					</Text>
					<Box
						display="flex"
						align-items="center"
						margin="0px 0px 6px 0px"
						lg-margin="0px 0px 6px 0px"
						lg-align-items="flex-start"
					>
						<Image
							margin="0px 10px 0px 0px"
							lg-margin="12px 10px 0px 0px"
							src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/tick.svg?v=2021-02-04T00:08:19.533Z"
							width="15px"
							height="12px"
							padding="0px 0px 0px 0px"
						/>
						<Text margin="3px 0px 3px 0px" font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif">
							Молодой, дружный и профессиональный коллектив
						</Text>
					</Box>
					<Box
						display="flex"
						align-items="center"
						margin="0px 0px 6px 0px"
						lg-align-items="flex-start"
						lg-padding="0px 0px 0px 0px"
					>
						<Image
							src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/tick.svg?v=2021-02-04T00:08:19.533Z"
							width="15px"
							height="12px"
							padding="0px 0px 0px 0px"
							margin="0px 10px 0px 0px"
							lg-margin="12px 10px 0px 0px"
						/>
						<Text font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif" margin="3px 0px 3px 0px">
							Оформление по ТК, уровень определяется по результатам собеседования
						</Text>
					</Box>
					<Box
						display="flex"
						align-items="center"
						margin="0px 0px 6px 0px"
						lg-align-items="flex-start"
						lg-padding="0px 0px 0px 0px"
					>
						<Image
							src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/tick.svg?v=2021-02-04T00:08:19.533Z"
							width="15px"
							height="12px"
							padding="0px 0px 0px 0px"
							margin="0px 10px 0px 0px"
							lg-margin="12px 10px 0px 0px"
						/>
						<Text margin="3px 0px 3px 0px" font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif">
							Все возможности для профессионального роста и развития. (конференции, обучение)
						</Text>
					</Box>
					<Box
						margin="0px 0px 6px 0px"
						lg-align-items="flex-start"
						lg-padding="0px 0px 0px 0px"
						display="flex"
						align-items="center"
					>
						<Image
							padding="0px 0px 0px 0px"
							margin="0px 10px 0px 0px"
							lg-margin="12px 10px 0px 0px"
							src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/tick.svg?v=2021-02-04T00:08:19.533Z"
							width="15px"
							height="12px"
						/>
						<Text margin="3px 0px 3px 0px" font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif">
							ДМС
						</Text>
					</Box>
					<Box
						display="flex"
						align-items="center"
						margin="0px 0px 6px 0px"
						lg-align-items="flex-start"
						lg-padding="0px 0px 0px 0px"
					>
						<Image
							width="15px"
							height="12px"
							padding="0px 0px 0px 0px"
							margin="0px 10px 0px 0px"
							lg-margin="12px 10px 0px 0px"
							src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/tick.svg?v=2021-02-04T00:08:19.533Z"
						/>
						<Text margin="3px 0px 3px 0px" font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif">
							Питание в офисе за счет компании
							<br />
							{"\n\n"}
						</Text>
					</Box>
					<Box
						display="flex"
						align-items="center"
						margin="0px 0px 6px 0px"
						lg-align-items="flex-start"
						lg-padding="0px 0px 0px 0px"
					>
						<Image
							src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/tick.svg?v=2021-02-04T00:08:19.533Z"
							width="15px"
							height="12px"
							padding="0px 0px 0px 0px"
							margin="0px 10px 0px 0px"
							lg-margin="12px 10px 0px 0px"
						/>
						<Text margin="3px 0px 3px 0px" font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif">
							Комфортные условия работы, гибкий график
						</Text>
					</Box>
					<Components.PopUp
						left="-30px"
						bottom="auto"
						right="auto"
						top="40%"
						transition="all 0.5s ease 0s"
					>
						<Override
							slot="button"
							className="noprint"
							hover-left="0px"
							border-radius="5px"
							margin="30px 0px 10px 0px"
							padding="0px 15px 0px 15px"
							bottom="auto"
							right="auto"
							font="normal 500 16px/50px 'AvenirNextCyrMedium', sans-serif"
							letter-spacing=".1px"
							top="40%"
							color="#263238"
							background="#ffd83a"
							transition="all 0.2s linear 0s"
							left="-30px"
							hover-background="#e6c235"
						>
							Откликнуться на вакансию
						</Override>
						<Override
							slot="wrapper"
							width="100%"
							margin="0px 0px 0px 0px"
							overflow-y="scroll"
							max-height="1150px"
							background="#ffffff"
							padding="0px 0px 0px 0px"
							border-radius="0px"
							height="100%"
							max-width="672px"
						/>
						<Override
							slot="close"
							color="#c5cfdb"
							padding="0.7rem 0.7rem .5rem .5rem"
							size="20px"
							hover-color="#333"
							transition="color 0.3s ease 0s"
						/>
						<Section padding="0px 0 40px 0">
							<Override slot="SectionContent" align-items="center" width="100%" />
							<Components.EmbedHTML width="100%" />
							<Components.EmbedJS />
						</Section>
					</Components.PopUp>
					{"    "}
				</StackItem>
				<Components.SocialPrint />
				{"    "}
			</Stack>
		</Section>
		<Components.Footer />
		<RawHtml>
			<style place={"endOfHead"} rawKey={"602c67f4d524b3b42d4be948"}>
				{"@media (min-width: 1200px) {\n* {\n    scroll-behavior: smooth;\n    }\n    }\n.nobutton {\npointer-events: none; \n}\n  .active .fileText {\n  display: none;\n  }\n  input.fileText {\n      opacity: 1 !important;\n  }\n  * {\n    -webkit-tap-highlight-color: transparent!important;\n  }\n  @font-face {\n    font-family: 'AvenirNextCyrRegular';\n    src: url('/fonts/AvenirNextCyr-Regular.eot');\n    src: url('/fonts/AvenirNextCyr-Regular.eot?#iefix') format('embedded-opentype'), url('/fonts/AvenirNextCyr-Regular.woff') format('woff'), url('/fonts/AvenirNextCyr-Regular.ttf') format('truetype');\n    font-weight: normal;\n    font-style: normal;\n    font-display: auto;\n  }\n  @font-face {\n    font-family: 'AvenirNextCyrMedium';\n    src: url('/fonts/AvenirNextCyr-Medium.eot');\n    src: url('/fonts/AvenirNextCyr-Medium.eot?#iefix') format('embedded-opentype'), url('/fonts/AvenirNextCyr-Medium.woff') format('woff'), url('/fonts/AvenirNextCyr-Medium.ttf') format('truetype');\n    font-weight: normal;\n    font-style: normal;\n    font-display: auto;\n  }\n  @font-face {\n    font-family: 'AvenirNextCyrBold';\n    src: url('/fonts/AvenirNextCyr-Bold.eot');\n    src: url('/fonts/AvenirNextCyr-Bold.eot?#iefix') format('embedded-opentype'), url('/fonts/AvenirNextCyr-Bold.woff') format('woff'), url('/fonts/AvenirNextCyr-Bold.ttf') format('truetype');\n    font-weight: normal;\n    font-style: normal;\n    font-display: auto;\n  }\n  @font-face {\n    font-family: 'AvenirNextCyrDemi';\n    src: url('/fonts/AvenirNextCyr-Demi.otf');\n    font-weight: normal;\n    font-style: normal;\n    font-display: auto;\n  }\n  body {\n    font-family: 'AvenirNextCyrRegular', sans-serif;\n    font-weight: normal;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n:focus {\n    outline: none;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});