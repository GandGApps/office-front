/**
 * Returns value by key
 * @param key key of value in local storage
 * @returns value of key in local storage, if no value returns null
 */
export function getLocalStorage(key: string): any {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
};

/**
 * Sets value in the key in local storage
 * @param key key of value to set in local storage
 * @param value value of key to set in local storage
 */
export function setLocalStorage(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
};

/**
 * Clears all values in local storage
 */
export function clearLocalStorage(): void {
    localStorage.clear();
};

/**
 * Remove value in local storage by key
 * @param key key of value to remove
 */
export function removeLocalStorage(key: string): void {
    localStorage.removeItem(key);
};