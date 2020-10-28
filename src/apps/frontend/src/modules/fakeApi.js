//@flow

const delay = 5000;

export const fetchData = (): ({
	user: {
		read: () => void | { string: string, ... },
		...
	},
	...
}) => {
	let userPromise = fetchUser();
	return {
		user: wrapPromise(userPromise),
	};
};

const wrapPromise = (promise) => {
	let status = "pending";
	let result;
	let suspender = promise.then(
		(r) => {
			status = "success";
			result = r;
		},
		(e) => {
			status = "error";
			result = e;
		}
	);
	return {
		read() {
			if (status === "pending") {
				throw suspender;
			} else if (status === "error") {
				throw result;
			} else if (status === "success") {
				return result;
			}
		},
	};
};

const fetchUser = () => {
	console.log("fetch data...");
	return new Promise((resolve) => {
		setTimeout(() => {
			console.log("fetched data");
			resolve({
				string: "... and we are working good!!!",
			});
		}, delay);
	});
};
