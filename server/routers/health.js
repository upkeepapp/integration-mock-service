const express = require('express');
const kafka = require('kafka-node');
const client = new kafka.KafkaClient({ kafkaHost: process.env.BROKER_URL || 'localhost:9092' });

const producer = new kafka.HighLevelProducer(client);
  producer.on('ready', function() {
  console.log('Kafka Producer is connected and ready.');
  });

  producer.createTopics(['testTopic'], false, function (err, data) {
    console.log(data, 'created topic');
  });

// For this demo we just log producer errors to the console.
producer.on('error', function(error) {
  console.error('Error connecting to kafka');
  console.log(error);
});


module.exports = function (app) {

  const router = express.Router();

  

  const KafkaService = {
  sendRecord: ({ className = "TestClass", type = "Record", data, extraData }, callback = () => {}) => {
    if (!className) {
      // eslint-disable-next-line no-console
      console.log('No classname provided');
      return;
    }
    const eventData = {
      timestamp: Date.now(),
      className,
      type,
      data,
      extraData,
    };

    // Create a new payload
    const record = [
      {
        topic: `testTopic`,
        messages: [JSON.stringify(eventData)],
        attributes: 1 /* Use GZip compression for the payload */,
      },
    ];
    // eslint-disable-next-line no-console
    console.log('before sending data to kafka ', JSON.stringify(record));
    //  Send record to Kafka and log result/error
    producer.send(record, callback);
    // eslint-disable-next-line no-console
    console.log('after sending data to kafka ', JSON.stringify(record));
  },
};

  router.post('/', function (req, res, next) {
    KafkaService.sendRecord({data: req.body.data});
    res.json({
      status: 'UP'
    });
  });

  app.use('/health', router);
}