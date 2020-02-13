import { createLogger, format, transports } from "winston";

const { combine, timestamp, printf } = format;
const level = process.env.LOG_LEVEL || "info";

const myFormat = printf(
  ({ timestamp, level, message, ...data }) =>
    `${timestamp} - ${level}: ${message} | ${JSON.stringify(data)}`
);

const combinedFormat = combine(timestamp(), myFormat);

const logger = createLogger({
  level,
  format: combinedFormat,
  transports: [
    //
    // - Write to all logs with level `info` and below to `combined.log`
    // - Write all logs error (and below) to `error.log`.
    //
    new transports.File({ filename: "error.log", level: "error" }),
    new transports.File({ filename: "combined.log" })
  ]
});

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== "production") {
  logger.add(
    new transports.Console({
      format: combinedFormat
    })
  );
}

export default logger;
