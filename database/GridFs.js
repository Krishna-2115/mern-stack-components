const mongoose = require('mongoose');
const { GridFSBucket } = require('mongodb');

mongoose.connection.once('open', () => {
  const bucket = new GridFSBucket(mongoose.connection.db, { bucketName: 'uploads' });
  console.log('GridFSBucket initialized');
  // You can now use bucket.openUploadStream or bucket.openDownloadStream as needed.
});
