import * as urljoin from 'url-join'

export const BASE_PATH = "/sdgs"
export const BAKED_URL = "https://ourworldindata.org" + BASE_PATH

export function sdgsUrl(path: string) {
    return urljoin(BASE_PATH, path)
}

export function absoluteSdgsUrl(path: string) {
    return urljoin(BAKED_URL, path)
}