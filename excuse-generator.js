// Excuse Generator - A random excuse generator for procrastinators

// Array of possible subjects that can start an excuse
const who = [
  "My dog",
  "My cat",
  "My boss",
  "My friend"
];

// Array of past tense actions that can be part of an excuse
const action = [
  "ate",
  "destroyed",
  "broke",
  "stole",
  "lost"
];

// Array of objects or situations related to the excuse
const what = [
  "my homework",
  "my car keys",
  "my phone",
  "my laptop",
  "my important document"
];

// Array of time references
const when = [
  "today",
  "yesterday",
  "this morning",
  "last night",
  "last week"
];

// Random selection from each array
const randomWho = who[Math.floor(Math.random() * who.length)];
const randomAction = action[Math.floor(Math.random() * action.length)];
const randomWhat = what[Math.floor(Math.random() * what.length)];
const randomWhen = when[Math.floor(Math.random() * when.length)];

console.log("Excuse Generator is ready to run!");
