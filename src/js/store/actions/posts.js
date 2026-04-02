/**
 * @desc Add posts to the store.
 * @example
 * import { addPosts } from 'store/actions/posts';
 */
export const addPosts = ( items = [] ) => {
    return {
        type: 'ADD_POSTS',
        payload: items,
    };
};


