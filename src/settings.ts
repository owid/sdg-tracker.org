import * as urljoin from 'url-join'

export const BASE_PATH = "/sdgs"
export const BAKED_URL = "http://l:8080" + BASE_PATH

export function sdgsUrl(path: string) {
    return urljoin(BASE_PATH, path)
}

export function absoluteSdgsUrl(path: string) {
    return urljoin(BAKED_URL, path)
}