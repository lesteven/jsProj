const cassandra = require('cassandra-driver');

const cp = process.env.CASSCP? [process.env.CASSCP] : ['localhost:9042'];
const keyspace = process.env.KP || 'foo';

const client = new cassandra.Client({
  contactPoints: cp,
  localDataCenter: 'datacenter1',
  keyspace
});

const query = 'SELECT * FROM foo.bar';

const test = async () => {
  try {
    const data = await client.execute(query)
    console.log(data);
  } catch(e) {
    console.log(e);
  }
};

