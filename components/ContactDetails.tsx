import React from "react";
import {useTranslation} from "next-i18next";

const ContactDetails: React.FC<{ style?: React.CSSProperties }> = ({ style }) => {
	const { t } = useTranslation();

	return (
		<div style={style}>
			<h3>Contact Details</h3>
			<div>
				<div>
					<i
						className="fa-solid fa-envelope"
						style={{ fontSize: '1em', width: '1em', textAlign: 'center' }}
					/>
					<a href={`mailto:${t("contactDetails.email")}`} style={{marginLeft: '0.5em', display: "inline"}}>
						{t("contactDetails.email")}
					</a>
				</div>
				<div>
					<i
						className="fa-solid fa-phone"
						style={{ fontSize: '1em', width: '1em', textAlign: 'center' }}
					/>
					<p style={{marginLeft: '0.5em', display: "inline"}}>{t("contactDetails.phone")}</p>
				</div>
				<div>
					<i
						className="fa-solid fa-home"
						style={{ fontSize: '1em', width: '1em', textAlign: 'center' }}
					/>
					<p style={{marginLeft: '0.5em', display: "inline"}}>
						{t("contactDetails.address")}
					</p>
				</div>
				<div>
					<i
						className="fa-brands fa-github"
						style={{ fontSize: '1em', width: '1em', textAlign: 'center' }}
					/>
					<a href={t("contactDetails.gitHub")} style={{marginLeft: '0.5em', display: "inline"}}>
						{t("contactDetails.gitHub")}
					</a>
				</div>
				<div>
					<i
						className="fa-brands fa-linkedin"
						style={{ fontSize: '1em', width: '1em', textAlign: 'center' }}
					/>
					<a href={t("contactDetails.linkedIn")} style={{marginLeft: '0.5em', display: "inline"}}>
						{t("contactDetails.linkedIn")}
					</a>
				</div>
			</div>
		</div>
	)
}

export default ContactDetails;