import { DataEditor, GridCellKind, GridColumn, Item, GridCell } from "@glideapps/glide-data-grid";
import "@glideapps/glide-data-grid/dist/index.css";
import { CollisionData } from "../core/interface/collision-data.interface";

function Table(tableData: { tableData: CollisionData[] }) {
  const data: CollisionData[] = [...tableData.tableData];
  const columns: GridColumn[] = [
    { title: "Crash Id", width: 100 },
    { title: "Crash date", width: 300 },
  ]

  const getData = ([col, row]: Item): GridCell => {
    const crash = data[row];

    if (col === 0) {
      return {
        kind: GridCellKind.Text,
        data: crash.collision_id,
        allowOverlay: false,
        displayData: crash.collision_id
      };
    } else if (col === 1) {
      return {
        kind: GridCellKind.Text,
        data: new Date(crash.crash_date).toString(),
        allowOverlay: false,
        displayData: new Date(crash.crash_date).toString()
      }
    } else {
      throw new Error();
    }
  }
  return (
    <>
      <DataEditor getCellContent={getData} columns={columns} rows={data.length}></DataEditor>
    </>
  )
}

export default Table;