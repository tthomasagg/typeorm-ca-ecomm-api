import {IHTTPResponse} from "../interfaces";
import {Response} from "express";

export class ExpressHTTPResponse implements IHTTPResponse {
    private response: Response
    private responseData: object = {}
    private dataType: string = ''

    constructor(response: Response) {
        this.response = response
    }
    getDataType(): string {
        return this.dataType;
    }

    getResponseData(): object {
        return this.responseData
    }

    sendResponse(): void {
        this.response.send(this.responseData)
    }

    setDataType(mimeType: string): void {
        this.dataType = mimeType
        this.response.contentType(mimeType)
    }

    setResponseData(data: object): void {
        this.responseData = data
    }

    setStatusCode(status: number): void {
        this.response.status(status)
    }

}