import React, { useEffect, useState, useRef } from 'react'
import ChevronDown from '../icons/ChevronDown'

interface AccordionProps {
	startDate: string
	endDate?: string
	title: string
	isInternship?: boolean
	internship?: string
	atLabel: string
	company?: string
	school?: string
	inLabel?: string
	location?: string
	content?: string[]
	skills?: string[]
	isHighlighted?: boolean
}

const Accordion: React.FC<AccordionProps> = ({
	startDate,
	endDate,
	title,
	isInternship = false,
	internship,
	atLabel,
	company,
	school,
	inLabel,
	location,
	content,
	skills,
	isHighlighted,
}) => {
	const contentRef = useRef<HTMLDivElement>(null)

	const [isOpen, setIsOpen] = useState(false)
	const [accordionHeight, setAccordionHeight] = useState('40px')
	const [rotation, setRotation] = useState(0)

	useEffect(() => {
		if (isOpen && contentRef.current) {
			const contentHeight = contentRef.current.scrollHeight
			setAccordionHeight(`${40 + contentHeight}px`)
		} else {
			setAccordionHeight('40px')
		}
	}, [isOpen])

	const handleToggle = () => {
		setIsOpen(!isOpen)
		setRotation((prev) => prev + 180)
	}

	return (
		<div
			className={`accordion${isOpen ? ' open' : ''}${isHighlighted ? ' highlighted' : ''}`}
			role="button"
			aria-expanded={isOpen}
			tabIndex={0}
			style={{
				height: accordionHeight,
			}}
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
					aria-hidden="true"
					role="presentation"
				>
					{isHighlighted && (
						<span
							className="highlight-indicator"
							aria-hidden="true"
							role="presentation"
						/>
					)}
				</span>
			</div>
			{isOpen && (
				<div className="accordion-content" ref={contentRef}>
					<div className="accordion-panel">
						<div className="accordion-meta">
							<p>
								{(company || school) && location
									? `${atLabel} ${company || school} ${inLabel} ${location}`
									: ''}

								{(company || school) && !location
									? `${atLabel} ${company || school}`
									: ''}

								{!(company || school) && location
									? `${inLabel} ${location}`
									: ''}
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
			)}
		</div>
	)
}

export default Accordion
