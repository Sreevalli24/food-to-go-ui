import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Home() {
  const [restaurant, setRestaurant] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadRestaurants();
  }, []);

  const loadRestaurants = async () => {
    const restaurants = await axios.get("http://localhost:8080/api/restaurant/viewall");
    setRestaurant(restaurants.data);
  };


  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">Restaurant Names</th>
            </tr>
          </thead>
          <tbody>
            {restaurant.map((restaurant, index) => (
              <tr>
                <td>{restaurant.restaurantName}</td>

                  <Link
                    className="btn btn-primary mx-2"
                    to={`/Itemspage/${restaurant.id}`}>
                    View Items
                  </Link>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}