export interface SearchModel {
  data: {
    top: {
      thumbnailM: string
    },
    artists: {
      thumbnailM: string
    }[],
    songs: {
      thumbnailM: string,
      encodeId: string
    }[],
    videos: {
      thumbnailM: string
    }[],
    playlists: {
      thumbnailM: string
    }[],
    counter: Object,
    sectionId: string
  },
  message: string,
  err: number,
  timestamp: number
}
