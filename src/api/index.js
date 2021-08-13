import config from "../config";
export function getUniqueId(cookies, callback) {
    console.log(cookies);
    if (!cookies.clientId) {
        fetch(`${config.apiUrl}/personal/getUnique`, {
            method: "GET",
            credentials: "include",
            mode: "cors",
        })
        .then((response) => response.json())
        .then((res) => {
            if (res.status === "OK") {
                callback("clientId", res.result, 60 * 60 * 24 * 30);
            }
        });
    }
}
