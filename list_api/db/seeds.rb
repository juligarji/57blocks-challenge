require 'faker'

movie_images = [
  'https://www.belarte.co.uk/cdn/shop/products/LaLaLand_e4dc2cc6-4be7-427b-91eb-d328a0a5c0e7_530x@2x.jpg?v=1628173694',
  'https://intheposter.com/cdn/shop/products/the-front-line-in-the-poster-1_1600x.jpg?v=1694762475',
  'https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg',
  'https://www.vintagemovieposters.co.uk/wp-content/uploads/2023/03/IMG_1887-scaled.jpeg',
  'https://files.ekmcdn.com/allwallpapers/images/marvel-wanda-vision-the-rift-61x91-5cm-movie-poster-37806-1-p.jpg',
  'https://www.tallengestore.com/cdn/shop/products/Dora_The_Explorer_And_The_Lost_City_Of_Gold_-_Hollywood_English_Movie_Poster_1_3fd98041-803c-4491-9d4a-a0a1d5533aae.jpg?v=1577693642',
  'https://www.tallengestore.com/cdn/shop/products/Dora_The_Explorer_And_The_Lost_City_Of_Gold_-_Hollywood_English_Movie_Poster_1_3fd98041-803c-4491-9d4a-a0a1d5533aae.jpg?v=1577693642',
  'https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/6408f676b5811234c887ca62_top%20gun%20maverick-min.png',
  'https://i.ebayimg.com/images/g/diAAAOSwGIpkmtBP/s-l1200.jpg',
  'https://static01.nyt.com/images/2017/09/15/arts/24movie-posters8/24movie-posters8-superJumbo.jpg',
  'https://jimmy.org/wp-content/uploads/2020/06/Harvey-Movie-Poster-scaled.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3bZRu6mgZd2aMQjraf24_g0U5vha0cT-T6zgJ8E5K0A&s',
  'https://m.media-amazon.com/images/I/91zTlD7AY1L._AC_UF1000,1000_QL80_.jpg',
  'https://static01.nyt.com/images/2024/03/07/arts/07movie-posters-promo/07movie-posters-promo-mediumSquareAt3X.jpg',
  'https://creativereview.imgix.net/content/uploads/2023/12/Poor-Things-1.jpg',
  'https://www.bestmovieposters.co.uk/wp-content/uploads/2019/01/f2DylZ0U.jpeg',
  'https://images.bauerhosting.com/legacy/empire-images/features/59e8d795405a5c6805947751/44%20Fear%20and%20Loathing%20in%20Las%20Vegas.jpg?auto=format&w=1440&q=80',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIaZR9KTB8fgo8EVfTrHneLfMdKEx8_rCGXlG4DtIszg&s',
  'https://www.originalfilmart.com/cdn/shop/files/scarymovie_2000_original_film_art_5000x.webp?v=1683910671',
  'https://penji.co/wp-content/uploads/2019/09/Breakfast_at_Tiffany_s-iconic-movie-posters.jpg',
  'https://artofthemovies.co.uk/cdn/shop/products/IMG_8570-522429.jpg?v=1611687837',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdOHGR98L0XgyZY8vwybwubZ_mLEkMM0K5KLJ6c8k3TA&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnoNKEF9SvlFzHHUVdKajcApsAFUCMQnO0iRSnlVAijg&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0hZQYbxNuFKEURBqfPsbn7SPrYPI-dbEuityHX4gM3w&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvuVQFSaXtXesla_LgHriDQTsDrUqJ40ZrUCfIT3Pcwg&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUuocwIjQ3XjJfLVSgaCrh2xFcqkbb0SbVsLuzynEm1A&s',
  'https://penji.co/wp-content/uploads/2019/09/Metropolis-iconic-movie-posters.jpg',
  'https://creativereview.imgix.net/content/uploads/2022/12/everything_everywhere_all_at_once.jpg?auto=compress,format&q=60&w=1013&h=1500',
  'https://www.saltypopcorn.co.uk/film-images/saltburn.jpg',
  'https://images.bauerhosting.com/legacy/empire-images/features/59e8d795405a5c6805947751/39%20Moon.jpg?auto=format&w=1440&q=80'
]

200.times do |_num|
  Movie.create!(title: "( #{_num} ) #{Faker::Movie.title}", img: movie_images[rand(0...(movie_images.size))],
                description: Faker::Lorem.paragraph(sentence_count: 25))
end

User.create!(email: 'user@test.com', password: '12345')
