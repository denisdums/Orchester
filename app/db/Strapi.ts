import axios, {AxiosRequestConfig, AxiosResponse} from "axios";
import * as process from "process";
import {IMeta} from "~/interfaces/meta.interface";

export type StrapiClientResponse = {
    data: any,
    meta: IMeta
}

export type StrapiClientAuthenticateResponse = {
    jwt: string,
    user: {
        id: string,
        username: string,
        email: string,
        provider: string,
        confirmed: boolean,
        blocked: boolean,
    }
}

const StrapiClient = {
    instance: axios.create({
        baseURL: process.env.STRAPI_URL_BASE + '/api/',
        headers: {
            "Authorization": `Bearer ${process.env.STRAPI_API_TOKEN}`,
            "Content-Type": "application/json"
        }
    }),

    async find(contentType: string, page: number = 1, config: AxiosRequestConfig = {}): Promise<StrapiClientResponse> {
        try {
            const response: AxiosResponse = await this.instance.get(`${contentType}`, {
                ...config,
                params: {
                    "pagination[page]": page,
                    "pagination[pageSize]": process.env.STRAPI_PER_PAGE || 150,
                    ...config.params,
                }
            });

            return response.data?.meta ? {
                data: response.data.data,
                meta: response.data.meta
            } : {
                data: response.data,
                meta: {}
            }
        } catch (e) {
            console.log(e)
            return {data: [], meta: {}}
        }
    },

    async findOne(contentType: string, id: string, config: AxiosRequestConfig = {}) {
        try {
            const response: AxiosResponse = await this.instance.get(`${contentType}/${id}`, config);
            return response.data;
        } catch (e) {
            console.log('error in findOne');
        }
    },

    async authenticate(email: string, password: string): Promise<StrapiClientAuthenticateResponse | undefined> {
        try {
            const response: AxiosResponse = await this.instance.post(`auth/local`, {
                identifier: email,
                password: password
            });
            return response.data;
        } catch (e) {
            AxiosErrorLogger(e)
        }
    },

    async update(contentType: string, id: string, data: any, config: AxiosRequestConfig = {}) {
        try {

            const response: AxiosResponse = await this.instance.put(`${contentType}/${id}`, {data}, config);
            return response.data;
        } catch (e) {
            // AxiosErrorLogger(e)
        }
    }
}

export {StrapiClient}

const AxiosErrorLogger = (error: any) => {
    if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
    } else if (error.request) {
        console.log(error.request);
    } else {
        console.log('Error', error.message);
    }
    console.log(error.config);
}