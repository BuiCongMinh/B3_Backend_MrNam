require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 8000;
const hostName = process.env.HOST_NAME || 'localhost';
const path = require('path')

const api = require('./routes/api')

app.use(express.static(path.join(__dirname,'./publics')))
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.use('/api',api)


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});


app.listen(port, () => { console.log(`http://${hostName}:${port}`) })
