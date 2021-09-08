import React, {useState} from "react";
import {} from "react-router-dom";
import { set, get } from './myidb';
import { openDB } from 'idb';
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import {Radar}  from 'react-chartjs-2';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function ItemList(props)
{
  const items = props.items;
    // const [items, setItems] = useState([]);
    // const {id} = useParams();

    // React.useEffect(() => {
    //     axios.post('https://ffggserver.vercel.app/iteminfo', {catname : id})
    //     .then(res => { 
    //       //
    //       setItems(res.data);
    //       // openDB(id, 1, {
    //       //   upgrade(db) {
    //       //     const dbPromise = db.createObjectStore(id);
    //       //     dbPromise.put(id,JSON.stringify(res.data),id)
    //       //   },
    //       // });
    //       set(id,JSON.stringify(res.data));

    //     }).catch(err =>{
    //       get(id).then((data) => {
    //         var x = JSON.parse(data)
    //         setItems(x)
    //       });
    //       //setItems(get(id));
    //     })

    //     }, []);
        const plugin = {
          id: 'custom_canvas_background_color',
          beforeDraw: (chart) => {
            const ctx = chart.canvas.getContext('2d');
            ctx.save();
            ctx.globalCompositeOperation = 'destination-over';
            ctx.fillStyle = 'white';
            ctx.fillRect(0, 0, chart.width, chart.height);
            ctx.restore();
          }
        };
        function data(item) {
          // var ctx = canvas.getContext("2d");
          // const gradient = ctx.createLinearGradient(0,0,100,0);
          // ctx.lineWidth = 100;
          return{  
              labels: [
                'DAMAGE '+item.damage,
                'RATE OF FIRE '+item.rate_of_fire,
                'RANGE '+item.range,
                'RELOAD SPEED '+item.reload_speed,
                'MAGAZINE '+item.magazine,
                'ACCURACY '+item.accuracy,
                'MOVEMENT SPEED '+item.movement_speed,
              ],
              
              datasets: [{
                data: [item.damage, item.rate_of_fire, item.range, item.reload_speed, item.magazine, item.accuracy,item.movement_speed],
                fill: true,
                borderColor: 'rgba(80, 203, 147)',
                backgroundColor: 'rgba(80, 203, 147,.5)',
                borderWidth: 1.5,
                pointRadius: 1
              }]
            };
          };
          const options = {
            plugins: {
              legend: {
                display: false
              }
            },
            layout: {padding:0},
            scales: {
              r:{
                grid:{
                  borderWidth:3,
                  lineWidth:1.5,
                  color:"rgb(80, 203, 147)",
                  circular:false
                },
                backgroundColor:"rgb(172, 255, 173)",
                ticks:{
                  textStrokeWidth:2,
                  display: false
                },
                pointLabels:{
                    font: {
                      size: 11,
                      weight:"bold",
                      
                  },
                  color:"rgb(84, 67, 107)"
                },
                angleLines: {
                  color: "rgb(80, 203, 147)"
                }
              }
            },
            aspectRatio:2
          };
    
          const attnames = ["silencer", "muzzle", "foregrip","magazine","scope","stock"]
    return (
        <div>
        {/* <Link to="/">
            <h1>Go Back </h1>
        </Link> */}
        <Swiper
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        >
        {items.map((item, index) => 
            (
            <div>
            <SwiperSlide key = {index} style={{color:"rgb(84, 67, 107)",textAlign: "center"}} >
                <img src = {item.imgurl} className="img-fluid" alt="Responsive image"/>
                <h1 >
                    {item.name}
                </h1>
                <p>{item.description}</p>
                <Radar data={data(item)} options={options} plugins = {[plugin]} color ={"blue"}/>
                <div className = "attachables">
                <ul>
                  {[item.silencer,item.muzzle,item.foregrip,item.magurl,item.scope,item.stock]
                  .map((i,j) => (
                    <li >
                    <img src={i}/>
                    <p>{attnames[j].toUpperCase() }</p>
                    </li>
                  ))
                  }
                </ul>
                </div>
            </SwiperSlide>        
                       
        
            </div>
            )
        )}       
        </Swiper>
        </div>
    );
}
export default ItemList;

