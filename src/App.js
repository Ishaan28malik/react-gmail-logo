import React, { useEffect, useState } from 'react';
import './App.css';
import moon from './Assets/moon.svg';
import sun from './Assets/sun.svg';

function App() {
	const [isDark, setDark] = useState(false);

	useEffect(() => {
		if (isDark) {
			document.querySelector('body').classList.remove('light');
			document.querySelector('body').classList.add('dark');
		} else {
			document.querySelector('body').classList.remove('dark');
			document.querySelector('body').classList.add('light');
		}
	}, [isDark]);

	return (
		<>
			<button
				onClick={() => setDark((prevProp) => !prevProp)}
				className='theme-container'
			>
				<img
					className='theme-icon'
					src={isDark ? sun : moon}
					alt='theme toggle icon'
				/>
			</button>
			<div className='card'></div>
		</>
	);
}

export default App;
