import {IHTTPRequest} from "../interfaces";
import {Request} from "express";

export class ExpressHTTPRequest implements IHTTPRequest {

    private req
    constructor(req: Request) {
        this.req = req
    }
    getData(): object | string | null {
        return this.req.body
    }

    getMethod(): string {
        return this.req.method;
    }

    getPath(): string {
        return this.req.path;
    }

}