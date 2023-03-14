export interface IHTTPResponse {
    setResponseData: (data: object) => void
    getResponseData: () => object
    setDataType: (mimeType: string) => void
    getDataType: () => string
    setStatusCode: (status: number) => void
    sendResponse: () => void
}