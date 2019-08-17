const { Client } = require('@elastic/elasticsearch');

const client = new Client({node: 'http://localhost:9200' });

const test = async () => {
  try {
    const res = await client.search({
      index: 'foo'
    });
    console.log(res.body.hits.hits);
  } catch (e) {
    console.log(e);
  }
}

