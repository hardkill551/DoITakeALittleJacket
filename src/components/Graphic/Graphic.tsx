import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "../../style/ErrorPageStyle";
import { GraphicStyle } from "./GraphicStyle";
import { Data } from "../../assets/types";

export default function Graphic(props: { data: Data[] }) {
    
  return (
    <GraphicStyle>
      <LineChart width={700} height={300} data={props.data}>
        <Line type="monotone" dataKey="Celsius" stroke="#004196" />
        <CartesianGrid stroke="#ccc" strokeDasharray="15 15" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </GraphicStyle>
  );
}
