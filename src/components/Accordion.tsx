import { useState } from 'react'
import ChevronDown from '../icons/ChevronDown'

interface AccordionProps {
	atLabel: string
	startDate: string
	title: string
	content?: string[]
	company?: string
	education?: string
	endDate?: string
	inLabel?: string
	isHighlighted?: boolean
	isInternship?: boolean
	internship?: string
	location?: string
	school?: string
	skills?: string[]
}

const Accordion = ({
	atLabel,
	startDate,
	title,
	content,
	company,
	endDate,
	inLabel,
	isHighlighted,
	isInternship = false,
	internship,
	location,
	school,
	skills,
}: AccordionProps) => {
	const [isOpen, setIsOpen] = useState(false)
	const [rotation, setRotation] = useState(0)

	const handleToggle = () => {
		setIsOpen(!isOpen)
		setRotation((prev) => prev + 180)
	}

	return (
		<div
			className={`accordion${isOpen ? ' open' : ''}${isHighlighted ? ' highlighted' : ''}`}
			role="button"
			tabIndex={0}
			aria-expanded={isOpen}
			onClick={handleToggle}
			onKeyDown={(e) => {
				if (e.key === 'Enter' || e.key === ' ') {
					e.preventDefault()
					handleToggle()
				}
			}}
		>
			<div className="accordion-header">
				{(startDate || endDate) && (
					<div className="accordion-date">
						<h3>
							{startDate}
							{endDate ? ` - ${endDate}` : ''}
						</h3>
					</div>
				)}
				<h3 className="accordion-title">
					{title}
					{isInternship && internship ? ` (${internship})` : ''}
				</h3>
				<span
					className="accordion-toggle-icon"
					style={{ transform: `rotate(${rotation}deg)` }}
					aria-hidden="true"
				>
					<ChevronDown />
				</span>
				<span
					className="highlight-anchor"
					role="presentation"
					aria-hidden="true"
				>
					{isHighlighted && (
						<span
							className="highlight-indicator"
							role="presentation"
							aria-hidden="true"
						/>
					)}
				</span>
			</div>
			<div className="accordion-content" aria-hidden={!isOpen}>
				<div className="accordion-panel">
					<div className="accordion-meta">
						<p>
							{(company || school) && location
								? `${atLabel} ${company || school} ${inLabel} ${location}`
								: ''}

							{(company || school) && !location
								? `${atLabel} ${company || school}`
								: ''}

							{!(company || school) && location ? `${inLabel} ${location}` : ''}
						</p>
					</div>
					<div className="accordion-description">
						{content?.map((paragraph, index) => (
							<p key={index}>{paragraph}</p>
						))}
					</div>
					<div className="accordion-skills">
						{skills?.map((skill, index) => (
							<p key={index} className="skill">
								{skill}
							</p>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Accordion
