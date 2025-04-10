"use client";
import { Layout, Row, Col, Typography, Button } from "antd";
import { useState } from "react";
import HeaderComponent from "@/components/header/header";
import MentorCarousel from "@/components/componentForMainPage/MentorCarousel/MentorCarousel";
import LandYourDreamJob from "@/components/componentForMainPage/LandYourDreamJob/LandYourDreamJob";
import Features from "@/components/componentForMainPage/Features/Features";
import FeedbackGallery from "@/components/componentForMainPage/FeedbackGallery/FeedbackGallery";
import MenteeShowcase from "@/components/componentForMainPage/MenteeShowcase/MenteeShowcase";
import PeerToPeerMentoring from "@/components/componentForMainPage/PeerToPeerMentoring/PeerToPeerMentoring";
import Community from "@/components/componentForMainPage/Community/Community";
import FAQ from "@/components/componentForMainPage/FAQ/FAQ";
import FooterComponent from "@/components/footer/Footer";
import AboutUs from "@/components/componentForMainPage/AboutUs/AboutUs";
import OurProcess from "@/components/componentForMainPage/OurProcess/OurProcess";
import Achievements from "@/components/componentForMainPage/Achievements/Achievements";
import Image from "next/image";

const { Header, Content } = Layout;
const { Title, Text } = Typography;

const mentors = [
	{
		name: "Linh Nguyen",
		title: "Head Mentor",
		company: "Vice President | Corporate & Investment Bank| Santander USA",
		companyLogos: [
			"https://1000logos.net/wp-content/uploads/2017/09/Santander-Logo-1536x864.png",
			"https://1000logos.net/wp-content/uploads/2022/09/Credit-Suisse-logo-1536x864.png",
			"https://1000logos.net/wp-content/uploads/2021/11/Standard-Chartered-logo-1536x864.png",
		],
		image: "/assets/mentors/linhnguyen.jpg",
		linkedin: "https://www.linkedin.com/in/quang1401/",
	},
	{
		name: "Tri Bui",
		title: "Head Mentor",
		company: "Founder Startups/Software Engineer",
		companyLogos: [
			"http://res.cloudinary.com/dbqcioj2g/image/upload/v1730944880/vmuja8lp8yh8xiz7fqhc.jpg",
			"http://res.cloudinary.com/dbqcioj2g/image/upload/v1730944880/kj3ugorhpoalspe5lsur.jpg",
			"https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/256x256/30cd1378bfa8b1b15fd194651407a294",
		],
		image: "/assets/mentors/tribui.jpg",
		linkedin: "https://www.linkedin.com/in/tribuidinh/",
	},
	{
		name: "Winnie (Ngoc) Nguyen",
		title: "Mentor",
		company:
			"Sr. Finance Manager at Smithfield Foods | Ex-Capital One | Ex-Chevron REG | Ex-KPMG | CFA",
		companyLogos: [
			"https://www.smithfieldfoods.com/images/VertLogoColor.svg?url",
			"https://1000logos.net/wp-content/uploads/2018/11/Capital-One-Logo-1536x864.png",
			"https://www.irpt.net/wp-content/uploads/2022/06/Renewable-Energy-Group-Logo.jpg",
		],
		image: "/assets/mentors/winnie.jpg",
		linkedin: "https://www.linkedin.com/in/winnie-ngoc-nguyen-682b292a/",
	},
	{
		name: "Hoa Nguyen",
		title: "Mentor",
		company: "Private Equity Performance Improvement | CFO Services",
		companyLogos: [
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpHowTizvovJv3FfK8LCQ7Dupa9Ypx3IoBeQ&s",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8hAsysD0m0IDmWJRxIm5ES4xPxeieL56zZQ&s",
			"https://www.lippincott.com/content/dam/lippincott/our-work/State_Street_Landscape.jpg",
		],
		image: "/assets/mentors/hoanguyen.jpg",
		linkedin: "https://www.linkedin.com/in/hoaknguyen/",
	},
	// {
	//   name: "Jonathan Cheng",
	//   title: "Mentor",
	//   company: "Associate Consultant at Bain & Company",
	//   companyLogos: [
	//     "https://banner2.cleanpng.com/20180816/akc/kisspng-bain-company-japan-incorporated-adviesbureau-ba-voyager-consulting-5b750a76cc0a15.3120107615343970468358.jpg",
	//   ],
	//   image:
	//     "https://res.cloudinary.com/dbqcioj2g/image/upload/v1730176141/s1qbmncykt4nr2ywxjyf.jpg",
	//   linkedin: "https://www.linkedin.com/in/jonatche1/",
	// },
];

export default function Home() {
	const [current, setCurrent] = useState("home");

	const handleClick = (e) => {
		setCurrent(e.key);
	};

	return (
		<Layout>
			<HeaderComponent current={current} handleClick={handleClick} />
			<Content>
				<div className="site-layout-content">
					<PeerToPeerMentoring />
					<LandYourDreamJob />
					<OurProcess />
					<Features />
					<AboutUs />
					<Achievements />
					<MenteeShowcase />
					<MentorCarousel mentors={mentors} />
					<FeedbackGallery />
					<Community />
					<FAQ />
					<FooterComponent />
				</div>
			</Content>
		</Layout>
	);
}
