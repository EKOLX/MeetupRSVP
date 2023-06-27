import User from "../types/User";

export const getAllUsers = (token: string): Promise<User[]> =>
  new Promise(async (resolve, reject) => {
    const response = await fetch(
      `https://my.api.mockaroo.com/users.json?key=${token}`
    );

    if (response.ok) {
      const result = await response.json();
      resolve(result);
    } else {
      reject(new Error(response.statusText));
    }
  });
