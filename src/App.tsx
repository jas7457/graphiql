import { createGraphiQLFetcher } from '@graphiql/toolkit';
import { GraphiQL } from 'graphiql';

import './App.css';
import 'graphiql/graphiql.css';

const graphqlURL = 'YOUR_GRAPHQL_URL';

const fetcher = createGraphiQLFetcher({
	url: graphqlURL,
});

export function App() {
	return <GraphiQL fetcher={fetcher} />;
}
