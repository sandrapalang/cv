import React, { useState } from 'react'

interface AccordionProps {
	startDate: string
	endDate?: string
	title: string
	company?: string
	school?: string
	content?: string[]
	skills?: string[]
}

const Accordion: React.FC<AccordionProps> = ({
	startDate,
	endDate,
	title,
	company,
	school,
	content,
	skills,
}) => {
	const [isOpen, setIsOpen] = useState(false)

	const handleToggle = () => {
		setIsOpen(!isOpen)
	}

	return (
		<div className={`accordion${isOpen ? ' open' : ''}`} onClick={handleToggle}>
			<div className="accordion-header">
				{(startDate || endDate) && (
					<div className="date">
						<h3>
							{startDate}
							{endDate ? ` - ${endDate}` : ''}
						</h3>
					</div>
				)}
				<h3 className="title">{title}</h3>
			</div>
			{isOpen && (
				<div className="accordion-content">
					<div className="header">
						<p>
							på {company} {school}
						</p>
						<div className="content">
							{content?.map((paragraph, index) => (
								<p key={index}>{paragraph}</p>
							))}
						</div>
						<div className="skills">
							{skills?.map((skill, index) => (
								<p key={index} className="skill">
									{skill}
								</p>
							))}
						</div>
					</div>
				</div>
			)}
		</div>
	)
}

export default Accordion
