export default {
    title: 'Home',
    titleTemplate: ' 117HD | %s ',

    description: 'A modern Runescape platform dedicated to providing the community an environment that anyone can use to gather data.',
    canonical: "https://hd117.net/",

    openGraph: {
      type: 'website',
      locale: 'en_GB',
      url: 'https://hd117.net/',
      description: 'A modern Runescape feel to a Old School Experience.',
      site_name: '117HD',
      title: '117HD | Runescape HD',
      images: [
        {
          url: 'https://blog.hubspot.com/hubfs/image8-2.jpg',
          width: 800,
          height: 600,
          alt: 'Og Image Alt',
        }
      ]
    },
    additionalMetaTags: [
      {
        property: 'dc:creator',
        content: 'Mark'
      }, 
      {
        name: 'application-name',
        content: '117HD'
      },
      {
        name: 'language',
        content: 'English'
      },
      {
        httpEquiv: 'x-ua-compatible',
        content: 'IE=edge; chrome=1'
      },
      {
        name: 'keywords',
        content: ["OSRS","osrs","Old School Runescape","hd","old school runescape","runelite","hdos","opengl","Oldschool Runescape", "textures","shadows","water"]
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, shrink-to-fit=no'
      }
    ],
    images: [
      {
        url: 'https://i.imgur.com/3yFB0lZ.png',
        width: 800,
        height: 600,
        alt: 'Og Image Alt',
      },
    ],
    additionalLinkTags : [
      {
        rel: 'apple-touch-icon',
        href: '/public/apple-touch-icon.png',
        sizes: '180x180'
      },
      {
        rel: 'android-chrome-icon',
        href: '/public/android-chrome-192x192.png',
        sizes: '192x192'
      },
      {
        rel: 'android-chrome-icon',
        href: '/public/android-chrome-256x256',
        sizes: '256x256'
      }
    ]
  }