const apiResponse = (success, message, data) => {
    return {
        success: success,
        message: message,
        data: data
    };
}
module.exports = apiResponse;