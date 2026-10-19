// Tech stack assets module - consolidates all tech stack icons
import Canva from './Canva.svg';
import CSS from './CSS.svg';
import Figma from './figma.webp';
import GitHub from './Github.svg';
import JavaScript from './JavaScript.svg';
import LaTeX from './LaTeX-Light.svg';
import Notion from './Notion-Light.svg';
import Python from './Python.svg.webp';
import React from './React-Light.svg';
import TensorFlow from './TensorFlow-Light.svg';
import TypeScript from './TypeScript.svg';
import Vercel from './Vercel-Light.svg';

export const techStackIcons = {
  Canva,
  CSS,
  Figma,
  GitHub,
  JavaScript,
  LaTeX,
  Notion,
  Python,
  React,
  TensorFlow,
  TypeScript,
  Vercel,
};

// Export as array for easier iteration if needed
export const techStackArray = Object.entries(techStackIcons).map(([name, icon]) => ({
  name,
  icon,
}));

export default techStackIcons;