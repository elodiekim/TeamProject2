//React simple maps를 이용하여 구현해보려 했으나 작업이 원활히 진행되지 않아 svg파일로 맵 구현해오기로 결정.

// import {
//   ComposableMap,
//   Geographies,
//   Geography,
//   Annotation,
//   ZoomableGroup,
// } from "react-simple-maps";

// const geoUrl = "/seoul_geo.json";

// export const MapChart = () => {
//   return (
//     <ComposableMap
//       projection="geoAzimuthalEqualArea"
//       projectionConfig={{
//         rotate: [-10.0, -52.0, 0],
//         center: [-5, -3],
//         scale: 1100,
//       }}
//     >
//       <Geographies
//         geography={geoUrl}
//         fill="black"
//         stroke="#FFFFFF"
//         strokeWidth={0.5}
//       >
//         {({ geographies }) =>
//           geographies.map((geo) => (
//             <Geography key={geo.rsmKey} geography={geo} />
//           ))
//         }
//       </Geographies>
//       <Annotation
//         subject={[2.3522, 48.8566]}
//         dx={-90}
//         dy={-30}
//         connectorProps={{
//           stroke: "#FF5533",
//           strokeWidth: 3,
//           strokeLinecap: "round",
//         }}
//       >
//         <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#F53">
//           {"Paris"}
//         </text>
//       </Annotation>
//     </ComposableMap>
//   );
// };
