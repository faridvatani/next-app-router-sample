export class AuthRequiredError extends Error {
  constructor(message?: string) {
    super(message || "You must be authenticated");
    this.name = "AuthRequiredError";
  }
}
