export interface VideoProps {
  id: string;
  src: string;
  title: string;
  client: string;
  description: string;
  credit1: [string, string];
  credit2: [string, string];
  credit3?: [string, string];
  credit4?: [string, string];
  credit5?: [string, string];
  thumbnailSrc: string;
}
