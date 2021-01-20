import React, { useState } from 'react';
import clsx from 'clsx';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import {
  Box,
  Card,
  CardHeader,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  makeStyles
} from '@material-ui/core';
import data from './data';

const useStyles = makeStyles(() => ({
  root: {},
  actions: {
    justifyContent: 'flex-end'
  }
}));

const LatestOrders = ({ className, ...rest }) => {
  const classes = useStyles();
  const [orders] = useState(data);

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader title="Details" />
      <Divider />
      <PerfectScrollbar>
        <Box minWidth={800}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Country
                </TableCell>
                <TableCell>
                  Women Entrepreneurship Index
                </TableCell>
                <TableCell>
                  Entrepreneurship Index
                </TableCell>
                <TableCell>
                  Inflation Rate
                </TableCell>
                <TableCell>
                  Female Force Rate
                </TableCell>
                <TableCell>
                  Level Of Development
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => (
                <TableRow
                  hover
                  key={order.No}
                >
                  <TableCell>
                    {order.Country}
                  </TableCell>
                  <TableCell>
                    {order.WomenEntrepreneurshipIndex}
                  </TableCell>
                  <TableCell>
                    {order.EntrepreneurshipIndex}
                  </TableCell>
                  <TableCell>
                    {order.InflationRate}
                  </TableCell>
                  <TableCell>
                    {order.FemaleLaborForceParticipationRate}
                  </TableCell>
                  <TableCell>
                    {order.LevelOfDevelopment}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
    </Card>
  );
};

LatestOrders.propTypes = {
  className: PropTypes.string
};

export default LatestOrders;
