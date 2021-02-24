{
  type Video = {
    title: string;
    author: string;
  };

  // T type을 optional로 바꾼다.
  type Optional<T> = {
    [P in keyof T]?: T[P];
  };

  // 1)
  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  };

  type VideoOptional = Optional<Video>;

  const videoOp: VideoOptional = {
    title: "hi",
  };

  // 2)
  type VideoReadOnly = ReadOnly<Video>;

  const videoRe: VideoReadOnly = {
    title: "hi",
    author: "choi",
  };

  // videoRe.title = 'john';

  // type VideoOptional = {
  //   title?: string;
  //   author?: string
  // }

  // type VideoReadOnly = {
  //   readonly title?: string;
  //   readonly author?: string
  // }

  type Nullable<T> = { [P in keyof T]: T[P] | null };
  const objN: Nullable<Video> = {
    title: null,
    author: null,
  };
}
