import React, { useEffect, useState } from "react";
import "./DocketList.css";
import { BiTimeFive } from "react-icons/bi";
import {MdNumbers} from "react-icons/md"
function DocketList() {
  const [docketList, setDocketList] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/getAllDocket")
      .then((res) => res.json())
      .then((data) => setDocketList(data.docketList));
  }, []);
  document.title="All Docket"
  return (
    <div class="cards">
      {docketList.map((item, i) => {
        return (
          <div className={`card card-${(i + 1) % 5}`} key={item._id}>
            <div className="card__icon"><MdNumbers/> {item.PoNumber}</div>

            <div className="card__icon">
              <BiTimeFive />
              {item.startTime} - {item.endTime}
            </div>
            <h2 className="card__title">{item.name}</h2>
            <p className="card__exit">{item.supplier}</p>
            <p className="card__apply">{item.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default DocketList;
