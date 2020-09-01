const getData = function () {
    console.log("Fetching Data....");
}
const debounce = function (fn, d) {
    let timer;
    return function () {
        let context = this;
        args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            getData.apply(context, arguments);
        }, d)
    }
}
let betterFunction = debounce(getData, 300)