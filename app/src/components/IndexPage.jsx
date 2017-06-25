import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import Uploader from './Uploader.jsx'


const IndexPage = () => (
  <Card className="container" containerStyle={ {paddingBottom: 5} }>
    <CardTitle title="IXACT Contact Import Tool"/>
    <Uploader />
  </Card>
);

export default IndexPage;
