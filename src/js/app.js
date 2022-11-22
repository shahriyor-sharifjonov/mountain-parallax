import { Power3 } from "gsap";
import * as functions from "./modules/functions.js";

functions.isWebp();

gsap.registerPlugin(ScrollTrigger);

gsap.to('#bg', {
    scrollTrigger: {
        scrub: 1
    },
    scale: 1.5,
}, {ease: Expo.easeInOut})

gsap.to('#man', {
    scrollTrigger: { 
        scrub: 1
    },
    scale: 0.5,
}, {ease: Expo.easeInOut})

gsap.to('#mountain_left', {
    scrollTrigger: {
        scrub: 1
    },
    x: -500
}, {ease: Expo.easeInOut})

gsap.to('#mountain_right', {
    scrollTrigger: {
        scrub: 1
    },
    x: 500
}, {ease: Expo.easeInOut})

gsap.to('#clouds_1', {
    scrollTrigger: {
        scrub: 1
    },
    x: 200
}, {ease: Expo.easeInOut})

gsap.to('#clouds_2', {
    scrollTrigger: {
        scrub: 1
    },
    x: -200
}, {ease: Expo.easeInOut})

gsap.to('#text', {
    scrollTrigger: {
        scrub: 1
    },
    y: 100,
}, {ease: Expo.easeInOut})