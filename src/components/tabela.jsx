
import Diferenciais from './diferenciais.json';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const TableCells= withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const TableRows = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);
const useStyles = makeStyles({
  table: {
    minWidth: 900,
  },
});
export default function DenseTable() {
  const classes = useStyles();

  console.log(Diferenciais);
  return (
    
    <TableContainer component={Paper}>
      <Table className={classes.table} size="large" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCells>Premiação</TableCells>
            <TableCells align="center">Indicação</TableCells>
            <TableCells align="center">Ano</TableCells>
            <TableCells align="center">Venceu</TableCells>
            <TableCells align="center">Aprovação (%)</TableCells>

          </TableRow>
        </TableHead>
        <TableBody>
          {Diferenciais.diferenciais.map((row) => (
            <TableRows key={row.concorreu}>
              <TableCell component="th" scope="row">{row.concorreu}</TableCell>
              <TableCell align="center">{row.indicacao}</TableCell>
              <TableCell align="center">{row.ano}</TableCell>
              <TableCell align="center">{row.venceu} </TableCell>
              <TableCell>{row.aprovacao}</TableCell>
            </TableRows>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}