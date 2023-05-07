/**
 * File:    Frontend injection keys
 * Author:  Ben J. Smyth
 * Date:    May 7, 2023
 */

import type { InjectionKey } from 'vue';

const aboutKey    =   Symbol() as InjectionKey<Array<any>>;
const projectKey  =   Symbol() as InjectionKey<Array<any>>;
const tagKey      =   Symbol() as InjectionKey<Array<any>>;

export default Symbol(); export { aboutKey, projectKey, tagKey };
