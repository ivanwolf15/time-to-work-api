const {
  NotFoundError,
  ValidationError,
  ConflictError,
} = require('../utils/errors');

const errorHandler = resource => async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    if (error instanceof ConflictError) {
      ctx.status = 409;
      ctx.body = {
        error: `Conflict error: ${error.field} has already been taken`,
      };
    }
    if (error instanceof ValidationError) {
      ctx.status = 422;
      ctx.body = {
        error: `Validation error: ${error.field} can not be empty`,
      };
    }

    if (error instanceof NotFoundError) {
      ctx.status = 404;
      ctx.body = {
        error: `${resource} not found`,
      };
    }
  }
};

module.exports = errorHandler;