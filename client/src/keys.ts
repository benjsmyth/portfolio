import type { InjectionKey } from 'vue';

const aboutKey = Symbol('abouts') as InjectionKey<any[]>;
const projectKey = Symbol('projects') as InjectionKey<any[]>;
const tagKey = Symbol('tags') as InjectionKey<any[]>;

export default Symbol(); export { aboutKey, projectKey, tagKey };
