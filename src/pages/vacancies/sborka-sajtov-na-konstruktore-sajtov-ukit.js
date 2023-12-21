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
		<GlobalQuarklyPageStyles pageUrl={"vacancies/sborka-sajtov-na-konstruktore-sajtov-ukit"} />
		<Helmet>
			<title>
				Сборка сайтов на конструкторе сайтов uKit
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
				<StackItem width="100%" display="flex">
					<Override slot="StackItemContent" align-items="flex-start" justify-content="flex-start" flex-direction="column" />
					{"        "}
					<Link
						text-decoration-line="initial"
						href="/vacancies"
						margin="0px 0px 20px 0px"
						color="#4a8cfa"
						font="14px 'AvenirNextCyrMedium', sans-serif"
						transition="color 0.2s linear 0s"
						hover-color="#3d72cc"
						display="flex"
						className="noprint"
					>
						<Icon
							category="md"
							icon={MdKeyboardArrowLeft}
							color="inherit"
							size="20px"
							margin="-1px 2px 0px -2px"
							hover-color="inherit"
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
						Сборка сайтов на конструкторе сайтов uKit{"\n\n"}
					</Text>
					<Text
						text-align="center"
						color="#333"
						letter-spacing=".2"
						font="normal 400 18px/1.2 'AvenirNextCyrMedium', sans-serif"
						margin="0px 0px 20px 0px"
						display="inline-block"
						sm-margin="0px 0px 10px 0px"
					>
						Проект Divly, uSocial | Санкт-Петербург
					</Text>
					<Text
						sm-margin="10px 0px 20px 0px"
						letter-spacing="0.3px"
						color="#333"
						font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif"
						margin="0px 0px 0px 0px"
						display="inline-block"
					>
						Компания uKit Group г. Санкт-Петербург приглашает в свою дружную команду начинающих веб-мастеров или студентов сборки сайтов на конструкторе uKit.com
					</Text>
					<Text
						letter-spacing=".2"
						font="normal 400 20px/1.2 'AvenirNextCyrMedium', sans-serif"
						margin="24px 0px 18px 0px"
						display="inline-block"
						sm-margin="10px 0px 20px 0px"
						text-align="left"
						color="#333"
					>
						Задачи:
					</Text>
					<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px">
						<Text font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif" margin="0px 0px 12px 5px">
							Разработка небольших сайтов и лендингов на конструкторе uKit
						</Text>
					</List>
					<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px">
						<Text margin="0px 0px 12px 5px" font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif">
							Общение с клиентами напрямую, в том числе по телефону и в мессенджерах
							<br />
							{"\n\n"}
						</Text>
					</List>
					<Text
						color="#333"
						letter-spacing=".2"
						font="normal 400 20px/1.2 'AvenirNextCyrMedium', sans-serif"
						margin="20px 0px 18px 0px"
						display="inline-block"
						sm-margin="10px 0px 20px 0px"
						text-align="left"
					>
						Требования:
						<br />
					</Text>
					<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px">
						<Text font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif" margin="0px 0px 12px 5px">
							Знание конструктора uKit или любого аналогичного конструктора сайтов
						</Text>
					</List>
					<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px">
						<Text font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif" margin="0px 0px 12px 5px">
							Владение основами WEB
						</Text>
					</List>
					<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px">
						<Text font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif" margin="0px 0px 12px 5px">
							Чувство вкуса, понимание основ веб-дизайна и юзабилити
						</Text>
					</List>
					<List padding="0px 0px 0px 20px" margin="0px 0px 0px 0px">
						<Text font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif" margin="0px 0px 12px 5px">
							Грамотность и коммуникабельность
						</Text>
					</List>
					<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px">
						<Text font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif" margin="0px 0px 12px 5px">
							Ответственный подход к выполнению задач и соблюдению сроков
						</Text>
					</List>
					<List padding="0px 0px 0px 20px" margin="0px 0px 0px 0px">
						<Text font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif" margin="0px 0px 12px 5px">
							Знание английского языка будет плюсом
						</Text>
					</List>
					<List padding="0px 0px 0px 20px" margin="0px 0px 0px 0px" />
					<Text
						color="#333"
						letter-spacing=".2"
						font="normal 400 20px/1.2 'AvenirNextCyrMedium', sans-serif"
						margin="20px 0px 12px 0px"
						display="inline-block"
						sm-margin="10px 0px 20px 0px"
						text-align="left"
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
							width="15px"
							height="12px"
							padding="0px 0px 0px 0px"
							margin="0px 10px 0px 0px"
							lg-margin="12px 10px 0px 0px"
							src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/tick.svg?v=2021-02-04T00:08:19.533Z"
						/>
						<Text margin="3px 0px 3px 0px" font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif">
							Оклад + бонусы за выполнение KPI
						</Text>
					</Box>
					<Box
						lg-padding="0px 0px 0px 0px"
						display="flex"
						align-items="center"
						margin="0px 0px 6px 0px"
						lg-align-items="flex-start"
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
							Молодой, дружный и профессиональный коллектив
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
							width="15px"
							height="12px"
							padding="0px 0px 0px 0px"
							margin="0px 10px 0px 0px"
							lg-margin="12px 10px 0px 0px"
							src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/tick.svg?v=2021-02-04T00:08:19.533Z"
						/>
						<Text margin="3px 0px 3px 0px" font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif">
							Карьерный рост в более серьезные разработки и дизайн
						</Text>
					</Box>
					<Box
						lg-padding="0px 0px 0px 0px"
						display="flex"
						align-items="center"
						margin="0px 0px 6px 0px"
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
							lg-margin="12px 10px 0px 0px"
							src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/tick.svg?v=2021-02-04T00:08:19.533Z"
							width="15px"
							height="12px"
							padding="0px 0px 0px 0px"
							margin="0px 10px 0px 0px"
						/>
						<Text margin="3px 0px 3px 0px" font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif">
							Питание в офисе за счет компании
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
							Комфортные условия работы, гибкое начало рабочего дня
						</Text>
					</Box>
					<Components.PopUp
						right="auto"
						top="40%"
						transition="all 0.5s ease 0s"
						left="-30px"
						bottom="auto"
					>
						<Override
							slot="button"
							font="normal 500 16px/50px 'AvenirNextCyrMedium', sans-serif"
							left="-30px"
							bottom="auto"
							className="noprint"
							letter-spacing=".1px"
							top="40%"
							border-radius="5px"
							background="#ffd83a"
							padding="0px 15px 0px 15px"
							transition="all 0.2s linear 0s"
							hover-left="0px"
							margin="30px 0px 10px 0px"
							hover-background="#e6c235"
							color="#263238"
							right="auto"
						>
							Откликнуться на вакансию
						</Override>
						<Override
							slot="wrapper"
							margin="0px 0px 0px 0px"
							max-height="1150px"
							background="#ffffff"
							max-width="672px"
							width="100%"
							overflow-y="scroll"
							padding="0px 0px 0px 0px"
							border-radius="0px"
							height="100%"
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