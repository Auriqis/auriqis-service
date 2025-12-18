"use client"

import Image from "next/image"
import React, { useState } from "react"
import { cn } from "@/lib/utils"
import {
	Announcement,
	AnnouncementTag,
	AnnouncementTitle,
} from "@/components/ui/announcement"
import { ArrowUpRightIcon } from "lucide-react"

const cardContents = [
	{
		title: "Intelligent Automation, Delivered Fast.",
		description:
			"From RAG-based chatbots trained on your data to complex automated workflows (Zoho, Atlassian, Google Sheets), we integrate AI to cut costs and boost efficiency.",
		announcement: "Explore AI Solutions",
	},
  {
    title: "Prototypes That Convert. Designs That Deliver.",
    description:
      "High-fidelity prototypes and user-centric designs that are optimized for your target audience and ready for rapid development.",
    announcement: "View Design Prototypes",
  },
	{
		title: "Scalable Backends. Zero Infrastructure Overhead.",
		description:
			"We build complete, secure serverless backends (AWS Lambda, DynamoDB, Cognito) using Infrastructure as Code, ensuring your application is ready for global scale from day one.",
		announcement: "Build Your Serverless MVP",
	},
	{
		title: "Innovation That Drives Results",
		description:
			"A dedication to leveraging the latest and most effective technologies, particularly in AI and Cloud, to create forward-thinking solutions.",
		announcement: "Start your 1-week MVP discovery",
	},
	{
		title: "Quality You Can Trust",
		description:
			"A commitment to excellence in every line of code, design, and client interaction, ensuring systems are robust, scalable, and reliable.",
		announcement: "Start your 1-week MVP discovery",
	},
]

const PlusCard: React.FC<{
	className?: string
	title: string
	description: string
	announcement: string
}> = ({
	className = "",
	title,
	description,
	announcement,
}) => {
	const [isHovered, setIsHovered] = useState(false)

	return (
		<div
			className={cn(
				"relative border border-dashed border-zinc-400 dark:border-zinc-700 rounded-lg p-6 bg-white dark:bg-zinc-950 min-h-[200px]",
				"flex flex-col justify-between cursor-pointer",
				className
			)}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			onClick={() => (window.location.href = "#")}
		>
			<CornerPlusIcons />
			{/* Content */}
			<div className="relative z-10 space-y-2">
				<div className="flex items-center relative">
					<h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
						{title}
					</h3>
					{isHovered && (
						<span className="absolute right-0 top-1/2 -translate-y-1/2">
							<Announcement>
								<AnnouncementTitle>
									{announcement}
									<ArrowUpRightIcon size={16} className="shrink-0 text-muted-foreground" />
								</AnnouncementTitle>
							</Announcement>
						</span>
					)}
				</div>
				<p className="text-gray-700 dark:text-gray-300">{description}</p>
			</div>
		</div>
	)
}

const CornerPlusIcons = () => (
	<>
		<PlusIcon className="absolute -top-3 -left-3" />
		<PlusIcon className="absolute -top-3 -right-3" />
		<PlusIcon className="absolute -bottom-3 -left-3" />
		<PlusIcon className="absolute -bottom-3 -right-3" />
	</>
)

const PlusIcon = ({ className }: { className?: string }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		width={24}
		height={24}
		strokeWidth="1"
		stroke="currentColor"
		className={`dark:text-white text-black size-6 ${className}`}
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M12 6v12m6-6H6"
		/>
	</svg>
)

export default function RuixenBentoCards() {
	return (
		<section className="bg-white dark:bg-transparent border border-gray-200 dark:border-gray-800">
			<div className="mx-auto container border border-gray-200 dark:border-gray-800 py-12 border-t-0 px-4">
				{/* Responsive Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 auto-rows-auto gap-4">
					<PlusCard
						{...cardContents[0]}
						className="lg:col-span-3 lg:row-span-2"
					/>
					<PlusCard
						{...cardContents[1]}
						className="lg:col-span-2 lg:row-span-2"
					/>
					<PlusCard
						{...cardContents[2]}
						className="lg:col-span-4 lg:row-span-1"
					/>
					<PlusCard
						{...cardContents[3]}
						className="lg:col-span-2 lg:row-span-1"
					/>
					<PlusCard
						{...cardContents[4]}
						className="lg:col-span-2 lg:row-span-1"
					/>
				</div>

				{/* Section Footer Heading */}
				<div className="max-w-2xl ml-auto text-right px-4 mt-6 lg:-mt-20">
					<h2 className="text-4xl md:text-6xl font-bold text-black dark:text-white mb-4">
						What We Build
					</h2>
					<p className="text-gray-600 dark:text-gray-400 text-lg">
						We design and build intelligent, production-ready digital systems
            from AI-powered automations and data-aware chatbots to scalable, 
            serverless backends and conversion-focused interfaces.
					</p>
				</div>
			</div>
		</section>
	)
}
