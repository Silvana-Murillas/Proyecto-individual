import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions/index";
import { NavLink, useHistory } from "react-router-dom";
import "./RecipeDetail.css";

const RecipeDetail = (props) => {
  const dispatch = useDispatch();
  const recipesdetail = useSelector((state) => state.recipesdetail);
  let history = useHistory();

  

  React.useEffect(() => {
    dispatch(actions.getRecipebyid(props.match.params.id));
    // eslint-disable-next-line
  }, [dispatch]);

  const handlerClick = (e) => {
    history.push("/home");
  };

  return (
    <div className="detail">
    <div className="container">
      <div className="navlink">
        <NavLink to="/home">
          <button onClick={handlerClick}>◀</button>
        </NavLink>
        <img src={recipesdetail.image} alt={recipesdetail.name} />
      </div>
      <div className="info">
        <h1>{recipesdetail.name}</h1>
        <h2>Health Score</h2>
        <p>{recipesdetail.healthScore}</p>
        <div className="types">
          <div className="dish">
            <h2>Dish Type</h2>
            {recipesdetail.dishTypes &&
              recipesdetail.dishTypes.map((d) => <p key={d}>{d}</p>)}
          </div>
          <div className="diet">
            <h2>Diet Types</h2>
            {recipesdetail.diets &&
              recipesdetail.diets.map((d) => (
                <p key={d}>{d.hasOwnProperty("name") ? d.name : d}</p>
              ))}
          </div>
        </div>
        <div className="summary">
          <h2>Summary</h2>
          <p>
            {recipesdetail.summary &&
              recipesdetail.summary.replace(/(<([^>]+)>)/gi, "")}
          </p>
        </div>
        <div className="step">
          <h2>Steps</h2>
          {recipesdetail.steps && Array.isArray(recipesdetail.steps) ? (
            recipesdetail.steps.length ? (
              recipesdetail.steps.map((s) => (
                <p key={s.number}>{`${s.number} ${s.step}`}</p>
              ))
            ) : (
              <p>this recipe does not have steps</p>
            )
          ) : (
            <p key={recipesdetail.steps}>{recipesdetail.steps}</p>
          )}
        </div>
      </div>
    </div>
    </div>
  );
};

export default RecipeDetail;
