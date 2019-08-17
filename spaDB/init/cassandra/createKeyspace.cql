
CREATE KEYSPACE foo WITH replication = 
    {
    'class': 'SimpleStrategy', 
    'replication_factor': '2'
    }  
AND durable_writes = true;
