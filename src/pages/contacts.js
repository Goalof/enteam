import React from "react";
import theme from "theme";
import { Theme, Text, Section, Box, Link, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Stack, GoogleMap } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"contacts"} />
		<Helmet>
			<title>
				Contact - Jobs at uTeam
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
		<Components.Header />
		<Section background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/1.jpg?v=2021-01-28T13:22:17.962Z) 0% 0% /cover repeat scroll padding-box" padding="150px 0 80px 0">
			<Override slot="SectionContent" align-items="center" />
			<Stack margin="0px 0px 0px 0px" max-width="850px">
				{"    "}
				<StackItem width="100%" display="flex">
					<Override slot="StackItemContent" align-items="center" justify-content="center" />
					{"        "}
					<Text
						sm-text-align="center"
						sm-margin="0px 0px 30px 0px"
						text-align="center"
						color="#ffffff"
						font="normal 900 64px/1.2 'AvenirNextCyrDemi', sans-serif"
						margin="0px 0px 5px 0px"
						display="inline-block"
					>
						Contact
					</Text>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section md-padding="40px 0 40px 0" padding="30px 0 40px 0" sm-padding="40px 0 40px 0" lg-padding="40px 0 40px 0">
			<Override slot="SectionContent" align-items="center" />
			<Stack margin="0px 0px 0px 0px" max-width="1170px" width="100%">
				{"    "}
				<StackItem display="flex" width="100%">
					<Override slot="StackItemContent" align-items="flex-start" flex-direction="column" />
					{"        "}
					<Text
						margin="0px 0px 0px 0px"
						display="inline-block"
						sm-text-align="center"
						sm-margin="0px 0px 30px 0px"
						text-align="center"
						color="#263238"
						font="normal 400 36px/36px 'AvenirNextCyrRegular', sans-serif"
					>
						We look forward to meeting you!{"\n\n"}
					</Text>
					<Text
						display="inline-block"
						sm-text-align="center"
						sm-margin="0px 0px 30px 0px"
						color="#333"
						font="normal 400 20px/28px 'AvenirNextCyrRegular', sans-serif"
						margin="18px 0px 0px 0px"
					>
						Please schedule an appointment before coming.
						<br />
						{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
			<Stack margin="0px 0px 0px 0px" max-width="1170px" width="100%">
				{"    "}
				<StackItem width="100%" display="flex">
					<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" />
					<GoogleMap query="ул. Барклая 6, строение 5, БЦ" margin="0px 0px 0px 0px" z-index="0" sm-margin="15px 0px 20px 0px" />
					<Box display="flex" margin="0px 0px 25px 0px" sm-flex-direction="column">
						<Box
							flex-direction="column"
							align-items="flex-start"
							max-width="270px"
							width="100%"
							display="flex"
						>
							<Text
								sm-margin="0px 0px 30px 0px"
								text-align="center"
								color="#333"
								font="normal 400 18px/22px 'AvenirNextCyrMedium'"
								margin="20px 0px 17px 0px"
								display="inline-block"
							>
								Visit us
							</Text>
							<Text
								display="inline-block"
								sm-margin="0px 0px 30px 0px"
								color="#333"
								margin="0px 0px 0px 0px"
								font="normal 400 18px/22px 'AvenirNextCyrMedium'"
							>
								BC Barklay Plaza, 6 Barklaya St., Bldg. 5, Moscow{"\n\n"}
							</Text>
						</Box>
						<Box align-items="flex-start" max-width="300px" display="flex" flex-direction="column">
							<Text
								sm-margin="0px 0px 30px 0px"
								text-align="center"
								color="#333"
								margin="20px 0px 17px 0px"
								font="normal 400 18px/22px 'AvenirNextCyrMedium'"
								display="inline-block"
								sm-text-align="center"
							>
								Email us
							</Text>
							<Link
								color="#4a8cfa"
								font="normal 400 18px/24px 'AvenirNextCyrMedium'"
								transition="color 0.2s linear 0s"
								hover-color="#3d72cc"
								href="malito:job@ucoz.ru"
								text-decoration-line="initial"
							>
								job@ucoz.ru
							</Link>
						</Box>
					</Box>
					<Link
						background="#ffd83a"
						text-decoration-line="initial"
						padding="0px 15px 02px 15px"
						hover-background="#e6c235"
						href="/vacancies"
						color="#263238"
						font="16px/50px 'AvenirNextCyrMedium', sans-serif"
						margin="0px 0px 0px 0px"
						transition="all 0.2s linear 0s"
						border-radius="5px"
					>
						View All Jobs
					</Link>
					{"            "}
				</StackItem>
				{"    "}
			</Stack>
			<Stack width="100%" margin="30px 0px 0px 0px" max-width="1170px">
				{"    "}
				<StackItem width="100%" display="flex">
					<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" />
					{"        "}
					<Text
						color="#263238"
						font="normal 400 36px/36px 'AvenirNextCyrRegular', sans-serif"
						margin="0px 0px 0px 0px"
						display="inline-block"
						sm-text-align="center"
						sm-margin="0px 0px 30px 0px"
						text-align="center"
					>
						Documents
					</Text>
					<Text
						display="inline-block"
						sm-margin="0px 0px 30px 0px"
						text-align="left"
						color="#333"
						sm-font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif"
						font="normal 400 20px/28px 'AvenirNextCyrRegular', sans-serif"
						margin="18px 0px 25px 0px"
					>
						Pursuant to article 15, paragraph 6 of the Federal Law No. 426-FZ "On Special Assessment of Working Conditions" of December 28, 2013, we are publishing the results of the special assessment of working conditions in our offices
					</Text>
					<Link
						lg-margin="0px 0px 16px 0px"
						href="/documents/Exp_opinion_2018.pdf"
						display="flex"
						target="_blank"
						hover-color="#5F99FB"
						color="#333"
						text-decoration-line="initial"
						transition="color 0.2s ease 0s"
						margin="0px 0px 12px 0px"
						sm-margin="0px 0px 0px 0px"
					>
						<Image
							lg-margin="3px 12px 0px 0px"
							width="24px"
							height="24px"
							margin="1px 12px 0px 0px"
							src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/document.svg?v=2021-01-28T21:23:13.010Z"
						/>
						<Text
							lg-font="normal 400 20px/30px 'AvenirNextCyrRegular', sans-serif"
							sm-font="normal 400 16px/30px 'AvenirNextCyrRegular', sans-serif"
							font="normal 400 20px/28px 'AvenirNextCyrRegular', sans-serif"
							margin="0px 0px 0px 0px"
							display="inline-block"
							sm-margin="0px 0px 30px 0px"
							text-align="left"
							color="inherit"
						>
							Expert opinion on the assessment results of working conditions in the Moscow office
						</Text>
					</Link>
					<Link
						display="flex"
						target="_blank"
						hover-color="#5F99FB"
						color="#333"
						margin="0px 0px 12px 0px"
						href="/documents/list_of_measures_spb_2018.pdf"
						text-decoration-line="initial"
						transition="color 0.2s ease 0s"
						lg-margin="0px 0px 16px 0px"
						sm-margin="0px 0px 0px 0px"
					>
						<Image
							height="24px"
							margin="1px 12px 0px 0px"
							src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/document.svg?v=2021-01-28T21:23:13.010Z"
							lg-margin="3px 12px 0px 0px"
							width="24px"
						/>
						<Text
							font="normal 400 20px/28px 'AvenirNextCyrRegular', sans-serif"
							margin="0px 0px 0px 0px"
							display="inline-block"
							sm-margin="0px 0px 30px 0px"
							text-align="left"
							color="inherit"
							lg-font="normal 400 20px/30px 'AvenirNextCyrRegular', sans-serif"
							sm-font="normal 400 16px/30px 'AvenirNextCyrRegular', sans-serif"
						>
							The list of measures to improve working conditions in the St. Petersburg office
						</Text>
					</Link>
					<Link
						target="_blank"
						transition="color 0.2s ease 0s"
						hover-color="#5F99FB"
						color="#333"
						sm-margin="0px 0px 0px 0px"
						href="/documents/Summary_list_msk_2018.pdf"
						display="flex"
						text-decoration-line="initial"
						margin="0px 0px 12px 0px"
						lg-margin="0px 0px 16px 0px"
					>
						<Image
							width="24px"
							height="24px"
							margin="1px 12px 0px 0px"
							src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/document.svg?v=2021-01-28T21:23:13.010Z"
							lg-margin="3px 12px 0px 0px"
						/>
						<Text
							text-align="left"
							color="inherit"
							lg-font="normal 400 20px/30px 'AvenirNextCyrRegular', sans-serif"
							sm-font="normal 400 16px/30px 'AvenirNextCyrRegular', sans-serif"
							font="normal 400 20px/28px 'AvenirNextCyrRegular', sans-serif"
							margin="0px 0px 0px 0px"
							display="inline-block"
							sm-margin="0px 0px 30px 0px"
						>
							Summary list with the assessment results of working conditions in the Moscow office
						</Text>
					</Link>
					<Link
						text-decoration-line="initial"
						target="_blank"
						hover-color="#5F99FB"
						color="#333"
						lg-margin="0px 0px 16px 0px"
						sm-margin="0px 0px 0px 0px"
						href="http://ru.uteam.pro/resources/documents/Summary_list_spb_2018.pdf"
						display="flex"
						transition="color 0.2s ease 0s"
						margin="0px 0px 12px 0px"
					>
						<Image
							margin="1px 12px 0px 0px"
							src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/document.svg?v=2021-01-28T21:23:13.010Z"
							lg-margin="3px 12px 0px 0px"
							width="24px"
							height="24px"
						/>
						<Text
							display="inline-block"
							sm-margin="0px 0px 30px 0px"
							text-align="left"
							color="inherit"
							lg-font="normal 400 20px/30px 'AvenirNextCyrRegular', sans-serif"
							sm-font="normal 400 16px/30px 'AvenirNextCyrRegular', sans-serif"
							font="normal 400 20px/28px 'AvenirNextCyrRegular', sans-serif"
							margin="0px 0px 0px 0px"
						>
							Summary list with the assessment results of working conditions in the St. Petersburg office
						</Text>
					</Link>
					<Link
						color="#333"
						margin="0px 0px 12px 0px"
						lg-margin="0px 0px 16px 0px"
						display="flex"
						text-decoration-line="initial"
						target="_blank"
						transition="color 0.2s ease 0s"
						hover-color="#5F99FB"
						href="/documents/event_list_msk.pdf"
						sm-margin="0px 0px 0px 0px"
					>
						<Image
							lg-margin="3px 12px 0px 0px"
							width="24px"
							height="24px"
							margin="1px 12px 0px 0px"
							src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/document.svg?v=2021-01-28T21:23:13.010Z"
						/>
						<Text
							color="inherit"
							lg-font="normal 400 20px/30px 'AvenirNextCyrRegular', sans-serif"
							sm-font="normal 400 16px/30px 'AvenirNextCyrRegular', sans-serif"
							font="normal 400 20px/28px 'AvenirNextCyrRegular', sans-serif"
							margin="0px 0px 0px 0px"
							display="inline-block"
							sm-margin="0px 0px 30px 0px"
							text-align="left"
						>
							List of activities to improve working conditions in the Moscow office (2017)
						</Text>
					</Link>
					<Link
						text-decoration-line="initial"
						sm-margin="0px 0px 0px 0px"
						lg-margin="0px 0px 16px 0px"
						href="/documents/event_list_spb.pdf"
						display="flex"
						target="_blank"
						transition="color 0.2s ease 0s"
						hover-color="#5F99FB"
						color="#333"
						margin="0px 0px 12px 0px"
					>
						<Image
							height="24px"
							margin="1px 12px 0px 0px"
							src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/document.svg?v=2021-01-28T21:23:13.010Z"
							lg-margin="3px 12px 0px 0px"
							width="24px"
						/>
						<Text
							font="normal 400 20px/28px 'AvenirNextCyrRegular', sans-serif"
							margin="0px 0px 0px 0px"
							display="inline-block"
							sm-margin="0px 0px 30px 0px"
							text-align="left"
							color="inherit"
							lg-font="normal 400 20px/30px 'AvenirNextCyrRegular', sans-serif"
							sm-font="normal 400 16px/30px 'AvenirNextCyrRegular', sans-serif"
						>
							List of activities to improve working conditions in the Saint-Petersburg office (2017)
						</Text>
					</Link>
					<Link
						href="/documents/results_msk.pdf"
						transition="color 0.2s ease 0s"
						lg-margin="0px 0px 16px 0px"
						sm-margin="0px 0px 0px 0px"
						display="flex"
						text-decoration-line="initial"
						target="_blank"
						hover-color="#5F99FB"
						color="#333"
						margin="0px 0px 12px 0px"
					>
						<Image
							src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/document.svg?v=2021-01-28T21:23:13.010Z"
							lg-margin="3px 12px 0px 0px"
							width="24px"
							height="24px"
							margin="1px 12px 0px 0px"
						/>
						<Text
							margin="0px 0px 0px 0px"
							display="inline-block"
							sm-margin="0px 0px 30px 0px"
							text-align="left"
							color="inherit"
							lg-font="normal 400 20px/30px 'AvenirNextCyrRegular', sans-serif"
							sm-font="normal 400 16px/30px 'AvenirNextCyrRegular', sans-serif"
							font="normal 400 20px/28px 'AvenirNextCyrRegular', sans-serif"
						>
							Assessment record: Results of assessing working conditions in the Moscow office (2017)
						</Text>
					</Link>
					<Link
						text-decoration-line="initial"
						target="_blank"
						hover-color="#5F99FB"
						color="#333"
						margin="0px 0px 12px 0px"
						href="/documents/results_spb.pdf"
						display="flex"
						transition="color 0.2s ease 0s"
						lg-margin="0px 0px 16px 0px"
						sm-margin="0px 0px 0px 0px"
					>
						<Image
							width="24px"
							height="24px"
							margin="1px 12px 0px 0px"
							src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/document.svg?v=2021-01-28T21:23:13.010Z"
							lg-margin="3px 12px 0px 0px"
						/>
						<Text
							display="inline-block"
							sm-margin="0px 0px 30px 0px"
							text-align="left"
							color="inherit"
							lg-font="normal 400 20px/30px 'AvenirNextCyrRegular', sans-serif"
							sm-font="normal 400 16px/30px 'AvenirNextCyrRegular', sans-serif"
							font="normal 400 20px/28px 'AvenirNextCyrRegular', sans-serif"
							margin="0px 0px 0px 0px"
						>
							Assessment record: Results of assessing working conditions in the Saint-Petersburg office (2017)
						</Text>
					</Link>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Components.FooterEn />
		<RawHtml>
			<style place={"endOfHead"} rawKey={"602c67f4d524b3b42d4be948"}>
				{"@media (min-width: 1200px) {\n* {\n    scroll-behavior: smooth;\n    }\n    }\n.nobutton {\npointer-events: none; \n}\n  .active .fileText {\n  display: none;\n  }\n  input.fileText {\n      opacity: 1 !important;\n  }\n  * {\n    -webkit-tap-highlight-color: transparent!important;\n  }\n  @font-face {\n    font-family: 'AvenirNextCyrRegular';\n    src: url('/fonts/AvenirNextCyr-Regular.eot');\n    src: url('/fonts/AvenirNextCyr-Regular.eot?#iefix') format('embedded-opentype'), url('/fonts/AvenirNextCyr-Regular.woff') format('woff'), url('/fonts/AvenirNextCyr-Regular.ttf') format('truetype');\n    font-weight: normal;\n    font-style: normal;\n    font-display: auto;\n  }\n  @font-face {\n    font-family: 'AvenirNextCyrMedium';\n    src: url('/fonts/AvenirNextCyr-Medium.eot');\n    src: url('/fonts/AvenirNextCyr-Medium.eot?#iefix') format('embedded-opentype'), url('/fonts/AvenirNextCyr-Medium.woff') format('woff'), url('/fonts/AvenirNextCyr-Medium.ttf') format('truetype');\n    font-weight: normal;\n    font-style: normal;\n    font-display: auto;\n  }\n  @font-face {\n    font-family: 'AvenirNextCyrBold';\n    src: url('/fonts/AvenirNextCyr-Bold.eot');\n    src: url('/fonts/AvenirNextCyr-Bold.eot?#iefix') format('embedded-opentype'), url('/fonts/AvenirNextCyr-Bold.woff') format('woff'), url('/fonts/AvenirNextCyr-Bold.ttf') format('truetype');\n    font-weight: normal;\n    font-style: normal;\n    font-display: auto;\n  }\n  @font-face {\n    font-family: 'AvenirNextCyrDemi';\n    src: url('/fonts/AvenirNextCyr-Demi.otf');\n    font-weight: normal;\n    font-style: normal;\n    font-display: auto;\n  }\n  body {\n    font-family: 'AvenirNextCyrRegular', sans-serif;\n    font-weight: normal;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n:focus {\n    outline: none;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});