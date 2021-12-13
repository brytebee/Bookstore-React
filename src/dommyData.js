const bookInfo = [
  {
    id: '001',
    title: 'Rich Dad Poor Dad',
    category: 'Finance',
  },
  {
    id: '002',
    title: 'Think & Grow Rich',
    category: 'Personal Development',
  },
];

const generateChapter = () => Math.floor(Math.random() * 30);
const generateProgress = () => Math.floor(Math.random() * 100) + 1;

export { bookInfo, generateChapter, generateProgress };
