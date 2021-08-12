import config from "../config";
export function getUniqueId(cookies, callback) {
    if (!cookies.clientId) {
        fetch(`${config.apiUrl}/users/uniqueId`, {
            method: "GET",
            // credentials: "include",
            // mode: "cors",
        })
        .then((response) => response.json())
        .then((res) => {
            if (res.status === "OK") {
                callback("clientId", res.result, 60 * 60 * 24 * 30);
            }
        });
    }
}