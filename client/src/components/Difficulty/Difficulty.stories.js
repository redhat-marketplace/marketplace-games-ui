import Difficulty from './Difficulty.svelte';

export default {
  title: 'Example/Difficulty',
  component: Difficulty,
  argTypes: {
    selected: { control: 'text' },
    options: { control: 'array' },
  },
};

const Template = ({ ...args }) => ({
  Component: Difficulty,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  selected: 'Normal',
  options: ['Easy', 'Normal', 'Hard'],
};
