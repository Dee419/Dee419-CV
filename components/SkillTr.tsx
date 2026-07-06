import React from "react";

const SkillTr: React.FC<{ name: string, rating: number }> = ({ name, rating }) => {
	return (
		<tr>
			<td style={{ textAlign: "left", width: "50%" }}>{name}</td>
			<td style={{ textAlign: "right", width: "50%" }}>
				{[...Array(5)].map((_, i) => {
					const isFull = i < Math.floor(rating);
					const isHalf = !isFull && i < rating;
					return (
						<i
							key={i}
							className={
								isFull
									? "fa-solid fa-star"
									: isHalf
										? "fa-solid fa-star-half-stroke"
										: "fa-regular fa-star"
							}
						/>
					);
				})}
			</td>
		</tr>
	)
}

export default SkillTr;