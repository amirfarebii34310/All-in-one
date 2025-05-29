const {
	Router
} = require("express");
const {
	regexUrl,
	getBuffer,
	resError,
	loghandler
} = require("../library/functions");
const { Ephoto } = require("./../scrapping/ephoto");
const ephoto = new Ephoto();
const apikeyAndLimit = require("../library/apikeyAndLimit");
router = Router();
const creator = "AMIR";


router.get("/banten", async (req, res) => {
	const { url, text } = req.query;
	if (!url || !text) return resError(res, "masukkan parameter url & text");
	if (!regexUrl(url)) return res.json(loghandler.urlInvalid);
	ephoto.image(res, "https://en.ephoto360.com/create-text-by-name-effect-58.html", url, [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(err => {
		console.log(err);
		res.json(loghandler.error);
	});
});
router.get("/diary", async (req, res) => {
	const { url, text } = req.query;
	if (!url || !text) return resError(res, "masukkan parameter url & text");
	if (!regexUrl(url)) return res.json(loghandler.urlInvalid);
	ephoto.image(res, "https://en.ephoto360.com/diary-and-smartphone-photo-frame-571.html", url, [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(err => {
		console.log(err);
		res.json(loghandler.error);
	});
});
router.get("/cyberpunk", async (req, res) => {
	const url = req.query.url;
	if (!url) return res.json(loghandler.noturl);
	if (!regexUrl(url)) return res.json(loghandler.urlInvalid);
	ephoto.image(res, "https://en.ephoto360.com/cyberpunk-city-photo-frame-533.html", url).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(err => {
		console.log(err);
		res.json(loghandler.error);
	});
});
router.get("/billboard", async (req, res) => {
	const url = req.query.url;
	if (!url) return res.json(loghandler.noturl);
	if (!regexUrl(url)) return res.json(loghandler.urlInvalid);
	ephoto.image(res, "https://en.ephoto360.com/create-outdoor-billboard-photo-frame-702.html", url).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(err => {
		console.log(err);
		res.json(loghandler.error);
	});
});
router.get("/fire", async (req, res) => {
	const url = req.query.url;
	if (!url) return res.json(loghandler.noturl);
	if (!regexUrl(url)) return res.json(loghandler.urlInvalid);
	ephoto.image(res, "https://en.ephoto360.com/fire-animated-photo-effects-137.html", url).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("gif").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(err => {
		console.log(err);
		res.json(loghandler.error);
	});
});
router.get("/rain",  async (req, res) => {
	const url = req.query.url;
	if (!url) return res.json(loghandler.noturl);
	if (!regexUrl(url)) return res.json(loghandler.urlInvalid);
	ephoto.image(res, "https://en.ephoto360.com/rain-glass-door-gifs-photo-frames-431.html", url).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("gif").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(err => {
		console.log(err);
		res.json(loghandler.error);
	});
});
router.get("/cat", async (req, res) => {
	const url = req.query.url;
	if (!url) return res.json(loghandler.noturl);
	if (!regexUrl(url)) return res.json(loghandler.urlInvalid);
	ephoto.image(res, "https://en.ephoto360.com/collage-a-cat-with-super-cool-glasses-699.html", url).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(err => {
		console.log(err);
		res.json(loghandler.error);
	});
});
router.get("/ring", async (req, res) => {
	const url = req.query.url;
	if (!url) return res.json(loghandler.noturl);
	if (!regexUrl(url)) return res.json(loghandler.urlInvalid);
	ephoto.image(res, "https://en.ephoto360.com/ring-of-fire-photo-frame-370.html", url).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(err => {
		console.log(err);
		res.json(loghandler.error);
	});
});
router.get("/collage" , async (req, res) => {
	const url = req.query.url;
	if (!url) return res.json(loghandler.noturl);
	if (!regexUrl(url)) return res.json(loghandler.urlInvalid);
	ephoto.image(res, "https://en.ephoto360.com/collage-photo-on-smartphone-frame-on-snow-background-663.html", url).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(err => {
		console.log(err);
		res.json(loghandler.error);
	});
});
router.get("/sad", async (req, res) => {
	const url = req.query.url;
	if (!url) return res.json(loghandler.noturl);
	if (!regexUrl(url)) return res.json(loghandler.urlInvalid);
	ephoto.image(res, "https://en.ephoto360.com/create-video-sad-mood-with-smartphone-622.html", url).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("mp4").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(err => {
		console.log(err);
		res.json(loghandler.error);
	});
})
router.get("/cinemagraph", async (req, res) => {
	const url = req.query.url
	if (!url) return res.json(loghandler.noturl)
	if (!regexUrl(url)) return res.json(loghandler.urlInvalid);
	ephoto.image(res, "https://en.ephoto360.com/cinemagraph-of-vintage-television-537.html", url).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("mp4").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(err => {
		console.log(err);
		res.json(loghandler.error);
	})
})
router.get("/diaryframe", async (req, res) => {
	const { url, text } = req.query;
	if (!text) return res.json(loghandler.nottext);
	if (!url) return res.json(loghandler.noturl)
	if (!regexUrl(url)) return res.json(loghandler.urlInvalid);
	ephoto.image(res, "https://en.ephoto360.com/create-diary-photo-frame-online-525.html", url, [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(err => {
		console.log(err);
		res.json(loghandler.error);
	})
})
router.get("/wood", async (res, req) => {
	const { text, text2 } = req.query;
	if (!text || !text2) return resError(res, "masukkan parameter text & text2");
	await ephoto.text(res, "https://en.ephoto360.com/create-3d-wood-text-effects-online-free-705.html", [text, text2]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/television" , async (req, res) => {
	text = req.query.text;
	if (!text) return resError(res, "masukkan parameter text");
	await ephoto.text(res, "https://en.ephoto360.com/write-text-on-vintage-television-online-670.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/glasses", async (req, res) => {
	text = req.query.text;
	if (!text) return resError(res, "masukkan parameter text");
	await ephoto.text(res, "https://en.ephoto360.com/write-text-on-wet-glass-online-589.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/blackpink", async (req, res) => {
	text = req.query.text;
	if (!text) return resError(res, "masukkan parameter text");
	await ephoto.text(res, "https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/neonbp", async (req, res) => {
	text = req.query.text;
	if (!text) return resError(res, "masukkan parameter text");
	await ephoto.text(res, "https://en.ephoto360.com/create-a-blackpink-neon-logo-text-effect-online-710.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/juventus", async (req, res) => {
	const { text, number } = req.query
	if (!number || !Number(number)) return resError(res, "masukkan parameter no & parameter no berupa number");
	if (!text) return resError(res, "masukkan parameter text");
	await ephoto.text(res, "https://en.ephoto360.com/create-juventus-shirt-effect-536.html", [text, number]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/coverpubg", async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/create-the-cover-game-playerunknown-s-battlegrounds-401.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/greenbrush", async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/green-brush-text-effect-typography-maker-online-153.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/eraser", async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/dragonfire", async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/dragon-fire-text-effect-111.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/incandescent" , async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/text-effects-incandescent-bulbs-219.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/typography" , async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/dark-green-typography-online-359.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/letters" , async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/write-letters-on-the-leaves-248.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/cloth" , async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/text-on-cloth-effect-62.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/graffiti" , async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/text-graffiti-3d-208.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/metals" , async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/metal-star-text-online-109.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/blueneon" , async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/blue-neon-text-effect-117.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/typography2" , async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/make-typography-text-online-338.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/nightstars" , async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/stars-night-online-84.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/cloud" , async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/cloud-text-effect-139.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/caper" , async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/caper-cut-effect-184.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/1" , async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/2" , async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/modern-gold-purple-175.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/3" , async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/write-names-and-messages-on-the-sand-online-582.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/4" , async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
  router.get("/okbye" , async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "achag", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
  router.get("/6" , async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/write-text-on-chocolate-186.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
  router.get("/7" , async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/retro-text-effect-67.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
  router.get("/8" , async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/modern-gold-157.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/9" , async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/jewel-text-effect-275.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
  router.get("/10" , async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/text-metal-3d-277.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
  router.get("/5" , async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/wooden-3d-text-effect-59.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
  router.get("/12" , async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/gold-text-effect-pro-271.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
  router.get("/13" , async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/diamond-text-95.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
  router.get("/14" , async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/chrome-text-effect-91.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
  router.get("/15" , async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/3d-text-effects-style-274.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
  router.get("/16" , async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/wings-galaxy-206.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
  router.get("/17" , async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
  router.get("/18" , async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/create-3d-crack-text-effect-online-704.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
  router.get("/19" , async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/metallic-text-effect-with-impressive-font-307.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
  router.get("/20" , async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/colorful-birthday-foil-balloon-text-effects-620.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
  router.get("/21" , async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/neon-devil-wings-text-effect-online-683.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
  router.get("/22" , async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/galaxy-text-effect-new-258.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
  router.get("/23" , async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/glitter-gold-98.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
  router.get("/24" , async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/create-light-effects-green-neon-online-429.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
  router.get("/25" , async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/royal-text-effect-online-free-471.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
  router.get("/26" , async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/writing-chalk-on-the-blackboard-61.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
  router.get("/27" , async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/create-water-effect-text-online-295.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/horror" , async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/writing-horror-text-online-266.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/sunlight" , async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/sunlight-shadow-text-204.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/cake" , async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/birthday-cake-96.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/pig" , async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/lovely-cute-3d-text-effect-with-pig-397.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/hallowen" , async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/halloween-fire-text-online-83.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/leafgraphy" , async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/typography-online-leaf-autumn-358.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/banten" , async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/create-text-by-name-effect-58.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/writestatus" , async (req, res) => {
	const { text, text2 } = req.query
	if (!text || !text2) return resError(res, "masukkan parameter text & text2");
	await ephoto.text(res, "https://en.ephoto360.com/write-status-quotes-on-photo-online-free-455.html", [text, text2]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/scholes" , async (req, res) => {
	const { text, number } = req.query;
	if (!text || !Number(number)) return resError(res, "masukkan parameter text & number, parameter number berupa angka");
	await ephoto.text(res, "https://en.ephoto360.com/paul-scholes-shirt-foot-ball-335.html", [text, number]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/heated" , async (req, res) => {
	const { text, text2 } = req.query;
	if (!text || !text2) return resError(res, "masukkan parameter text & text2");
	await ephoto.text(res, "https://en.ephoto360.com/heated-steel-lettering-effect-65.html", [text, text2]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/buoys" , async (req, res) => {
	const { text, text2 } = req.query;
	if (!text || !text2) return resError(res, "masukkan parameter text & text2");
	await ephoto.text(res, "https://en.ephoto360.com/write-letters-on-life-buoys-484.html", [text, text2]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/quotestatus" , async (req, res) => {
	const { text, text2 } = req.query;
	if (!text || !text2) return resError(res, "masukkan parameter text & text2");
	await ephoto.text(res, "https://en.ephoto360.com/create-typography-status-quotes-images-online-for-free-452.html", [text, text2]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/neonblue" , async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/create-light-effects-green-neon-online-429.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/foggy" , async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/foggy-rainy-text-effect-75.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/crank" , async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/animate-general-exam-crank-149.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("gif").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/puppy" , async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/create-puppy-cute-animated-online-478.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("gif").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/pubgavatar" , async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/create-pubg-style-glitch-video-avatar-554.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("mp4").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/adventure" , async (req, res) => {
	const { url, text, text2 } = req.query;
	if (!url) return res.json(loghandler.noturl)
	if (!text) return res.json(loghandler.nottext)
	if (!text2) return res.json(loghandler.nottext2)
	if (!regexUrl(url)) return res.json(loghandler.urlInvalid);
	await ephoto.image(res, "https://en.ephoto360.com/brush-travel-adventure-social-photo-frame-605.html", url, [text, text2]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(() => res.json(loghandler.error));
});
router.get("/vhs" , async (req, res) => {
	url = req.query.url;
	if (!url) return res.json(loghandler.noturl)
	if (!regexUrl(url)) return res.json(loghandler.urlInvalid);
	await ephoto.image(res, "https://en.ephoto360.com/vhs-glitch-photo-effect-online-editing-510.html", url).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(() => res.json(loghandler.error));
})
router.get("/memories" , async (req, res) => {
	const url = req.query.url;
	if (!url) return res.json(loghandler.noturl)
	if (!regexUrl(url)) return res.json(loghandler.urlInvalid);
	await ephoto.image(res, "https://en.ephoto360.com/pencil-photo-travel-memories-367.html", url).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(() => res.json(loghandler.error));
})
router.get("/notebook" , async (req, res) => {
	const { url, text, text2 } = req.query;
	if (!url) return res.json(loghandler.noturl)
	if (!text) return res.json(loghandler.nottext)
	if (!text2) return res.json(loghandler.nottext2)
	if (!regexUrl(url)) return res.json(loghandler.urlInvalid);
	await ephoto.image(res, "https://en.ephoto360.com/make-notebook-music-effect-346.html", url, [text, text2]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(() => res.json(loghandler.error));
})
router.get("/glazing" , async (req, res) => {
	const { url, text } = req.query;
	if (!url) return res.json(loghandler.noturl)
	if (!text) return res.json(loghandler.nottext)
	if (!regexUrl(url)) return res.json(loghandler.urlInvalid);
	await ephoto.image(res, "https://en.ephoto360.com/create-a-rain-glazing-frame-effect-284.html", url, [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(() => res.json(loghandler.error));
})
router.get("/flower" , async (req, res) => {
	url = req.query.url;
	if (!url) return res.json(loghandler.noturl)
	if (!regexUrl(url)) return res.json(loghandler.urlInvalid);
	await ephoto.image(res, "https://en.ephoto360.com/fall-flower-photo-effects-130.html", url).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(() => res.json(loghandler.error));
})
router.get("/heart" , async (req, res) => {
	url = req.query.url;
	if (!url) return res.json(loghandler.noturl)
	if (!regexUrl(url)) return res.json(loghandler.urlInvalid);
	await ephoto.image(res, "https://en.ephoto360.com/fire-heart-123.html", url).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(() => res.json(loghandler.error));
})
router.get("/smoke" , async (req, res) => {
	url = req.query.url;
	if (!url) return res.json(loghandler.noturl)
	if (!regexUrl(url)) return res.json(loghandler.urlInvalid);
	await ephoto.image(res, "https://en.ephoto360.com/smoke-photo-effects-119.html", url).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(() => res.json(loghandler.error));
})
router.get("/handlefire" , async (req, res) => {
	url = req.query.url;
	if (!url) return res.json(loghandler.noturl)
	if (!regexUrl(url)) return res.json(loghandler.urlInvalid);
	await ephoto.image(res, "https://en.ephoto360.com/fire-photo-handle-effect-396.html", url).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(() => res.json(loghandler.error));
})
router.get("/spectrum" , async (req, res) => {
	url = req.query.url;
	if (!url) return res.json(loghandler.noturl);
	if (!regexUrl(url)) return res.json(loghandler.urlInvalid);
	await ephoto.image(res, "https://en.ephoto360.com/spectrum-audio-photo-frame-online-570.html", url).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(() => res.json(loghandler.error));
})
router.get("/painting" , async (req, res) => {
	url = req.query.url;
	if (!url) return res.json(loghandler.noturl);
	if (!regexUrl(url)) return res.json(loghandler.urlInvalid);
	await ephoto.image(res, "https://en.ephoto360.com/create-painting-effect-on-stone-background-online-722.html", url).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(() => res.json(loghandler.error));
});
router.get("/tiger" , async (req, res) => {
	const text = req.query.text;
	if (!text) return res.json(loghandler.nottext);
	await ephoto.text(res, "https://en.ephoto360.com/create-digital-tiger-logo-video-effect-723.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("mp4").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(() => res.json(loghandler.error));
});
router.get("/wposter" , async (req, res) => {
	const { url, text, text2 } = req.query;
	if (!url) return res.json(loghandler.noturl);
	if (!text) return res.json(loghandler.nottext);
	if (!text2) return res.json(loghandler.nottext2);
	if (!regexUrl(url)) return res.json(loghandler.urlInvalid);
	await ephoto.image(res, "https://en.ephoto360.com/create-a-wanted-poster-for-one-piece-live-action-724.html", url, [text, text2]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(() => res.json(loghandler.error));
});
router.get("/american" , async (req, res) => {
	const text = req.query.text;
	if (!text) return res.json(loghandler.nottext);
	await ephoto.text(res, "https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(() => res.json(loghandler.error));
});
router.get("/pencil" , async (req, res) => {
	const { text, text2 } = req.query;
	if (!text) return res.json(loghandler.nottext);
	if (!text2) return res.json(loghandler.nottext2);
	await ephoto.radio_text(res, "https://en.ephoto360.com/create-a-pencil-sketch-logo-online-719.html", [text, text2]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(() => res.json(loghandler.error));
});
router.get("/arrow" , async (req, res) => {
	const text = req.query.text;
	if (!text) return res.json(loghandler.nottext);
	await ephoto.radio_text(res, "https://en.ephoto360.com/arrow-tattoo-effect-with-signature-712.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(() => res.json(loghandler.error));
});
router.get("/arrow2" , async (req, res) => {
	const text = req.query.text;
	if (!text) return res.json(loghandler.nottext);
	await ephoto.radio_text(res, "https://en.ephoto360.com/create-multicolored-signature-attachment-arrow-effect-714.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(() => res.json(loghandler.error));
});
router.get("/anonymous" , async (req, res) => {
	const text = req.query.text;
	if (!text) return res.json(loghandler.nottext);
	await ephoto.radio_text(res, "https://en.ephoto360.com/create-anonymous-hacker-avatars-cyan-neon-677.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(() => res.json(loghandler.error));
});
router.get("/aov" , async (req, res) => {
	const text = req.query.text;
	if (!text) return res.json(loghandler.nottext);
	await ephoto.radio_text(res, "https://en.ephoto360.com/create-beautiful-shimmering-aov-wallpapers-full-hd-for-mobile-643.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(() => res.json(loghandler.error));
});
router.get("/warface" , async (req, res) => {
	const text = req.query.text;
	if (!text) return res.json(loghandler.nottext);
	await ephoto.radio_text(res, "https://en.ephoto360.com/create-a-cover-of-warface-online-243.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(() => res.json(loghandler.error));
});
router.get("/ml" , async (req, res) => {
	const text = req.query.text;
	if (!text) return res.json(loghandler.nottext);
	await ephoto.radio_text(res, "https://en.ephoto360.com/make-mobile-legends-wallpaper-full-hd-for-mobile-454.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(() => res.json(loghandler.error));
});
router.get("/Pta nii" , async (req, res) => {
	const text = req.query.text;
	if (!text) return res.json(loghandler.nottext);
	await ephoto.radio_text(res, "https://en.ephoto360.com/love-card-187.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(() => res.json(loghandler.error));
});
module.exports = router;