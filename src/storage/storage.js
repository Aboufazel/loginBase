const Storage = () => {

    return {
        get  userId() {
            const key = localStorage.getItem("auth");
            if (key == null) {
                return false;
            }
            const auth= JSON.parse(key);
            return auth. userId;
        },
        get accessToken() {
            const key = localStorage.getItem("auth");
            if (key == null) {
                return false;
            }
            const auth = JSON.parse(key);
            return auth.accessToken;
        },
    }


}


export default Storage;