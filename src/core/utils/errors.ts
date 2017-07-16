/**
 * Error class for an API response outside the 200 range
 */
export class RequestError extends Error {
  constructor(public status: number, public statusText: string, public response?) {
    super();
    this.name = RequestError.name;
    this.message = `${status} - ${statusText}`;
  }
}

/**
 * Error class for failed (no connection, dns error) connection
 */
export class CommunicationError extends Error {
  constructor(message = 'Bad or no internet error') {
    super(message);
    this.name = CommunicationError.name;
  }
}

/**
 * Error class for an API response that returns null or no data
 */
export class NotFoundError extends Error {
  private code;
  constructor(message = 'The resource is not found') {
    super(message);
    this.name = NotFoundError.name;
    this.code = this.name;
  }
}

/**
 * Error class to indicate we are not authorized
 */
export class UnauthorizedError extends Error {
  private code;
  private status = 401;
  constructor(message = 'Unauthorized access') {
    super(message);
    this.name = UnauthorizedError.name;
    this.code = this.name;
  }
}
