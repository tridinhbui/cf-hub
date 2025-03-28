import React from "react";
import { Row, Col, Typography } from "antd";
import "./Community.css";
import Image from "next/image";

const { Text } = Typography;

const Community = () => {
	const handleClick = (url) => {
		window.open(url, "_blank"); // Opens the link in a new tab
	};

	return (
		<div className="community-container">
			<div className="community-title-wrapper">
				<Text className="community-title">CF Hub Community</Text>
			</div>
			<Row gutter={[16, 16]} justify="center" className="community-row">
				<Col xs={24} sm={12} md={6} lg={6} className="image-col">
					<div
						className="clickable-image"
						onClick={() =>
							handleClick("https://www.facebook.com/CareerFoundationHub")
						}
					>
						<Image
							src="/assets/facebook-screenshot.png"
							alt="Community 1"
							className="community-image"
							width={100}
							height={100}
						/>
						<Text className="image-description">Group TECH</Text>
					</div>
				</Col>
				<Col xs={24} sm={12} md={6} lg={6} className="image-col">
					<div
						className="clickable-image"
						onClick={() =>
							handleClick("https://www.instagram.com/cf.hub_2025/")
						}
					>
						<Image
							src="/assets/instagram-screenshot.png"
							alt="Community 2"
							className="community-image"
							width={200}
							height={200}
						/>
						<Text className="image-description">Instagram TECH</Text>
					</div>
				</Col>
			</Row>
		</div>
	);
};

export default Community;
