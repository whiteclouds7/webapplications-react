export default class Message {
  readonly subject: string;
  readonly body: string;

  constructor(subject: string, body: string) {
    this.subject = subject;
    this.body = body;
  }
}
