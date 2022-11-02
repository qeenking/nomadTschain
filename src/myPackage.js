// @ts-check
/**
 * Initializes the project
 * @param {object} config
 * @param {boolean} config.debug 
 * @param {string} config.url
 * @returns boolean
 */
//위의 JSDoc 덕분에 ts파일이 아닌 js파일에서도 ts의 보호를 받을 수 있다.
export function init(config){
    return true;
}

/**
 * Exits the program
 * @param {number} code 
 * @returns number
 */

export function exit(code){
    return code + 1;
}