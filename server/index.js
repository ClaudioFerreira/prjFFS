const express = require ('express');
const morgan = require ('morgan');
const cors = require ('cors');
const app = express();

const { mongoose } = require('./database');

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({ origin: 'http://localhost:4200' }));

// Routes
app.use('/api/employees', require('./routes/employee.routes'));
app.use('/api/services', require('./routes/services.routes'));
app.use('/api/carousel', require('./routes/carousel.routes'));

// Startting the server
app.listen( app.get('port'), () => {
    console.log('Server on port ', app.get('port'));
});