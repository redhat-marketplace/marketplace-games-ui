import TextInput from './TextInput.svelte';

export default {
  title: 'Example/TextInput',
  component: TextInput,
  argTypes: {
    textInput: { control: 'text' },
    placeholder: { control: 'text' },
    renderIcon: { control: 'boolean' },
  },
};

const Template = ({ ...args }) => ({
  Component: TextInput,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Default text',
  renderIcon: true,
};
