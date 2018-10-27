// server.ts
import app from './app' // 1) We need to import the app class we created previously.

// 2) This creates the server which is listening to the port number we defined in the app class.
const server = app.listen(app.get("port"), () => {
    console.log(
        "App is running on http://localhost:%d in %s mode",
        app.get("port"),
        app.get("env")
    ) // 3) We are going to put this in console so you can see that it is actually working.
});

export default server;