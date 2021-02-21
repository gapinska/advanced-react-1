import React from 'react'
import withTooltip from './withToolitip'

const Movie = ({ showToolTip }) => {
	return <div>Movie {showToolTip && <div>Show tooltip</div>}</div>
}

export default withTooltip(Movie)
