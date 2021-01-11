require([
    "dojo/store/Memory",
    "dojo/data/ObjectStore",
    "dojox/grid/DataGrid",
    "dojo/domReady!"
], function (Memory, ObjectStore, DataGrid) {
    let data = [
        {name: 'BaDat', age: 21, gender: 'Nam', phone: "0909090", moneyLoan: "989898"},
        /* array of data */
    ];
    let objectStore = new Memory({
        data: data
    });

    let layout = [
        {name: "Name", field: "name", width: "25%"},
        {name: "Age", field: "age", width: "25%"},
        {name: "gender", field: "gender", width: "25%"},
        {name: "phone", field: "phone", width: "25%"},
        {name: "moneyLoan", field: "moneyLoan", width: "25%"}
    ];
    let grid = new DataGrid({
        store: ObjectStore({objectStore: objectStore}),
        structure: layout
    }, "grid");
    grid.startup();
});
