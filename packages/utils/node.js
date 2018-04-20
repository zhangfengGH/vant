/**
 * VNode helper
 */
export default {
  name: 'm-node',
  functional: true,
  props: {
    node: Array
  },
  render(h, ctx) {
    return ctx.props.node;
  }
};
