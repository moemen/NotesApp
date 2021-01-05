export default class Note {
  id: string;
  title: string;
  body: string;

  constructor(title: string, body: string) {
    this.id = Math.random().toString(36).substring(7);
    this.title = title;
    this.body = body;
  }
}
