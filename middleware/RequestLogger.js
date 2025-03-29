// main function
const RequestLogger = async (req, res, next) => {
    const date = new Date();
    const timestamp = date.toLocaleString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
    const { method, originalUrl } = req;
    
    console.log(`[${timestamp}] ${method} ${originalUrl}`);

    // passing the request to the next handler
    next();
};

// exporting the middleware
module.exports = RequestLogger;