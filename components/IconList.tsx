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
					<Icon path={icon} />
				</a>
			</span>
		</li>
	)
}

export default IconList
