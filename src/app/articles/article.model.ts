export class Article {
  title: string;
  link: string;
  votes: number;

  constructor (title: string, link: string, votes?: number) {
    this.title = title;
    this.link = link;
    this.votes = votes || 0;
  }

  voteUp (): void {
    this.votes += 1;
  }

  voteDown (): void {
    this.votes -= 1;
  }

  domain(): string {
    try {
      const domainAndPath = this.link.split('//')[1] || this.link;
      return domainAndPath.split('/')[0];
    } catch (e) {
      return null;
    }
  }
}
