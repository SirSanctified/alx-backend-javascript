import { RowID, RowElement } from "./interface";

declare namespace CRUD {
  export interface Operations {
    insertRow(row: RowElement): RowID;
    deleteRow(rowId: RowID): void;
    updateRow(rowId: RowID, row: RowElement): RowID;
  }
}