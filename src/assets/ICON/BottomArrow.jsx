import React from 'react'

const BottomArrow = ({
    width = '24',
    height = '16',
    className,
    onClick
}) => (
    <svg
        viewBox="0 0 27 17"
        class="arrow"
        width={width}
        height={height}
        class={className}
        onClick={onClick}
    >
        <path d="M-.207 3.52L2.31 1.003l11.19 11.19 11.19-11.19 2.517 2.517L13.73 16.997l-.23-.23-.23.23z"/>
    </svg>
)

export default BottomArrow;