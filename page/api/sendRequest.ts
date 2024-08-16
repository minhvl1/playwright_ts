import {HeaderRequest} from './headerRequest';
import * as Payloads from './payloadRequest';

export class SendRequest {
    private headerRequest = new HeaderRequest();

    async httpGet(url: string, token?: string): Promise<any> {
        const headers = this.headerRequest.commonHeaders()
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: headers,
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json(); // assuming the response is in JSON format
            return data;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }

    async httpPost(url: string, payload: Record<string, any>, token?: string): Promise<any> {
        const headers = this.headerRequest.commonHeaders()
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json(); // assuming the response is in JSON format
            return data;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }

    async reqresGetListUser(): Promise<any> {
        const headers = this.headerRequest.reqresHeaders()
        const baseURL = 'https://reqres.in'
        const basePath = '/api/users?page=2'
        const url = `${baseURL}${basePath}`
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: headers,
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json(); // assuming the response is in JSON format
            return data ;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }

    async reqresCreateUser(name: string, job:string): Promise<any> {
        const headers = this.headerRequest.reqresHeaders()
        const baseURL = 'https://reqres.in'
        const basePath = '/api/users'
        const url = `${baseURL}${basePath}`
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(Payloads.createUserPayload(name,job)),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const statusCode = response.status;
            const data = await response.json(); // assuming the response is in JSON format
            return { statusCode, data };
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }
}
