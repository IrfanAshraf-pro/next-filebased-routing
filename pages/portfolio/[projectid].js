import React from "react";
import { useRouter } from "next/router";
const PortfolioProjectPage = () => {
	const router = useRouter();

	return (
		<div>
			<h1>You searched for Portfolio project id: {router.query.projectid}</h1>
		</div>
	);
};

export default PortfolioProjectPage;
