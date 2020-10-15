import Checkbox from './Checkbox.svelte';

export default {
  title: 'Example/Checkbox',
  component: Checkbox,
  argTypes: {
    label: { control: 'text' },
    checked: { control: 'boolean' },
  },
};

const Template = ({ ...args }) => ({
  Component: Checkbox,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  label: 'Checkbox',
  checked: true,
};
