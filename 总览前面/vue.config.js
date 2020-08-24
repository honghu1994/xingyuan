// module.exports = {
//     devServer: {
//       proxy: {
//         // 所有的请求起始部分全部用 '/api'代替，比如访问"https://192.168.1.4/movie"，那么简写成"/api/movie"即可
//         '/api': {
//           target: 'http://119.23.209.162/', //对应自己的接口
//           changeOrigin: true,
//         //   取消eslint
//           lintOnSave: false,
//           ws: true,
//           pathRewrite: {
//             '^/api': ''
//           }
//         }
//       }
//     }
//   } 
