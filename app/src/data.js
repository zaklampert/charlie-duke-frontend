import capcomIntroBg from './images/backgrounds/capcom.jpg';
import trainingIntroBg from './images/backgrounds/training.jpg';
import goingIntroBg from './images/backgrounds/going.jpg';
import beingIntroBg from './images/backgrounds/being.jpg';
import comingIntroBg from './images/backgrounds/splashdown.jpg';
import panoramic from './images/being/panoramic.jpg';
import beingFamily from './images/being/family.jpg';
import beingRover from './images/being/rover.jpg';
import heroBackground from './images/backgrounds/hero.jpg';


export const pages = [
  {
    template: "Hero",
    title: "Moonwalker",
    text: "Charlie Duke",
    background: heroBackground,
    slug: "hero",
  },
  {
    order: "00",
    title: "About",
    template: "About",
    slug: "about",
    quote: "As an American, it was my honor to serve my country by going to the moon aboard Apollo 16 and becoming the 10th man to walk on the lunar surface",
  },
  {
    order: "01",
    title: "Capcom",
    slug: "capcom",
    copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt convallis velit, eu d ictum justo euismod id. Pellentesque habitant morbi tristique senectus et netus et malesuada fames.",
    background: capcomIntroBg,
    template: "Story",
  },
  {
    order: "02",
    title: "Training",
    slug: "training",
    copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt convallis velit, eu d ictum justo euismod id. Pellentesque habitant morbi tristique senectus et netus et malesuada fames.",
    background: trainingIntroBg,
    template: "Story",
  },
  {
    order: "03",
    title: "Going There",
    slug: "going-there",
    copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt convallis velit, eu d ictum justo euismod id. Pellentesque habitant morbi tristique senectus et netus et malesuada fames.",
    background: goingIntroBg,
    template: "Story",
  },
  {
    order: "04",
    title: "Being There",
    slug: "being-there",
    copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt convallis velit, eu d ictum justo euismod id. Pellentesque habitant morbi tristique senectus et netus et malesuada fames.",
    background: beingIntroBg,
    template: "Story",
    children: [
      {
        slug: "01",
        template: "ImageWithText",
        image: panoramic,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt convallis velit, eu d ictum justo euismod id. Pellentesque habitant morbi tristique senectus et netus et malesuada fames."
      },
      {
        slug: "02",
        template: "SideBySide",
        leftPhoto: beingFamily,
        rightPhoto: beingRover,
        leftCaption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt convallis velit, eu d ictum justo euismod id. Pellentesque habitant morbi tristique senectus et netus et malesuada fames.",
        rightCaption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt convallis velit, eu d ictum justo euismod id. Pellentesque habitant morbi tristique senectus et netus et malesuada fames."
      }
    ]
  },
  {
    order: "05",
    title: "Coming Home",
    slug: "coming-home",
    copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt convallis velit, eu d ictum justo euismod id. Pellentesque habitant morbi tristique senectus et netus et malesuada fames.",
    background: comingIntroBg,
    template: "Story",
  }
]
