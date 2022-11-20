import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../../redux/actions/index";

const Bd_ApiFilter = () => {
  const dispatch = useDispatch();
  const activesorder = useSelector((state) => state.order);
  console.log(activesfilters);

  let handleChange = (e) => {
    e.preventDefault();

    if (e.target.value === "Created Recipes") {
      dispatch(actions.getRecipesbyquery(undefined, "Created Recipes")).then(
        () => {
          if (activesorder === "A-Z") {
            dispatch(actions.filterAZ());
          }
          if (activesorder === "Z-A") {
            dispatch(actions.filterZA());
          }
          if (activesorder === "Lowest to Highest") {
            dispatch(actions.filterLtoH());
          }
          if (activesorder === "Highest to Lowest") {
            dispatch(actions.filterHtoL());
          }
        }
      );
    }

    if (e.target.value === "Api Recipes") {
      dispatch(actions.getRecipesbyquery(undefined, "Api Recipes")).then(()=>{
        if (activesorder=== "A-Z") {
          dispatch(actions.filterAZ());
        }
        if (activesorder === "Z-A") {
          dispatch(actions.filterZA());
        }
        if (activesorder === "Lowest to Highest") {
          dispatch(actions.filterLtoH());
        }
        if (activesorder === "Highest to Lowest") {
          dispatch(actions.filterHtoL());
        }
      })
    }
  };

  return (
    <div>
      <form>
        <select className="selected" onChange={handleChange}>
          <option disabled selected>
            ...Filter by source
          </option>
          <option value="Created Recipes">Created Recipes</option>
          <option value="Api Recipes">Api Recipes</option>
        </select>
      </form>
    </div>
  );
};

export default Bd_ApiFilter;
