import { View } from "@/models/criteria.model";
import { User, UserQ } from "@/models/user.model";
import useSWR from 'swr';
import { BASE_URL, fetcher } from "./base.service";
const USERS_URL = BASE_URL + '/core/users';

export function useUser(slug: string, view?: string) {
    const { data, error, isLoading, isValidating } = useSWR(UserService.getBySlugUrl(slug, view), fetcher, { suspense: true });

    return {
        user: new User(data?.content),
        isLoading,
        isValidating,
        isError: error
    }
}

export default class UserService {

    static getBySlugUrl(slug: string, view?: string) {
        return `${USERS_URL}/slug/${slug}?view=${(view || View.normal)}`;
    }
    static getByIdUrl(id: number, view?: string) {
        return `${USERS_URL}/${id}?view=${(view || View.normal)}`;
    }
    static getByCriteriaUrl(criteria: UserQ) {
        return USERS_URL + criteria.toString();
    }
    static getAllSlugsUrl() {
        return USERS_URL + '/slugs';
    }

    /////////////////////////////////////////////////////////////////

    static getById(id: number, view?: string) {
        return fetcher(this.getByIdUrl(id, view));
    }

    static getBySlug(slug: string, view?: string) {
        return fetcher(this.getBySlugUrl(slug, view));
    }

    static getByCriteria(criteria: UserQ, returnHeaders?: boolean) {
        return fetcher(this.getByCriteriaUrl(criteria), returnHeaders);
    }

    static getAllSlugs() {
        return fetcher(this.getAllSlugsUrl());
    }

    /////////////////////////////////////////////////////////////////

}