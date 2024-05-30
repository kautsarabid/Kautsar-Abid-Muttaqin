import React, { useRef, useState } from "react";

import GraphicDesignBody from "./GraphicDesignBody";
import WebsiteBody from "./WebsiteBody";

export default function ProjectBody() {
	return (
		<section className="mt-10" id="project">
			<h1 className="font-display font-bold text-center text-5xl text-white">
				Project
			</h1>

			<div className="my-10 pl-10">
				<GraphicDesignBody />
			</div>

			<div className="">
				<WebsiteBody />
			</div>
		</section>
	);
}
