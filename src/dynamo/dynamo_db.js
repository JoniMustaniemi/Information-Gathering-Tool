import config from './db_config';
import AWS from 'aws-sdk';

const getUSers = function(req, res) {
  AWS.config.update(config.aws_remote_config);

  const docClient = new AWS.DynamoDB.DocumentClient();

  const params = {
    TableName: config.aws_table_name
  };

  docClient.scan(params, function (err,data) {
    if (err) {
      console.log(err);
      res.send({
        success: false,
        message: err
      });
    } else {
        const { Items } = data;
        res.send({
          success: true,
          users: Items
        });
    }
  });

}