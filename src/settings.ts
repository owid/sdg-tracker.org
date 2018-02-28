import * as urljoin from 'url-join'

export const BASE_PATH = "/"
export const BAKED_URL = urljoin("https://sdg-tracker.org", BASE_PATH)

export function sdgsUrl(path: string) {
    return urljoin(BASE_PATH, path)
}

export function absoluteSdgsUrl(path: string) {
    return urljoin(BAKED_URL, path)
}