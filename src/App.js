import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState
} from "react";
import { render } from "react-dom";
import { AgGridColumn, AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { AgAbstractField } from "ag-grid-community";

const GridFunction = () => {
  const [rowCount, setRowCount] = useState("");
  const [colCount, setColCount] = useState("");

  const [RowcountArr, setRowCountArr] = useState([]);
  //const [arr1, setColCountArr] = useState([])
  const [appCount, setAppCount] = useState("");
  const [appCountArray, setAppCountArray] = useState([]);
  const [arr1, setArr1] = useState([]);
  const [dataMapp, setDataMap] = useState([]);
  //const [columns, setColumns] = useState([])
  //const [arrMapp, setArrMapp] = useState([]);
  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);
  //const [result, setResult] = useState([])
  const getRowNodeId = (data) => data.id;

  const [showTable, setShowTable] = useState(false);

  const Grid = async () => {
    setShowTable(false);
    console.log("hello");
    let tab = rowCount * appCount;
    for (let i = 1; i <= tab; i++) {
      RowcountArr.push("trial" + i);
    }
    //setRowCountArr(RowcountArr)
    console.log("Row count array", RowcountArr);

    const arr1 = [];
    for (let i = 1; i <= colCount; i++) {
      let x = {};
      let tab = rowCount * appCount;
      console.log("Tab count", tab);
      for (let j = 1; j <= tab; j++) {
        x["trial" + j] = "";
        //console.log("x", x);
      }
      arr1.push(x);
    }
    setArr1(arr1);
    console.log("Array one:", arr1);

    for (let i = 1; i <= appCount; i++) {
      appCountArray.push(i);
    }
    console.log("App count array", appCountArray);

    const dataMapp = RowcountArr.map((v) => ({
      field: v
      // editable: function (params) {
      //   return params.node.data;
      // }
    }));
    console.log("dataMapp : ", dataMapp);
    setDataMap(dataMapp);

    // const arrMapp = appCountArray.map(() =>
    //   RowcountArr.map((v) => ({
    //     field: v
    //   }))
    // );
    // console.log(arrMapp);
    // setArrMapp(arrMapp);

    setShowTable(true);
  };

  const onBtForEachNode = () => {
    console.log("### api.forEachNode() ###");
    gridApi.forEachNode(printNode);
  };

  const trialFun = () => {
    let tab = rowCount * appCount;
    let rowCount1 = parseInt(rowCount, 10);
    var x = new Array(tab);
    // for (var i=0; i<x.length; i++) {
    //   x[i] = new Array(rowCount1)
    //   gridApi.forEachNode((node) => x[i].push(node.data))
    // }
    for (var i = 0; i < x.length; i++) {
      x[i] = new Array(rowCount1);
      gridApi.forEachNode((node) => x[i].push(node.data));
    }

    // for (var input = 1; input <= rowCount; input++) {
    //   console.log("node.data.trial"+input);
    //  }
    // for(var i=0; i<x.length; i++) {
    //   x[i] = new Array('')
    //   gridApi.forEachNode((node) => x[i].push(node.data.trial1))
    // }
    console.log("New array: LA", x);
  };

  const getData = () => {
    let t1 = [];
    gridApi.forEachNode((node) => t1.push(node.data.trial1));
    console.log(t1);
    let t2 = [];
    gridApi.forEachNode((node) => t2.push(node.data.trial2));
    console.log(t2);
    let t3 = [];
    gridApi.forEachNode((node) => t3.push(node.data.trial3));
    console.log(t3);
    let t4 = [];
    gridApi.forEachNode((node) => t4.push(node.data.trial4));
    console.log(t4);
    let t = [[...t1], [...t2], [...t3], [...t4]];
    console.log("Trial", t);
    let app1 = [[...t1], [...t2]];
    console.log("Operator 1", app1);
    let app2 = [[...t3], [...t4]];
    console.log("Operator 2", app2);
  };

  const newt = () => {
    let tab = rowCount * appCount;
    let rowCount1 = parseInt(rowCount, 10);
    let arr1 = [];
    for (var input = 1; input <= tab; input++) {
      //console.log("node.data.trial"+input);
      var triald = "node.data.trial" + input;
      arr1.push(triald);
    }
    console.log("ARRRR", arr1);
    //let tab = rowCount*appCount
    var x = new Array(tab);
    for (var i = 0; i < x.length; i++) {
      x[i] = new Array(0);
      gridApi.forEachNode((node) => x[i].push(node.data.trial1));
      //gridApi.forEachNode(() => x[i].push(arr1[i]));
    }

    console.log("Data array", x);
  };

  const printNode = (node, index) => {
    console.log("Node data", index, node.data);
    let aa = [];
    gridApi.forEachNode((node, index) => aa.push(node.data));
    console.log("AA array", aa);
    let rowCount1 = parseInt(rowCount, 10);
    for (var input = 1; input <= rowCount1; input++) {
      //console.log("node.data.trial"+input);
      var triald = "node.data.trial" + input;
      console.log("Triald", triald);
    }
    let arr = [];
    for (var i = 0; i < arr.length; i++) {
      arr[i] = new Array(rowCount1);
      gridApi.forEachNode(() => arr[i].push(triald));
    }
    //let arr = []
    //arr.push(triald)
    //console.log("TR", arr)

    // const rowNode = gridApi.getRowNode('1');
    // console.log("Get row node", rowNode)

    // const column = gridColumnApi.getColumn('trial1');
    // console.log("Column api", column)
    // let ab = []
    // aa.map(() => ab.push(aa))
    // console.log("AB array", ab)
    //console.log("TT", ab[0][0])
    // gridApi.forEachNode((node) => t1.push(node.data.trial1));
    // console.log(t1);

    // const da = node.data
    // var col0 = da.map(d => d[0])
    // console.log("Col0", col0)
    // console.log(
    //   index + ' -> data: ' + node + ', ' + node
    // );
  };

  const setHeaderNames = () => {
    const newColumns = gridApi.getColumnDefs();
    console.log("New columns", newColumns);
    //console.log("Field", newColumns[0].field)
    newColumns.forEach((newColumn, index) => {
      // console.log("Field", newColumn.field)
      //.log("Index", index)
      //if(index >= rowCount ) {
      newColumn.headerName = "Trial " + ((index % rowCount) + 1);
      //}
    });

    // newColumns.forEach((newColumn, index) => {
    //     newColumn.headerName = 'C' + index;
    // });
    setDataMap(newColumns);
  };

  const onGridReady = (params) => {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);
  };

  const CellEditor = forwardRef((props, ref) => {
    const [value, setValue] = useState(props.value);
    const refInput = useRef(null);

    useEffect(() => {
      // focus on the input
      setTimeout(() => refInput.current.focus());
    }, []);

    /* Component Editor Lifecycle methods */
    useImperativeHandle(ref, () => {
      return {
        // the final value to send to the grid, on completion of editing
        getValue() {
          // this simple editor doubles any value entered into the input
          return value;
        },

        // Gets called once before editing starts, to give editor a chance to
        // cancel the editing before it even starts.
        isCancelBeforeStart() {
          return false;
        }

        // Gets called once when editing is finished (eg if Enter is pressed).
        // If you return true, then the result of the edit will be ignored.
        // isCancelAfterEnd() {
        //   // our editor will reject any value greater than 1000
        //   return value > 1000;
        // }
      };
    });

    return (
      <input
        type="number"
        ref={refInput}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        style={{ width: "100%" }}
      />
    );
  });

  return (
    <div>
      <input
        //readOnly
        type="text"
        id="txtrows"
        value={appCount}
        placeholder="Appraiser Count = 1"
        onChange={(e) => setAppCount(e.target.value)}
      />
      <input
        type="text"
        id="txtrows"
        value={colCount}
        placeholder="Set Sample"
        onChange={(e) => setColCount(e.target.value)}
      />
      <input
        type="text"
        id="txtrows"
        value={rowCount}
        placeholder="Set Trial"
        onChange={(e) => setRowCount(e.target.value)}
      />
      <button onClick={Grid}>Create Table</button>
      <button onClick={setHeaderNames}>New columns</button>
      <button onClick={onBtForEachNode}>ON bt</button>
      <button onClick={getData}>Get data</button>
      <button onClick={trialFun}>Trial</button>
      <button onClick={newt}>NewT</button>
      {showTable ? (
        <div style={{ height: "200px", width: "1000px", flex: "50%" }}>
          {/* {appCountArray.map((index) => ( */}

          <AgGridReact
            getRowNodeId={getRowNodeId}
            //key={index}
            className="ag-theme-alpine"
            rowData={arr1}
            key={dataMapp.field}
            onGridReady={onGridReady}
            columnDefs={dataMapp}
            frameworkComponents={{
              numericEditor: CellEditor
            }}
            defaultColDef={{
              editable: true,
              sortable: true,
              flex: 1,
              minWidth: 100,
              filter: true

              ///resizable: true
            }}
          />

          {/* ))} */}
        </div>
      ) : null}
    </div>
  );
};

export default GridFunction;
