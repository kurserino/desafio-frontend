import { Add } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import { ChangeEvent, FC, useEffect, useState } from "react";
import Heading from "./Heading";
import OptionsMenu from "./OptionsMenu";

export interface Product {
  id: number;
  title: string;
  price: number;
  brand: string;
  category: string;
}

interface Column {
  id: "id" | "title" | "price" | "brand" | "category";
  label: string;
  minWidth?: number;
}

const columns: readonly Column[] = [
  { id: "id", label: "ID", minWidth: 30 },
  { id: "title", label: "Título", minWidth: 170 },
  { id: "price", label: "Preço", minWidth: 100 },
  { id: "brand", label: "Marca", minWidth: 170 },
  { id: "category", label: "Categoria", minWidth: 170 },
];

const ProductsTable: FC = () => {
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [rows, setRows] = useState<Product[]>([]);
  const [total, setTotal] = useState<number>(0);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const fetchData = () => {
    const params = `limit=${rowsPerPage}&skip=${page * rowsPerPage}`;

    axios
      .get(`https://dummyjson.com/products?${params}`)
      .then((res) => {
        setRows(res.data.products);
        setTotal(res.data.total);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, [page, rowsPerPage]);

  return (
    <>
      <Heading />
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.id.toString()}
                  >
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id.toString()}>
                          {value}
                        </TableCell>
                      );
                    })}
                    <TableCell align="right">
                      <OptionsMenu data={row} />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={total}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
};

export default ProductsTable;
