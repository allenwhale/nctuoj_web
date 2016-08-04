const Config = {
    mapArrayToObject: (array, indexName="id") => {
        var res = {
            null: {},
            undefined: {},
        };
        array.map((x) => {
            res[x[indexName]] = x;
        });
        return res;
    },
};

export default Config;
