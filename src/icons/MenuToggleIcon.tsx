import React from 'react'

type AnimationDirection = 'idle' | 'openToClose' | 'closeToOpen'

type MenuToggleIconProps = {
	isMenuOpen: boolean
	animationDirection: AnimationDirection
	onAnimationEnd: () => void
}

const MenuToggleIcon: React.FC<MenuToggleIconProps> = ({
	isMenuOpen,
	animationDirection,
	onAnimationEnd,
}) => {
	const baseStateClass = isMenuOpen ? 'state-close' : 'state-open'

	const animationClass =
		animationDirection === 'openToClose'
			? 'animation-open-to-close'
			: animationDirection === 'closeToOpen'
				? 'animation-close-to-open'
				: ''

	return (
		<svg
			className={`menu-toggle-icon${baseStateClass ? ` ${baseStateClass}` : ''}${animationClass ? ` ${animationClass}` : ''}`}
			aria-hidden="true"
			focusable="false"
			xmlns="http://www.w3.org/2000/svg"
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
