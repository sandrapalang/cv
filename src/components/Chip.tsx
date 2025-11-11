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
		disabled ? 'disabled' : '',
		selected ? 'selected' : '',
	].join(' ')

	return (
		<button
			className={classNames}
			disabled={disabled}
			aria-label={clickable && selected ? 'selected' : ''}
			onClick={handleClick}
		>
			<span className="label">{label}</span>
		</button>
	)
}

export default Chip
