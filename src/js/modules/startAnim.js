import gsap from 'gsap';
import SplitText from '../../assets/js/gsap-bonus/SplitText';

gsap.registerPlugin([SplitText]);

export default () => {
  const timeline = gsap.timeline();

  if (!document.querySelector('.js-emerging-text')) return;

  let splitedText = new SplitText('.js-emerging-text', {type: 'lines'});

  gsap.set(".js-emerging-block", {y: '3rem', autoAlpha: 0});
  gsap.set(".js-emerging-block2", {y: '3rem', autoAlpha: 0});
  gsap.set(".js-emerging-block3", {y: '3rem', autoAlpha: 0});
  gsap.set(splitedText.lines, {yPercent: 100});

  setTimeout(() => {
    timeline
      .to(splitedText.lines, {yPercent: 0, duration: 0.6})
      .to('.js-emerging-block3', {y: 0, autoAlpha: 1, duration: 0.3}, '-=0.1')
      .to('.js-emerging-block', {y: 0, autoAlpha: 1, duration: 0.3}, '+=0.15')
      .to('.js-emerging-block2', {y: 0, autoAlpha: 1, duration: 0.3}, '+=0.15');
  }, 1050);
};
