
import PropTypes from 'prop-types'

import { useEffect, useState } from "react";
import { getReadBooks } from "../utility/localStorage";

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];


const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};

const TriangleBar = ( props ) => {
  const { fill, x, y, width, height } = props;
  
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;

};


const PageToRead = () => {

    const [readBooks, setReadBooks] = useState([]);


    useEffect(() => {
      const storedReadBooks = getReadBooks();
      setReadBooks(storedReadBooks);

    }, []);
  return (
    <div
      className="w-full max-w-[1170px] mt-20  mx-auto"
      style={{ width: "100%", height: 400 }}
    >
      <ResponsiveContainer>
        <BarChart
          
          data={readBooks}
          margin={{
            top: 20,
            right: 20,
            left: -20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="bookName" />
          <YAxis />
          <Bar
            dataKey="totalPages"
            fill="#8884d8"
            shape={<TriangleBar />}
            label={{ position: "top" }}
            >
           
            {readBooks.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

PageToRead.propTypes = {
  props: PropTypes.object,
  fill: PropTypes.string,
  x: PropTypes.number,
  y: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default PageToRead