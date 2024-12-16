import { ILoader } from '../../typeDeclarations/interfaces';
import { ErrorCode } from '../../typeDeclarations/enums';
import { RequestOptions } from '../../typeDeclarations/types';

class Loader {
    private baseLink: string;
    private options: Record<string, string>;

    constructor(baseLink: string, options: Record<string, string>) {
        this.baseLink = baseLink;
        this.options = options;
    }

    public getResp<T>(
        request: RequestOptions,
        callback: (data: T) => void = () => {
            console.error('No callback for GET response');
        }
    ): void {
        const { endpoint, options = {} } = request;
        this.load<T>({ method: 'GET', endpoint, callback, options });
    }

    public errorHandler(res: Response): Response {
        if (!res.ok) {
            if (res.status === ErrorCode.Unauthorized || res.status === ErrorCode.NotFound)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }
        return res;
    }

    private makeUrl(options: Record<string, string>, endpoint: string): string {
        const urlOptions: Record<string, string> = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;
        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });
        return url.slice(0, -1);
    }

    private load<T>({ method, endpoint, callback, options = {} }: ILoader<T>): void {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data: T) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;