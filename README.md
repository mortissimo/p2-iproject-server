# p2-iproject-server

Server REST API
NodeMailer =>
/emailLog => mengirimkan Chat log yang disimpan pada client, menggunakan nodemailer

Youtube REST API =>
/search => Mengambil data dari youtube REST API sesuai dengan input user ke arah `https://youtube.googleapis.com/youtube/v3/search?part=${part}&q=${q}&key=${key}&maxResults=${maxResults}` data dimapping pada controller sehingga dapat di commit dengan mudah di client

Contoh:

part: snippet
q: Penjara
key: AIzaSyCuhb2VhU_LHs5z5dSrWoNJiBHPg0jWMM8
maxResults : 2

case 200

    {
        "videoId": "qSaltux-K-o",
        "title": "Penjara Terbesar Bernama Palestina",
        "channelTitle": "CNN Indonesia",
        "url": "https://i.ytimg.com/vi/qSaltux-K-o/default.jpg",
        "description": "Warga Palestina di Gaza bak menjalani kehidupan di dalam penjara, tak ada akses keluar melalui udara , darat maupun laut. Kesepakatan damai pun semakin ...",
        "publishTime": "2021-07-28T15:40:03Z"
    },
    {
        "videoId": "CMWkFI2e2Fo",
        "title": "Dituntut 11 Tahun Penjara atas Kasus Korupsi Bansos, Eks Mensos Juliari Bersiap Ajukan Pembelaan",
        "channelTitle": "KOMPASTV",
        "url": "https://i.ytimg.com/vi/CMWkFI2e2Fo/default.jpg",
        "description": "KOMPAS.TV - Mantan Menteri Sosial, Juliari Batubara, dituntut 11 tahun penjara atas kasus suap yang diduga diterimanya dalam proyek bansos covid-19.",
        "publishTime": "2021-07-29T11:43:14Z"
    },

/getPopularVideos => Mengambil data dari youtube REST API (video2 terpopuler di youtube) ke arah `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&key=AIzaSyCuhb2VhU_LHs5z5dSrWoNJiBHPg0jWMM8&maxResults=9` yang kemudian dimapping pada controller sehingga dapat di commit dengan mudah di client

Contoh:
part: snippet
chart: mostPopular
key: AIzaSyCuhb2VhU_LHs5z5dSrWoNJiBHPg0jWMM8
maxResults : 2

case 200

    {
        "videoId": "N5DL70gd0KQ",
        "title": "GROWING UP Mod in Among Us",
        "channelTitle": "SSundee",
        "url": "https://i.ytimg.com/vi/N5DL70gd0KQ/default.jpg",
        "description": "Today we add a GROWING UP Mod in Among Us \n\n🔔 Subscribe & click the bell! https://www.youtube.com/user/SSundee?sub_confirmation=1\n👍 Hit the Thumbs Up if you liked this video! \n\n🤖 My Friends! 🤖\n@Nicovald \n@Henwy \n@Sigils \n@Biffle \n@GarryBlox \n@helloiamkate \n@Zud \n@Lookumz \n@PatP \n@LoafX \n\nMod Maker: @Lookumz \n\n❗️ Follow Me! ❗️\nTwitter: https://www.twitter.com/SSundee\nDiscord: https://discord.gg/SSundee\nInstagram: https://instagram.com/ssundeeyt\nFacebook: https://www.facebook.com/pages/SSundee/200010033358843\n\n👨🏻‍🍳 Awesome Video Editor ► Russell\nhttps://www.youtube.com/russelledits\n\n👨🏼‍🎨 Awesome Thumbnail Maker ► Flash\nhttps://www.youtube.com/channel/UCLy01oVLarj7RNQm52jnGKw\n\n🎨 Awesome Animator ► David\nhttps://www.youtube.com/channel/UCxSSIQevKsx2bFc_Gn4WAMg?view_as=subscriber\n\n🎶 Music by Ninety9 ► LivesTobu - Such Fun\nVideo Link: https://www.youtube.com/watch?v=d3Oc26AFDdU\nChannel: https://99l.tv/Subscribe\nDownload the album! https://99l.tv/Levelup-i\n\nThanks for watching!"
    },
    {
        "videoId": "2OFcc2EgSRA",
        "title": "Team USA's Suni Lee Wins Gold in the Gymnastics All-Around | CBS Sports HQ",
        "channelTitle": "CBS Sports HQ",
        "url": "https://i.ytimg.com/vi/2OFcc2EgSRA/default.jpg",
        "description": "Congrats to Sunisa Lee on her all-around gold medal! \n\n#TeamUSA #USA #TokyoOlympics #2020Olympics #Olympics\n\nSUBSCRIBE TO OUR CHANNEL:\nhttps://www.youtube.com/user/CBSSportsHQ\n \nFOLLOW US ON:\nFacebook - https://www.facebook.com/CBSSports/\nInstagram - https://www.instagram.com/cbssportshq/\nTwitter - https://twitter.com/CBSSportsHQ"
     }
