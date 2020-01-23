import React from 'react';
import { Link } from "react-router-dom";

function TaskBar({ recipeClicked, closeFrame, signIn }) {
  return (
    <div className="taskbar_struct" style={{ display: "flex", justifyContent: "space-between" }}>
      <Link className="main_title"
        onClick={closeFrame}
        to="/"
        style={{
          textDecoration: "none",
          color: "black",
          overflow: "hidden"
        }}>
        The Ultimate Cookbook
      </Link>

      <div
        style={{
          overflow: "hidden"
        }}>
        <Link
          style={{
            background: "#A03131",
            borderColor: "#A03131",
            textDecoration: "none",
            color: "black",
            border: "1px solid transparent"
          }}
          to="/list"
          onClick={recipeClicked}
          className="taskbar_title_recipes taskbar_link">
          Recipes
        </Link>
        <Link className="taskbar_link"
          style={{
            textDecoration: "none",
            color: "black",
          }}
          to="/contribute">
          Contribute
        </Link>
        <Link className="taskbar_link"
          style={{
            textDecoration: "none",
            color: "black",
          }}
          onClick={signIn}
          to="/signin">
          Sign In
        </Link>
      </div>

    </div>
  );
}

export default TaskBar; 