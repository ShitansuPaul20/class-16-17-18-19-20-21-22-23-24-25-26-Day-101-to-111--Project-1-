const express = require('express')
const app = express();
const cookieparser = require('cookie-parser')
const authRouter = require('./routes/auth.routes');
const postRouter = require('./routes/post.routes');
const userRoutes = require('./routes/user.routes');
const cors = require('cors')
const profileRoutes = require('./routes/profile.routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieparser())
app.use(cors({
    credentials: true,
    origin: "http://localhost:5173"
}))

app.use("/api/auth",authRouter);
app.use("/api/posts",postRouter);
app.use("/api/users" , userRoutes);
app.use("/api/user" , profileRoutes);

module.exports = app