import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        const apiUrl = process.env.API_URL;
        const apiKey = process.env.API_KEY;

        if (!apiUrl || !apiKey) {
            throw new Error('Please, check if the URL address and your API key are correct.');
        }

        super(apiUrl, {
            apiKey: apiKey,
        });
    }
}

export default AppLoader;
