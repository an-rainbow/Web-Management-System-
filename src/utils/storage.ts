import store from 'store';

const USER_KEY = 'user_key';

export type LoginUser = Partial<UserModel & { menus: string[],errorMsg:string }>;

export default {
	saveUser(user: LoginUser) {
		// localStorage.setItem(USER_KEY, JSON.stringify(user));
		store.set(USER_KEY, user);
	},

	getUser(): LoginUser {
		// return JSON.parse(localStorage.getItem(USER_KEY) ?? '{}');
		return store.get(USER_KEY) || {};
	},

	removeUser() {
		// localStorage.removeItem(USER_KEY);
		store.remove(USER_KEY);
	},
};
