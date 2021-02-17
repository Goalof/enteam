import React from "react";
import theme from "theme";
import { Theme, Link, Text, List, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Stack, Section } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"resume"} />
		<Helmet>
			<title>
				Join Us - Jobs at uTeam
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
		<Section padding="180px 0 120px 0" background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/Advice.jpg?v=2021-01-29T22:37:50.668Z) 0% 0% /cover repeat scroll padding-box" sm-padding="150px 0 60px 0">
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
						sm-margin="0px 0px 30px 0px"
						text-align="center"
						color="#ffffff"
						sm-font="normal 500 34px/1.2 'AvenirNextCyrDemi', sans-serif"
					>
						How to Join Our Team
					</Text>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section padding="40px 0 70px 0" sm-padding="30px 0 30px 0" lg-padding="50px 0 50px 0" md-padding="20px 0 20px 0">
			<Override slot="SectionContent" align-items="center" font="600 16px 'AvenirNextCyrRegular', sans-serif" />
			<Stack margin="0px 0px 0px 0px" max-width="1020px" width="100%">
				<StackItem width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Components.Tabs2 defaultTab="one" display="flex" width="100%" md-flex-direction="column">
						<Override
							slot="TabPanels"
							margin="0px 0px 0px 0px"
							width="70%"
							md-width="100%"
							md-margin="20px 0px 0px 0px"
						/>
						<Override
							slot="Tablist"
							width="30%"
							align-items="flex-start"
							flex-direction="column"
							padding="7px 0px 0px 0px"
							md-width="100%"
						/>
						<Override slot="Tab one" border-radius="5px 5px 0px 0px" background="#EEF2F3">
							Resume
						</Override>
						<Override slot="Tab two" background="#EEF2F3" border-radius="0px">
							Resume Review
						</Override>
						<Override slot="Tab :active" background="#FFD83A">
							Resume
						</Override>
						<Override
							slot="Tab"
							font="14px/30px 'AvenirNextCyrMedium', sans-serif"
							color="#000000"
							width="80%"
							focus-box-shadow="none"
							background="#EEF2F3"
							md-width="100%"
						/>
						<Override slot="Tab three" border-radius="0px 0px 5px 5px">
							Interview
						</Override>
						<Components.Tab2 tabId="one" width="100%">
							<Box>
								<Text color="#263238" font="36px 'AvenirNextCyrRegular'" margin="0px 0px 16px 0px" sm-text-align="center">
									Resume
								</Text>
								<Text font="18px/26px 'AvenirNextCyrRegular', sans-serif" color="#333" sm-text-align="center">
									A resume is your business card that should be taken seriously.
									<br />
								</Text>
								<Text font="24px/30px 'AvenirNextCyrMedium', sans-serif" color="#333" sm-text-align="center">
									Resume is a must to be invited to an interview
									<br />
								</Text>
								<Text font="18px/26px 'AvenirNextCyrRegular', sans-serif" color="#333" sm-text-align="center">
									Each job position has its key qualifications and requirements, starting from the skill set to your time zone. We can invite you to an interview only when we see you are matching them. And this judgement can be made only once we read your resume.
								</Text>
								<Text font="24px/30px 'AvenirNextCyrMedium', sans-serif" color="#333" margin="24px 0px 4px 0px">
									Resume requirements
									<br />
								</Text>
								<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px">
									<Text font="normal 400 18px/30px 'AvenirNextCyrRegular', sans-serif" margin="0px 0px 8px 5px" color="#333">
										general information (full name, date of birth, location, contact details);
									</Text>
								</List>
								<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px">
									<Text font="normal 400 18px/30px 'AvenirNextCyrRegular', sans-serif" margin="0px 0px 8px 5px" color="#333">
										education;
									</Text>
								</List>
								<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px">
									<Text font="normal 400 18px/30px 'AvenirNextCyrRegular', sans-serif" margin="0px 0px 8px 5px" color="#333">
										work experience (including freelance work): companies' names, job titles, and job responsibilities;
									</Text>
								</List>
								<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px">
									<Text font="normal 400 18px/30px 'AvenirNextCyrRegular', sans-serif" margin="0px 0px 8px 5px" color="#333">
										professional skills.
									</Text>
								</List>
							</Box>
							<Text font="24px/30px 'AvenirNextCyrMedium', sans-serif" color="#333" sm-text-align="center">
								Tell us more
								<br />
							</Text>
							<Text font="18px/26px 'AvenirNextCyrRegular', sans-serif" color="#333" sm-text-align="center">
								We would like to know you better!{" "}
								<br />
								Tell us about your personal traits, hobbies, specific skills and abilities — anything that sets you apart from others. Your photo can be also enclosed with the resume.{" "}
								<br />
								Plus, we would be delighted to read your thoughts on the topic "Why I would like to work at this company".
							</Text>
							<Text font="24px/30px 'AvenirNextCyrMedium', sans-serif" color="#333" sm-text-align="center">
								Be honest
							</Text>
							<Text font="18px/26px 'AvenirNextCyrRegular', sans-serif" color="#333" sm-text-align="center">
								Be genuine when telling about yourself.{" "}
								<br />
								We don't tolerate exaggerations and outright lies.
							</Text>
							<Box display="none" justify-content="center" margin="32px 0px 0px 0px" md-display="none">
								<Link
									href="/resume/#two"
									text-align="center"
									text-decoration-line="initial"
									border-width="2px"
									border-style="solid"
									border-color="#4a8cfa"
									background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/arrow-right-blue.svg?v=2021-02-10T23:40:29.406Z) 90% center/auto no-repeat scroll padding-box"
									padding="0px 68px 1px 15px"
									color="#4a8cfa"
									transition="all 0.2s linear 0s"
									font="600 16px/46px AvenirNextCyrRegular, sans-serif"
									border-radius="5px"
									hover-color="#ffffff"
									hover-background="#4a8cfa url(https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/arrow-right-white.svg?v=2021-02-10T23:44:24.127Z) 90% center/auto no-repeat scroll padding-box"
								>
									Рассмотрение резюме
								</Link>
							</Box>
						</Components.Tab2>
						<Components.Tab2 tabId="two">
							<Box>
								<Text color="#263238" font="36px 'AvenirNextCyrRegular'" margin="0px 0px 16px 0px" sm-text-align="center">
									Resume Review
								</Text>
								<Text font="24px/30px 'AvenirNextCyrMedium', sans-serif" color="#333" sm-text-align="center">
									We review all resumes
								</Text>
								<Text font="18px/26px 'AvenirNextCyrRegular', sans-serif" color="#333" sm-text-align="center">
									We don't have a habit of losing resumes or putting them aside without reading.
								</Text>
								<Text font="24px/30px 'AvenirNextCyrMedium', sans-serif" color="#333" margin="20px 0px 16px 0px" sm-text-align="center">
									The review period may take up to 2 weeks
								</Text>
							</Box>
							<Text font="18px/26px 'AvenirNextCyrRegular', sans-serif" color="#333" margin="0px 0px 16px 0px" sm-text-align="center">
								Please be patient. Due to the significant amount of candidates, it may take a while to review a resume. We will definitely get in touch with you and invite you to an interview.
							</Text>
							<Text font="24px/30px 'AvenirNextCyrMedium', sans-serif" color="#333" margin="20px 0px 16px 0px" sm-text-align="center">
								If you still got no response
							</Text>
							<Text font="18px/26px 'AvenirNextCyrRegular', sans-serif" color="#333" margin="0px 0px 16px 0px" sm-text-align="center">
								We do our best to get back to every applicant. If you haven't been contacted within two weeks, it means that the job opening has already been closed, or your current set of skills doesn't match our requirements.
							</Text>
							<Text font="24px/30px 'AvenirNextCyrMedium', sans-serif" color="#333" margin="20px 0px 16px 0px" sm-text-align="center">
								Give it a second try
							</Text>
							<Text font="18px/26px 'AvenirNextCyrRegular', sans-serif" color="#333" margin="0px 0px 16px 0px" sm-text-align="center">
								In case your application has been declined, you can contact us in a while to apply for a new, more interesting to you position, or when you see you've gained necessary working experience and qualifications.
							</Text>
							<Box display="none" justify-content="center" margin="32px 0px 0px 0px" md-display="none">
								<Link
									href="/resume/#three"
									text-align="center"
									text-decoration-line="initial"
									border-width="2px"
									border-style="solid"
									border-color="#4a8cfa"
									background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/arrow-right-blue.svg?v=2021-02-10T23:40:29.406Z) 90% center/auto no-repeat scroll padding-box"
									padding="0px 68px 1px 15px"
									color="#4a8cfa"
									transition="all 0.2s linear 0s"
									font="600 16px/46px AvenirNextCyrRegular, sans-serif"
									border-radius="5px"
									hover-color="#ffffff"
									hover-background="#4a8cfa url(https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/arrow-right-white.svg?v=2021-02-10T23:44:24.127Z) 90% center/auto no-repeat scroll padding-box"
								>
									Собеседование
								</Link>
							</Box>
						</Components.Tab2>
						<Components.Tab2 tabId="three">
							<Box>
								<Text color="#263238" font="36px 'AvenirNextCyrRegular'" margin="0px 0px 16px 0px" sm-text-align="center">
									Interview
								</Text>
								<Text font="18px/26px 'AvenirNextCyrRegular', sans-serif" color="#333" sm-text-align="center">
									Interviewing process may include several meetings, which can be both personal and remote.
								</Text>
								<Text font="24px/30px 'AvenirNextCyrMedium', sans-serif" color="#333" margin="20px 0px 16px 0px" sm-text-align="center">
									What happens in an interview
								</Text>
							</Box>
							<Text font="18px/26px 'AvenirNextCyrRegular', sans-serif" color="#333" margin="0px 0px 16px 0px" sm-text-align="center">
								Personal talk{"\n\n"}
							</Text>
							<Text font="18px/26px 'AvenirNextCyrRegular', sans-serif" color="#333" margin="0px 0px 16px 0px" sm-text-align="center">
								During an interview we would like to get insight into your personal interests: your ambitions, mindset, attitude towards yourself and people around you. We are also keen to learn about your taste in art and what you do in your spare time.{"\n\n"}
							</Text>
							<Text font="18px/26px 'AvenirNextCyrRegular', sans-serif" color="#333" margin="0px 0px 16px 0px" sm-text-align="center">
								Test assignment and professional questions
								<br />
								{"\n\n"}
							</Text>
							<Text font="18px/26px 'AvenirNextCyrRegular', sans-serif" color="#333" margin="0px 0px 16px 0px" sm-text-align="center">
								Be prepared to answer specific professional questions. If you are a developer, you can be asked to write code, if a designer — discuss interface solutions. Some of the company's job roles require a small test assignment.
							</Text>
							<Text font="24px/30px 'AvenirNextCyrMedium', sans-serif" color="#333" margin="20px 0px 16px 0px" sm-text-align="center">
								An interview can be remote
							</Text>
							<Text font="18px/26px 'AvenirNextCyrRegular', sans-serif" color="#333" margin="0px 0px 16px 0px" sm-text-align="center">
								It often happens that we interview candidates from other cities remotely, over Skype. Please keep in mind that a remote interview is no less important than a personal one: be punctual and polite. We highly recommend that you take care of the Internet connection, webcam, and sound quality in advance.
							</Text>
						</Components.Tab2>
					</Components.Tabs2>
					<Box display="flex" margin="35px 0px 0px 0px">
						<Box width="30%" />
						<Box display="flex" justify-content="flex-start" margin="0px 0px 0px 0px" width="70%">
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
									color="#263238"
									font="normal 500 16px/50px 'AvenirNextCyrMedium', sans-serif"
									letter-spacing=".1px"
									background="#ffd83a"
									padding="0px 15px 0px 15px"
									transition="all 0.2s linear 0s"
									left="-30px"
									bottom="auto"
									right="auto"
									top="40%"
									hover-left="0px"
									border-radius="5px"
									margin="0px 0px 0px 0px"
									hover-background="#e6c235"
								>
									Send a Resume
								</Override>
								<Override
									slot="wrapper"
									background="#ffffff"
									max-width="672px"
									width="100%"
									margin="0px 0px 0px 0px"
									padding="0px 0px 0px 0px"
									border-radius="0px"
									height="100%"
									overflow-y="scroll"
									max-height="1150px"
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
						</Box>
					</Box>
				</StackItem>
				{"        "}
			</Stack>
		</Section>
		<Section padding="60px 0 60px 0" sm-padding="60px 0 60px 0" lg-padding="40px 0 40px 0" background="#eef2f3">
			<Override slot="SectionContent" align-items="center" />
			<Stack margin="0px 0px 0px 0px" max-width="1170px" width="100%">
				<StackItem width="100%">
					<Override slot="StackItemContent" align-items="center" justify-content="center" />
					<Text
						font="normal 400 48px/54px 'AvenirNextCyrMedium', sans-serif"
						color="#4a8cfa"
						text-align="center"
						padding="0px 20% 0px 20%"
						margin="0px 0px 30px 0px"
						lg-padding="0px 0px 0px 0px"
						sm-font="normal 400 24px/34px 'AvenirNextCyrMedium', sans-serif"
					>
						7 simple tips on how to charm our HR manager
					</Text>
				</StackItem>
				<StackItem width="33.333%" lg-width="50%" sm-width="100%">
					<Override
						slot="StackItemContent"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="column"
						sm-align-items="center"
					/>
					<Text font="normal 400 48px/54px 'AvenirNextCyrMedium', sans-serif" color="#aec1d9" padding="0px 0px 0px 0px" margin="0px 0px 16px 0px">
						01
					</Text>
					<Text
						font="normal 300 18px/26px 'AvenirNextCyrRegular', sans-serif"
						color="#58646f"
						padding="0px 0px 0px 0px"
						margin="0px 0px 16px 0px"
						sm-text-align="center"
					>
						Good manners are essential.
					</Text>
				</StackItem>
				<StackItem width="33.333%" lg-width="50%" sm-width="100%">
					<Override
						slot="StackItemContent"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="column"
						sm-align-items="center"
					/>
					<Text font="normal 400 48px/54px 'AvenirNextCyrMedium', sans-serif" color="#aec1d9" padding="0px 0px 0px 0px" margin="0px 0px 16px 0px">
						02
					</Text>
					<Text
						font="normal 300 18px/26px 'AvenirNextCyrRegular', sans-serif"
						color="#58646f"
						padding="0px 0px 0px 0px"
						margin="0px 0px 16px 0px"
						sm-text-align="center"
					>
						While in an interview, shut off your cell phone or set it to silent.
					</Text>
				</StackItem>
				<StackItem width="33.333%" lg-width="50%" sm-width="100%">
					<Override
						slot="StackItemContent"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="column"
						sm-align-items="center"
					/>
					<Text font="normal 400 48px/54px 'AvenirNextCyrMedium', sans-serif" color="#aec1d9" padding="0px 0px 0px 0px" margin="0px 0px 16px 0px">
						03
					</Text>
					<Text
						font="normal 300 18px/26px 'AvenirNextCyrRegular', sans-serif"
						color="#58646f"
						padding="0px 0px 0px 0px"
						margin="0px 0px 16px 0px"
						sm-text-align="center"
					>
						If it's going to be your first interview, or you're simply nervous, let us know about it. It won't make a bad impression.
					</Text>
				</StackItem>
				<StackItem width="33.333%" lg-width="50%" sm-width="100%">
					<Override
						slot="StackItemContent"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="column"
						sm-align-items="center"
					/>
					<Text font="normal 400 48px/54px 'AvenirNextCyrMedium', sans-serif" color="#aec1d9" padding="0px 0px 0px 0px" margin="0px 0px 16px 0px">
						04
					</Text>
					<Text
						font="normal 300 18px/26px 'AvenirNextCyrRegular', sans-serif"
						color="#58646f"
						padding="0px 0px 0px 0px"
						margin="0px 0px 16px 0px"
						sm-text-align="center"
					>
						Be honest and truthful when answering questions.
					</Text>
				</StackItem>
				<StackItem width="33.333%" lg-width="50%" sm-width="100%">
					<Override
						slot="StackItemContent"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="column"
						sm-align-items="center"
					/>
					<Text font="normal 400 48px/54px 'AvenirNextCyrMedium', sans-serif" color="#aec1d9" padding="0px 0px 0px 0px" margin="0px 0px 16px 0px">
						05
					</Text>
					<Text
						font="normal 300 18px/26px 'AvenirNextCyrRegular', sans-serif"
						color="#58646f"
						padding="0px 0px 0px 0px"
						margin="0px 0px 16px 0px"
						sm-text-align="center"
					>
						Take some time to research information about the company.
						<br />
						{" "}Who we are? What do we do?{" "}
						<br />
						What makes us different from other IT companies?
					</Text>
				</StackItem>
				<StackItem width="33.333%" lg-width="50%" sm-width="100%">
					<Override
						slot="StackItemContent"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="column"
						sm-align-items="center"
					/>
					<Text font="normal 400 48px/54px 'AvenirNextCyrMedium', sans-serif" color="#aec1d9" padding="0px 0px 0px 0px" margin="0px 0px 16px 0px">
						06
					</Text>
					<Text
						font="normal 300 18px/26px 'AvenirNextCyrRegular', sans-serif"
						color="#58646f"
						padding="0px 0px 0px 0px"
						margin="0px 0px 16px 0px"
						sm-text-align="center"
					>
						Be sure to ask us questions regarding the job position and company's activity.
						<br />
					</Text>
				</StackItem>
				<StackItem width="33.333%" lg-display="none">
					<Override slot="StackItemContent" align-items="flex-start" justify-content="flex-start" flex-direction="column" />
				</StackItem>
				<StackItem width="33.333%" lg-width="50%" sm-width="100%">
					<Override
						slot="StackItemContent"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="column"
						sm-align-items="center"
					/>
					<Text font="normal 400 48px/54px 'AvenirNextCyrMedium', sans-serif" color="#aec1d9" padding="0px 0px 0px 0px" margin="0px 0px 16px 0px">
						07
					</Text>
					<Text
						font="normal 300 18px/26px 'AvenirNextCyrRegular', sans-serif"
						color="#58646f"
						padding="0px 0px 0px 0px"
						margin="0px 0px 16px 0px"
						sm-text-align="center"
					>
						And, most importantly, bring a smile with you!
					</Text>
				</StackItem>
				<StackItem width="33.333%" lg-display="none">
					<Override slot="StackItemContent" align-items="flex-start" justify-content="flex-start" flex-direction="column" />
				</StackItem>
				{"        "}
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
				{"* {\n  scroll-behavior: smooth;\n  }\n.nobutton {\npointer-events: none; \n}\n  .active .fileText {\n  display: none;\n  }\n  input.fileText {\n      opacity: 1 !important;\n  }\n  * {\n    -webkit-tap-highlight-color: transparent!important;\n  }\n  @font-face {\n    font-family: 'AvenirNextCyrRegular';\n    src: url('/fonts/AvenirNextCyr-Regular.eot');\n    src: url('/fonts/AvenirNextCyr-Regular.eot?#iefix') format('embedded-opentype'), url('/fonts/AvenirNextCyr-Regular.woff') format('woff'), url('/fonts/AvenirNextCyr-Regular.ttf') format('truetype');\n    font-weight: normal;\n    font-style: normal;\n    font-display: swap;\n  }\n  @font-face {\n    font-family: 'AvenirNextCyrMedium';\n    src: url('/fonts/AvenirNextCyr-Medium.eot');\n    src: url('/fonts/AvenirNextCyr-Medium.eot?#iefix') format('embedded-opentype'), url('/fonts/AvenirNextCyr-Medium.woff') format('woff'), url('/fonts/AvenirNextCyr-Medium.ttf') format('truetype');\n    font-weight: normal;\n    font-style: normal;\n    font-display: swap;\n  }\n  @font-face {\n    font-family: 'AvenirNextCyrBold';\n    src: url('/fonts/AvenirNextCyr-Bold.eot');\n    src: url('/fonts/AvenirNextCyr-Bold.eot?#iefix') format('embedded-opentype'), url('/fonts/AvenirNextCyr-Bold.woff') format('woff'), url('/fonts/AvenirNextCyr-Bold.ttf') format('truetype');\n    font-weight: normal;\n    font-style: normal;\n    font-display: swap;\n  }\n  @font-face {\n    font-family: 'AvenirNextCyrDemi';\n    src: url('/fonts/AvenirNextCyr-Demi.otf');\n    font-weight: normal;\n    font-style: normal;\n    font-display: swap;\n  }\n  body {\n    font-family: 'AvenirNextCyrRegular', sans-serif;\n    font-weight: normal;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }"}
			</style>
		</RawHtml>
	</Theme>;
});