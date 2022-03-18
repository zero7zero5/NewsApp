import React from "react";
import aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

// class NewsCard extends React.Component {
//   render() {
//     return (
//       <div className="row row-cols-1 row-cols-md-2 g-4">
//         {this.props.news.map((m) => (
//           <div key={m.url} className="col">
//             <div data-aos="fade-up-right" className="card m-2 text-center">
//               <img
//                 src={
//                   m.urlToImage
//                     ? m.urlToImage
//                     : "https://qik.radiantthemes.com/wp-content/themes/qik/assets/images/no-image/No-Image-Found-400x264.png"
//                 }
//                 className="card-img-top "
//                 alt="news"
//               />
//               <div className="card-body">
//                 <h5 className="card-title">{m.title}</h5>
//                 <p className="card-text">{m.description}</p>
//                 <a target={m.url} href={m.url} className="btn btn-primary">
//                   Click to read full news
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     );
//   }
// }

// export default NewsCard;
function NewsCard(props) {
  useEffect(() => {
    aos.init();
  });
  return (
    <div className="row row-cols-1 row-cols-md-2 g-4">
      {props.news.map((m) => (
        <div key={m.url} className="col">
          <div className="card m-2 text-center shadow-lg p-3 mb-5 bg-body rounded">
            <img
              data-aos="zoom-in"
              src={
                m.urlToImage
                  ? m.urlToImage
                  : "https://p.kindpng.com/picc/s/112-1123511_click-here-arrow-png-warmtec-transparent-png.png"
              }
              className="card-img-top "
              alt="news"
            />
            <div className="card-body">
              <h5 className="card-title">{m.title}</h5>
              <p className="card-text">{m.description}</p>
              <a target={m.url} href={m.url} className="btn btn-primary">
                Click to read full news
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NewsCard;
