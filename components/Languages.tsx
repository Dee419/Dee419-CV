import React from "react";
import {useTranslation} from "next-i18next";

const Languages: React.FC<{ style?: React.CSSProperties }> = ({ style }) => {
	const { t } = useTranslation();

	return (
		<div style={style}>
			<h3>{t("languages.title")}</h3>
			<div>
				<table>
					<tbody>
						<tr>
							<td>{t("languages.dutch.title")}</td>
							<td style={{ paddingLeft: '3.5em' }}>{t("languages.dutch.proficiency")}</td>
						</tr>
						<tr>
							<td>{t("languages.english.title")}</td>
							<td style={{ paddingLeft: '3.5em' }}>{t("languages.english.proficiency")}</td>
						</tr>
						<tr>
							<td>{t("languages.french.title")}</td>
							<td style={{ paddingLeft: '3.5em' }}>{t("languages.french.proficiency")}</td>
						</tr>
					</tbody>
				</table>
				{/*<table style={{width: '100%'}}>
					<tbody>
						<tr>
							<td style={{ textAlign: "left", width: "50%" }}>
								<p>Nederlands</p>
							</td>
							<td style={{ textAlign: "right", width: "50%" }}>
								<i className="fa-solid fa-star"/>
								<i className="fa-solid fa-star"/>
								<i className="fa-solid fa-star"/>
								<i className="fa-solid fa-star"/>
								<i className="fa-solid fa-star-half-stroke" />
							</td>
						</tr>
						<tr>
							<td style={{ textAlign: "left", width: "50%" }}>
								<p>Engels</p>
							</td>
							<td style={{ textAlign: "right", width: "50%" }}>
								<i className="fa-solid fa-star"/>
								<i className="fa-solid fa-star"/>
								<i className="fa-solid fa-star"/>
								<i className="fa-solid fa-star"/>
								<i className="fa-solid fa-star-half-stroke" />
							</td>
						</tr>
						<tr>
							<td style={{ textAlign: "left", width: "50%" }}>
								<p>Frans</p>
							</td>
							<td style={{ textAlign: "right", width: "50%" }}>
								<i className="fa-solid fa-star"/>
								<i className="fa-solid fa-star-half-stroke" />
								<i className="fa-regular fa-star" />
								<i className="fa-regular fa-star" />
								<i className="fa-regular fa-star" />
							</td>
						</tr>
					</tbody>
				</table>*/}
			</div>
		</div>
	)
}

export default Languages;