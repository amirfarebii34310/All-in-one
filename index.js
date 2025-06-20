const favicon = require("serve-favicon");
const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const MemoryStore = require("memorystore")(session);
const expressLayout = require("express-ejs-layouts");
const compression = require("compression");
const passport = require("passport");
const flash = require("connect-flash");
const Limiter = require("express-rate-limit");
const fileUpload = require("express-fileupload");
const cron = require("node-cron");
const time = require("moment-timezone");

const { hitCounter, getRoute } = require("./library/functions");
const { profilePath, user } = require("./library/settings");
const { connectMongoDb } = require("./database/connect");
const { User } = require("./database/model");
const apirouter = require("./routing/api");
const userRouters = require("./routing/users");
const premiumRouters = require('./routing/premium');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(Limiter({
	windowMs: 1 * 60 * 1000,
	max: 1000,
	message: "Oops too many requests #Greats Amir"
}));

connectMongoDb();

app.enable("trust proxy", 1);
app.set("json spaces", 2);
app.set("view engine", "ejs");
app.use(function (req, res, next) {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");

res.on("finish", () => {
		if (!getRoute(req)) {

		} else {
			hitCounter(1);
		}
	});
	next();
});	

app.use(expressLayout);
app.use(fileUpload());
app.use(compression());
app.use(favicon("./views/favicon.ico"));
app.use(express.static("assets"));
app.use(session({
	secret: "secret",
	resave: true,
	saveUninitialized: true,
	cookie: {
		maxAge: 86400000
	},
	store: new MemoryStore({
		checkPeriod: 86400000
	}),
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());
require("./library/config")(passport);
app.use(flash());
app.use(function (req, res, next) {
	res.locals.success_msg = req.flash("success_msg");
	res.locals.warning_msg = req.flash("warning_msg");
	res.locals.error_msg = req.flash("error_msg");
	res.locals.error = req.flash("error");
	res.locals.user = req.user || null;
	next();
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/docs.ejs");
});

app.get("/docs", async (req, res) => {
	let users;
	let text_running;
	//let hit;
	/**let users_count = [...await User.find({}, async function (er, resp) {
		let allUsers;
		if (er) allUsers = {};
		else allUsers = resp;
		return allUsers;
	})].length + 100;**/

	/**const Hit = await User.findOne({ gmail: user });
	if (!Hit.hitCount) hit = hitCount.count;
	else hit = Hit.hitCount;**/
	if (!req.user) {
		text_running = "Update+Instagram+Stories;Silahkan+lapor;Bila+menemukan+bug;Terima+kasih.";
		users = {
			apikey: "APIKEY",
			url: profilePath
		};
	} else {
		users = req.user;
		if (users.email == user) text_running = "Kamu+Terlalu+Berharga+Bagiku;Tetapi.....;Aku+Terlalu+Sepele+Bagimu.;😊😊😊";
		else text_running = `Welcome+${users.username}.;Silahkan+gunakan+rest+api;Dengan+bijak.`;
	}
	res.render("docs", {
		text_running,
		//hit_counter: hit,
		androUser: req.headers["sec-ch-ua-platform"],
		//users_count,
		apikey: users.apikey,
		profile: users.url,
		layout: "layouts/main"
	});
});

app.use("/api", apirouter);
app.use("/users", userRouters);
app.use('/premium', premiumRouters);

app.listen(PORT, function () {
	console.log("Server running on port " + PORT);
});

cron.schedule("0 0 * * *", async () => {
	await User.find({ limit: 0 }, async function (er, resp) {
		for (let i = 0; i < resp.length; i++) {
			await User.findOneAndUpdate({
				email: resp[i].email
			}, {
				limit: 150
			});
		}
		console.log(`[ ${time.tz("Asia/Karachi").format("hh:mm")} ] Success Reset Limit`);
	});
}, {
	scheduled: true,
	timezone: "Asia/Karachi"
});
