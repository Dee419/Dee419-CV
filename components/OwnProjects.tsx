import React from "react";
import {useTranslation} from "next-i18next";

const OwnProjects: React.FC<{ style?: React.CSSProperties }> = ({ style }) => {
	const { t } = useTranslation();

	return (
		<div style={style}>
			<h3>{t("ownProjects.title")}</h3>
			<ul>
				<li>
					<p>
						<i className="fa fa-cutlery" /> {t("ownProjects.rosproject.title")}
					</p>
					<a
						style={{
							overflowWrap: 'break-word',
							wordBreak: 'break-word',
						}}
						href={t("ownProjects.rosproject.url")}
					>
						{t("ownProjects.rosproject.url")}
					</a>
				</li>
				<li>
					<p>
						<i className="fa-brands fa-github" /> {t("ownProjects.codingCat.title")}
					</p>
					<a
						style={{
							overflowWrap: "break-word",
							wordBreak: "break-word",
						}}
						href={t("ownProjects.codingCat.url1")}
					>
						{t("ownProjects.codingCat.url1")}
					</a>
					<br />
					<a
						style={{
							overflowWrap: "break-word",
							wordBreak: "break-word",
						}}
						href={t("ownProjects.codingCat.url2")}
					>
						{t("ownProjects.codingCat.url2")}
					</a>
				</li>
				{/*<li>
					<p>
						<i className="fa-brands fa-github" /> {t("ownProjects.secondDiscordBot.title")}
					</p>
					<a
						style={{
							overflowWrap: "break-word",
							wordBreak: "break-word",
						}}
						href={t("ownProjects.secondDiscordBot.url")}
					>
						{t("ownProjects.secondDiscordBot.url")}
					</a>
				</li>*/}
				<li>
					<p>
						<i className="fa-brands fa-steam" /> {t("ownProjects.steamWorkshop.title")}
					</p>
					<a
						href={t("ownProjects.steamWorkshop.url")}
						style={{
							overflowWrap: "break-word",
							wordBreak: "break-word",
						}}
					>
						{t("ownProjects.steamWorkshop.url")}
					</a>
				</li>
			</ul>
		</div>
	)
}

export default OwnProjects;