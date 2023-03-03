import server from './server';
import './database'

server.listen(3000, () => {
    console.log('Server is running on PORT: 3000')
})