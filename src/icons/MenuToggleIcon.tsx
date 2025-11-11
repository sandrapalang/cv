type AnimationDirection = 'idle' | 'openToClose' | 'closeToOpen'

type MenuToggleIconProps = {
	isMenuOpen: boolean
	animationDirection: AnimationDirection
	onAnimationEnd: () => void
}

function MenuToggleIcon({
	isMenuOpen,
	animationDirection,
	onAnimationEnd,
}: MenuToggleIconProps) {
	const animationClass =
		animationDirection === 'openToClose'
			? 'animation-open-to-close'
			: animationDirection === 'closeToOpen'
				? 'animation-close-to-open'
				: ''

	const baseStateClass = isMenuOpen ? 'state-close' : 'state-open'

	return (
		<svg
			className={`menu-toggle-icon${baseStateClass ? ` ${baseStateClass}` : ''}${animationClass ? ` ${animationClass}` : ''}`}
			aria-hidden="true"
			focusable="false"
			viewBox="0 0 24 24"
			onAnimationEnd={onAnimationEnd}
		>
			<line
				className="line line--primary"
				x1="2.2543"
				y1="12.0634"
				x2="22.2543"
				y2="12.0634"
			/>
			<line
				className="line line--secondary"
				x1="2.2543"
				y1="12.0634"
				x2="22.2543"
				y2="12.0634"
			/>
		</svg>
	)
}

export type { AnimationDirection }
export default MenuToggleIcon
