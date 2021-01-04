const { graphql, buildSchema } = require('graphql');

// Build Schema
const schema = buildSchema(`
    type Query {
        greeting(name: String): String
    }
`);


// Create resolver
const resolver = () => {
    const greeting = (args) => {
        return `Hello ${args.name}`;
    }

    return { greeting };
}


// Execute Query
const executeQuery = async () => {
    const result = await graphql(schema, `{greeting(name: "John")}`, resolver());
    console.log(result);
};

executeQuery();