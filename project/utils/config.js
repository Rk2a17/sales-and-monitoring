const config = {
    db:{
        // url:'mongodb://Rohit:rohit1234@cluster0-shard-00-00-ovccf.mongodb.net:27017,cluster0-shard-00-01-ovccf.mongodb.net:27017,cluster0-shard-00-02-ovccf.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority',
        // url:'mongodb://Rohit:rohit1234@cluster0-shard-00-00-ovccf.mongodb.net:27017,cluster0-shard-00-01-ovccf.mongodb.net:27017,cluster0-shard-00-02-ovccf.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority',
        url:'mongodb://Rohit:rohit1234@cluster0-shard-00-00-ovccf.mongodb.net:27017,cluster0-shard-00-01-ovccf.mongodb.net:27017,cluster0-shard-00-02-ovccf.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority',
        // url:'mongodb://localhost:27017/myproject2020',
        poolsize:10
    }
} 
module.exports = config;