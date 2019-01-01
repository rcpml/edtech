const isWeatherGood = false;

// Promise
const willGoOut = new Promise(
    function(resolve, reject) {
        if(isWeatherGood) {
            let destination = {
                city: "Antalya",
                activity: "Swim"
            };
            resolve(destination);
        } else {
            let reason = new Error("Weather is not good!");
            reject(reason);
        }
    }
);