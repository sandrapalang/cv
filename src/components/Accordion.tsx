import React, { useEffect, useState, useRef } from 'react'
import ChevronDown from '../icons/ChevronDown'

interface AccordionProps {
	startDate: string
	endDate?: string
	title: string
	company?: string
	isInternship?: boolean
	internship?: string
	atLabel: string
	school?: string
	content?: string[]
	skills?: string[]
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
	content,
	skills,
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
			className={`accordion${isOpen ? ' open' : ''}`}
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
					<div className="date">
						<h3>
							{startDate}
							{endDate ? ` - ${endDate}` : ''}
						</h3>
					</div>
				)}
				<h3 className="title">
					{title}
					{isInternship && internship ? ` (${internship})` : ''}
				</h3>
				<span
					className="chevron-icon"
					style={{ transform: `rotate(${rotation}deg)` }}
					aria-hidden="true"
				>
					<ChevronDown />
				</span>
			</div>
			{isOpen && (
				<div className="accordion-content" ref={contentRef}>
					<div className="header">
						<p>
							{atLabel} {company} {school}
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
