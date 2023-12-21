import React from "react";
import theme from "theme";
import { Theme, Text, Section, Icon, Button, Link, Box, Hr } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Stack } from "@quarkly/components";
import * as Components from "components";
import { FaBoxes, FaFileCode } from "react-icons/fa";
import { MdTouchApp } from "react-icons/md";
import { IoIosChatboxes } from "react-icons/io";
import { BsPieChartFill } from "react-icons/bs";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"vacancies"} />
		<Helmet>
			<title>
				Jobs - Jobs at uTeam
			</title>
			<meta name={"description"} content={"Jobs at uCoz. All job opportunities at uCoz by roles and projects. Office and remote work."} />
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
		{" "}
		<Components.Header />
		<Section md-padding="150px 0 80px 0" sm-padding="150px 0 80px 0" padding="150px 0 150px 0" background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/vac_head.jpg?v=2021-01-28T20:18:22.116Z) 0% 0% /cover repeat scroll padding-box">
			<Override slot="SectionContent" align-items="center" />
			<Stack margin="0px 0px 0px 0px" max-width="850px">
				{"    "}
				<StackItem width="100%" display="flex">
					<Override slot="StackItemContent" align-items="center" justify-content="center" />
					{"        "}
					<Text
						font="normal 500 64px/1.2 'AvenirNextCyrDemi', sans-serif"
						margin="0px 0px 5px 0px"
						display="inline-block"
						sm-text-align="center"
						sm-margin="0px 0px 0px 0px"
						text-align="center"
						color="#ffffff"
						sm-font="normal 500 48px/1.2 'AvenirNextCyrDemi', sans-serif"
					>
						Jobs
					</Text>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section min-height="80vh" lg-min-height="auto" padding="0px 0 40px 0">
			<Override slot="SectionContent" align-items="center" md-margin="0px 0px 0px 0px" md-width="100%" />
			<Stack margin="0px 0px 0px 0px" max-width="1170px" width="100%">
				<StackItem width="100%">
					<Override slot="StackItemContent" md-width="100%" />
					<Components.Tabs2 defaultTab="all" width="100%">
						<Override
							slot="Tab"
							font="normal 400 14px/22px 'AvenirNextCyrMedium'"
							margin="0px 2px 0px 0px"
							md-width="100%"
							background="#fff"
							focus-box-shadow="none"
							padding="10px 24px 10px 24px"
							border-radius="0px"
							md-background="#E4E9ED"
							md-color="#333"
							md-margin="0px 32px 0px 32px"
							display="block"
							color="#4a8cfa"
						/>
						<Override
							slot="Tab :active"
							md-border-radius="0px"
							md-background="#ffe02d"
							background="#ffe02d"
							color="#263238"
						>
							All offers
						</Override>
						<Override slot="Tab 6021ccde9e849bcf1214b34e">
							Remote work
						</Override>
						<Override slot="Tab fl" border-radius="0px 5px 5px 0px" md-border-radius="0px">
							Remote work
						</Override>
						<Override slot="Tab all" border-radius="5px 0px 0px 5px" md-border-radius="0px">
							All offers
						</Override>
						<Override
							slot="Tab msk"
							opacity=".7"
							className="nobutton"
							border-radius="0px"
							pointer-events="none"
							cursor="default"
						>
							Office work
						</Override>
						<Override slot="Tab spb" border-radius="0px" display="none">
							Санкт-Петербург
						</Override>
						<Override
							slot="Tablist"
							align-items="center"
							justify-content="center"
							position="relative"
							top="-130px"
							md-position="sticky"
							md-flex-direction="column"
						/>
						<Override slot="Tab rnd" display="none">
							Ростов-на-Дону
						</Override>
						<Components.Tab2 tabId="all">
							<Stack margin="0px 0px 0px 0px">
								<StackItem sm-width="100%" width="100%" display="flex" lg-width="\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\">
									<Override
										slot="StackItemContent"
										justify-content="flex-start"
										flex-direction="column"
										lg-align-items="center"
										md-padding="30px 0px 0px 0px"
										align-items="flex-start"
									/>
									{"        "}
									<Components.Tabs
										justify-content="space-between"
										height="auto"
										defaultTab="one"
										orientation="Vertical"
										width="100%"
										flex-direction="row-reverse"
									>
										<Components.TabList md-display="none" width="20%" lg-width="30%">
											<Components.TabItem tabId="one">
												<Override slot="Selected Tab" color="#3d72cc" />
												<Override slot="Tab" color="#afc1db" />
												<Button
													color="inherit"
													font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
													letter-spacing=".2px"
													align-items="center"
													padding="8px 24px 8px 12px"
													background="rgba(0, 119, 204, 0)"
													display="flex"
													focus-box-shadow="none"
													lg-font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
												>
													<Icon
														category="fa"
														icon={FaBoxes}
														color="#inherit"
														margin="0px 8px 0px 0px"
														size="20px"
													/>
													ALL JOBS (1)
												</Button>
											</Components.TabItem>
											<Components.TabItem tabId="two" display="none">
												<Override slot="Selected Tab" color="#3d72cc" />
												<Override slot="Tab" color="#afc1db" />
												<Button
													padding="8px 24px 8px 12px"
													lg-font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
													background="rgba(0, 119, 204, 0)"
													color="inherit"
													font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
													display="flex"
													letter-spacing=".2px"
													align-items="center"
													focus-box-shadow="none"
												>
													<Icon
														color="inherit"
														margin="0px 8px 0px 0px"
														category="fa"
														icon={FaFileCode}
														size="20px"
													/>
													РАЗРАБОТКА (6)
												</Button>
											</Components.TabItem>
											<Components.TabItem tabId="three" display="none">
												<Override slot="Tab" color="#afc1db" />
												<Override slot="Selected Tab" color="#3d72cc" />
												<Button
													display="flex"
													padding="8px 24px 8px 12px"
													text-transform="uppercase"
													background="rgba(0, 119, 204, 0)"
													font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
													letter-spacing=".2px"
													align-items="center"
													focus-box-shadow="none"
													lg-font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
													color="inherit"
												>
													<Icon
														margin="0px 8px 0px 0px"
														category="md"
														icon={MdTouchApp}
														size="20px"
														color="inherit"
													/>
													Менеджмет (1)
												</Button>
											</Components.TabItem>
											<Components.TabItem tabId="four">
												<Override slot="Selected Tab" color="#3d72cc" />
												<Override slot="Tab" color="#afc1db" />
												<Button
													focus-box-shadow="none"
													lg-font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
													background="rgba(0, 119, 204, 0)"
													color="inherit"
													padding="8px 24px 8px 12px"
													align-items="center"
													font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
													letter-spacing=".2px"
													display="flex"
												>
													<Icon
														margin="0px 8px 0px 0px"
														category="io"
														icon={IoIosChatboxes}
														size="20px"
														color="inherit"
													/>
													CUSTOMER SUPPORT (1)
												</Button>
											</Components.TabItem>
											<Components.TabItem tabId="five" display="none">
												<Override slot="Selected Tab" color="#3d72cc" />
												<Override slot="Tab" color="#afc1db" />
												<Button
													background="rgba(0, 119, 204, 0)"
													color="inherit"
													font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
													display="flex"
													letter-spacing=".2px"
													align-items="center"
													padding="8px 24px 8px 12px"
													focus-box-shadow="none"
													lg-font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
												>
													<Icon
														category="bs"
														icon={BsPieChartFill}
														size="18px"
														color="inherit"
														margin="0px 8px 0px 0px"
													/>
													{" "}МАРКЕТИНГ, РЕКЛАМА, PR (4)
												</Button>
											</Components.TabItem>
										</Components.TabList>
										<Components.TabPanels width="80%" md-width="100%" lg-width="70%">
											<Components.TabPanel tabId="one" md-width="100%">
												<Box padding="0px 0px 15px 0px" margin="0px 0px 0px 0px" width="90%">
													<Link
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
														href="/vacancies/technology-evangelistdeveloper-advocate"
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
													>
														Technology Evangelist/Developer Advocate
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Support Project
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														We are looking for an energetic, diligent and attentive professional to join our technical support team.
														<br />
													</Text>
												</Box>
											</Components.TabPanel>
											<Components.TabPanel tabId="two" md-width="100%">
												<Box padding="0px 0px 15px 0px" margin="0px 0px 0px 0px" width="90%">
													<Link
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
														href="/vacancies/back-end-razrabotchik-php"
														text-decoration-line="initial"
														color="#263238"
													>
														Back-end разработчик (PHP)
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект Divly, uSocial | Санкт-Петербург
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														Компания uKit Group г. Санкт-Петербург приглашает в свою дружную команду back-end разработчика.
													</Text>
													<Hr padding="0px 0px 0px 0px" margin="30px 0px 16px 0px" background="rgb(219, 230, 244)" height="1px" />
												</Box>
												<Box margin="0px 0px 0px 0px" width="90%" padding="0px 0px 15px 0px">
													<Link
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
														href="/vacancies/sborka-sajtov-na-konstruktore-sajtov-ukit"
													>
														Сборка сайтов на конструкторе сайтов uKit
													</Link>
													<Text color="#333" md-font="15px 'AvenirNextCyrMedium'" margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'">
														Проект Divly | Санкт-Петербург
													</Text>
													<Text color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif" margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif">
														Компания uKit Group г. Санкт-Петербург приглашает в свою дружную команду начинающих веб-мастеров или студентов сборки сайтов на конструкторе uKit.com
														<br />
													</Text>
													<Hr background="rgb(219, 230, 244)" height="1px" padding="0px 0px 0px 0px" margin="30px 0px 16px 0px" />
												</Box>
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px">
													<Link
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
														href="/vacancies/sborshik-sajtov-na-konstruktorah-ucozuweb"
														text-decoration-line="initial"
														color="#263238"
													>
														Сборщик сайтов на конструкторах uCoz/uWeb
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект Divly | Санкт-Петербург
													</Text>
													<Text md-font="14px 'AvenirNextCyrRegular', sans-serif" margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333">
														Компания uKit Group г. Санкт-Петербург приглашает в свою команду сборщика сайтов на конструкторе uCoz/uWeb
														<br />
													</Text>
													<Hr background="rgb(219, 230, 244)" height="1px" padding="0px 0px 0px 0px" margin="30px 0px 16px 0px" />
												</Box>
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px">
													<Link
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
														href="/vacancies/junior-nodejs-razrabotchik"
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
													>
														Junior node.js разработчик
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект uKit | Ростов-на-Дону
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														Приглашаем на работу Junior node.js разработчика.
														<br />
													</Text>
													<Hr background="rgb(219, 230, 244)" height="1px" padding="0px 0px 0px 0px" margin="30px 0px 16px 0px" />
												</Box>
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px">
													<Link
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
														href="/vacancies/senior-nodejs-engineer"
													>
														Senior Node.js engineer
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект uKit | Ростов-на-Дону
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														В команду проекта uKit разыскивается разработчик, имеющий не менее первого дана по Javascript.
													</Text>
													<Hr margin="30px 0px 16px 0px" background="rgb(219, 230, 244)" height="1px" padding="0px 0px 0px 0px" />
												</Box>
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px">
													<Link
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
														href="/vacancies/programmist-perl"
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
													>
														Программист Perl
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект uCoz | Ростов-на-Дону
													</Text>
													<Text color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif" margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif">
														Вы не знакомы с Perl, но не боитесь попробовать? Это верный выбор и не смотря на то, что данный язык на сегодня не является мейнстримом, как специалист вы только выиграете: перловики на сегодня весьма востребованы именно по причине своей редкости.
														<br />
													</Text>
													<Hr padding="0px 0px 0px 0px" margin="30px 0px 16px 0px" background="rgb(219, 230, 244)" height="1px" />
												</Box>
											</Components.TabPanel>
											<Components.TabPanel tabId="three" md-width="100%">
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px">
													<Link
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
														href="/vacancies/menedzher-dizajner-shablonov"
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
													>
														Менеджер-дизайнер шаблонов
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект uKit | Ростов-на-Дону
													</Text>
													<Text font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif" margin="12px 0px 0px 0px">
														Компания uKit Group приглашает в свою команду менеджера-дизайнера для создания шаблонов для конструктора сайтов uKit. Эта работа для вас если вы знакомы с процессом создания шаблонов для сайтов, имеете опыт работы в студии веб-дизайна.
													</Text>
												</Box>
											</Components.TabPanel>
											<Components.TabPanel tabId="four" md-width="100%">
												<Box padding="0px 0px 15px 0px" margin="0px 0px 0px 0px" width="90%">
													<Link
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
														href="/vacancies/technology-evangelistdeveloper-advocate"
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
													>
														Technology Evangelist/Developer Advocate
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Support Project
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														We are looking for an energetic, diligent and attentive professional to join our technical support team.
														<br />
													</Text>
												</Box>
											</Components.TabPanel>
											<Components.TabPanel tabId="five" md-width="100%">
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px" md-width="100%">
													<Link
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
														href="/vacancies/pr-menedzher"
														text-decoration-line="initial"
													>
														PR-менеджер
													</Link>
													<Text font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'" margin="12px 0px 0px 0px">
														Проект Quarkly | Москва{" "}
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														Мы ищем талантливого PR-щика, серьезно увлеченного вебом. Для продвижения на рынке (в первую очередь англоязычном) проекта Quarkly, ориентированного на профессиональных пользователей (веб-дизайнеров, фронтенд-разработчиков, верстальщиков).
														<br />
													</Text>
													<Hr background="rgb(219, 230, 244)" height="1px" padding="0px 0px 0px 0px" margin="30px 0px 16px 0px" />
												</Box>
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px">
													<Link
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
														href="/vacancies/specialist-po-seo-optimizacii-sajtov"
														text-decoration-line="initial"
														color="#263238"
													>
														Специалист по SEO-оптимизации сайтов
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект Divly | Санкт-Петербург
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														Компания uKit Group приглашает в свою команду специалиста по SEO-оптимизации сайтов.
														<br />
													</Text>
													<Hr background="rgb(219, 230, 244)" height="1px" padding="0px 0px 0px 0px" margin="30px 0px 16px 0px" />
												</Box>
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px">
													<Link
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
														href="/vacancies/pr-menedzher1"
													>
														PR-менеджер
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект Quarkly | Москва{" "}
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														Мы ищем талантливого PR-щика, серьезно увлеченного вебом. Для продвижения на рынке (в первую очередь англоязычном) проекта Quarkly, ориентированного на профессиональных пользователей (веб-дизайнеров, фронтенд-разработчиков, верстальщиков).
														<br />
													</Text>
													<Hr background="rgb(219, 230, 244)" height="1px" padding="0px 0px 0px 0px" margin="30px 0px 16px 0px" />
												</Box>
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px">
													<Link
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
														href="/vacancies/technology-evangelistdeveloper-advocate"
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
													>
														Technology Evangelist/Developer Advocate
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект Quarkly | Удаленная работа
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														Мы ищем человека для продвижения на англоязычном рынке проекта Quarkly, ориентированного на профессиональных пользователей (веб-дизайнеров, фронтенд-разработчиков, верстальщиков).
													</Text>
												</Box>
											</Components.TabPanel>
										</Components.TabPanels>
									</Components.Tabs>
									{"    "}
								</StackItem>
								{"        "}
							</Stack>
						</Components.Tab2>
						<Components.Tab2 tabId="msk">
							<Stack margin="0px 0px 0px 0px">
								<StackItem width="100%" display="flex" lg-width="\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\" sm-width="100%">
									<Override
										slot="StackItemContent"
										align-items="flex-start"
										justify-content="flex-start"
										flex-direction="column"
										lg-align-items="center"
										md-padding="30px 0px 0px 0px"
									/>
									{"        "}
									<Components.Tabs
										height="auto"
										defaultTab="one"
										orientation="Vertical"
										width="100%"
										flex-direction="row-reverse"
										justify-content="space-between"
									>
										<Components.TabList width="20%" md-display="none">
											<Components.TabItem tabId="one">
												<Override slot="Selected Tab" color="#3d72cc" />
												<Override slot="Tab" color="#afc1db" />
												<Button
													lg-font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
													background="rgba(0, 119, 204, 0)"
													color="inherit"
													display="flex"
													align-items="center"
													focus-box-shadow="none"
													font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
													letter-spacing=".2px"
													padding="8px 24px 8px 12px"
												>
													<Icon
														category="fa"
														icon={FaBoxes}
														color="#inherit"
														margin="0px 8px 0px 0px"
														size="20px"
													/>
													ВСЕ ВАКАНСИИ (1)
												</Button>
											</Components.TabItem>
											<Components.TabItem tabId="five">
												<Override slot="Selected Tab" color="#3d72cc" />
												<Override slot="Tab" color="#afc1db" />
												<Button
													font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
													letter-spacing=".2px"
													focus-box-shadow="none"
													lg-font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
													background="rgba(0, 119, 204, 0)"
													color="inherit"
													display="flex"
													align-items="center"
													padding="8px 24px 8px 12px"
												>
													<Icon
														category="bs"
														icon={BsPieChartFill}
														size="18px"
														color="inherit"
														margin="0px 8px 0px 0px"
													/>
													{" "}МАРКЕТИНГ, РЕКЛАМА, PR (1)
												</Button>
											</Components.TabItem>
										</Components.TabList>
										<Components.TabPanels width="80%" md-width="100%">
											<Components.TabPanel tabId="one" md-width="100%">
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px" md-width="100%">
													<Link
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
														href="/vacancies/pr-menedzher"
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
													>
														PR-менеджер
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект Quarkly | Москва{" "}
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														Мы ищем талантливого PR-щика, серьезно увлеченного вебом. Для продвижения на рынке (в первую очередь англоязычном) проекта Quarkly, ориентированного на профессиональных пользователей (веб-дизайнеров, фронтенд-разработчиков, верстальщиков).
														<br />
													</Text>
												</Box>
											</Components.TabPanel>
											<Components.TabPanel tabId="five" md-width="100%">
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px" md-width="100%">
													<Link
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
														href="/vacancies/pr-menedzher"
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
													>
														PR-менеджер
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект Quarkly | Москва{" "}
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														Мы ищем талантливого PR-щика, серьезно увлеченного вебом. Для продвижения на рынке (в первую очередь англоязычном) проекта Quarkly, ориентированного на профессиональных пользователей (веб-дизайнеров, фронтенд-разработчиков, верстальщиков).
														<br />
													</Text>
												</Box>
											</Components.TabPanel>
										</Components.TabPanels>
									</Components.Tabs>
									{"    "}
								</StackItem>
								{"        "}
							</Stack>
						</Components.Tab2>
						<Components.Tab2 tabId="spb">
							<Stack margin="0px 0px 0px 0px">
								<StackItem width="100%" display="flex" lg-width="\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\" sm-width="100%">
									<Override
										slot="StackItemContent"
										flex-direction="column"
										lg-align-items="center"
										md-padding="30px 0px 0px 0px"
										align-items="flex-start"
										justify-content="flex-start"
									/>
									{"        "}
									<Components.Tabs
										defaultTab="one"
										orientation="Vertical"
										width="100%"
										flex-direction="row-reverse"
										justify-content="space-between"
										height="auto"
									>
										<Components.TabList md-display="none" width="20%">
											<Components.TabItem tabId="one">
												<Override slot="Selected Tab" color="#3d72cc" />
												<Override slot="Tab" color="#afc1db" />
												<Button
													color="inherit"
													font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
													padding="8px 24px 8px 12px"
													focus-box-shadow="none"
													background="rgba(0, 119, 204, 0)"
													display="flex"
													align-items="center"
													lg-font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
													letter-spacing=".2px"
												>
													<Icon
														icon={FaBoxes}
														color="#inherit"
														margin="0px 8px 0px 0px"
														size="20px"
														category="fa"
													/>
													ВСЕ ВАКАНСИИ (4)
												</Button>
											</Components.TabItem>
											<Components.TabItem tabId="two">
												<Override slot="Selected Tab" color="#3d72cc" />
												<Override slot="Tab" color="#afc1db" />
												<Button
													letter-spacing=".2px"
													align-items="center"
													font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
													display="flex"
													padding="8px 24px 8px 12px"
													focus-box-shadow="none"
													lg-font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
													background="rgba(0, 119, 204, 0)"
													color="inherit"
												>
													<Icon
														color="inherit"
														margin="0px 8px 0px 0px"
														category="fa"
														icon={FaFileCode}
														size="20px"
													/>
													РАЗРАБОТКА (3)
												</Button>
											</Components.TabItem>
											<Components.TabItem tabId="five">
												<Override slot="Selected Tab" color="#3d72cc" />
												<Override slot="Tab" color="#afc1db" />
												<Button
													display="flex"
													align-items="center"
													focus-box-shadow="none"
													background="rgba(0, 119, 204, 0)"
													letter-spacing=".2px"
													padding="8px 24px 8px 12px"
													lg-font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
													color="inherit"
													font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
												>
													<Icon
														margin="0px 8px 0px 0px"
														category="bs"
														icon={BsPieChartFill}
														size="18px"
														color="inherit"
													/>
													{" "}МАРКЕТИНГ, РЕКЛАМА, PR (1)
												</Button>
											</Components.TabItem>
										</Components.TabList>
										<Components.TabPanels width="80%" md-width="100%">
											<Components.TabPanel tabId="one" md-width="100%">
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px">
													<Link
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
														href="/vacancies/back-end-razrabotchik-php"
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
													>
														Back-end разработчик (PHP)
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект Divly, uSocial | Санкт-Петербург
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														Компания uKit Group г. Санкт-Петербург приглашает в свою дружную команду back-end разработчика.
													</Text>
													<Hr background="rgb(219, 230, 244)" height="1px" padding="0px 0px 0px 0px" margin="30px 0px 16px 0px" />
												</Box>
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px">
													<Link
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
														href="/vacancies/specialist-po-seo-optimizacii-sajtov"
													>
														Специалист по SEO-оптимизации сайтов
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект Divly | Санкт-Петербург
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														Компания uKit Group приглашает в свою команду специалиста по SEO-оптимизации сайтов.
														<br />
													</Text>
													<Hr padding="0px 0px 0px 0px" margin="30px 0px 16px 0px" background="rgb(219, 230, 244)" height="1px" />
												</Box>
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px">
													<Link
														href="/vacancies/sborka-sajtov-na-konstruktore-sajtov-ukit"
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
													>
														Сборка сайтов на конструкторе сайтов uKit
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект Divly | Санкт-Петербург
													</Text>
													<Text color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif" margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif">
														Компания uKit Group г. Санкт-Петербург приглашает в свою дружную команду начинающих веб-мастеров или студентов сборки сайтов на конструкторе uKit.com
														<br />
													</Text>
													<Hr padding="0px 0px 0px 0px" margin="30px 0px 16px 0px" background="rgb(219, 230, 244)" height="1px" />
												</Box>
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px">
													<Link
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
														href="/vacancies/sborshik-sajtov-na-konstruktorah-ucozuweb"
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
													>
														Сборщик сайтов на конструкторах uCoz/uWeb
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект Divly | Санкт-Петербург
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														Компания uKit Group г. Санкт-Петербург приглашает в свою команду сборщика сайтов на конструкторе uCoz/uWeb
														<br />
													</Text>
													<Hr margin="30px 0px 16px 0px" background="rgb(219, 230, 244)" height="1px" padding="0px 0px 0px 0px" />
												</Box>
											</Components.TabPanel>
											<Components.TabPanel md-width="100%" tabId="two">
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px">
													<Link
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
														href="/vacancies/back-end-razrabotchik-php"
													>
														Back-end разработчик (PHP)
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект Divly, uSocial | Санкт-Петербург
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														Компания uKit Group г. Санкт-Петербург приглашает в свою дружную команду back-end разработчика.
													</Text>
													<Hr background="rgb(219, 230, 244)" height="1px" padding="0px 0px 0px 0px" margin="30px 0px 16px 0px" />
												</Box>
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px">
													<Link
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
														href="/vacancies/sborka-sajtov-na-konstruktore-sajtov-ukit"
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
													>
														Сборка сайтов на конструкторе сайтов uKit
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект Divly | Санкт-Петербург
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														Компания uKit Group г. Санкт-Петербург приглашает в свою дружную команду начинающих веб-мастеров или студентов сборки сайтов на конструкторе uKit.com
														<br />
													</Text>
													<Hr background="rgb(219, 230, 244)" height="1px" padding="0px 0px 0px 0px" margin="30px 0px 16px 0px" />
												</Box>
												<Box padding="0px 0px 15px 0px" margin="0px 0px 0px 0px" width="90%">
													<Link
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
														href="/vacancies/sborshik-sajtov-na-konstruktorah-ucozuweb"
													>
														Сборщик сайтов на конструкторах uCoz/uWeb
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект Divly | Санкт-Петербург
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														Компания uKit Group г. Санкт-Петербург приглашает в свою команду сборщика сайтов на конструкторе uCoz/uWeb
														<br />
													</Text>
													<Hr background="rgb(219, 230, 244)" height="1px" padding="0px 0px 0px 0px" margin="30px 0px 16px 0px" />
												</Box>
											</Components.TabPanel>
											<Components.TabPanel tabId="five" md-width="100%">
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px">
													<Link
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
														href="/vacancies/specialist-po-seo-optimizacii-sajtov"
														text-decoration-line="initial"
													>
														Специалист по SEO-оптимизации сайтов
													</Link>
													<Text color="#333" md-font="15px 'AvenirNextCyrMedium'" margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'">
														Проект Divly | Санкт-Петербург
													</Text>
													<Text color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif" margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif">
														Компания uKit Group приглашает в свою команду специалиста по SEO-оптимизации сайтов.
														<br />
													</Text>
												</Box>
											</Components.TabPanel>
										</Components.TabPanels>
									</Components.Tabs>
									{"    "}
								</StackItem>
								{"        "}
							</Stack>
						</Components.Tab2>
						<Components.Tab2 tabId="rnd">
							<Stack margin="0px 0px 0px 0px">
								<StackItem sm-width="100%" width="100%" display="flex" lg-width="\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\">
									<Override
										slot="StackItemContent"
										justify-content="flex-start"
										flex-direction="column"
										lg-align-items="center"
										md-padding="30px 0px 0px 0px"
										align-items="flex-start"
									/>
									{"        "}
									<Components.Tabs
										defaultTab="one"
										orientation="Vertical"
										width="100%"
										flex-direction="row-reverse"
										justify-content="space-between"
										height="auto"
									>
										<Components.TabList md-display="none" width="20%">
											<Components.TabItem tabId="one">
												<Override slot="Selected Tab" color="#3d72cc" />
												<Override slot="Tab" color="#afc1db" />
												<Button
													color="inherit"
													letter-spacing=".2px"
													display="flex"
													focus-box-shadow="none"
													lg-font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
													background="rgba(0, 119, 204, 0)"
													font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
													align-items="center"
													padding="8px 24px 8px 12px"
												>
													<Icon
														size="20px"
														category="fa"
														icon={FaBoxes}
														color="#inherit"
														margin="0px 8px 0px 0px"
													/>
													ВСЕ ВАКАНСИИ (5)
												</Button>
											</Components.TabItem>
											<Components.TabItem tabId="two">
												<Override slot="Selected Tab" color="#3d72cc" />
												<Override slot="Tab" color="#afc1db" />
												<Button
													padding="8px 24px 8px 12px"
													focus-box-shadow="none"
													background="rgba(0, 119, 204, 0)"
													color="inherit"
													font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
													letter-spacing=".2px"
													align-items="center"
													display="flex"
													lg-font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
												>
													<Icon
														margin="0px 8px 0px 0px"
														category="fa"
														icon={FaFileCode}
														size="20px"
														color="inherit"
													/>
													РАЗРАБОТКА (3)
												</Button>
											</Components.TabItem>
											<Components.TabItem tabId="three">
												<Override slot="Selected Tab" color="#3d72cc" />
												<Override slot="Tab" color="#afc1db" />
												<Button
													color="inherit"
													letter-spacing=".2px"
													display="flex"
													text-transform="uppercase"
													background="rgba(0, 119, 204, 0)"
													align-items="center"
													padding="8px 24px 8px 12px"
													focus-box-shadow="none"
													lg-font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
													font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
												>
													<Icon
														category="md"
														icon={MdTouchApp}
														size="20px"
														color="inherit"
														margin="0px 8px 0px 0px"
													/>
													Менеджмет (1)
												</Button>
											</Components.TabItem>
											<Components.TabItem tabId="four">
												<Override slot="Selected Tab" color="#3d72cc" />
												<Override slot="Tab" color="#afc1db" />
												<Button
													letter-spacing=".2px"
													font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
													color="inherit"
													display="flex"
													align-items="center"
													padding="8px 24px 8px 12px"
													focus-box-shadow="none"
													lg-font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
													background="rgba(0, 119, 204, 0)"
												>
													<Icon
														category="io"
														icon={IoIosChatboxes}
														size="20px"
														color="inherit"
														margin="0px 8px 0px 0px"
													/>
													ПОДДЕРЖКА (1)
												</Button>
											</Components.TabItem>
										</Components.TabList>
										<Components.TabPanels width="80%" md-width="100%">
											<Components.TabPanel tabId="one" md-width="100%">
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px">
													<Link
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
														href="/vacancies/junior-nodejs-razrabotchik"
														text-decoration-line="initial"
														color="#263238"
													>
														Junior node.js разработчик
													</Link>
													<Text font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'" margin="12px 0px 0px 0px">
														Проект uKit | Ростов-на-Дону
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														Приглашаем на работу Junior node.js разработчика.
														<br />
													</Text>
													<Hr padding="0px 0px 0px 0px" margin="30px 0px 16px 0px" background="rgb(219, 230, 244)" height="1px" />
												</Box>
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px">
													<Link
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
														href="/vacancies/menedzher-dizajner-shablonov"
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
													>
														Менеджер-дизайнер шаблонов
													</Link>
													<Text md-font="15px 'AvenirNextCyrMedium'" margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333">
														Проект uKit | Ростов-на-Дону
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														Компания uKit Group приглашает в свою команду менеджера-дизайнера для создания шаблонов для конструктора сайтов uKit. Эта работа для вас если вы знакомы с процессом создания шаблонов для сайтов, имеете опыт работы в студии веб-дизайна.
													</Text>
													<Hr margin="30px 0px 16px 0px" background="rgb(219, 230, 244)" height="1px" padding="0px 0px 0px 0px" />
												</Box>
												<Box margin="0px 0px 0px 0px" width="90%" padding="0px 0px 15px 0px">
													<Link
														href="/vacancies/specialist-sluzhby-tehnicheskoj-podderzhki"
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
													>
														Специалист службы технической поддержки
													</Link>
													<Text font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'" margin="12px 0px 0px 0px">
														Проект uCalc | Ростов-на-Дону
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														Компания uKit Group г. Санкт-Петербург приглашает в свою команду сборщика сайтов на конструкторе uCoz/uWeb
														<br />
													</Text>
													<Hr background="rgb(219, 230, 244)" height="1px" padding="0px 0px 0px 0px" margin="30px 0px 16px 0px" />
												</Box>
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px">
													<Link
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
														href="/vacancies/senior-nodejs-engineer"
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
													>
														Senior Node.js engineer
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект uKit | Ростов-на-Дону
													</Text>
													<Text font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif" margin="12px 0px 0px 0px">
														В команду проекта uKit разыскивается разработчик, имеющий не менее первого дана по Javascript.
													</Text>
													<Hr background="rgb(219, 230, 244)" height="1px" padding="0px 0px 0px 0px" margin="30px 0px 16px 0px" />
												</Box>
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px">
													<Link
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
														href="/vacancies/programmist-perl"
														text-decoration-line="initial"
													>
														Программист Perl
													</Link>
													<Text font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'" margin="12px 0px 0px 0px">
														Проект uCoz | Ростов-на-Дону
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														Вы не знакомы с Perl, но не боитесь попробовать? Это верный выбор и не смотря на то, что данный язык на сегодня не является мейнстримом, как специалист вы только выиграете: перловики на сегодня весьма востребованы именно по причине своей редкости.
														<br />
													</Text>
													<Hr background="rgb(219, 230, 244)" height="1px" padding="0px 0px 0px 0px" margin="30px 0px 16px 0px" />
												</Box>
											</Components.TabPanel>
											<Components.TabPanel tabId="two" md-width="100%">
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px">
													<Link
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
														href="/vacancies/junior-nodejs-razrabotchik"
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
													>
														Junior node.js разработчик
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект uKit | Ростов-на-Дону
													</Text>
													<Text font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif" margin="12px 0px 0px 0px">
														Приглашаем на работу Junior node.js разработчика.
														<br />
													</Text>
													<Hr background="rgb(219, 230, 244)" height="1px" padding="0px 0px 0px 0px" margin="30px 0px 16px 0px" />
												</Box>
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px">
													<Link
														href="/vacancies/senior-nodejs-engineer"
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
													>
														Senior Node.js engineer
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект uKit | Ростов-на-Дону
													</Text>
													<Text font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif" margin="12px 0px 0px 0px">
														В команду проекта uKit разыскивается разработчик, имеющий не менее первого дана по Javascript.
													</Text>
													<Hr background="rgb(219, 230, 244)" height="1px" padding="0px 0px 0px 0px" margin="30px 0px 16px 0px" />
												</Box>
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px">
													<Link
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
														href="/vacancies/programmist-perl"
													>
														Программист Perl
													</Link>
													<Text font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'" margin="12px 0px 0px 0px">
														Проект uCoz | Ростов-на-Дону
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														Вы не знакомы с Perl, но не боитесь попробовать? Это верный выбор и не смотря на то, что данный язык на сегодня не является мейнстримом, как специалист вы только выиграете: перловики на сегодня весьма востребованы именно по причине своей редкости.
														<br />
													</Text>
													<Hr margin="30px 0px 16px 0px" background="rgb(219, 230, 244)" height="1px" padding="0px 0px 0px 0px" />
												</Box>
											</Components.TabPanel>
											<Components.TabPanel tabId="three" md-width="100%">
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px">
													<Link
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
														href="/vacancies/menedzher-dizajner-shablonov"
													>
														Менеджер-дизайнер шаблонов
													</Link>
													<Text font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'" margin="12px 0px 0px 0px">
														Проект uKit | Ростов-на-Дону
													</Text>
													<Text font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif" margin="12px 0px 0px 0px">
														Компания uKit Group приглашает в свою команду менеджера-дизайнера для создания шаблонов для конструктора сайтов uKit. Эта работа для вас если вы знакомы с процессом создания шаблонов для сайтов, имеете опыт работы в студии веб-дизайна.
													</Text>
												</Box>
											</Components.TabPanel>
											<Components.TabPanel tabId="four" md-width="100%">
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px">
													<Link
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
														href="/vacancies/specialist-sluzhby-tehnicheskoj-podderzhki"
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
													>
														Специалист службы технической поддержки
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект uCalc | Ростов-на-Дону
													</Text>
													<Text color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif" margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif">
														Компания uKit Group г. Санкт-Петербург приглашает в свою команду сборщика сайтов на конструкторе uCoz/uWeb
														<br />
													</Text>
												</Box>
											</Components.TabPanel>
										</Components.TabPanels>
									</Components.Tabs>
									{"    "}
								</StackItem>
								{"        "}
							</Stack>
						</Components.Tab2>
						<Components.Tab2 tabId="fl">
							<Stack margin="0px 0px 0px 0px">
								<StackItem width="100%" display="flex" lg-width="\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\" sm-width="100%">
									<Override
										slot="StackItemContent"
										align-items="flex-start"
										justify-content="flex-start"
										flex-direction="column"
										lg-align-items="center"
										md-padding="30px 0px 0px 0px"
									/>
									{"        "}
									<Components.Tabs
										defaultTab="one"
										orientation="Vertical"
										width="100%"
										flex-direction="row-reverse"
										justify-content="space-between"
										height="auto"
									>
										<Components.TabList md-display="none" width="20%" lg-width="30%">
											<Components.TabItem tabId="one">
												<Override slot="Selected Tab" color="#3d72cc" />
												<Override slot="Tab" color="#afc1db" />
												<Button
													padding="8px 24px 8px 12px"
													color="inherit"
													font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
													letter-spacing=".2px"
													display="flex"
													align-items="center"
													background="rgba(0, 119, 204, 0)"
													focus-box-shadow="none"
													lg-font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
												>
													<Icon
														category="fa"
														icon={FaBoxes}
														color="#inherit"
														margin="0px 8px 0px 0px"
														size="20px"
													/>
													ALL JOBS (1)
												</Button>
											</Components.TabItem>
											<Components.TabItem tabId="two" display="none">
												<Override slot="Selected Tab" color="#3d72cc" />
												<Override slot="Tab" color="#afc1db" />
												<Button
													background="rgba(0, 119, 204, 0)"
													color="inherit"
													font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
													letter-spacing=".2px"
													align-items="center"
													display="flex"
													padding="8px 24px 8px 12px"
													focus-box-shadow="none"
													lg-font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
												>
													<Icon
														category="fa"
														icon={FaFileCode}
														size="20px"
														color="inherit"
														margin="0px 8px 0px 0px"
													/>
													РАЗРАБОТКА (6)
												</Button>
											</Components.TabItem>
											<Components.TabItem tabId="three" display="none">
												<Override slot="Selected Tab" color="#3d72cc" />
												<Override slot="Tab" color="#afc1db" />
												<Button
													lg-font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
													background="rgba(0, 119, 204, 0)"
													color="inherit"
													font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
													align-items="center"
													padding="8px 24px 8px 12px"
													focus-box-shadow="none"
													letter-spacing=".2px"
													display="flex"
													text-transform="uppercase"
												>
													<Icon
														color="inherit"
														margin="0px 8px 0px 0px"
														category="md"
														icon={MdTouchApp}
														size="20px"
													/>
													Менеджмет (1)
												</Button>
											</Components.TabItem>
											<Components.TabItem tabId="four">
												<Override slot="Selected Tab" color="#3d72cc" />
												<Override slot="Tab" color="#afc1db" />
												<Button
													background="rgba(0, 119, 204, 0)"
													font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
													letter-spacing=".2px"
													display="flex"
													color="inherit"
													align-items="center"
													padding="8px 24px 8px 12px"
													focus-box-shadow="none"
													lg-font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
												>
													<Icon
														margin="0px 8px 0px 0px"
														category="io"
														icon={IoIosChatboxes}
														size="20px"
														color="inherit"
													/>
													CUSTOMER SUPPORT (1)
												</Button>
											</Components.TabItem>
											<Components.TabItem display="none" tabId="five">
												<Override slot="Tab" color="#afc1db" />
												<Override slot="Selected Tab" color="#3d72cc" />
												<Button
													font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
													letter-spacing=".2px"
													display="flex"
													focus-box-shadow="none"
													lg-font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
													background="rgba(0, 119, 204, 0)"
													color="inherit"
													align-items="center"
													padding="8px 24px 8px 12px"
												>
													<Icon
														category="bs"
														icon={BsPieChartFill}
														size="18px"
														color="inherit"
														margin="0px 8px 0px 0px"
													/>
													{" "}МАРКЕТИНГ, РЕКЛАМА, PR (4)
												</Button>
											</Components.TabItem>
										</Components.TabList>
										<Components.TabPanels width="80%" md-width="100%" lg-width="70%">
											<Components.TabPanel tabId="one" md-width="100%">
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px">
													<Link
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
														href="/vacancies/technology-evangelistdeveloper-advocate"
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
													>
														Technology Evangelist/Developer Advocate
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Support Project
													</Text>
													<Text color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif" margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif">
														We are looking for an energetic, diligent and attentive professional to join our technical support team.
														<br />
													</Text>
												</Box>
											</Components.TabPanel>
											<Components.TabPanel tabId="two" md-width="100%">
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px">
													<Link
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
														href="/vacancies/back-end-razrabotchik-php"
														text-decoration-line="initial"
													>
														Back-end разработчик (PHP)
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект Divly, uSocial | Санкт-Петербург
													</Text>
													<Text font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif" margin="12px 0px 0px 0px">
														Компания uKit Group г. Санкт-Петербург приглашает в свою дружную команду back-end разработчика.
													</Text>
													<Hr padding="0px 0px 0px 0px" margin="30px 0px 16px 0px" background="rgb(219, 230, 244)" height="1px" />
												</Box>
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px">
													<Link
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
														href="/vacancies/sborka-sajtov-na-konstruktore-sajtov-ukit"
													>
														Сборка сайтов на конструкторе сайтов uKit
													</Link>
													<Text md-font="15px 'AvenirNextCyrMedium'" margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333">
														Проект Divly | Санкт-Петербург
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														Компания uKit Group г. Санкт-Петербург приглашает в свою дружную команду начинающих веб-мастеров или студентов сборки сайтов на конструкторе uKit.com
														<br />
													</Text>
													<Hr background="rgb(219, 230, 244)" height="1px" padding="0px 0px 0px 0px" margin="30px 0px 16px 0px" />
												</Box>
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px">
													<Link
														href="/vacancies/sborshik-sajtov-na-konstruktorah-ucozuweb"
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
													>
														Сборщик сайтов на конструкторах uCoz/uWeb
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект Divly | Санкт-Петербург
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														Компания uKit Group г. Санкт-Петербург приглашает в свою команду сборщика сайтов на конструкторе uCoz/uWeb
														<br />
													</Text>
													<Hr background="rgb(219, 230, 244)" height="1px" padding="0px 0px 0px 0px" margin="30px 0px 16px 0px" />
												</Box>
												<Box margin="0px 0px 0px 0px" width="90%" padding="0px 0px 15px 0px">
													<Link
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
														href="/vacancies/junior-nodejs-razrabotchik"
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
													>
														Junior node.js разработчик
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект uKit | Ростов-на-Дону
													</Text>
													<Text font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif" margin="12px 0px 0px 0px">
														Приглашаем на работу Junior node.js разработчика.
														<br />
													</Text>
													<Hr background="rgb(219, 230, 244)" height="1px" padding="0px 0px 0px 0px" margin="30px 0px 16px 0px" />
												</Box>
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px">
													<Link
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
														href="/vacancies/senior-nodejs-engineer"
														text-decoration-line="initial"
														color="#263238"
													>
														Senior Node.js engineer
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект uKit | Ростов-на-Дону
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														В команду проекта uKit разыскивается разработчик, имеющий не менее первого дана по Javascript.
													</Text>
													<Hr background="rgb(219, 230, 244)" height="1px" padding="0px 0px 0px 0px" margin="30px 0px 16px 0px" />
												</Box>
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px">
													<Link
														href="/vacancies/programmist-perl"
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
													>
														Программист Perl
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект uCoz | Ростов-на-Дону
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														Вы не знакомы с Perl, но не боитесь попробовать? Это верный выбор и не смотря на то, что данный язык на сегодня не является мейнстримом, как специалист вы только выиграете: перловики на сегодня весьма востребованы именно по причине своей редкости.
														<br />
													</Text>
													<Hr margin="30px 0px 16px 0px" background="rgb(219, 230, 244)" height="1px" padding="0px 0px 0px 0px" />
												</Box>
											</Components.TabPanel>
											<Components.TabPanel md-width="100%" tabId="three">
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px">
													<Link
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
														href="/vacancies/menedzher-dizajner-shablonov"
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
													>
														Менеджер-дизайнер шаблонов
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект uKit | Ростов-на-Дону
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														Компания uKit Group приглашает в свою команду менеджера-дизайнера для создания шаблонов для конструктора сайтов uKit. Эта работа для вас если вы знакомы с процессом создания шаблонов для сайтов, имеете опыт работы в студии веб-дизайна.
													</Text>
												</Box>
											</Components.TabPanel>
											<Components.TabPanel tabId="four" md-width="100%">
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px">
													<Link
														href="/vacancies/technology-evangelistdeveloper-advocate"
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
													>
														Technology Evangelist/Developer Advocate
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Support Project
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														We are looking for an energetic, diligent and attentive professional to join our technical support team.
														<br />
													</Text>
												</Box>
											</Components.TabPanel>
											<Components.TabPanel md-width="100%" tabId="five">
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px" md-width="100%">
													<Link
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
														href="/vacancies/pr-menedzher"
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
													>
														PR-менеджер
													</Link>
													<Text md-font="15px 'AvenirNextCyrMedium'" margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333">
														Проект Quarkly | Москва{" "}
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														Мы ищем талантливого PR-щика, серьезно увлеченного вебом. Для продвижения на рынке (в первую очередь англоязычном) проекта Quarkly, ориентированного на профессиональных пользователей (веб-дизайнеров, фронтенд-разработчиков, верстальщиков).
														<br />
													</Text>
													<Hr margin="30px 0px 16px 0px" background="rgb(219, 230, 244)" height="1px" padding="0px 0px 0px 0px" />
												</Box>
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px">
													<Link
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
														href="/vacancies/specialist-po-seo-optimizacii-sajtov"
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
													>
														Специалист по SEO-оптимизации сайтов
													</Link>
													<Text font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'" margin="12px 0px 0px 0px">
														Проект Divly | Санкт-Петербург
													</Text>
													<Text md-font="14px 'AvenirNextCyrRegular', sans-serif" margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333">
														Компания uKit Group приглашает в свою команду специалиста по SEO-оптимизации сайтов.
														<br />
													</Text>
													<Hr background="rgb(219, 230, 244)" height="1px" padding="0px 0px 0px 0px" margin="30px 0px 16px 0px" />
												</Box>
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px">
													<Link
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
														href="/vacancies/pr-menedzher1"
														text-decoration-line="initial"
													>
														PR-менеджер
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект Quarkly | Москва{" "}
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														Мы ищем талантливого PR-щика, серьезно увлеченного вебом. Для продвижения на рынке (в первую очередь англоязычном) проекта Quarkly, ориентированного на профессиональных пользователей (веб-дизайнеров, фронтенд-разработчиков, верстальщиков).
														<br />
													</Text>
													<Hr height="1px" padding="0px 0px 0px 0px" margin="30px 0px 16px 0px" background="rgb(219, 230, 244)" />
												</Box>
												<Box padding="0px 0px 15px 0px" margin="0px 0px 0px 0px" width="90%">
													<Link
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
														href="/vacancies/technology-evangelistdeveloper-advocate"
													>
														Technology Evangelist/Developer Advocate
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект Quarkly | Удаленная работа
													</Text>
													<Text md-font="14px 'AvenirNextCyrRegular', sans-serif" margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333">
														Мы ищем человека для продвижения на англоязычном рынке проекта Quarkly, ориентированного на профессиональных пользователей (веб-дизайнеров, фронтенд-разработчиков, верстальщиков).
													</Text>
												</Box>
											</Components.TabPanel>
										</Components.TabPanels>
									</Components.Tabs>
									{"    "}
								</StackItem>
								{"        "}
							</Stack>
						</Components.Tab2>
					</Components.Tabs2>
				</StackItem>
				{"        "}
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