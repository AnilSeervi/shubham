import Image from "next/image"
import Icon from "./Icon"
import { linkType } from "./IconListWrapper"

interface propType {
	link: linkType
	length: number
}

const IconList = ({ link, length }: propType) => {
	const [title, { href, icon, index, color, author }]: linkType = link
	const angle: number = (360 / length) * index - 90
	return (
		<li style={{ color: "#fff", ["--rotate" as string]: `${angle}deg` }}>
			<span
				className="icon-wrapper"
				style={{
					["--rotate" as string]: `${-angle}deg`,
				}}
			>
				<a
					{...{ href, title }}
					className="rotate-counterclockwise-animation"
					rel="noopener noreferrer"
					aria-label={title}
					target="_blank"
					style={{ ["--svg-clr" as string]: `${color}` }}
				>
					<div className={`author author-${author}`}></div>
					{author === "slack" ? (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="32"
							height="32"
							viewBox="0 0 256 256"
						>
							<path
								fill="#E01E5A"
								d="M53.841 161.32c0 14.832-11.987 26.82-26.819 26.82c-14.832 0-26.819-11.988-26.819-26.82c0-14.831 11.987-26.818 26.82-26.818H53.84v26.819Zm13.41 0c0-14.831 11.987-26.818 26.819-26.818c14.832 0 26.819 11.987 26.819 26.819v67.047c0 14.832-11.987 26.82-26.82 26.82c-14.83 0-26.818-11.988-26.818-26.82v-67.047Z"
							/>
							<path
								fill="#36C5F0"
								d="M94.07 53.638c-14.832 0-26.82-11.987-26.82-26.819C67.25 11.987 79.239 0 94.07 0s26.819 11.987 26.819 26.819v26.82h-26.82Zm0 13.613c14.832 0 26.819 11.987 26.819 26.819c0 14.832-11.987 26.819-26.82 26.819H26.82C11.987 120.889 0 108.902 0 94.069c0-14.83 11.987-26.818 26.819-26.818h67.25Z"
							/>
							<path
								fill="#2EB67D"
								d="M201.55 94.07c0-14.832 11.987-26.82 26.818-26.82c14.832 0 26.82 11.988 26.82 26.82s-11.988 26.819-26.82 26.819H201.55v-26.82Zm-13.41 0c0 14.832-11.988 26.819-26.82 26.819c-14.831 0-26.818-11.987-26.818-26.82V26.82C134.502 11.987 146.489 0 161.32 0c14.831 0 26.819 11.987 26.819 26.819v67.25Z"
							/>
							<path
								fill="#ECB22E"
								d="M161.32 201.55c14.832 0 26.82 11.987 26.82 26.818c0 14.832-11.988 26.82-26.82 26.82c-14.831 0-26.818-11.988-26.818-26.82V201.55h26.819Zm0-13.41c-14.831 0-26.818-11.988-26.818-26.82c0-14.831 11.987-26.818 26.819-26.818h67.25c14.832 0 26.82 11.987 26.82 26.819c0 14.831-11.988 26.819-26.82 26.819h-67.25Z"
							/>
						</svg>
					) : (
						<Icon path={icon} />
					)}
				</a>
			</span>
		</li>
	)
}

export default IconList
