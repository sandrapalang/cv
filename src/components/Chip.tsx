interface ChipProps {
	label: string
	clickable?: boolean
	disabled?: boolean
	onClick?: () => void
	selected?: boolean
}

const Chip = ({
	label,
	clickable = false,
	disabled = false,
	onClick,
	selected = false,
}: ChipProps) => {
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
