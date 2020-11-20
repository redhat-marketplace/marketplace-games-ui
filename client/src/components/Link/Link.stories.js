import Link from './LinkView.svelte';

export default {
  title: 'Example/Link',
  component: Link,
  argTypes: {
    disabled: { control: 'boolean' },
    href: { control: 'text' },
    target: { control: 'text' },
    rel: { control: 'text' },
  },
};

const Template = ({ ...args }) => ({
  Component: Link,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  href: '#',
  rel: 'noopener noreferrer',
  target: '_blank',
};
