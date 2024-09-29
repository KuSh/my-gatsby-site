exports.createPages = async function ({ actions, graphql }) {
  Array.from({ length: 5 }).forEach((_, i) =>
    actions.createPage({
      path: `/${i + 1}`,
      component: require.resolve("./src/templates/template.js"),
      context: {},
    }),
  );
};
