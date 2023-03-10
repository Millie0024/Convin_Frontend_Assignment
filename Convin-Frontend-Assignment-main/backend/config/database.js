import mongoose from 'mongoose'

// Local database connection
// mongoose.connect('mongodb://localhost:27017/convin', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }, () => {
//     console.log("DB Connected")
// });

// Mongodb connection
mongoose.connect(`mongodb+srv://${process.env.ADMIN_USERNAME}:${process.env.ADMIN_PASSWORD}@cluster0.nalllch.mongodb.net/?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB Connected")
});