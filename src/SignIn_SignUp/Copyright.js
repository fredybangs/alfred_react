import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

function Copyright() {
    return (
      <Typography variant="body2" align="center">
        {'Powered by '}
        <Link href="https://byteltd.com.com" rel="sponsored" title="Byte Limited">
          Byte Limited
        </Link>
      </Typography>
    );
  }

export default Copyright;
