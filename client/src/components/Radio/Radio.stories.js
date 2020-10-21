import Radio from './Radio.svelte';

export default {
  title: 'Example/Radio',
  component: Radio,
  argTypes: {
    selected: { control: 'text' },
    options: { control: 'array' },
  },
};

const Template = ({ ...args }) => ({
  Component: Radio,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  selected: 'Apple',
  options: ['Apple', 'Grape', 'Cherry'],
};
