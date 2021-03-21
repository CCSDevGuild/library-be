module.exports = async (req, res, next) => {
    const dir = require('path').resolve('./');

    if (req.files) {
        for (const [key, file] of Object.entries(req.files)) {
            const fileExtension = file.name.split('.')[1];
            const fileName = `${new Date().toISOString()}.${fileExtension}`;
            const filePath = `/assets/images/${fileName}`;

            await new Promise((resolve, reject) => {
                file.mv(dir + filePath, () => resolve());
            });

            req.files[key].path = filePath;
        }
    }

    next();
};
