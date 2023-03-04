import server from './server';
import './database'

server.listen(3001, () => {
    console.log('Server is running on PORT: 3001')
})