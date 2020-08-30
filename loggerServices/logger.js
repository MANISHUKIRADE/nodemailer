const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf } = format;
const path = require('path');

const customFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp} ||  ${level}: ${message}`;
  });
const logger = createLogger({
    format: combine(
      timestamp(),
      customFormat
    ),
    transports: [
      new transports.File({
        filename: path.join(__dirname, `v1logs.log`),
        level: 'debug'
      })
    ]
  });

module.exports = logger;
