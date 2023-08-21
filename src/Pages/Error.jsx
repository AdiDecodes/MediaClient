import React from 'react';
import Lottie from 'react-lottie-player';

const Error = () => {
	const lottieanim =
		'https://lottie.host/7513c96e-83d2-488a-a9e2-7b323418c28e/SNEAAQmffx.json';
	return (
		<div>
			<Lottie
				loop
				animationData={lottieanim}
				play
				style={{ width: 150, height: 150 }}
			/>
		</div>
	);
};

export default Error;
