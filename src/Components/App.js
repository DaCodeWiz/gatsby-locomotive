/** @format */

import React, { useEffect } from 'react';
import gsap from 'gsap';
import Lenis from '@studio-freight/lenis';
import Loadable from 'react-loadable';
import Loading from './LoadingScreen/Loading';
import MouseFollower from 'mouse-follower'
import '../styles/index.scss';

MouseFollower.registerGSAP(gsap);
const cursor = new MouseFollower();
const HomeLazy = Loadable({
	loader: () => import('./Home/Home'),
	loading: () => <Loading />,
});

export default function App() {
	useEffect(() => {
		const lenis = new Lenis({
			lerp: .14
		})

		lenis.on('lenis-scroll');

		function raf(time) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		};

		requestAnimationFrame(raf);
	}, []);

	return (
		<div className='center column'>
			<Loading />
			<HomeLazy />
		</div>
	);
}
