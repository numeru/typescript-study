{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  function getVideo(id: string): Video {
    return {
      id,
      title: "video",
      url: "https://...",
      data: "byte",
    };
  }

  type VideoMetaData = Pick<Video, "id" | "title">;

  function getVideoMetaData(id: string): VideoMetaData {
    return {
      id,
      title: "video",
    };
  }
}
