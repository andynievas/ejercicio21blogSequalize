require("dotenv").config();

const express = require("express");
const routes = require("./routes");
const dbInitialSetup = require("./dbInitialSetup");
const APP_PORT = process.env.APP_PORT || 3000;
const app = express();
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const { User } = require("./models");

app.use(
  session({
    secret: "1234",
    resave: false,
    saveUninitialized: false,
  }),
);
app.use(passport.session()); //Acá le digo a express que vamos a usar sesiones
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

passport.use(
  new LocalStrategy({ usernameField: "email", passwordField: "password" }, async function (
    username,
    password,
    cb,
  ) {
    try {
      const user = await User.findOne({ where: { email: username } });
      if (!user) {
        return cb(null, false, { message: "Incorrect username or password" });
      }
      return cb(null, user);
    } catch (error) {
      console.log(error);
      return cb;
    }
    //Acá iría el codigo de la verificación de la password

    /*    crypto.pbkdf2(password, row.salt, 310000, 32, 'sha256', function(err, hashedPassword) {
      if (err) { return cb(err); }
      if (!crypto.timingSafeEqual(row.hashed_password, hashedPassword)) {
        return cb(null, false, { message: 'Incorrect username or password.' });
      }
      return cb(null, row);
    }); */
  }),
);

//Agarra el id del usuario y lo mete en la sesión.
passport.serializeUser(function (user, done) {
  done(null, user.id);
});
//Esto se ejecuta cuando el usuario ya está logueado para autorizar las rutas.
passport.deserializeUser(function (id, done) {
  User.findByPk(id)
    .then((user) => {
      done(null, user); // Usuario queda disponible en req.user.
    })
    .catch((error) => {
      done(error, user);
    });
});

routes(app);

dbInitialSetup(); // Crea tablas e inserta datos de prueba.

app.listen(APP_PORT, () =>
  console.log(`\n[Express] Servidor corriendo en el puerto ${APP_PORT}!\n`),
);
