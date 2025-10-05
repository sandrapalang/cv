import React from 'react'

interface ChipProps {
	label: string
	clickable?: boolean
	disabled?: boolean
	selected?: boolean
	onClick?: () => void
}

const Chip: React.FC<ChipProps> = ({
	label,
	clickable = false,
	disabled = false,
	selected = false,
	onClick,
}) => {
	const handleClick = () => {
		if (clickable && !disabled && onClick) {
			onClick()
		}
	}

	const classNames = [
		'chip',
		clickable ? 'clickable' : '',
		selected ? 'selected' : '',
		disabled ? 'disabled' : '',
	].join(' ')

	return (
		<button
			className={classNames}
			aria-label={clickable && selected ? 'selected' : ''}
			disabled={disabled}
			onClick={handleClick}
		>
			<span className="label">{label}</span>
		</button>
	)
}

export default Chip
