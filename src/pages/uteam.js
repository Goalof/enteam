import React from "react";
import theme from "theme";
import { Theme, Text, Button, Image, Box, Section, Link, Icon } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Stack } from "@quarkly/components";
import * as Components from "components";
import { FaInstagram } from "react-icons/fa";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"uteam"} />
		<Helmet>
			<title>
				uTeam - Jobs at uTeam
			</title>
			<meta name={"description"} content={"uTeam are people behind uKit, uLanding, uCoz and uCalc services. We take pride not only in creating these services for you but also in turning the teams of professionals into true friends."} />
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
		<Section padding="120px 0 100px 0" sm-padding="110px 0 0px 0" lg-padding="120px 0 80px 0">
			<Override slot="SectionContent" align-items="center" />
			<Stack margin="0px 0px 0px 0px" max-width="850px">
				{"    "}
				<StackItem width="100%" display="flex">
					<Override slot="StackItemContent" align-items="center" justify-content="center" />
					{"        "}
					<Text
						color="#263238"
						sm-font="normal 900 53px/1.2 'AvenirNextCyrBold', sans-serif"
						font="--headline1"
						margin="0px 0px 5px 0px"
						display="inline-block"
						sm-text-align="center"
						sm-margin="0px 0px 0px 0px"
						text-align="center"
					>
						uTeam
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="100%" display="flex">
					<Override slot="StackItemContent" justify-content="center" align-items="center" />
					{"        "}
					<Text
						sm-margin="0px 0px 0px 0px"
						text-align="center"
						letter-spacing="0.3px"
						sm-font="normal 400 18px/26px 'AvenirNextCyrRegular', sans-serif"
						font="normal 400 20px/28px 'AvenirNextCyrRegular', sans-serif"
						margin="0px 10px 5px 10px"
						display="inline-block"
						sm-text-align="center"
					>
						We take pride not only in delivering professional services that meet your needs, but also in making friends within the team. Together, we are more than skilled specialists, we are a big family. Have a look at the people behind uProjects and learn what it’s like to work here. Perhaps, you’ll join us very soon.
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="100%" display="none">
					<Override slot="StackItemContent" align-items="center" justify-content="center" />
					{"        "}
					<Components.Slider width="100%" slides="http://ru.uteam.pro/img/members/new_ourteam_page/24.jpg,http://ru.uteam.pro/img/members/new_ourteam_page/23.jpg,http://ru.uteam.pro/img/members/new_ourteam_page/20.jpg,http://ru.uteam.pro/img/members/new_ourteam_page/19.jpg,http://ru.uteam.pro/img/members/new_ourteam_page/18.jpg,http://ru.uteam.pro/img/members/new_ourteam_page/17.jpg,http://ru.uteam.pro/img/members/new_ourteam_page/16.jpg,http://ru.uteam.pro/img/members/new_ourteam_page/15.jpg,http://ru.uteam.pro/img/members/new_ourteam_page/14.jpg,http://ru.uteam.pro/img/members/new_ourteam_page/13.jpg,http://ru.uteam.pro/img/members/new_ourteam_page/12.jpg,http://ru.uteam.pro/img/members/new_ourteam_page/10.jpg,http://ru.uteam.pro/img/members/new_ourteam_page/09.jpg,http://ru.uteam.pro/img/members/new_ourteam_page/08.jpg,http://ru.uteam.pro/img/members/new_ourteam_page/07.jpg,http://ru.uteam.pro/img/members/new_ourteam_page/06.jpg,http://ru.uteam.pro/img/members/new_ourteam_page/05.jpg,http://ru.uteam.pro/img/members/new_ourteam_page/04.jpg,http://ru.uteam.pro/img/members/new_ourteam_page/03.jpg,http://ru.uteam.pro/img/members/new_ourteam_page/02.jpg">
						<Override slot="Slide 6 Description">
							uTeam, Ростов-на-Дону
							<br />
							{" "}Роман Штейнберг, Александр Пезиков, Ирина Черепанова, Павел Кудинов, Михаил Гуревич
						</Override>
						<Override slot="Slide 7 Description">
							uTeam, Ростов-на-Дону
						</Override>
						<Override slot="Slide 13 Description">
							uTeam, ростовский офис
						</Override>
						<Override slot="Slide 15 Description">
							Михаил Гуревич, финансовый директор uKit Group, Ростов-на-Дону
						</Override>
						<Override slot="Slide 17 Description">
							Совещание в головном офис в Москве. Справа – Ирина Черепанова, директор по продукту, Алексей Попов, руководитель техподдержки, Анна Лубенченко и Антон Бурлаков
						</Override>
						<Override slot="Points" display="none" />
						<Override slot="Slide 1 Description">
							Команда uKit, Ростов-на-Дону
						</Override>
						<Override slot="Slide 4 Description">
							Команда дизайнеров, Ростов-на-Дону
							<br />
							Андрей Сербуль, Анна Курсанова, Виктор Кадников, Екатерина Чубукова
						</Override>
						<Override slot="Slide 5 Description">
							Дизайнеры, Анна Курсанова и Андрей Сербуль, Ростов-на-Дону
						</Override>
						<Override slot="Slide 9 Description">
							Дмитрий Молчанов, руководитель проекта uCalc, Ростов-на-Дону
						</Override>
						<Override slot="Slide 12 Description">
							uTeam, ростовский офис
						</Override>
						<Override slot="Slide 14 Description">
							uTeam, ростовский офис
						</Override>
						<Override slot="Slide 20 Description">
							Команда uCoz, Черкассы (Украина)
						</Override>
						<Override slot="Slide 10 Description">
							Иван Возлюбленный, scrum-мастер
							<br />
							{" "}Георгий Авсецин, UI/UX-дизайнер Web Tycoon
						</Override>
						<Override slot="Slide 18 Description">
							Олег Лисовенко, менеджер проектов и маркетолог, Санкт-Петербург
						</Override>
						<Override
							slot="Slide Description"
							background="rgba(0, 0, 0, 0.55)"
							font="400 14px/18px 'AvenirNextCyrMedium'"
							color="#ffffff"
							margin="16px 0px 0px 0px"
						>
							Slide 1 text
						</Override>
						<Override slot="Slide 2 Description">
							Павел Кудинов, технический директор uKit, руковдитель uKit AI, Ростов-на-Дону
						</Override>
						<Override slot="Slide 3 Description">
							Frontend-разработчики, Луис Бланко и Роман Арестович, Ростов-на-Дону
						</Override>
						<Override slot="Slide 8 Description">
							Татьяна Жукова, руководитель направления локализации, Ростов-на-Дону
						</Override>
						<Override slot="Slide 11 Description">
							HR, Ольга Колесникова и Наталья Маринченко, Ростов-на-Дону
						</Override>
						<Override slot="Slide 16 Description">
							Финансовый департамент, Москва
							<br />
							Зарина Татрова, Чемарина Алиса, Горбунова Анастасия, Лобаскова Александра
						</Override>
						<Override slot="Slide 19 Description">
							uTeam, Санкт-Петербург
						</Override>
					</Components.Slider>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
			<Stack margin="50px 0px 0px 0px" max-width="1170px">
				{"    "}
				<StackItem width="100%" display="flex">
					<Override slot="StackItemContent" align-items="flex-start" justify-content="flex-start" flex-direction="column" />
					{"        "}
					<Components.Tabs
						align="center"
						margin="0px 0px 0px 0px"
						defaultTab="one"
						orientation="Horizontal"
						width="100%"
						height="auto"
					>
						<Components.TabList sm-width="100%" sm-display="flex" sm-flex-direction="column">
							<Override slot="TabList Wrapper" sm-flex-direction="column" />
							<Components.TabItem
								color="#263238"
								background="#E4E9ED"
								transition="all 0.2s linear 0s"
								margin="0px 2px 0px 0px"
								border-radius="5px 0px 0px 5px"
								tabId="one"
							>
								<Override
									slot="Selected Tab"
									color="#fff"
									border-width="2px"
									background="#4a8cfa"
									border-style="solid"
									border-color="#4a8cfa"
								/>
								<Override
									slot="Tab"
									border-width="2px"
									border-style="solid"
									color="inherit"
									transition="all 0.2s linear 0s"
									border-radius="5px 0px 0px 5px"
									margin="0px 0px 0px 0px"
									border-color="rgba(74, 140, 250, 0)"
								/>
								<Button
									font="normal 400 14px/22px 'AvenirNextCyrMedium'"
									transition="all 0.2s linear 0s"
									focus-box-shadow="none"
									background="rgba(0, 119, 204, 0)"
									color="inherit"
									padding="8px 12px 8px 12px"
								>
									Moscow
								</Button>
							</Components.TabItem>
							<Components.TabItem
								tabId="two"
								background="#E4E9ED"
								color="#263238"
								border-color="#263238"
								transition="all 0.2s linear 0s"
								margin="0px 2px 0px 0px"
							>
								<Override
									slot="Selected Tab"
									background="#4a8cfa"
									border-width="2px"
									border-style="solid"
									border-color="#4a8cfa"
									color="#fff"
								/>
								<Override
									slot="Tab"
									border-color="rgba(0, 0, 0, 0)"
									transition="all 0.2s linear 0s"
									margin="0px 0px 0px 0px"
									border-radius="0px"
									border-width="2px"
									border-style="solid"
								/>
								<Button
									font="normal 400 14px/22px 'AvenirNextCyrMedium'"
									border-width="0px"
									transition="all 0.2s linear 0s"
									focus-box-shadow="none"
									background="rgba(0, 119, 204, 0)"
									color="inherit"
									padding="8px 12px 8px 12px"
								>
									Saint Petersburg
								</Button>
							</Components.TabItem>
							<Components.TabItem
								tabId="three"
								background="#E4E9ED"
								color="#263238"
								border-color="#263238"
								transition="all 0.2s linear 0s"
								margin="0px 2px 0px 0px"
							>
								<Override
									slot="Selected Tab"
									border-width="2px"
									border-style="solid"
									border-color="#4a8cfa"
									color="#fff"
									background="#4a8cfa"
								/>
								<Override
									slot="Tab"
									border-radius="0px"
									border-width="2px"
									border-style="solid"
									border-color="rgba(0, 0, 0, 0)"
									transition="all 0.2s linear 0s"
									margin="0px 2px 0px 0px"
								/>
								<Button
									border-width="0px"
									transition="all 0.2s linear 0s"
									focus-box-shadow="none"
									background="rgba(0, 119, 204, 0)"
									color="inherit"
									padding="8px 12px 8px 12px"
									font="normal 400 14px/22px 'AvenirNextCyrMedium'"
								>
									Rostov-on-Don
								</Button>
							</Components.TabItem>
							<Components.TabItem
								tabId="four"
								background="#E4E9ED"
								color="#263238"
								border-color="#263238"
								transition="all 0.2s linear 0s"
								border-radius="0px 5px 5px 0px"
							>
								<Override
									slot="Selected Tab"
									background="#4a8cfa"
									border-width="2px"
									border-style="solid"
									border-color="#4a8cfa"
									color="#fff"
								/>
								<Override
									slot="Tab"
									border-color="rgba(0, 0, 0, 0)"
									transition="all 0.2s linear 0s"
									margin="0px 2px 0px 0px"
									border-radius="0px 5px 5px 0px"
									border-width="2px"
									border-style="solid"
								/>
								<Button
									color="inherit"
									padding="8px 12px 8px 12px"
									font="normal 400 14px/22px 'AvenirNextCyrMedium'"
									border-width="0px"
									transition="all 0.2s linear 0s"
									focus-box-shadow="none"
									background="rgba(0, 119, 204, 0)"
								>
									Cherkassy
								</Button>
							</Components.TabItem>
						</Components.TabList>
						<Components.TabPanels margin="5px 0px 0px 0px">
							<Components.TabPanel tabId="one">
								<Stack margin="40px 0px 0px 0px">
									<StackItem width="40%" display="flex" lg-width="100%" sm-width="100%">
										<Override
											slot="StackItemContent"
											align-items="flex-start"
											justify-content="flex-start"
											flex-direction="column"
											lg-align-items="center"
											lg-justify-content="center"
										/>
										{"        "}
										<Text
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="center"
											letter-spacing="0.3px"
											color="#3D72CC"
											font="normal 400 30px/36px 'AvenirNextCyrBold', sans-serif"
											margin="0px 0px 18px 0px"
										>
											9 employees
										</Text>
										<Text
											font="normal 400 18px/26px 'AvenirNextCyrMedium', sans-serif"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											letter-spacing="0.3px"
											margin="0px 0px 5px 0px"
											display="inline-block"
											text-align="left"
											color="#9BABBF"
											lg-text-align="center"
										>
											The Moscow office of the company hosts senior managers, product, marketing and PR teams, as well as the accounting department.
										</Text>
										{"    "}
									</StackItem>
									<StackItem display="flex" lg-width="50%" sm-width="100%" width="20%">
										<Override
											slot="StackItemContent"
											justify-content="center"
											flex-direction="column"
											lg-align-items="center"
											align-items="flex-start"
										/>
										{"        "}
										<Image
											width="90px"
											height="90px"
											margin="0px 0px 24px 0px"
											src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/kurt.jpg?v=2021-01-28T13:05:31.217Z"
											border-radius="100%"
											srcSet="https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/kurt.jpg?v=2021-01-28T13%3A05%3A31.217Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/kurt.jpg?v=2021-01-28T13%3A05%3A31.217Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/kurt.jpg?v=2021-01-28T13%3A05%3A31.217Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/kurt.jpg?v=2021-01-28T13%3A05%3A31.217Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/kurt.jpg?v=2021-01-28T13%3A05%3A31.217Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/kurt.jpg?v=2021-01-28T13%3A05%3A31.217Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/kurt.jpg?v=2021-01-28T13%3A05%3A31.217Z&quality=85&w=3200 3200w"
											sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1280px) 100vw,100vw"
										/>
										<Text
											text-align="left"
											letter-spacing="0.3px"
											color="#3D72CC"
											font="normal 400 18px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 12px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
										>
											Evgeny Kurt
										</Text>
										<Text
											margin="0px 0px 0px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#9BABBF"
											font="normal 400 14px/18px 'AvenirNextCyrMedium', sans-serif"
										>
											CEO
										</Text>
										{"    "}
									</StackItem>
									<StackItem width="20%" display="flex" lg-width="50%" sm-width="100%">
										<Override
											slot="StackItemContent"
											justify-content="center"
											flex-direction="column"
											lg-align-items="center"
											align-items="flex-start"
										/>
										{"        "}
										<Image
											width="90px"
											height="90px"
											margin="0px 0px 24px 0px"
											src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/cherepanova.jpg?v=2021-02-02T11:19:38.438Z"
											border-radius="100%"
											srcSet="https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/cherepanova.jpg?v=2021-02-02T11%3A19%3A38.438Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/cherepanova.jpg?v=2021-02-02T11%3A19%3A38.438Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/cherepanova.jpg?v=2021-02-02T11%3A19%3A38.438Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/cherepanova.jpg?v=2021-02-02T11%3A19%3A38.438Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/cherepanova.jpg?v=2021-02-02T11%3A19%3A38.438Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/cherepanova.jpg?v=2021-02-02T11%3A19%3A38.438Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/cherepanova.jpg?v=2021-02-02T11%3A19%3A38.438Z&quality=85&w=3200 3200w"
											sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1280px) 100vw,100vw"
										/>
										<Text
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#3D72CC"
											font="normal 400 18px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 12px 0px"
											display="inline-block"
											sm-text-align="center"
										>
											Irina Cherepanova
										</Text>
										<Text
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#9BABBF"
											font="normal 400 14px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 0px 0px"
											display="inline-block"
											sm-text-align="center"
										>
											CPO
										</Text>
										{"    "}
									</StackItem>
									<StackItem width="20%" display="flex" lg-width="50%" sm-width="100%">
										<Override
											slot="StackItemContent"
											align-items="flex-start"
											justify-content="flex-start"
											flex-direction="column"
											lg-align-items="center"
										/>
										{"        "}
										<Image
											width="90px"
											height="90px"
											margin="0px 0px 24px 0px"
											src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/tatrova.jpg?v=2021-02-02T11:19:38.406Z"
											border-radius="100%"
											srcSet="https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/tatrova.jpg?v=2021-02-02T11%3A19%3A38.406Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/tatrova.jpg?v=2021-02-02T11%3A19%3A38.406Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/tatrova.jpg?v=2021-02-02T11%3A19%3A38.406Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/tatrova.jpg?v=2021-02-02T11%3A19%3A38.406Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/tatrova.jpg?v=2021-02-02T11%3A19%3A38.406Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/tatrova.jpg?v=2021-02-02T11%3A19%3A38.406Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/tatrova.jpg?v=2021-02-02T11%3A19%3A38.406Z&quality=85&w=3200 3200w"
											sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1280px) 100vw,100vw"
										/>
										<Text
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#3D72CC"
											font="normal 400 18px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 12px 0px"
											display="inline-block"
											sm-text-align="center"
										>
											Zarina Tatrova
										</Text>
										<Text
											text-align="left"
											letter-spacing="0.3px"
											color="#9BABBF"
											font="normal 400 14px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 0px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
										>
											Chief Accountant
										</Text>
										{"    "}
									</StackItem>
									<StackItem display="flex" lg-width="50%" sm-width="100%" width="20%">
										<Override
											slot="StackItemContent"
											lg-align-items="center"
											align-items="flex-start"
											justify-content="center"
											flex-direction="column"
										/>
										{"        "}
										<Image
											width="90px"
											height="90px"
											margin="0px 0px 24px 0px"
											src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/popov.jpg?v=2021-02-02T11:19:38.411Z"
											border-radius="100%"
											srcSet="https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/popov.jpg?v=2021-02-02T11%3A19%3A38.411Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/popov.jpg?v=2021-02-02T11%3A19%3A38.411Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/popov.jpg?v=2021-02-02T11%3A19%3A38.411Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/popov.jpg?v=2021-02-02T11%3A19%3A38.411Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/popov.jpg?v=2021-02-02T11%3A19%3A38.411Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/popov.jpg?v=2021-02-02T11%3A19%3A38.411Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/popov.jpg?v=2021-02-02T11%3A19%3A38.411Z&quality=85&w=3200 3200w"
											sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1280px) 100vw,100vw"
										/>
										<Text
											margin="0px 0px 12px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#3D72CC"
											font="normal 400 18px/18px 'AvenirNextCyrMedium', sans-serif"
										>
											Alexey Popov
										</Text>
										<Text
											letter-spacing="0.3px"
											color="#9BABBF"
											font="normal 400 14px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 0px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
										>
											Project Manager
										</Text>
										{"    "}
									</StackItem>
									<StackItem width="20%" display="flex" lg-width="50%" sm-width="100%">
										<Override
											slot="StackItemContent"
											align-items="flex-start"
											justify-content="flex-start"
											flex-direction="column"
											lg-align-items="center"
										/>
										{"        "}
										<Box
											width="90px"
											height="90px"
											border-radius="50%"
											background="#3D72CC"
											display="flex"
											align-items="center"
											justify-content="center"
											margin="0px 0px 24px 0px"
										>
											<Text color="#ffffff" font="500 36px 'AvenirNextCyrBold', sans-serif">
												+5
											</Text>
										</Box>
										<Text
											color="#3D72CC"
											font="normal 400 18px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 12px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
										>
											specialists{"\n\n"}
										</Text>
										{"    "}
									</StackItem>
									{"        "}
								</Stack>
							</Components.TabPanel>
							<Components.TabPanel tabId="two">
								<Stack margin="40px 0px 0px 0px">
									<StackItem display="flex" lg-width="100%" sm-width="100%" width="40%">
										<Override
											slot="StackItemContent"
											align-items="flex-start"
											justify-content="flex-start"
											flex-direction="column"
											lg-align-items="center"
											lg-justify-content="center"
										/>
										{"        "}
										<Text
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="center"
											letter-spacing="0.3px"
											color="#3D72CC"
											font="normal 400 30px/36px 'AvenirNextCyrBold', sans-serif"
											margin="0px 0px 18px 0px"
											display="inline-block"
										>
											17 employees{"\n\n"}
										</Text>
										<Text
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											color="#9BABBF"
											text-align="left"
											letter-spacing="0.3px"
											lg-text-align="center"
											font="normal 400 18px/26px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 5px 0px"
											display="inline-block"
										>
											The St. Pete office is a workplace for one of the uKit teams.uSocial, uPartner and Divly services were created here.
										</Text>
										{"    "}
									</StackItem>
									<StackItem width="20%" display="flex" lg-width="50%" sm-width="100%">
										<Override
											slot="StackItemContent"
											align-items="flex-start"
											justify-content="flex-start"
											flex-direction="column"
											lg-align-items="center"
											lg-justify-content="center"
										/>
										{"        "}
										<Image
											margin="0px 0px 24px 0px"
											src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/lisovenko.jpg?v=2021-02-02T11:26:45.639Z"
											border-radius="100%"
											width="90px"
											height="90px"
											srcSet="https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/lisovenko.jpg?v=2021-02-02T11%3A26%3A45.639Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/lisovenko.jpg?v=2021-02-02T11%3A26%3A45.639Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/lisovenko.jpg?v=2021-02-02T11%3A26%3A45.639Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/lisovenko.jpg?v=2021-02-02T11%3A26%3A45.639Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/lisovenko.jpg?v=2021-02-02T11%3A26%3A45.639Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/lisovenko.jpg?v=2021-02-02T11%3A26%3A45.639Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/lisovenko.jpg?v=2021-02-02T11%3A26%3A45.639Z&quality=85&w=3200 3200w"
											sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1280px) 100vw,100vw"
										/>
										<Text
											margin="0px 0px 12px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#3D72CC"
											font="normal 400 18px/18px 'AvenirNextCyrMedium', sans-serif"
										>
											Oleg Lisovenko
										</Text>
										<Text
											margin="0px 0px 0px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#9BABBF"
											font="normal 400 14px/18px 'AvenirNextCyrMedium', sans-serif"
										>
											Project Manager
											<br />
											of Divly and uSocial{"\n\n"}
										</Text>
										{"    "}
									</StackItem>
									<StackItem width="20%" display="flex" lg-width="50%" sm-width="100%">
										<Override
											slot="StackItemContent"
											align-items="flex-start"
											justify-content="flex-start"
											flex-direction="column"
											lg-align-items="center"
											lg-justify-content="center"
										/>
										{"        "}
										<Image
											width="90px"
											height="90px"
											margin="0px 0px 24px 0px"
											src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/pavlov.jpg?v=2021-02-02T11:26:45.643Z"
											border-radius="100%"
											srcSet="https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/pavlov.jpg?v=2021-02-02T11%3A26%3A45.643Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/pavlov.jpg?v=2021-02-02T11%3A26%3A45.643Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/pavlov.jpg?v=2021-02-02T11%3A26%3A45.643Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/pavlov.jpg?v=2021-02-02T11%3A26%3A45.643Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/pavlov.jpg?v=2021-02-02T11%3A26%3A45.643Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/pavlov.jpg?v=2021-02-02T11%3A26%3A45.643Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/pavlov.jpg?v=2021-02-02T11%3A26%3A45.643Z&quality=85&w=3200 3200w"
											sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1280px) 100vw,100vw"
										/>
										<Text
											color="#3D72CC"
											font="normal 400 18px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 12px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
										>
											Oleg Pavlov
										</Text>
										<Text
											margin="0px 0px 0px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#9BABBF"
											font="normal 400 14px/18px 'AvenirNextCyrMedium', sans-serif"
										>
											SMM and Direct Marketer
											<br />
											{"\n\n"}
										</Text>
										{"    "}
									</StackItem>
									<StackItem width="20%" display="flex" lg-width="50%" sm-width="100%">
										<Override
											slot="StackItemContent"
											lg-justify-content="center"
											align-items="flex-start"
											justify-content="flex-start"
											flex-direction="column"
											lg-align-items="center"
										/>
										{"        "}
										<Image
											height="90px"
											margin="0px 0px 24px 0px"
											src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/kuznetcov.jpg?v=2021-02-02T11:26:45.640Z"
											border-radius="100%"
											width="90px"
											srcSet="https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/kuznetcov.jpg?v=2021-02-02T11%3A26%3A45.640Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/kuznetcov.jpg?v=2021-02-02T11%3A26%3A45.640Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/kuznetcov.jpg?v=2021-02-02T11%3A26%3A45.640Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/kuznetcov.jpg?v=2021-02-02T11%3A26%3A45.640Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/kuznetcov.jpg?v=2021-02-02T11%3A26%3A45.640Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/kuznetcov.jpg?v=2021-02-02T11%3A26%3A45.640Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/kuznetcov.jpg?v=2021-02-02T11%3A26%3A45.640Z&quality=85&w=3200 3200w"
											sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1280px) 100vw,100vw"
										/>
										<Text
											margin="0px 0px 12px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#3D72CC"
											font="normal 400 18px/18px 'AvenirNextCyrMedium', sans-serif"
										>
											Viktor Kuznetsov
										</Text>
										<Text
											color="#9BABBF"
											font="normal 400 14px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 0px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
										>
											Head of Technical
											<br />
											Support Team{"\n\n"}
										</Text>
										{"    "}
									</StackItem>
									<StackItem lg-width="50%" sm-width="100%" width="20%" display="flex">
										<Override
											slot="StackItemContent"
											align-items="flex-start"
											justify-content="flex-start"
											flex-direction="column"
											lg-align-items="center"
											lg-justify-content="center"
										/>
										{"        "}
										<Box
											border-radius="50%"
											background="#3D72CC"
											display="flex"
											align-items="center"
											justify-content="center"
											margin="0px 0px 24px 0px"
											width="90px"
											height="90px"
										>
											<Text font="500 36px 'AvenirNextCyrBold', sans-serif" color="#ffffff">
												+14
											</Text>
										</Box>
										<Text
											text-align="left"
											letter-spacing="0.3px"
											color="#3D72CC"
											font="normal 400 18px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 12px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
										>
											specialists{"\n\n"}
										</Text>
										{"    "}
									</StackItem>
									{"        "}
								</Stack>
							</Components.TabPanel>
							<Components.TabPanel tabId="three">
								<Stack margin="40px 0px 0px 0px">
									<StackItem width="40%" display="flex" lg-width="100%" sm-width="100%">
										<Override
											slot="StackItemContent"
											justify-content="flex-start"
											flex-direction="column"
											lg-align-items="center"
											lg-justify-content="center"
											align-items="flex-start"
										/>
										{"        "}
										<Text
											text-align="center"
											letter-spacing="0.3px"
											color="#3D72CC"
											font="normal 400 30px/36px 'AvenirNextCyrBold', sans-serif"
											margin="0px 0px 18px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
										>
											59 
employees{"\n\n"}
										</Text>
										<Text
											font="normal 400 18px/26px 'AvenirNextCyrMedium', sans-serif"
											display="inline-block"
											text-align="left"
											letter-spacing="0.3px"
											color="#9BABBF"
											lg-text-align="center"
											margin="0px 0px 5px 0px"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
										>
											The biggest team works in the Rostov office. This is the place where uKit is being developed. The teams of the uKit AI, uLanding, uCalc and Web Tycoon projects work here.
										</Text>
										{"    "}
									</StackItem>
									<StackItem width="20%" display="flex" lg-width="50%" sm-width="100%">
										<Override
											slot="StackItemContent"
											lg-align-items="center"
											lg-justify-content="center"
											align-items="flex-start"
											justify-content="flex-start"
											flex-direction="column"
										/>
										{"        "}
										<Image
											border-radius="100%"
											width="90px"
											height="90px"
											margin="0px 0px 24px 0px"
											src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/kudinov.jpg?v=2021-02-03T10:12:38.861Z"
											srcSet="https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/kudinov.jpg?v=2021-02-03T10%3A12%3A38.861Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/kudinov.jpg?v=2021-02-03T10%3A12%3A38.861Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/kudinov.jpg?v=2021-02-03T10%3A12%3A38.861Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/kudinov.jpg?v=2021-02-03T10%3A12%3A38.861Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/kudinov.jpg?v=2021-02-03T10%3A12%3A38.861Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/kudinov.jpg?v=2021-02-03T10%3A12%3A38.861Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/kudinov.jpg?v=2021-02-03T10%3A12%3A38.861Z&quality=85&w=3200 3200w"
											sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1280px) 100vw,100vw"
										/>
										<Text
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#3D72CC"
											font="normal 400 18px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 12px 0px"
											display="inline-block"
											sm-text-align="center"
										>
											Pavel Kudinov
										</Text>
										<Text
											color="#9BABBF"
											font="normal 400 14px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 0px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
										>
											CTO, Head of uKit AI
										</Text>
										{"    "}
									</StackItem>
									<StackItem display="flex" lg-width="50%" sm-width="100%" width="20%">
										<Override
											slot="StackItemContent"
											lg-align-items="center"
											lg-justify-content="center"
											align-items="flex-start"
											justify-content="flex-start"
											flex-direction="column"
										/>
										{"        "}
										<Image
											border-radius="100%"
											width="90px"
											height="90px"
											margin="0px 0px 24px 0px"
											src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/zhukova.jpg?v=2021-02-03T10:12:38.858Z"
											srcSet="https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/zhukova.jpg?v=2021-02-03T10%3A12%3A38.858Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/zhukova.jpg?v=2021-02-03T10%3A12%3A38.858Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/zhukova.jpg?v=2021-02-03T10%3A12%3A38.858Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/zhukova.jpg?v=2021-02-03T10%3A12%3A38.858Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/zhukova.jpg?v=2021-02-03T10%3A12%3A38.858Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/zhukova.jpg?v=2021-02-03T10%3A12%3A38.858Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/zhukova.jpg?v=2021-02-03T10%3A12%3A38.858Z&quality=85&w=3200 3200w"
											sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1280px) 100vw,100vw"
										/>
										<Text
											font="normal 400 18px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 12px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#3D72CC"
										>
											Tatiana Zhukova
										</Text>
										<Text
											font="normal 400 14px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 0px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#9BABBF"
										>
											Localization Manager
										</Text>
										{"    "}
									</StackItem>
									<StackItem display="flex" lg-width="50%" sm-width="100%" width="20%">
										<Override
											slot="StackItemContent"
											align-items="flex-start"
											justify-content="flex-start"
											flex-direction="column"
											lg-align-items="center"
											lg-justify-content="center"
										/>
										{"        "}
										<Image
											margin="0px 0px 24px 0px"
											src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/mudrov.jpg?v=2021-02-03T10:12:38.864Z"
											border-radius="100%"
											width="90px"
											height="90px"
											srcSet="https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/mudrov.jpg?v=2021-02-03T10%3A12%3A38.864Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/mudrov.jpg?v=2021-02-03T10%3A12%3A38.864Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/mudrov.jpg?v=2021-02-03T10%3A12%3A38.864Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/mudrov.jpg?v=2021-02-03T10%3A12%3A38.864Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/mudrov.jpg?v=2021-02-03T10%3A12%3A38.864Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/mudrov.jpg?v=2021-02-03T10%3A12%3A38.864Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/mudrov.jpg?v=2021-02-03T10%3A12%3A38.864Z&quality=85&w=3200 3200w"
											sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1280px) 100vw,100vw"
										/>
										<Text
											text-align="left"
											letter-spacing="0.3px"
											color="#3D72CC"
											font="normal 400 18px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 12px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
										>
											Evgeny Mudrov
										</Text>
										<Text
											margin="0px 0px 0px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#9BABBF"
											font="normal 400 14px/18px 'AvenirNextCyrMedium', sans-serif"
										>
											Developer{" "}
											<br />
											of uKit AI Core
										</Text>
										{"    "}
									</StackItem>
									<StackItem width="20%" display="flex" lg-width="50%" sm-width="100%">
										<Override
											slot="StackItemContent"
											align-items="flex-start"
											justify-content="flex-start"
											flex-direction="column"
											lg-align-items="center"
											lg-justify-content="center"
										/>
										{"        "}
										<Image
											width="90px"
											height="90px"
											margin="0px 0px 24px 0px"
											src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/derbitov.jpg?v=2021-02-03T10:12:38.858Z"
											border-radius="100%"
											srcSet="https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/derbitov.jpg?v=2021-02-03T10%3A12%3A38.858Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/derbitov.jpg?v=2021-02-03T10%3A12%3A38.858Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/derbitov.jpg?v=2021-02-03T10%3A12%3A38.858Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/derbitov.jpg?v=2021-02-03T10%3A12%3A38.858Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/derbitov.jpg?v=2021-02-03T10%3A12%3A38.858Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/derbitov.jpg?v=2021-02-03T10%3A12%3A38.858Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/derbitov.jpg?v=2021-02-03T10%3A12%3A38.858Z&quality=85&w=3200 3200w"
											sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1280px) 100vw,100vw"
										/>
										<Text
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#3D72CC"
											font="normal 400 18px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 12px 0px"
											display="inline-block"
											sm-text-align="center"
										>
											Andrey Derbitov
										</Text>
										<Text
											letter-spacing="0.3px"
											color="#9BABBF"
											font="normal 400 14px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 0px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
										>
											Full-Stack Developer
										</Text>
										{"    "}
									</StackItem>
									<StackItem width="20%" display="flex" lg-width="50%" sm-width="100%">
										<Override
											slot="StackItemContent"
											align-items="flex-start"
											justify-content="flex-start"
											flex-direction="column"
											lg-align-items="center"
											lg-justify-content="center"
										/>
										{"        "}
										<Image
											width="90px"
											height="90px"
											margin="0px 0px 24px 0px"
											src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/kadnikov.jpg?v=2021-02-03T10:12:38.858Z"
											border-radius="100%"
											srcSet="https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/kadnikov.jpg?v=2021-02-03T10%3A12%3A38.858Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/kadnikov.jpg?v=2021-02-03T10%3A12%3A38.858Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/kadnikov.jpg?v=2021-02-03T10%3A12%3A38.858Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/kadnikov.jpg?v=2021-02-03T10%3A12%3A38.858Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/kadnikov.jpg?v=2021-02-03T10%3A12%3A38.858Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/kadnikov.jpg?v=2021-02-03T10%3A12%3A38.858Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/kadnikov.jpg?v=2021-02-03T10%3A12%3A38.858Z&quality=85&w=3200 3200w"
											sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1280px) 100vw,100vw"
										/>
										<Text
											margin="0px 0px 12px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#3D72CC"
											font="normal 400 18px/18px 'AvenirNextCyrMedium', sans-serif"
										>
											Viktor Kadnikov
										</Text>
										<Text
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#9BABBF"
											font="normal 400 14px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 0px 0px"
											display="inline-block"
											sm-text-align="center"
										>
											Art Director at uKit
										</Text>
										{"    "}
									</StackItem>
									<StackItem lg-width="50%" sm-width="100%" width="20%" display="flex">
										<Override
											slot="StackItemContent"
											justify-content="flex-start"
											flex-direction="column"
											lg-align-items="center"
											lg-justify-content="center"
											align-items="flex-start"
										/>
										{"        "}
										<Box
											height="90px"
											border-radius="50%"
											background="#3D72CC"
											display="flex"
											align-items="center"
											justify-content="center"
											margin="0px 0px 24px 0px"
											width="90px"
										>
											<Text font="500 36px 'AvenirNextCyrBold', sans-serif" color="#ffffff">
												+54
											</Text>
										</Box>
										<Text
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#3D72CC"
											font="normal 400 18px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 12px 0px"
										>
											specialists{"\n\n"}
										</Text>
										{"    "}
									</StackItem>
									{"        "}
								</Stack>
							</Components.TabPanel>
							<Components.TabPanel tabId="four">
								<Stack margin="40px 0px 0px 0px">
									<StackItem sm-width="100%" width="40%" display="flex" lg-width="100%">
										<Override
											slot="StackItemContent"
											lg-justify-content="center"
											align-items="flex-start"
											justify-content="flex-start"
											flex-direction="column"
											lg-align-items="center"
										/>
										{"        "}
										<Text
											margin="0px 0px 18px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="center"
											letter-spacing="0.3px"
											color="#3D72CC"
											font="normal 400 30px/36px 'AvenirNextCyrBold', sans-serif"
										>
											25 
employees{"\n\n"}
										</Text>
										<Text
											font="normal 400 18px/26px 'AvenirNextCyrMedium', sans-serif"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											margin="0px 0px 5px 0px"
											display="inline-block"
											color="#9BABBF"
											lg-text-align="center"
										>
											Historically, this is the first office of the company. Here the legendary uCoz, as well as uID.me and uShop are being developed.
										</Text>
										{"    "}
									</StackItem>
									<StackItem display="flex" lg-width="50%" sm-width="100%" width="20%">
										<Override
											slot="StackItemContent"
											justify-content="flex-start"
											flex-direction="column"
											lg-align-items="center"
											lg-justify-content="center"
											align-items="flex-start"
										/>
										{"        "}
										<Image
											width="90px"
											height="90px"
											margin="0px 0px 24px 0px"
											src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/kolpakov.jpg?v=2021-02-03T12:07:48.618Z"
											border-radius="100%"
											srcSet="https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/kolpakov.jpg?v=2021-02-03T12%3A07%3A48.618Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/kolpakov.jpg?v=2021-02-03T12%3A07%3A48.618Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/kolpakov.jpg?v=2021-02-03T12%3A07%3A48.618Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/kolpakov.jpg?v=2021-02-03T12%3A07%3A48.618Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/kolpakov.jpg?v=2021-02-03T12%3A07%3A48.618Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/kolpakov.jpg?v=2021-02-03T12%3A07%3A48.618Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/kolpakov.jpg?v=2021-02-03T12%3A07%3A48.618Z&quality=85&w=3200 3200w"
											sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1280px) 100vw,100vw"
										/>
										<Text
											text-align="left"
											letter-spacing="0.3px"
											color="#3D72CC"
											font="normal 400 18px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 12px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
										>
											Ivan Kolpakov
										</Text>
										<Text
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#9BABBF"
											font="normal 400 14px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 0px 0px"
											display="inline-block"
											sm-text-align="center"
										>
											CTO at uCoz
										</Text>
										{"    "}
									</StackItem>
									<StackItem display="flex" lg-width="50%" sm-width="100%" width="20%">
										<Override
											slot="StackItemContent"
											align-items="flex-start"
											justify-content="flex-start"
											flex-direction="column"
											lg-align-items="center"
											lg-justify-content="center"
										/>
										{"        "}
										<Image
											width="90px"
											height="90px"
											margin="0px 0px 24px 0px"
											src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/donets.jpg?v=2021-02-03T12:07:48.614Z"
											border-radius="100%"
											srcSet="https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/donets.jpg?v=2021-02-03T12%3A07%3A48.614Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/donets.jpg?v=2021-02-03T12%3A07%3A48.614Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/donets.jpg?v=2021-02-03T12%3A07%3A48.614Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/donets.jpg?v=2021-02-03T12%3A07%3A48.614Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/donets.jpg?v=2021-02-03T12%3A07%3A48.614Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/donets.jpg?v=2021-02-03T12%3A07%3A48.614Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/donets.jpg?v=2021-02-03T12%3A07%3A48.614Z&quality=85&w=3200 3200w"
											sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1280px) 100vw,100vw"
										/>
										<Text
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#3D72CC"
											font="normal 400 18px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 12px 0px"
										>
											Alexey Donets
										</Text>
										<Text
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#9BABBF"
											font="normal 400 14px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 0px 0px"
										>
											Marketing, SEO and PR Specialist
										</Text>
										{"    "}
									</StackItem>
									<StackItem width="20%" display="flex" lg-width="50%" sm-width="100%">
										<Override
											slot="StackItemContent"
											flex-direction="column"
											lg-align-items="center"
											lg-justify-content="center"
											align-items="flex-start"
											justify-content="flex-start"
										/>
										{"        "}
										<Image
											border-radius="100%"
											width="90px"
											height="90px"
											margin="0px 0px 24px 0px"
											src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/latanuk.jpg?v=2021-02-03T12:07:48.614Z"
											srcSet="https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/latanuk.jpg?v=2021-02-03T12%3A07%3A48.614Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/latanuk.jpg?v=2021-02-03T12%3A07%3A48.614Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/latanuk.jpg?v=2021-02-03T12%3A07%3A48.614Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/latanuk.jpg?v=2021-02-03T12%3A07%3A48.614Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/latanuk.jpg?v=2021-02-03T12%3A07%3A48.614Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/latanuk.jpg?v=2021-02-03T12%3A07%3A48.614Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/latanuk.jpg?v=2021-02-03T12%3A07%3A48.614Z&quality=85&w=3200 3200w"
											sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1280px) 100vw,100vw"
										/>
										<Text
											font="normal 400 18px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 12px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#3D72CC"
										>
											Ivan Latanyuk
										</Text>
										<Text
											letter-spacing="0.3px"
											color="#9BABBF"
											font="normal 400 14px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 0px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
										>
											Senior Developer of uCoz and uID.me
										</Text>
										{"    "}
									</StackItem>
									<StackItem width="20%" display="flex" lg-width="50%" sm-width="100%">
										<Override
											slot="StackItemContent"
											align-items="flex-start"
											justify-content="flex-start"
											flex-direction="column"
											lg-align-items="center"
											lg-justify-content="center"
										/>
										{"        "}
										<Image
											width="90px"
											height="90px"
											margin="0px 0px 24px 0px"
											src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/pereyaslovets.jpg?v=2021-02-03T12:07:48.623Z"
											border-radius="100%"
											srcSet="https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/pereyaslovets.jpg?v=2021-02-03T12%3A07%3A48.623Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/pereyaslovets.jpg?v=2021-02-03T12%3A07%3A48.623Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/pereyaslovets.jpg?v=2021-02-03T12%3A07%3A48.623Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/pereyaslovets.jpg?v=2021-02-03T12%3A07%3A48.623Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/pereyaslovets.jpg?v=2021-02-03T12%3A07%3A48.623Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/pereyaslovets.jpg?v=2021-02-03T12%3A07%3A48.623Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/pereyaslovets.jpg?v=2021-02-03T12%3A07%3A48.623Z&quality=85&w=3200 3200w"
											sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1280px) 100vw,100vw"
										/>
										<Text
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#3D72CC"
											font="normal 400 18px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 12px 0px"
										>
											Nataliya Pereyaslovets
										</Text>
										<Text
											margin="0px 0px 0px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#9BABBF"
											font="normal 400 14px/18px 'AvenirNextCyrMedium', sans-serif"
										>
											Senior QA Engineer
										</Text>
										{"    "}
									</StackItem>
									<StackItem width="20%" display="flex" lg-width="50%" sm-width="100%">
										<Override
											slot="StackItemContent"
											justify-content="flex-start"
											flex-direction="column"
											lg-align-items="center"
											lg-justify-content="center"
											align-items="flex-start"
										/>
										{"        "}
										<Image
											width="90px"
											height="90px"
											margin="0px 0px 24px 0px"
											src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/chubenko.jpg?v=2021-02-03T12:07:48.638Z"
											border-radius="100%"
											srcSet="https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/chubenko.jpg?v=2021-02-03T12%3A07%3A48.638Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/chubenko.jpg?v=2021-02-03T12%3A07%3A48.638Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/chubenko.jpg?v=2021-02-03T12%3A07%3A48.638Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/chubenko.jpg?v=2021-02-03T12%3A07%3A48.638Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/chubenko.jpg?v=2021-02-03T12%3A07%3A48.638Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/chubenko.jpg?v=2021-02-03T12%3A07%3A48.638Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/chubenko.jpg?v=2021-02-03T12%3A07%3A48.638Z&quality=85&w=3200 3200w"
											sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1280px) 100vw,100vw"
										/>
										<Text
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#3D72CC"
											font="normal 400 18px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 12px 0px"
											display="inline-block"
											sm-text-align="center"
										>
											Igor Chubenko
										</Text>
										<Text
											letter-spacing="0.3px"
											color="#9BABBF"
											font="normal 400 14px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 0px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
										>
											Senior Developer of uShop
										</Text>
										{"    "}
									</StackItem>
									<StackItem width="20%" display="flex" lg-width="50%" sm-width="100%">
										<Override
											slot="StackItemContent"
											align-items="flex-start"
											justify-content="flex-start"
											flex-direction="column"
											lg-align-items="center"
											lg-justify-content="center"
										/>
										{"        "}
										<Box
											justify-content="center"
											margin="0px 0px 24px 0px"
											width="90px"
											height="90px"
											border-radius="50%"
											background="#3D72CC"
											display="flex"
											align-items="center"
										>
											<Text color="#ffffff" font="500 36px 'AvenirNextCyrBold', sans-serif">
												+20
											</Text>
										</Box>
										<Text
											margin="0px 0px 12px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#3D72CC"
											font="normal 400 18px/18px 'AvenirNextCyrMedium', sans-serif"
										>
											specialists{"\n\n"}
										</Text>
										{"    "}
									</StackItem>
									{"        "}
								</Stack>
							</Components.TabPanel>
						</Components.TabPanels>
					</Components.Tabs>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section padding="60px 0 75px 0" background="#3D72CC" md-padding="40px 0 40px 0">
			<Override slot="SectionContent" align-items="center" />
			<Stack margin="0px 0px 0px 0px" max-width="1170px" width="100%" gap="--cmp-stack-gap-default">
				{"    "}
				<StackItem
					md-width="100%"
					md-margin="0px 0px 17px 0px"
					width="33.333%"
					display="flex"
					sm-width="100%"
				>
					<Override slot="StackItemContent" align-items="center" justify-content="flex-start" flex-direction="column" />
					<Text font="42px/28px 'AvenirNextCyrBold', sans-serif" margin="0px 0px 16px 0px" color="#fff">
						From 3 years
					</Text>
					<Text font="18px/28px 'AvenirNextCyrMedium', sans-serif" margin="8px 0px 0px 0px" text-align="center" color="#fff">
						is the work experience of each key team member in the relevant position
					</Text>
					{"            "}
				</StackItem>
				<StackItem
					width="33.333%"
					display="flex"
					sm-width="100%"
					md-width="100%"
					md-margin="0px 0px 17px 0px"
				>
					<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="flex-start" />
					<Text font="42px/28px 'AvenirNextCyrBold', sans-serif" margin="0px 0px 16px 0px" color="#fff">
						15 years
					</Text>
					<Text font="18px/28px 'AvenirNextCyrMedium', sans-serif" margin="8px 0px 0px 0px" text-align="center" color="#fff">
						on the SaaS solutions market for creating websites and optimizing their conversions
						<br />
					</Text>
					{"            "}
				</StackItem>
				<StackItem
					display="flex"
					sm-width="100%"
					md-width="100%"
					md-margin="0px 0px 17px 0px"
					width="33.333%"
				>
					<Override slot="StackItemContent" align-items="center" justify-content="flex-start" flex-direction="column" />
					<Text font="42px/28px 'AvenirNextCyrBold', sans-serif" margin="0px 0px 16px 0px" color="#fff">
						7 projects
					</Text>
					<Text font="18px/28px 'AvenirNextCyrMedium', sans-serif" margin="8px 0px 0px 0px" text-align="center" color="#fff">
						collectively released and working successfully
					</Text>
					{"            "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section padding="60px 0 80px 0" sm-padding="30px 0 40px 0" background="#eef2f3" display="none">
			<Override slot="SectionContent" align-items="center" />
			<Stack margin="0px 0px 0px 0px" max-width="975px" width="100%">
				{"    "}
				<StackItem width="100%" display="flex">
					<Override slot="StackItemContent" align-items="center" justify-content="center" />
					{"        "}
					<Text
						md-margin="0px 0px 0px 0px"
						font="normal 500 36px/40px 'AvenirNextCyrBold', sans-serif"
						margin="0px 0px 40px 0px"
						display="inline-block"
						sm-text-align="center"
						sm-font="normal 500 24px/30px 'AvenirNextCyrBold', sans-serif"
						sm-margin="0px 0px 0px 0px"
					>
						Последние новости из блогов
						<br />
					</Text>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
			<Stack max-width="1170px" width="100%" margin="10px 0px 0px 0px">
				{"        "}
				<StackItem width="50%" display="flex" sm-width="100%" md-width="100%">
					<Override
						slot="StackItemContent"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="column"
						padding="0px 0px 0px 0px"
						md-align-items="center"
					/>
					<Link href="https://blog.ucoz.ru/" target="_blank">
						<Image margin="0px 0px 0px 0px" src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/ucozuco.svg?v=2021-02-03T15:17:23.120Z" />
					</Link>
					{"            "}
				</StackItem>
				<StackItem
					md-order="1"
					width="50%"
					display="flex"
					sm-width="100%"
					md-width="100%"
				>
					<Override
						slot="StackItemContent"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="column"
						padding="0px 0px 0px 0px"
						md-align-items="center"
					/>
					<Link href="https://blog-ru.ukit.com/" target="_blank">
						<Image margin="0px 0px 0px 0px" src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/ukituco.svg?v=2021-02-03T15:44:44.464Z" />
					</Link>
					{"            "}
				</StackItem>
				<StackItem display="flex" sm-width="100%" md-width="100%" width="50%">
					<Override
						slot="StackItemContent"
						align-items="flex-start"
						justify-content="space-between"
						flex-direction="column"
						background="#ffffff"
						padding="20px 20px 30px 20px"
					/>
					<Image
						max-height="146px"
						src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/14828273.jpg?v=2021-02-03T13:44:49.980Z"
						width="100%"
						margin="0px 0px 18px 0px"
						height="100%"
						srcSet="https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/14828273.jpg?v=2021-02-03T13%3A44%3A49.980Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/14828273.jpg?v=2021-02-03T13%3A44%3A49.980Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/14828273.jpg?v=2021-02-03T13%3A44%3A49.980Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/14828273.jpg?v=2021-02-03T13%3A44%3A49.980Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/14828273.jpg?v=2021-02-03T13%3A44%3A49.980Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/14828273.jpg?v=2021-02-03T13%3A44%3A49.980Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/14828273.jpg?v=2021-02-03T13%3A44%3A49.980Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1280px) 100vw,100vw"
					/>
					<Text margin="0px 0px 12px 0px" font="20px/28px 'AvenirNextCyrMedium', sans-serif" nout-font="20px/23px 'AvenirNextCyrMedium', sans-serif" sm-font="16px/20px 'AvenirNextCyrMedium', sans-serif">
						С Наступающим Новым годом!
					</Text>
					<Link
						target="_blank"
						hover-text-decoration-line="underline"
						transition="all 0.2s ease 0s"
						nout-margin="20px 0px 0px 0px"
						sm-margin="20px 0px 0px 0px"
						href="https://blog.ucoz.ru/ucoz/new-year-2021"
						text-decoration-line="initial"
						md-margin="20px 0px 0px 0px"
						color="#4A8CFA"
						font="20px/28px 'AvenirNextCyrMedium', sans-serif"
					>
						Читать далее
					</Link>
					{"            "}
				</StackItem>
				<StackItem
					width="50%"
					display="flex"
					sm-width="100%"
					md-width="100%"
					md-order="1"
				>
					<Override
						slot="StackItemContent"
						align-items="flex-start"
						justify-content="space-between"
						flex-direction="column"
						background="#ffffff"
						padding="20px 20px 30px 20px"
					/>
					<Image
						width="100%"
						margin="0px 0px 18px 0px"
						height="100%"
						max-height="146px"
						src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/20886398%20(1).png?v=2021-02-03T15:47:32.977Z"
						srcSet="https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/20886398%20(1).png?v=2021-02-03T15%3A47%3A32.977Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/20886398%20(1).png?v=2021-02-03T15%3A47%3A32.977Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/20886398%20(1).png?v=2021-02-03T15%3A47%3A32.977Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/20886398%20(1).png?v=2021-02-03T15%3A47%3A32.977Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/20886398%20(1).png?v=2021-02-03T15%3A47%3A32.977Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/20886398%20(1).png?v=2021-02-03T15%3A47%3A32.977Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/20886398%20(1).png?v=2021-02-03T15%3A47%3A32.977Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1280px) 100vw,100vw"
					/>
					<Text margin="0px 0px 12px 0px" font="20px/28px 'AvenirNextCyrMedium', sans-serif" nout-font="20px/23px 'AvenirNextCyrMedium', sans-serif" sm-font="16px/20px 'AvenirNextCyrMedium', sans-serif">
						Подводим итоги 2020 и встречаем Новый год со скидками!
					</Text>
					<Link
						hover-text-decoration-line="underline"
						transition="all 0.2s ease 0s"
						nout-margin="20px 0px 0px 0px"
						href="https://blog-ru.ukit.com/newsline/new-year-2021"
						text-decoration-line="initial"
						color="#4A8CFA"
						font="20px/28px 'AvenirNextCyrMedium', sans-serif"
						target="_blank"
					>
						Читать далее
					</Link>
					{"            "}
				</StackItem>
				<StackItem width="50%" display="flex" sm-width="100%" md-width="100%">
					<Override
						slot="StackItemContent"
						flex-direction="column"
						background="#ffffff"
						padding="20px 20px 30px 20px"
						align-items="flex-start"
						justify-content="space-between"
					/>
					<Image
						width="100%"
						margin="0px 0px 18px 0px"
						height="100%"
						max-height="146px"
						src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/57744999.png?v=2021-02-03T15:47:32.979Z"
						srcSet="https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/57744999.png?v=2021-02-03T15%3A47%3A32.979Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/57744999.png?v=2021-02-03T15%3A47%3A32.979Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/57744999.png?v=2021-02-03T15%3A47%3A32.979Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/57744999.png?v=2021-02-03T15%3A47%3A32.979Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/57744999.png?v=2021-02-03T15%3A47%3A32.979Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/57744999.png?v=2021-02-03T15%3A47%3A32.979Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/57744999.png?v=2021-02-03T15%3A47%3A32.979Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1280px) 100vw,100vw"
					/>
					<Text margin="0px 0px 12px 0px" font="20px/28px 'AvenirNextCyrMedium', sans-serif" nout-font="20px/23px 'AvenirNextCyrMedium', sans-serif" sm-font="16px/20px 'AvenirNextCyrMedium', sans-serif">
						Нам 15 лет! Празднуем и ностальгируем вместе!
					</Text>
					<Link
						transition="all 0.2s ease 0s"
						nout-margin="20px 0px 0px 0px"
						href="https://blog.ucoz.ru/ucoz/15-years"
						text-decoration-line="initial"
						color="#4A8CFA"
						font="20px/28px 'AvenirNextCyrMedium', sans-serif"
						target="_blank"
						hover-text-decoration-line="underline"
					>
						Читать далее
					</Link>
					{"            "}
				</StackItem>
				<StackItem
					sm-width="100%"
					md-width="100%"
					md-order="1"
					width="50%"
					display="flex"
				>
					<Override
						slot="StackItemContent"
						align-items="flex-start"
						justify-content="space-between"
						flex-direction="column"
						background="#ffffff"
						padding="20px 20px 30px 20px"
					/>
					<Image
						width="100%"
						margin="0px 0px 18px 0px"
						height="100%"
						max-height="146px"
						src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/05479122.png?v=2021-02-03T15:47:52.340Z"
						srcSet="https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/05479122.png?v=2021-02-03T15%3A47%3A52.340Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/05479122.png?v=2021-02-03T15%3A47%3A52.340Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/05479122.png?v=2021-02-03T15%3A47%3A52.340Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/05479122.png?v=2021-02-03T15%3A47%3A52.340Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/05479122.png?v=2021-02-03T15%3A47%3A52.340Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/05479122.png?v=2021-02-03T15%3A47%3A52.340Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/05479122.png?v=2021-02-03T15%3A47%3A52.340Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1280px) 100vw,100vw"
					/>
					<Text margin="0px 0px 12px 0px" font="20px/28px 'AvenirNextCyrMedium', sans-serif" nout-font="20px/23px 'AvenirNextCyrMedium', sans-serif" sm-font="16px/20px 'AvenirNextCyrMedium', sans-serif">
						Большое обновление виджетов и новые шаблоны
					</Text>
					<Link
						href="https://blog-ru.ukit.com/updates/new-templates-and-widgets"
						text-decoration-line="initial"
						color="#4A8CFA"
						font="20px/28px 'AvenirNextCyrMedium', sans-serif"
						target="_blank"
						hover-text-decoration-line="underline"
						transition="all 0.2s ease 0s"
						nout-margin="20px 0px 0px 0px"
					>
						Читать далее
					</Link>
					{"            "}
				</StackItem>
			</Stack>
		</Section>
		<Section padding="40px 0 40px 0">
			<Stack margin="10px 0px 0px 0px" max-width="1170px" width="100%">
				{"        "}
				<StackItem width="50%" display="flex" sm-width="100%">
					<Override
						slot="StackItemContent"
						sm-justify-content="center"
						flex-direction="row"
						align-items="flex-start"
						sm-align-items="center"
					/>
					<Link
						text-decoration-line="initial"
						target="_blank"
						transition="color 0.2s ease 0s"
						font="18px 'AvenirNextCyrMedium', sans-serif"
						hover-color="#4A8CFA"
						align-items="center"
						display="flex"
						color="#263238"
						href="https://www.instagram.com/ucoz_ru/"
					>
						<Icon category="fa" icon={FaInstagram} margin="-1px 12px 0px 0px" />
						<Text margin="0px 0px 0px 0px">
							Follow our team on Instagram
						</Text>
					</Link>
					{"            "}
				</StackItem>
				<StackItem width="50%" display="flex" sm-width="100%">
					<Override
						slot="StackItemContent"
						flex-direction="row"
						align-items="center"
						justify-content="flex-end"
						sm-justify-content="center"
					/>
					<Link
						hover-color="#4A8CFA"
						target="_blank"
						display="flex"
						align-items="center"
						flex-direction="column"
						justify-content="center"
						text-decoration-line="initial"
						color="#263238"
						href="https://www.facebook.com/ucoz.web.builder/"
						font="18px 'AvenirNextCyrMedium', sans-serif"
						transition="color 0.2s ease 0s"
						margin="0px 24px 0px 0px"
					>
						uCoz on Facebook
						<Image
							width="100px"
							height="100px"
							src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/ucoz.png?v=2021-02-01T22:05:06.991Z"
							margin="18px 0px 0px 0px"
							srcSet="https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/ucoz.png?v=2021-02-01T22%3A05%3A06.991Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/ucoz.png?v=2021-02-01T22%3A05%3A06.991Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/ucoz.png?v=2021-02-01T22%3A05%3A06.991Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/ucoz.png?v=2021-02-01T22%3A05%3A06.991Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/ucoz.png?v=2021-02-01T22%3A05%3A06.991Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/ucoz.png?v=2021-02-01T22%3A05%3A06.991Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/ucoz.png?v=2021-02-01T22%3A05%3A06.991Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1280px) 100vw,100vw"
						/>
					</Link>
					<Link
						display="flex"
						justify-content="center"
						font="18px 'AvenirNextCyrMedium', sans-serif"
						href="https://www.facebook.com/ukitcom.en/"
						flex-direction="column"
						text-decoration-line="initial"
						color="#263238"
						transition="color 0.2s ease 0s"
						hover-color="#4A8CFA"
						target="_blank"
						align-items="center"
					>
						uKit on Facebook
						<Image
							width="100px"
							height="100px"
							src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/5.png?v=2021-01-28T01:00:02.248Z"
							margin="18px 0px 0px 0px"
							srcSet="https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/5.png?v=2021-01-28T01%3A00%3A02.248Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/5.png?v=2021-01-28T01%3A00%3A02.248Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/5.png?v=2021-01-28T01%3A00%3A02.248Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/5.png?v=2021-01-28T01%3A00%3A02.248Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/5.png?v=2021-01-28T01%3A00%3A02.248Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/5.png?v=2021-01-28T01%3A00%3A02.248Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/5.png?v=2021-01-28T01%3A00%3A02.248Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1280px) 100vw,100vw"
						/>
					</Link>
					{"            "}
				</StackItem>
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