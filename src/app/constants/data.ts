

export interface FeedItem {
    name: string
    username: string
    postCaption: string
    date: string
    mediaType: "video" | "image"
    mediaUrl: string
  }
  
  export interface FeedProps {
    items: FeedItem[]
    activeTab: "videos" | "images"
  }
  
  

export const feedData: FeedItem[] = [
    {
      name: "John Doe",
      username: "@johndoe",
      postCaption: "Exploring the beauty of nature 🌲",
      date: "2025-02-10",
      mediaType: "video",
      mediaUrl: "https://b8wuh0mhei.ufs.sh/f/nXXmqTZ9KSbrvzFe09QO5g9fqC13a4j2PSiLsZJFzDH6rAut",
    },
    {
      name: "Jane Smith",
      username: "@janesmith",
      postCaption: "Sunset over the mountains 🏔️",
      date: "2025-02-09",
      mediaType: "image",
      mediaUrl: "/Mountains-snow.jpeg",
    },
    {
      name: "Alice Brown",
      username: "@alicebrown",
      postCaption: "City skyline at night 🌃",
      date: "2025-02-08",
      mediaType: "video",
      mediaUrl: "https://b8wuh0mhei.ufs.sh/f/nXXmqTZ9KSbrvdjhyNQO5g9fqC13a4j2PSiLsZJFzDH6rAut",
    },
    {
      name: "Michael Lee",
      username: "@michaellee",
      postCaption: "Calm ocean waves 🌊",
      date: "2025-02-07",
      mediaType: "image",
      mediaUrl: "https://b8wuh0mhei.ufs.sh/f/nXXmqTZ9KSbru5EwLfe9hEfjeKGmtwWsdnDlOy8kIB4FuVJi",
    },
    {
      name: "Sophia Green",
      username: "@sophiagreen",
      postCaption: "Autumn leaves falling 🍂",
      date: "2025-02-06",
      mediaType: "video",
      mediaUrl: "https://b8wuh0mhei.ufs.sh/f/nXXmqTZ9KSbrGq2Hyta0eRKzZ5x1NsmEbjUhnFfT4pBgav2t",
    },
    {
      name: "Daniel Kim",
      username: "@danielkim",
      postCaption: "Starry night sky ✨",
      date: "2025-02-05",
      mediaType: "image",
      mediaUrl: "/Mountains-snow.jpeg",
    },
  ]