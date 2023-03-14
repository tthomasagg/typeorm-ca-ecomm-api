export interface IHTTPRequest {
    getMethod: () => string
    getPath: () => string
    getData: () => object | string | null
}