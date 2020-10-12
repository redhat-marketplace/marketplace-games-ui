import Checkbox from './Checkbox.svelte';

export default {
  title: 'Example/Checkbox',
  component: Checkbox,
  argTypes: {
    label: { control: 'text' },
    checked: { control: 'boolean' },
    onChange: { action: 'onChange' },
  },
};

const Template = ({ onChange, ...args }) => ({
  Component: Checkbox,
  props: args,
  on: {
    change: onChange,
  },
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'Checkbox',
  checked: true,
  onChange: () => console.log('Checkbox toggled'),
};
