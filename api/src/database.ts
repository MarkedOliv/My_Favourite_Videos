import mongoose from 'mongoose';
import config from './config'

(async () => {
    try {
        const db = await mongoose.connect(`mongodb://${config.MONGO_HOST}/${config.MONGODB_DATABASE}`);
        
        console.log('db is connected to: ' + db.connection.name)
        
    } catch (error) {
        console.error(error)
    }
})()