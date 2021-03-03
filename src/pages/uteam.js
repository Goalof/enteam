import React from "react";
import theme from "theme";
import { Theme, Link, Text, Button, Image, Box, Icon } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Stack, Section } from "@quarkly/components";
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
						font="--headline1"
						margin="0px 0px 5px 0px"
						display="inline-block"
						sm-text-align="center"
						sm-margin="0px 0px 0px 0px"
						text-align="center"
						color="#263238"
						sm-font="normal 900 53px/1.2 'AvenirNextCyrBold', sans-serif"
					>
						uTeam
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="100%" display="flex">
					<Override slot="StackItemContent" align-items="center" justify-content="center" />
					{"        "}
					<Text
						font="normal 400 20px/28px 'AvenirNextCyrRegular', sans-serif"
						margin="0px 10px 5px 10px"
						display="inline-block"
						sm-text-align="center"
						sm-margin="0px 0px 0px 0px"
						text-align="center"
						letter-spacing="0.3px"
						sm-font="normal 400 18px/26px 'AvenirNextCyrRegular', sans-serif"
					>
						We take pride not only in delivering professional services that meet your needs, but also in making friends within the team. Together, we are more than skilled specialists, we are a big family. Have a look at the people behind uProjects and learn what it’s like to work here. Perhaps, you’ll join us very soon.
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="100%" display="none">
					<Override slot="StackItemContent" align-items="center" justify-content="center" />
					{"        "}
					<Components.Slider width="100%" slides="http://ru.uteam.pro/img/members/new_ourteam_page/24.jpg,http://ru.uteam.pro/img/members/new_ourteam_page/23.jpg,http://ru.uteam.pro/img/members/new_ourteam_page/20.jpg,http://ru.uteam.pro/img/members/new_ourteam_page/19.jpg,http://ru.uteam.pro/img/members/new_ourteam_page/18.jpg,http://ru.uteam.pro/img/members/new_ourteam_page/17.jpg,http://ru.uteam.pro/img/members/new_ourteam_page/16.jpg,http://ru.uteam.pro/img/members/new_ourteam_page/15.jpg,http://ru.uteam.pro/img/members/new_ourteam_page/14.jpg,http://ru.uteam.pro/img/members/new_ourteam_page/13.jpg,http://ru.uteam.pro/img/members/new_ourteam_page/12.jpg,http://ru.uteam.pro/img/members/new_ourteam_page/10.jpg,http://ru.uteam.pro/img/members/new_ourteam_page/09.jpg,http://ru.uteam.pro/img/members/new_ourteam_page/08.jpg,http://ru.uteam.pro/img/members/new_ourteam_page/07.jpg,http://ru.uteam.pro/img/members/new_ourteam_page/06.jpg,http://ru.uteam.pro/img/members/new_ourteam_page/05.jpg,http://ru.uteam.pro/img/members/new_ourteam_page/04.jpg,http://ru.uteam.pro/img/members/new_ourteam_page/03.jpg,http://ru.uteam.pro/img/members/new_ourteam_page/02.jpg">
						<Override
							slot="Slide Description"
							margin="16px 0px 0px 0px"
							background="rgba(0, 0, 0, 0.55)"
							font="400 14px/18px 'AvenirNextCyrMedium'"
							color="#ffffff"
						>
							Slide 1 text
						</Override>
						<Override slot="Slide 1 Description">
							Команда uKit, Ростов-на-Дону
						</Override>
						<Override slot="Slide 2 Description">
							Павел Кудинов, технический директор uKit, руковдитель uKit AI, Ростов-на-Дону
						</Override>
						<Override slot="Slide 3 Description">
							Frontend-разработчики, Луис Бланко и Роман Арестович, Ростов-на-Дону
						</Override>
						<Override slot="Slide 4 Description">
							Команда дизайнеров, Ростов-на-Дону
							<br />
							Андрей Сербуль, Анна Курсанова, Виктор Кадников, Екатерина Чубукова
						</Override>
						<Override slot="Slide 5 Description">
							Дизайнеры, Анна Курсанова и Андрей Сербуль, Ростов-на-Дону
						</Override>
						<Override slot="Slide 6 Description">
							uTeam, Ростов-на-Дону
							<br />
							{" "}Роман Штейнберг, Александр Пезиков, Ирина Черепанова, Павел Кудинов, Михаил Гуревич
						</Override>
						<Override slot="Slide 7 Description">
							uTeam, Ростов-на-Дону
						</Override>
						<Override slot="Slide 8 Description">
							Татьяна Жукова, руководитель направления локализации, Ростов-на-Дону
						</Override>
						<Override slot="Slide 9 Description">
							Дмитрий Молчанов, руководитель проекта uCalc, Ростов-на-Дону
						</Override>
						<Override slot="Slide 10 Description">
							Иван Возлюбленный, scrum-мастер
							<br />
							{" "}Георгий Авсецин, UI/UX-дизайнер Web Tycoon
						</Override>
						<Override slot="Slide 11 Description">
							HR, Ольга Колесникова и Наталья Маринченко, Ростов-на-Дону
						</Override>
						<Override slot="Slide 12 Description">
							uTeam, ростовский офис
						</Override>
						<Override slot="Slide 13 Description">
							uTeam, ростовский офис
						</Override>
						<Override slot="Slide 14 Description">
							uTeam, ростовский офис
						</Override>
						<Override slot="Slide 15 Description">
							Михаил Гуревич, финансовый директор uKit Group, Ростов-на-Дону
						</Override>
						<Override slot="Slide 16 Description">
							Финансовый департамент, Москва
							<br />
							Зарина Татрова, Чемарина Алиса, Горбунова Анастасия, Лобаскова Александра
						</Override>
						<Override slot="Slide 17 Description">
							Совещание в головном офис в Москве. Справа – Ирина Черепанова, директор по продукту, Алексей Попов, руководитель техподдержки, Анна Лубенченко и Антон Бурлаков
						</Override>
						<Override slot="Slide 18 Description">
							Олег Лисовенко, менеджер проектов и маркетолог, Санкт-Петербург
						</Override>
						<Override slot="Slide 19 Description">
							uTeam, Санкт-Петербург
						</Override>
						<Override slot="Slide 20 Description">
							Команда uCoz, Черкассы (Украина)
						</Override>
						<Override slot="Points" display="none" />
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
						defaultTab="one"
						orientation="Horizontal"
						width="100%"
						height="auto"
						align="center"
						margin="0px 0px 0px 0px"
					>
						<Components.TabList sm-width="100%" sm-display="flex" sm-flex-direction="column">
							<Override slot="TabList Wrapper" sm-flex-direction="column" />
							<Components.TabItem
								tabId="one"
								color="#263238"
								background="#E4E9ED"
								transition="all 0.2s linear 0s"
								margin="0px 2px 0px 0px"
								border-radius="5px 0px 0px 5px"
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
									border-color="rgba(74, 140, 250, 0)"
									border-width="2px"
									border-style="solid"
									color="inherit"
									transition="all 0.2s linear 0s"
									border-radius="5px 0px 0px 5px"
									margin="0px 0px 0px 0px"
								/>
								<Button
									background="rgba(0, 119, 204, 0)"
									color="inherit"
									padding="8px 12px 8px 12px"
									font="normal 400 14px/22px 'AvenirNextCyrMedium'"
									transition="all 0.2s linear 0s"
									focus-box-shadow="none"
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
									color="#fff"
									background="#4a8cfa"
									border-width="2px"
									border-style="solid"
									border-color="#4a8cfa"
								/>
								<Override
									slot="Tab"
									border-radius="0px"
									border-width="2px"
									border-style="solid"
									border-color="rgba(0, 0, 0, 0)"
									transition="all 0.2s linear 0s"
									margin="0px 0px 0px 0px"
								/>
								<Button
									background="rgba(0, 119, 204, 0)"
									color="inherit"
									padding="8px 12px 8px 12px"
									font="normal 400 14px/22px 'AvenirNextCyrMedium'"
									border-width="0px"
									transition="all 0.2s linear 0s"
									focus-box-shadow="none"
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
									color="#fff"
									background="#4a8cfa"
									border-width="2px"
									border-style="solid"
									border-color="#4a8cfa"
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
									background="rgba(0, 119, 204, 0)"
									color="inherit"
									padding="8px 12px 8px 12px"
									font="normal 400 14px/22px 'AvenirNextCyrMedium'"
									border-width="0px"
									transition="all 0.2s linear 0s"
									focus-box-shadow="none"
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
									color="#fff"
									background="#4a8cfa"
									border-width="2px"
									border-style="solid"
									border-color="#4a8cfa"
								/>
								<Override
									slot="Tab"
									border-radius="0px 5px 5px 0px"
									border-width="2px"
									border-style="solid"
									border-color="rgba(0, 0, 0, 0)"
									transition="all 0.2s linear 0s"
									margin="0px 2px 0px 0px"
								/>
								<Button
									background="rgba(0, 119, 204, 0)"
									color="inherit"
									padding="8px 12px 8px 12px"
									font="normal 400 14px/22px 'AvenirNextCyrMedium'"
									border-width="0px"
									transition="all 0.2s linear 0s"
									focus-box-shadow="none"
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
											font="normal 400 30px/36px 'AvenirNextCyrBold', sans-serif"
											margin="0px 0px 18px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="center"
											letter-spacing="0.3px"
											color="#3D72CC"
										>
											9 employees
										</Text>
										<Text
											font="normal 400 18px/26px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 5px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#9BABBF"
											lg-text-align="center"
										>
											The Moscow office of the company hosts senior managers, product, marketing and PR teams, as well as the accounting department.
										</Text>
										{"    "}
									</StackItem>
									<StackItem width="20%" display="flex" lg-width="50%" sm-width="100%">
										<Override
											slot="StackItemContent"
											align-items="flex-start"
											justify-content="center"
											flex-direction="column"
											lg-align-items="center"
										/>
										{"        "}
										<Image
											width="90px"
											height="90px"
											margin="0px 0px 24px 0px"
											src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/kurt.jpg?v=2021-01-28T13:05:31.217Z"
											border-radius="100%"
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
											Evgeny Kurt
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
											CEO
										</Text>
										{"    "}
									</StackItem>
									<StackItem width="20%" display="flex" lg-width="50%" sm-width="100%">
										<Override
											slot="StackItemContent"
											align-items="flex-start"
											justify-content="center"
											flex-direction="column"
											lg-align-items="center"
										/>
										{"        "}
										<Image
											width="90px"
											height="90px"
											margin="0px 0px 24px 0px"
											src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/cherepanova.jpg?v=2021-02-02T11:19:38.438Z"
											border-radius="100%"
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
											Irina Cherepanova
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
											Zarina Tatrova
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
											Chief Accountant
										</Text>
										{"    "}
									</StackItem>
									<StackItem width="20%" display="flex" lg-width="50%" sm-width="100%">
										<Override
											slot="StackItemContent"
											align-items="flex-start"
											justify-content="center"
											flex-direction="column"
											lg-align-items="center"
										/>
										{"        "}
										<Image
											width="90px"
											height="90px"
											margin="0px 0px 24px 0px"
											src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/popov.jpg?v=2021-02-02T11:19:38.411Z"
											border-radius="100%"
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
											Alexey Popov
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
											margin="0px 0px 24px 0px"
											width="90px"
											height="90px"
											border-radius="50%"
											background="#3D72CC"
											display="flex"
											align-items="center"
											justify-content="center"
										>
											<Text color="#ffffff" font="500 36px 'AvenirNextCyrBold', sans-serif">
												+5
											</Text>
										</Box>
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
											specialists{"\n\n"}
										</Text>
										{"    "}
									</StackItem>
									{"        "}
								</Stack>
							</Components.TabPanel>
							<Components.TabPanel tabId="two">
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
											font="normal 400 30px/36px 'AvenirNextCyrBold', sans-serif"
											margin="0px 0px 18px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="center"
											letter-spacing="0.3px"
											color="#3D72CC"
										>
											17 employees{"\n\n"}
										</Text>
										<Text
											font="normal 400 18px/26px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 5px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#9BABBF"
											lg-text-align="center"
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
											width="90px"
											height="90px"
											margin="0px 0px 24px 0px"
											src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/lisovenko.jpg?v=2021-02-02T11:26:45.639Z"
											border-radius="100%"
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
											Oleg Lisovenko
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
											Oleg Pavlov
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
											SMM and Direct Marketer
											<br />
											{"\n\n"}
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
											src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/kuznetcov.jpg?v=2021-02-02T11:26:45.640Z"
											border-radius="100%"
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
											Viktor Kuznetsov
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
											Head of Technical
											<br />
											Support Team{"\n\n"}
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
											margin="0px 0px 24px 0px"
											width="90px"
											height="90px"
											border-radius="50%"
											background="#3D72CC"
											display="flex"
											align-items="center"
											justify-content="center"
										>
											<Text font="500 36px 'AvenirNextCyrBold', sans-serif" color="#ffffff">
												+14
											</Text>
										</Box>
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
											align-items="flex-start"
											justify-content="flex-start"
											flex-direction="column"
											lg-align-items="center"
											lg-justify-content="center"
										/>
										{"        "}
										<Text
											font="normal 400 30px/36px 'AvenirNextCyrBold', sans-serif"
											margin="0px 0px 18px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="center"
											letter-spacing="0.3px"
											color="#3D72CC"
										>
											59 
employees{"\n\n"}
										</Text>
										<Text
											font="normal 400 18px/26px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 5px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#9BABBF"
											lg-text-align="center"
										>
											The biggest team works in the Rostov office. This is the place where uKit is being developed. The teams of the uKit AI, uLanding, uCalc and Web Tycoon projects work here.
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
											src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/kudinov.jpg?v=2021-02-03T10:12:38.861Z"
											border-radius="100%"
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
											Pavel Kudinov
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
											CTO, Head of uKit AI
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
											src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/zhukova.jpg?v=2021-02-03T10:12:38.858Z"
											border-radius="100%"
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
											src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/mudrov.jpg?v=2021-02-03T10:12:38.864Z"
											border-radius="100%"
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
											Evgeny Mudrov
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
											Andrey Derbitov
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
											Viktor Kadnikov
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
											Art Director at uKit
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
											margin="0px 0px 24px 0px"
											width="90px"
											height="90px"
											border-radius="50%"
											background="#3D72CC"
											display="flex"
											align-items="center"
											justify-content="center"
										>
											<Text font="500 36px 'AvenirNextCyrBold', sans-serif" color="#ffffff">
												+54
											</Text>
										</Box>
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
											specialists{"\n\n"}
										</Text>
										{"    "}
									</StackItem>
									{"        "}
								</Stack>
							</Components.TabPanel>
							<Components.TabPanel tabId="four">
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
											font="normal 400 30px/36px 'AvenirNextCyrBold', sans-serif"
											margin="0px 0px 18px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="center"
											letter-spacing="0.3px"
											color="#3D72CC"
										>
											25 
employees{"\n\n"}
										</Text>
										<Text
											font="normal 400 18px/26px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 5px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#9BABBF"
											lg-text-align="center"
										>
											Historically, this is the first office of the company. Here the legendary uCoz, as well as uID.me and uShop are being developed.
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
											src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/kolpakov.jpg?v=2021-02-03T12:07:48.618Z"
											border-radius="100%"
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
											Ivan Kolpakov
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
											CTO at uCoz
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
											src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/donets.jpg?v=2021-02-03T12:07:48.614Z"
											border-radius="100%"
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
											Alexey Donets
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
											Marketing, SEO and PR Specialist
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
											src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/latanuk.jpg?v=2021-02-03T12:07:48.614Z"
											border-radius="100%"
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
											font="normal 400 14px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 0px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#9BABBF"
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
											Nataliya Pereyaslovets
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
											Senior QA Engineer
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
											src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/chubenko.jpg?v=2021-02-03T12:07:48.638Z"
											border-radius="100%"
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
											Igor Chubenko
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
											margin="0px 0px 24px 0px"
											width="90px"
											height="90px"
											border-radius="50%"
											background="#3D72CC"
											display="flex"
											align-items="center"
											justify-content="center"
										>
											<Text font="500 36px 'AvenirNextCyrBold', sans-serif" color="#ffffff">
												+20
											</Text>
										</Box>
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
					width="33.333%"
					display="flex"
					sm-width="100%"
					md-width="100%"
					md-margin="0px 0px 17px 0px"
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
					<Override slot="StackItemContent" align-items="center" justify-content="flex-start" flex-direction="column" />
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
					width="33.333%"
					display="flex"
					sm-width="100%"
					md-width="100%"
					md-margin="0px 0px 17px 0px"
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
						font="normal 500 36px/40px 'AvenirNextCyrBold', sans-serif"
						margin="0px 0px 40px 0px"
						display="inline-block"
						sm-text-align="center"
						sm-font="normal 500 24px/30px 'AvenirNextCyrBold', sans-serif"
						sm-margin="0px 0px 0px 0px"
						md-margin="0px 0px 0px 0px"
					>
						Последние новости из блогов
						<br />
					</Text>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
			<Stack margin="10px 0px 0px 0px" max-width="1170px" width="100%">
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
					width="50%"
					display="flex"
					sm-width="100%"
					md-width="100%"
					md-order="1"
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
				<StackItem width="50%" display="flex" sm-width="100%" md-width="100%">
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
						src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/14828273.jpg?v=2021-02-03T13:44:49.980Z"
					/>
					<Text margin="0px 0px 12px 0px" font="20px/28px 'AvenirNextCyrMedium', sans-serif" nout-font="20px/23px 'AvenirNextCyrMedium', sans-serif" sm-font="16px/20px 'AvenirNextCyrMedium', sans-serif">
						С Наступающим Новым годом!
					</Text>
					<Link
						href="https://blog.ucoz.ru/ucoz/new-year-2021"
						text-decoration-line="initial"
						color="#4A8CFA"
						font="20px/28px 'AvenirNextCyrMedium', sans-serif"
						target="_blank"
						hover-text-decoration-line="underline"
						transition="all 0.2s ease 0s"
						md-margin="20px 0px 0px 0px"
						nout-margin="20px 0px 0px 0px"
						sm-margin="20px 0px 0px 0px"
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
					/>
					<Text margin="0px 0px 12px 0px" font="20px/28px 'AvenirNextCyrMedium', sans-serif" nout-font="20px/23px 'AvenirNextCyrMedium', sans-serif" sm-font="16px/20px 'AvenirNextCyrMedium', sans-serif">
						Подводим итоги 2020 и встречаем Новый год со скидками!
					</Text>
					<Link
						href="https://blog-ru.ukit.com/newsline/new-year-2021"
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
				<StackItem width="50%" display="flex" sm-width="100%" md-width="100%">
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
						src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/57744999.png?v=2021-02-03T15:47:32.979Z"
					/>
					<Text margin="0px 0px 12px 0px" font="20px/28px 'AvenirNextCyrMedium', sans-serif" nout-font="20px/23px 'AvenirNextCyrMedium', sans-serif" sm-font="16px/20px 'AvenirNextCyrMedium', sans-serif">
						Нам 15 лет! Празднуем и ностальгируем вместе!
					</Text>
					<Link
						href="https://blog.ucoz.ru/ucoz/15-years"
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
						src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/05479122.png?v=2021-02-03T15:47:52.340Z"
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
						flex-direction="row"
						align-items="flex-start"
						sm-align-items="center"
						sm-justify-content="center"
					/>
					<Link
						href="https://www.instagram.com/ucoz_ru/"
						display="flex"
						align-items="center"
						text-decoration-line="initial"
						target="_blank"
						transition="color 0.2s ease 0s"
						font="18px 'AvenirNextCyrMedium', sans-serif"
						color="#263238"
						hover-color="#4A8CFA"
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
						href="https://www.facebook.com/ucoz.web.builder/"
						display="flex"
						align-items="center"
						flex-direction="column"
						justify-content="center"
						text-decoration-line="initial"
						color="#263238"
						font="18px 'AvenirNextCyrMedium', sans-serif"
						transition="color 0.2s ease 0s"
						hover-color="#4A8CFA"
						target="_blank"
						margin="0px 24px 0px 0px"
					>
						uCoz on Facebook
						<Image width="100px" height="100px" src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/ucoz.png?v=2021-02-01T22:05:06.991Z" margin="18px 0px 0px 0px" />
					</Link>
					<Link
						href="https://www.facebook.com/ukitcom.en/"
						display="flex"
						align-items="center"
						flex-direction="column"
						justify-content="center"
						text-decoration-line="initial"
						color="#263238"
						font="18px 'AvenirNextCyrMedium', sans-serif"
						transition="color 0.2s ease 0s"
						hover-color="#4A8CFA"
						target="_blank"
					>
						uKit on Facebook
						<Image width="100px" height="100px" src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/5.png?v=2021-01-28T01:00:02.248Z" margin="18px 0px 0px 0px" />
					</Link>
					{"            "}
				</StackItem>
			</Stack>
		</Section>
		<Components.Footer />
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"602c67f4d524b3b42d4be948"}>
				{"* {\n  scroll-behavior: smooth;\n  }\n.nobutton {\npointer-events: none; \n}\n  .active .fileText {\n  display: none;\n  }\n  input.fileText {\n      opacity: 1 !important;\n  }\n  * {\n    -webkit-tap-highlight-color: transparent!important;\n  }\n  @font-face {\n    font-family: 'AvenirNextCyrRegular';\n    src: url('/fonts/AvenirNextCyr-Regular.eot');\n    src: url('/fonts/AvenirNextCyr-Regular.eot?#iefix') format('embedded-opentype'), url('/fonts/AvenirNextCyr-Regular.woff') format('woff'), url('/fonts/AvenirNextCyr-Regular.ttf') format('truetype');\n    font-weight: normal;\n    font-style: normal;\n    font-display: auto;\n  }\n  @font-face {\n    font-family: 'AvenirNextCyrMedium';\n    src: url('/fonts/AvenirNextCyr-Medium.eot');\n    src: url('/fonts/AvenirNextCyr-Medium.eot?#iefix') format('embedded-opentype'), url('/fonts/AvenirNextCyr-Medium.woff') format('woff'), url('/fonts/AvenirNextCyr-Medium.ttf') format('truetype');\n    font-weight: normal;\n    font-style: normal;\n    font-display: auto;\n  }\n  @font-face {\n    font-family: 'AvenirNextCyrBold';\n    src: url('/fonts/AvenirNextCyr-Bold.eot');\n    src: url('/fonts/AvenirNextCyr-Bold.eot?#iefix') format('embedded-opentype'), url('/fonts/AvenirNextCyr-Bold.woff') format('woff'), url('/fonts/AvenirNextCyr-Bold.ttf') format('truetype');\n    font-weight: normal;\n    font-style: normal;\n    font-display: auto;\n  }\n  @font-face {\n    font-family: 'AvenirNextCyrDemi';\n    src: url('/fonts/AvenirNextCyr-Demi.otf');\n    font-weight: normal;\n    font-style: normal;\n    font-display: auto;\n  }\n  body {\n    font-family: 'AvenirNextCyrRegular', sans-serif;\n    font-weight: normal;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n:focus {\n    outline: none;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});