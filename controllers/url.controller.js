const shortid = require('shortid');
const Url = require('../models/url.model'); // Assuming you have a URL model

// Controller to shorten a URL
exports.shortenUrl = async (req, res) => {
    const { originalUrl } = req.body;
    const urlCode = shortid.generate();
    try {
        let url = await Url.findOne({ originalUrl });
        if (url) {
            res.json(url);
        } else {
            const shortUrl = `${req.protocol}://${req.get('host')}/${urlCode}`;
            url = new Url({
                originalUrl,
                shortUrl,
                urlCode,
                date: new Date()
            });
            await url.save();
            res.json(url);
        }
    } catch (err) {
        console.error(err);
        res.status(500).json('Server error');
    }
};

// Controller to redirect to the original URL
exports.redirectUrl = async (req, res) => {
    try {
        const url = await Url.findOne({ urlCode: req.params.code });
        if (url) {
            return res.redirect(url.originalUrl);
        } else {
            return res.status(404).json('No URL found');
        }
    } catch (err) {
        console.error(err);
        res.status(500).json('Server error');
    }
};